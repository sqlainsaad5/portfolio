import { AppWindow, Gamepad2, Wrench } from "lucide-react"
import type { ProjectCategory } from "@/lib/types/project"
import { cn } from "@/lib/utils"

const categoryMeta: Record<
  ProjectCategory,
  { label: string; Icon: typeof AppWindow; gradient: string; iconTint: string }
> = {
  "web-apps": {
    label: "Web application",
    Icon: AppWindow,
    gradient:
      "from-primary/20 via-cyan-500/10 to-background dark:from-primary/25 dark:via-cyan-600/15 dark:to-card",
    iconTint: "text-primary/25 dark:text-primary/35",
  },
  games: {
    label: "Game",
    Icon: Gamepad2,
    gradient:
      "from-amber-500/15 via-orange-500/10 to-background dark:from-amber-500/20 dark:to-card",
    iconTint: "text-amber-500/20 dark:text-amber-400/25",
  },
  utilities: {
    label: "Utility",
    Icon: Wrench,
    gradient:
      "from-violet-500/12 via-slate-500/8 to-background dark:from-violet-500/18 dark:to-card",
    iconTint: "text-violet-500/20 dark:text-violet-400/25",
  },
}

/** Two-letter monogram from project title (professional fallback to screenshots). */
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
  /** Taller header in detail dialog */
  variant?: "card" | "dialog"
}

export function ProjectCover({ title, category, variant = "card" }: Props) {
  const meta = categoryMeta[category]
  const Icon = meta.Icon
  const initials = projectInitials(title)

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden border-b border-border/40 bg-gradient-to-br",
        meta.gradient,
        variant === "card" ? "aspect-video min-h-[168px] px-6 py-8" : "min-h-[148px] px-8 py-10 sm:min-h-[160px]",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.5 0.02 260 / 0.12) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />
      <Icon className={cn("absolute -bottom-6 -right-6 h-40 w-40 rotate-12", meta.iconTint)} aria-hidden />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <div
          className={cn(
            "flex items-center justify-center rounded-2xl border border-border/50 bg-background/60 px-5 py-3 shadow-sm backdrop-blur-md dark:bg-card/70",
            variant === "dialog" && "px-6 py-3.5",
          )}
        >
          <span
            className={cn(
              "font-semibold tracking-tight text-foreground tabular-nums",
              variant === "card" ? "text-3xl sm:text-4xl" : "text-3xl sm:text-[2.75rem]",
            )}
          >
            {initials}
          </span>
        </div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{meta.label}</p>
      </div>
    </div>
  )
}
