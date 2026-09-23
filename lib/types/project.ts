export const PROJECT_CATEGORIES = ["web-apps", "games", "utilities"] as const

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

export type CaseStudyMetric = {
  label: string
  value: string
}

export type ProjectCaseStudy = {
  problem: string
  approach: string
  result: string
  role?: string
  metrics?: CaseStudyMetric[]
}

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
  /** Client / commission credit shown on cards */
  client?: string
  /** Optional problem → approach → result for detail dialog */
  caseStudy?: ProjectCaseStudy
}
