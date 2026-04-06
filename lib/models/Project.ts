import mongoose, { Schema } from "mongoose"
import type { Project as ProjectType } from "@/lib/types/project"

const projectSchema = new Schema<ProjectType>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    category: { type: String, required: true },
    technologies: [{ type: String }],
    mernNote: { type: String },
    githubUrl: { type: String, required: true },
    liveUrl: { type: String, default: null },
    demoVideoUrl: { type: String, default: null },
    order: { type: Number, required: true },
  },
  { timestamps: true },
)

export const ProjectModel =
  mongoose.models.Project ?? mongoose.model<ProjectType>("Project", projectSchema)
