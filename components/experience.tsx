"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Shield } from "lucide-react"

const experiences = [
  {
    period: "Jan 2023 —Oct 2025",
    title: "Senior Frontend Engineer",
    company: "Sirovista",
    description:
      "Built and maintained critical components used to construct the company’s frontend architecture. Collaborated closely with designers and product teams to translate Figma designs into pixel-perfect, responsive interfaces with best web accessibility practices.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    hasVerification: true, // 👈 Added flag for verification
  },
  {
    period: "2021 — 2023",
    title: "Frontend Developer",
    company: "Freelance Frontend Developer (Remote)",
    description:
      "Developed and maintained responsive web applications using modern JavaScript frameworks. Collaborated with UX/UI designers to implement pixel-perfect designs and ensure optimal user experience across all devices.",
    technologies: ["React", "Vue.js", "SCSS", "Webpack", "Jest"],
  },
]

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVerificationOpen, setIsVerificationOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 animate-on-scroll hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <p className="text-sm text-primary font-medium">{exp.period}</p>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>

                    {exp.hasVerification && (
                      <Dialog
                        open={isVerificationOpen}
                        onOpenChange={setIsVerificationOpen}
                      >
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs bg-green-600 text-white hover:bg-green-700 border-green-600 hover:border-green-700 dark:bg-green-500 dark:text-white dark:hover:bg-green-400 dark:border-green-500 dark:hover:border-green-400"
                          >
                            <Shield className="w-3 h-3 mr-1" />
                            Verify
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>Experience Verification</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 text-center">
                            <iframe
                              src="/sirovista-experience-letter.pdf"
                              title="Sirovista Experience Letter"
                              className="w-full h-[600px] rounded-lg border"
                            />
                            <div className="text-sm text-muted-foreground">
                              <p>
                                <strong>Company:</strong> Sirovista
                              </p>
                              <p>
                                <strong>Role:</strong> Senior Frontend Engineer
                              </p>
                              <p>
                                <strong>Employee:</strong> Saad Amjad
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
