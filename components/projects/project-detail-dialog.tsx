"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Github, MonitorPlay } from "lucide-react"
import { ProjectCover } from "@/components/projects/project-cover"
import type { Project } from "@/lib/types/project"
import { getYoutubeId } from "@/lib/youtube"
import { cn } from "@/lib/utils"

type Props = {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectDetailDialog({ project, open, onOpenChange }: Props) {
  if (!project) return null

  const yt = project.demoVideoUrl ? getYoutubeId(project.demoVideoUrl) : null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-h-[min(90vh,880px)] gap-0 overflow-hidden p-0 sm:max-w-2xl",
          "border-border/80 bg-background/95 backdrop-blur-xl",
        )}
      >
        <ProjectCover title={project.title} category={project.category} variant="dialog" />

        <ScrollArea className="max-h-[min(55vh,420px)]">
          <div className="space-y-4 px-6 pb-6 pt-2">
            <DialogHeader className="space-y-2 text-left">
              <DialogTitle className="pr-8 text-xl font-semibold tracking-tight">{project.title}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                {project.shortDescription}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>

            {project.mernNote ? (
              <div className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-foreground">
                <span className="font-medium text-primary">MERN / API note — </span>
                {project.mernNote}
              </div>
            ) : null}

            <Separator />

            <p className="text-sm leading-relaxed text-muted-foreground">{project.longDescription}</p>

            {yt ? (
              <>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <MonitorPlay className="h-4 w-4" />
                    Video demo
                  </div>
                  <div className="aspect-video overflow-hidden rounded-md border bg-black shadow-inner">
                    <iframe
                      title={`${project.title} demo`}
                      src={`https://www.youtube.com/embed/${yt}`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </>
            ) : null}

            <div className="flex flex-wrap gap-2 pt-2">
              <Button asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Github className="h-4 w-4" />
                  View repository
                </a>
              </Button>
              {project.liveUrl ? (
                <Button variant="outline" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
