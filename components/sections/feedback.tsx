"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Star, MessageCircle, Send, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  testimonials,
  WHATSAPP_FEEDBACK_NUMBER,
  TESTIMONIAL_PREVIEW_CHARS,
  type Testimonial,
} from "@/lib/data/testimonials"
import { getProjectsSorted } from "@/lib/data/projects"
import { cn } from "@/lib/utils"

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5",
            i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40",
          )}
        />
      ))}
    </div>
  )
}

function hasUrduScript(text: string) {
  return /[\u0600-\u06FF]/.test(text)
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    const a = parts[0][0]
    const b = parts[1][0]
    if (a && b) return (a + b).toUpperCase()
  }
  return (parts[0] ?? "?").slice(0, 2).toUpperCase()
}

/** Soft color from name so each avatar looks different */
function avatarTone(name: string) {
  const tones = [
    "bg-teal-500/15 text-teal-800 ring-teal-500/25 dark:text-teal-300",
    "bg-sky-500/15 text-sky-800 ring-sky-500/25 dark:text-sky-300",
    "bg-amber-500/15 text-amber-900 ring-amber-500/25 dark:text-amber-300",
    "bg-rose-500/15 text-rose-800 ring-rose-500/25 dark:text-rose-300",
    "bg-indigo-500/15 text-indigo-800 ring-indigo-500/25 dark:text-indigo-300",
    "bg-emerald-500/15 text-emerald-800 ring-emerald-500/25 dark:text-emerald-300",
  ]
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash + name.charCodeAt(i) * (i + 1)) % tones.length
  return tones[hash] ?? tones[0]
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const [expanded, setExpanded] = useState(false)
  const long = t.quote.length > TESTIMONIAL_PREVIEW_CHARS
  const urdu = hasUrduScript(t.quote)

  return (
    <Card
      className={cn(
        "flex h-full min-h-[220px] w-full flex-col border-border/60 bg-card/70 p-4 shadow-sm backdrop-blur-sm sm:min-h-[240px] sm:p-5",
        expanded ? "min-h-[220px] sm:min-h-[240px]" : "h-[220px] sm:h-[240px]",
      )}
    >
      <Stars rating={t.rating} />
      <div className="mt-2.5 flex min-h-0 flex-1 flex-col sm:mt-3">
        <p
          className={cn(
            "text-sm leading-relaxed text-muted-foreground",
            !expanded && "line-clamp-4",
            urdu && "text-right font-normal",
          )}
          dir={urdu ? "rtl" : "ltr"}
          lang={urdu ? "ur" : "en"}
        >
          {urdu ? t.quote : `“${t.quote}”`}
        </p>
        {long ? (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 min-h-8 self-start py-1 text-xs font-medium text-primary hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        ) : null}
      </div>
      <div className="mt-auto flex items-center gap-2.5 border-t border-border/50 pt-3 sm:gap-3">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-bold ring-2 sm:h-10 sm:w-10 sm:text-xs",
            avatarTone(t.name),
          )}
          aria-hidden
        >
          {initials(t.name)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{t.name}</p>
          {t.project ? (
            <p className="truncate text-xs text-muted-foreground">{t.project}</p>
          ) : null}
        </div>
      </div>
    </Card>
  )
}

export function Feedback() {
  const projects = useMemo(() => getProjectsSorted(), [])
  const [name, setName] = useState("")
  const [rating, setRating] = useState(5)
  const [project, setProject] = useState<string>("general")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!api || paused) return
    const id = window.setInterval(() => {
      if (api.canScrollNext()) api.scrollNext()
      else api.scrollTo(0)
    }, 2500)
    return () => window.clearInterval(id)
  }, [api, paused])

  const resetForm = () => {
    setName("")
    setRating(5)
    setProject("general")
    setMessage("")
    setError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSubmitted(false)

    const trimmedName = name.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || trimmedName.length < 2) {
      setError("Please enter your name.")
      return
    }
    if (!trimmedMessage || trimmedMessage.length < 10) {
      setError("Please write a short message (at least 10 characters).")
      return
    }

    const projectLabel =
      project === "general"
        ? "General / Portfolio"
        : projects.find((p) => p.slug === project)?.title ?? project

    const stars = "★".repeat(rating) + "☆".repeat(5 - rating)
    const text = [
      "Portfolio feedback",
      "",
      `Name: ${trimmedName}`,
      `Rating: ${rating}/5 ${stars}`,
      `Project: ${projectLabel}`,
      "",
      "Message:",
      trimmedMessage,
    ].join("\n")

    const url = `https://wa.me/${WHATSAPP_FEEDBACK_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")

    setSubmitted(true)
    resetForm()
  }

  return (
    <section id="feedback" className="relative scroll-mt-20 overflow-x-clip px-4 py-14 sm:scroll-mt-24 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,oklch(0.55_0.14_195/0.07),transparent_55%)] dark:bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,oklch(0.5_0.12_195/0.12),transparent_55%)]" />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-8 text-center sm:mb-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Feedback</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Client feedback
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            What clients say — leave your review below.
          </p>
        </motion.div>

        <div
          className="mb-10 sm:mb-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => {
            window.setTimeout(() => setPaused(false), 2800)
          }}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false)
          }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:gap-3">
              <CarouselPrevious className="order-2 mx-0 hidden h-9 w-9 shrink-0 static translate-y-0 rounded-full border-border/70 bg-background shadow-sm disabled:opacity-40 md:order-1 md:inline-flex" />

              <div className="order-1 min-w-0 w-full flex-1 overflow-hidden md:order-2">
                <CarouselContent className="-ml-3 sm:-ml-4">
                  {testimonials.map((t) => (
                    <CarouselItem
                      key={t.id}
                      className="basis-[88%] pl-3 sm:basis-1/2 sm:pl-4 lg:basis-1/4"
                    >
                      <TestimonialCard t={t} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>

              <CarouselNext className="order-2 ml-2 hidden h-9 w-9 shrink-0 static translate-y-0 rounded-full border-border/70 bg-background shadow-sm disabled:opacity-40 md:order-3 md:ml-0 md:inline-flex" />

              {/* Mobile / tablet arrows under track */}
              <div className="order-2 flex items-center justify-center gap-3 md:hidden">
                <CarouselPrevious className="static h-10 w-10 translate-y-0 rounded-full border-border/70 bg-background shadow-sm" />
                <CarouselNext className="static h-10 w-10 translate-y-0 rounded-full border-border/70 bg-background shadow-sm" />
              </div>
            </div>
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <Card className="mx-auto w-full max-w-xl border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur-md sm:p-6 md:p-8">
            <div className="mb-5 flex items-start gap-3 sm:mb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold tracking-tight sm:text-lg">Leave feedback</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill the form and send it on WhatsApp.
                </p>
              </div>
            </div>

            {submitted ? (
              <div
                role="status"
                className="mb-4 flex items-start gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-3 text-sm text-foreground sm:px-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <p className="font-medium">Your feedback is submitted successfully.</p>
                  <p className="mt-0.5 text-muted-foreground">
                    WhatsApp opened — tap Send to deliver your review.
                  </p>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feedback-name">Your name</Label>
                <Input
                  id="feedback-name"
                  placeholder="e.g. Ayesha Nadeem"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  maxLength={80}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label>Rating</Label>
                <div className="flex flex-wrap items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => {
                    const value = i + 1
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setRating(value)}
                        className="rounded-md p-1.5 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-manipulation"
                        aria-label={`${value} stars`}
                        aria-pressed={rating === value}
                      >
                        <Star
                          className={cn(
                            "h-7 w-7 sm:h-6 sm:w-6",
                            value <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/35",
                          )}
                        />
                      </button>
                    )
                  })}
                  <span className="ml-1 text-sm text-muted-foreground sm:ml-2">{rating}/5</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Related project (optional)</Label>
                <Select value={project} onValueChange={setProject}>
                  <SelectTrigger className="h-11 w-full">
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General / Portfolio</SelectItem>
                    {projects.map((p) => (
                      <SelectItem key={p.slug} value={p.slug}>
                        {p.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback-message">Your feedback</Label>
                <Textarea
                  id="feedback-message"
                  placeholder="Share your experience working together…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  maxLength={800}
                  className="min-h-[100px] resize-none"
                />
              </div>

              {error ? <p className="text-sm text-destructive">{error}</p> : null}

              <Button type="submit" size="lg" className="h-11 w-full gap-2 shadow-sm shadow-primary/15 touch-manipulation">
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
