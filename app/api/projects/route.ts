import { NextResponse } from "next/server"
import { loadProjects } from "@/lib/services/projects"

export const dynamic = "force-dynamic"

export async function GET() {
  const projects = await loadProjects()
  return NextResponse.json(projects)
}
