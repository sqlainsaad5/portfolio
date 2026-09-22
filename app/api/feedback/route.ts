import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { FeedbackModel } from "@/lib/models/Feedback"
import { WHATSAPP_FEEDBACK_NUMBER } from "@/lib/data/testimonials"
import { appendFile, mkdir } from "fs/promises"
import path from "path"

type Body = {
  name?: string
  rating?: number
  message?: string
  project?: string
}

function buildWhatsAppText(data: {
  name: string
  rating: number
  message: string
  project: string
}) {
  const stars = "★".repeat(data.rating) + "☆".repeat(5 - data.rating)
  return [
    "Portfolio feedback",
    "",
    `Name: ${data.name}`,
    `Rating: ${data.rating}/5 ${stars}`,
    `Project: ${data.project}`,
    "",
    "Message:",
    data.message,
  ].join("\n")
}

/** Silent WhatsApp via CallMeBot (free). Requires CALLMEBOT_API_KEY in .env */
async function sendWhatsAppSilent(text: string): Promise<boolean> {
  const apiKey = process.env.CALLMEBOT_API_KEY
  if (!apiKey) return false

  const phone = process.env.WHATSAPP_NUMBER?.replace(/\D/g, "") || WHATSAPP_FEEDBACK_NUMBER
  const url =
    `https://api.callmebot.com/whatsapp.php` +
    `?phone=${encodeURIComponent(phone)}` +
    `&text=${encodeURIComponent(text)}` +
    `&apikey=${encodeURIComponent(apiKey)}`

  try {
    const res = await fetch(url, { method: "GET", cache: "no-store" })
    return res.ok
  } catch {
    return false
  }
}

async function saveLocalFallback(entry: Record<string, unknown>) {
  const dir = path.join(process.cwd(), "data")
  await mkdir(dir, { recursive: true })
  await appendFile(
    path.join(dir, "feedback-submissions.jsonl"),
    `${JSON.stringify({ ...entry, at: new Date().toISOString() })}\n`,
    "utf8",
  )
}

export async function POST(request: Request) {
  let body: Body
  try {
    body = (await request.json()) as Body
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const name = String(body.name ?? "").trim()
  const message = String(body.message ?? "").trim()
  const project = String(body.project ?? "General / Portfolio").trim() || "General / Portfolio"
  const rating = Number(body.rating)

  if (name.length < 2) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 })
  }
  if (message.length < 10) {
    return NextResponse.json({ error: "Message is too short" }, { status: 400 })
  }
  if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Invalid rating" }, { status: 400 })
  }

  const payload = { name, rating: Math.round(rating), message, project }
  let saved = false
  let whatsapp = false

  try {
    const conn = await connectDB()
    if (conn) {
      await FeedbackModel.create(payload)
      saved = true
    }
  } catch {
    // fall through to local / WhatsApp
  }

  if (!saved) {
    try {
      await saveLocalFallback(payload)
      saved = true
    } catch {
      // ignore
    }
  }

  whatsapp = await sendWhatsAppSilent(buildWhatsAppText(payload))

  if (!saved && !whatsapp) {
    return NextResponse.json(
      {
        error:
          "Feedback could not be delivered. Set MONGODB_URI and/or CALLMEBOT_API_KEY in .env",
      },
      { status: 503 },
    )
  }

  return NextResponse.json({ ok: true, saved, whatsapp })
}
