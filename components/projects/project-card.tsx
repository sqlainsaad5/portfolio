"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { ProjectCover } from "@/components/projects/project-cover"
import type { Project } from "@/lib/types/project"

type Props = {
  project: Project
  index: number
  onDetails: (p: Project) => void
}

export function ProjectCard({ project, index, onDetails }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, delay: Math.min(index, 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/8">
        <div className="relative w-full overflow-hidden">
          <ProjectCover
            title={project.title}
            category={project.category}
            slug={project.slug}
            client={project.client}
            variant="card"
          />
          <button
            type="button"
            onClick={() => onDetails(project)}
            className="absolute inset-0 z-[2] flex items-center justify-center bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/25 group-hover:opacity-100"
            aria-label={`Open details for ${project.title}`}
          >
            <span className="inline-flex translate-y-2 items-center gap-1.5 rounded-lg border border-background/40 bg-background/90 px-3 py-1.5 text-sm font-medium text-foreground shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0">
              View project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-3.5 p-5">
          <div>
            <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="border border-border/50 bg-muted/60 text-[0.7rem] font-normal"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 ? (
              <Badge variant="outline" className="text-[0.7rem]">
                +{project.technologies.length - 4}
              </Badge>
            ) : null}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
            <Button size="sm" className="gap-1.5 shadow-sm shadow-primary/15" onClick={() => onDetails(project)}>
              Details
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
            </Button>
            {project.liveUrl ? (
              <Button size="sm" variant="ghost" asChild className="gap-1.5 text-primary">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
