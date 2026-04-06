import { NextResponse } from "next/server"
import { getProjectsSorted } from "@/lib/data/projects"
import { connectDB } from "@/lib/mongodb"
import { ProjectModel } from "@/lib/models/Project"

/**
 * POST /api/seed — loads canonical data into MongoDB.
 * Send header: Authorization: Bearer <SEED_SECRET>
 * Requires MONGODB_URI. Use once after creating your Atlas cluster.
 */
export async function POST(request: Request) {
  const secret = process.env.SEED_SECRET
  const uri = process.env.MONGODB_URI

  if (!uri || !secret) {
    return NextResponse.json({ error: "MONGODB_URI and SEED_SECRET must be set" }, { status: 501 })
  }

  const auth = request.headers.get("authorization")
  const token = auth?.replace(/^Bearer\s+/i, "")
  if (token !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  await connectDB()
  await ProjectModel.deleteMany({})
  const projects = getProjectsSorted()
  await ProjectModel.insertMany(projects)

  return NextResponse.json({ ok: true, count: projects.length })
}
