"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ProjectCard } from "@/components/projects/project-card"
import { ProjectDetailDialog } from "@/components/projects/project-detail-dialog"
import { cn } from "@/lib/utils"
import type { Project, ProjectCategory } from "@/lib/types/project"
import { getProjectsSorted } from "@/lib/data/projects"
import { Loader2 } from "lucide-react"

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web-apps", label: "Web Apps" },
  { id: "games", label: "Games" },
  { id: "utilities", label: "Utilities" },
]

export function Projects() {
  const [items, setItems] = useState<Project[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all")
  const [active, setActive] = useState<Project | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" })
        if (!res.ok) throw new Error("bad response")
        const data = (await res.json()) as Project[]
        if (!cancelled) setItems(Array.isArray(data) ? data : getProjectsSorted())
      } catch {
        if (!cancelled) setItems(getProjectsSorted())
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const list = items ?? getProjectsSorted()

  const visible = useMemo(() => {
    if (filter === "all") return list
    return list.filter((p) => p.category === filter)
  }, [list, filter])

  const openDetails = (p: Project) => {
    setActive(p)
    setDialogOpen(true)
  }

  return (
    <section id="projects" className="relative scroll-mt-24 overflow-hidden px-4 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.55_0.14_195/0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.5_0.12_195/0.14),transparent_60%)]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Portfolio</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Selected projects</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Client commissions and full-stack builds — filter by type, open a card for stack notes, repos, and live
            demos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex justify-center"
        >
          <div
            role="tablist"
            aria-label="Filter projects"
            className="inline-flex flex-wrap items-center justify-center gap-1 rounded-xl border border-border/70 bg-muted/40 p-1 backdrop-blur-sm"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
                  filter === f.id
                    ? "bg-background text-foreground shadow-sm ring-1 ring-border/80"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="h-10 w-10 animate-spin text-primary" aria-label="Loading projects" />
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {visible.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} onDetails={openDetails} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {!loading && visible.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">No projects in this category yet.</p>
        ) : null}
      </div>

      <ProjectDetailDialog project={active} open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}
