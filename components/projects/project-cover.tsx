import { AppWindow, Gamepad2, Wrench } from "lucide-react"
import type { ProjectCategory } from "@/lib/types/project"
import { cn } from "@/lib/utils"

const categoryMeta: Record<ProjectCategory, { label: string; Icon: typeof AppWindow }> = {
  "web-apps": { label: "Web App", Icon: AppWindow },
  games: { label: "Game", Icon: Gamepad2 },
  utilities: { label: "Utility", Icon: Wrench },
}

/** Distinct cover palettes so each project doesn't look identical. */
const SLUG_THEMES: Record<string, { mesh: string; blob: string; accent: string }> = {
  "sports-ecosystem-platform": {
    mesh: "from-emerald-600/25 via-teal-500/15 to-sky-500/10 dark:from-emerald-500/30 dark:via-teal-600/20 dark:to-sky-500/15",
    blob: "bg-emerald-500/30",
    accent: "text-emerald-700 dark:text-emerald-300",
  },
  eventify: {
    mesh: "from-sky-600/25 via-cyan-500/15 to-indigo-500/10 dark:from-sky-500/30 dark:via-cyan-600/20 dark:to-indigo-500/15",
    blob: "bg-sky-500/30",
    accent: "text-sky-700 dark:text-sky-300",
  },
  oems: {
    mesh: "from-slate-600/20 via-teal-600/15 to-amber-500/10 dark:from-slate-500/25 dark:via-teal-600/20 dark:to-amber-500/15",
    blob: "bg-teal-500/25",
    accent: "text-teal-800 dark:text-teal-300",
  },
  "dr-m-nadeem-sajjad": {
    mesh: "from-stone-500/20 via-cyan-600/15 to-emerald-500/10 dark:from-stone-400/20 dark:via-cyan-600/20 dark:to-emerald-500/15",
    blob: "bg-cyan-500/25",
    accent: "text-cyan-800 dark:text-cyan-300",
  },
  prescripto: {
    mesh: "from-rose-500/20 via-teal-500/15 to-sky-500/10 dark:from-rose-500/25 dark:via-teal-600/20 dark:to-sky-500/15",
    blob: "bg-rose-500/25",
    accent: "text-rose-700 dark:text-rose-300",
  },
  "finance-tracker": {
    mesh: "from-amber-500/20 via-emerald-500/15 to-teal-500/10 dark:from-amber-500/25 dark:via-emerald-600/20 dark:to-teal-500/15",
    blob: "bg-amber-500/30",
    accent: "text-amber-800 dark:text-amber-300",
  },
  brandable: {
    mesh: "from-fuchsia-500/15 via-rose-500/10 to-orange-500/10 dark:from-fuchsia-500/20 dark:via-rose-600/15 dark:to-orange-500/15",
    blob: "bg-rose-500/25",
    accent: "text-rose-700 dark:text-rose-300",
  },
  "ecommerce-frontend-design": {
    mesh: "from-orange-500/20 via-amber-500/12 to-rose-500/10 dark:from-orange-500/25 dark:via-amber-600/15 dark:to-rose-500/15",
    blob: "bg-orange-500/30",
    accent: "text-orange-800 dark:text-orange-300",
  },
  "automatic-question-paper-generator": {
    mesh: "from-indigo-500/20 via-sky-500/12 to-teal-500/10 dark:from-indigo-500/25 dark:via-sky-600/15 dark:to-teal-500/15",
    blob: "bg-indigo-500/25",
    accent: "text-indigo-800 dark:text-indigo-300",
  },
  "blood-bank-management": {
    mesh: "from-red-500/20 via-rose-500/12 to-slate-500/10 dark:from-red-500/25 dark:via-rose-600/15 dark:to-slate-500/15",
    blob: "bg-red-500/30",
    accent: "text-red-800 dark:text-red-300",
  },
  codsoft: {
    mesh: "from-teal-600/20 via-cyan-500/12 to-slate-500/10 dark:from-teal-500/25 dark:via-cyan-600/15 dark:to-slate-500/15",
    blob: "bg-teal-500/30",
    accent: "text-teal-800 dark:text-teal-300",
  },
  "dice-app": {
    mesh: "from-amber-500/25 via-orange-500/15 to-yellow-500/10 dark:from-amber-500/30 dark:via-orange-600/20 dark:to-yellow-500/15",
    blob: "bg-amber-500/35",
    accent: "text-amber-800 dark:text-amber-300",
  },
  hangman: {
    mesh: "from-lime-500/20 via-emerald-500/12 to-teal-500/10 dark:from-lime-500/25 dark:via-emerald-600/15 dark:to-teal-500/15",
    blob: "bg-lime-500/30",
    accent: "text-lime-800 dark:text-lime-300",
  },
  "bmi-calculator": {
    mesh: "from-cyan-500/20 via-sky-500/12 to-teal-500/10 dark:from-cyan-500/25 dark:via-sky-600/15 dark:to-teal-500/15",
    blob: "bg-cyan-500/30",
    accent: "text-cyan-800 dark:text-cyan-300",
  },
  sharepreference: {
    mesh: "from-slate-500/20 via-teal-500/12 to-cyan-500/10 dark:from-slate-400/20 dark:via-teal-600/15 dark:to-cyan-500/15",
    blob: "bg-slate-500/30",
    accent: "text-slate-700 dark:text-slate-300",
  },
}

const FALLBACK_THEME = {
  mesh: "from-primary/20 via-cyan-500/12 to-background dark:from-primary/25 dark:via-cyan-600/15 dark:to-card",
  blob: "bg-primary/25",
  accent: "text-primary",
}

export function projectInitials(title: string): string {
  const words = title
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0)
  if (words.length >= 2) {
    const a = words[0][0]
    const b = words[1][0]
    if (a && b) return (a + b).toUpperCase()
  }
  const t = words[0] ?? title
  return t.slice(0, 2).toUpperCase()
}

type Props = {
  title: string
  category: ProjectCategory
  slug?: string
  client?: string
  variant?: "card" | "dialog"
}

export function ProjectCover({
  title,
  category,
  slug,
  client,
  variant = "card",
}: Props) {
  const meta = categoryMeta[category]
  const Icon = meta.Icon
  const theme = (slug && SLUG_THEMES[slug]) || FALLBACK_THEME
  const initials = projectInitials(title)
  const isDialog = variant === "dialog"

  return (
    <div
      className={cn(
        "relative flex w-full flex-col justify-end overflow-hidden border-b border-border/40 bg-gradient-to-br",
        theme.mesh,
        isDialog ? "min-h-[168px] px-6 pb-6 pt-10 sm:min-h-[180px]" : "min-h-[160px] px-4 pb-4 pt-6",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.45 0.03 200 / 0.14) 1px, transparent 0)`,
          backgroundSize: "18px 18px",
        }}
      />
      <div
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full blur-3xl",
          theme.blob,
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -bottom-16 -left-8 h-40 w-40 rounded-full blur-3xl opacity-70",
          theme.blob,
        )}
      />
      <Icon
        className={cn(
          "pointer-events-none absolute -bottom-4 -right-4 h-36 w-36 rotate-12 opacity-[0.12] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105",
          theme.accent,
        )}
        aria-hidden
      />

      <div className="relative z-[1] flex items-end justify-between gap-3">
        <div className="min-w-0 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-border/60 bg-background/70 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
              {meta.label}
            </span>
            {client ? (
              <span className="rounded-md border border-primary/25 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-medium text-primary backdrop-blur-sm">
                Client · {client}
              </span>
            ) : null}
          </div>
          {isDialog ? (
            <p className="line-clamp-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {title}
            </p>
          ) : null}
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-background/65 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-105 dark:bg-card/70">
          <span className={cn("text-lg font-bold tracking-tight tabular-nums", theme.accent)}>
            {initials}
          </span>
        </div>
      </div>
    </div>
  )
}
