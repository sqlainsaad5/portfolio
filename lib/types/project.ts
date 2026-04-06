export const PROJECT_CATEGORIES = ["web-apps", "games", "utilities"] as const

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

export type Project = {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  category: ProjectCategory
  /** Primary stack — MERN highlighted where applicable */
  technologies: string[]
  mernNote?: string
  githubUrl: string
  liveUrl?: string | null
  demoVideoUrl?: string | null
  order: number
}
