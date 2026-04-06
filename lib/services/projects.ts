import type { Project } from "@/lib/types/project"
import { getProjectsSorted } from "@/lib/data/projects"

function toPlain(p: Record<string, unknown>): Project {
  return {
    slug: String(p.slug),
    title: String(p.title),
    shortDescription: String(p.shortDescription),
    longDescription: String(p.longDescription),
    category: p.category as Project["category"],
    technologies: (p.technologies as string[]) ?? [],
    mernNote: p.mernNote ? String(p.mernNote) : undefined,
    githubUrl: String(p.githubUrl),
    liveUrl: p.liveUrl != null ? String(p.liveUrl) : null,
    demoVideoUrl: p.demoVideoUrl != null ? String(p.demoVideoUrl) : null,
    order: Number(p.order),
  }
}

export async function loadProjects(): Promise<Project[]> {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    return getProjectsSorted()
  }

  try {
    const { connectDB } = await import("@/lib/mongodb")
    const { ProjectModel } = await import("@/lib/models/Project")
    await connectDB()
    const docs = await ProjectModel.find().sort({ order: 1 }).lean()
    if (docs.length === 0) {
      return getProjectsSorted()
    }
    return docs.map((doc) => toPlain(doc as unknown as Record<string, unknown>))
  } catch {
    return getProjectsSorted()
  }
}
