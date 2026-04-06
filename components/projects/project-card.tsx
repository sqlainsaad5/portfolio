"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Info } from "lucide-react"
import { ProjectCover } from "@/components/projects/project-cover"
import type { Project } from "@/lib/types/project"
import { cn } from "@/lib/utils"

type Props = {
  project: Project
  index: number
  onDetails: (p: Project) => void
}

export function ProjectCard({ project, index, onDetails }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <Card
        className={cn(
          "group flex h-full flex-col overflow-hidden border-border/50 bg-card/70 shadow-sm backdrop-blur-md transition-all duration-300 ease-out",
          "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
        )}
      >
        <ProjectCover title={project.title} category={project.category} variant="card" />

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="outline" className="text-[0.65rem] font-normal">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 ? (
              <Badge variant="outline" className="text-[0.65rem]">
                +{project.technologies.length - 5}
              </Badge>
            ) : null}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
            <Button size="sm" className="gap-1.5" onClick={() => onDetails(project)}>
              <Info className="h-3.5 w-3.5" />
              Details
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
