export type ClientMilestone = {
  id: string
  period: string
  client: string
  project: string
  slug: string
  outcome: string
}

/**
 * Visual timeline of commissioned work — chronological (oldest → newest).
 * Periods derived from GitHub repo `created_at` for each project.
 */
export const clientTimeline: ClientMilestone[] = [
  {
    id: "codsoft",
    period: "Feb 2024",
    client: "Sara Khan",
    project: "Codsoft",
    slug: "codsoft",
    outcome: "Internship task suite with progressive API-backed modules.",
  },
  {
    id: "prescripto",
    period: "Feb 2026",
    client: "Ayesha Nadeem",
    project: "Prescripto",
    slug: "prescripto",
    outcome: "MERN appointment booking with role-based clinic dashboards.",
  },
  {
    id: "eventify",
    period: "Feb 2026",
    client: "Anam Riaz",
    project: "Eventify",
    slug: "eventify",
    outcome: "Event planning, vendors, and Stripe-backed payments.",
  },
  {
    id: "sports",
    period: "Apr 2026",
    client: "Muhammad Kaif",
    project: "Sports Ecosystem",
    slug: "sports-ecosystem-platform",
    outcome: "Coaching, ground booking, training, and marketplace in one stack.",
  },
  {
    id: "dr-nadeem",
    period: "Aug 2026",
    client: "Dr. M. Nadeem Sajjad",
    project: "Professional site",
    slug: "dr-m-nadeem-sajjad",
    outcome: "Live Next.js presence on Vercel for a medical professional.",
  },
  {
    id: "oems",
    period: "Sep 2026",
    client: "Muhammad Basit",
    project: "OEMS",
    slug: "oems",
    outcome: "Institutional exam platform with RBAC, grading, and reports.",
  },
]
