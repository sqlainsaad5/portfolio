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
    period: "Oct 2025 — Present",
    title: "Mern Stack Developer",
    company: "IIfa Tech",
    location: "Lahore, Pakistan",
    description:
      "Building and shipping production web features end-to-end on the MERN stack: designing and consuming REST APIs with Node.js and Express, modeling and querying data in MongoDB, and implementing responsive React interfaces with a focus on clarity and performance. Collaborating daily with product and QA—translating requirements into tasks, participating in code review, and iterating based on feedback. Contributing to shared patterns for auth, error handling, and API contracts so the codebase stays consistent as the team scales.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "TypeScript",
      "REST APIs",
      "Tailwind CSS",
      "Git",
    ],
    current: true,
    hasVerification: false,
  },
  {
    period: "Jan 2023 — Sep 2025",
    title: "Senior Frontend Engineer",
    company: "Sirovista",
    description:
      "Built and maintained critical components used to construct the company’s frontend architecture. Collaborated closely with designers and product teams to translate Figma designs into pixel-perfect, responsive interfaces with best web accessibility practices.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    hasVerification: true,
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
    <section id="experience" ref={sectionRef} className="scroll-mt-24 px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Career</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Experience</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Current role at IIfa Tech in Lahore, plus prior roles and stack highlights.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`animate-on-scroll group border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
                exp.current
                  ? "border-primary/35 ring-1 ring-primary/15 hover:border-primary/40"
                  : "hover:border-primary/20"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-1">
                  <p className="text-sm font-medium text-primary">{exp.period}</p>
                  {exp.current ? (
                    <Badge className="mt-2 bg-primary/15 text-primary hover:bg-primary/20">Current role</Badge>
                  ) : null}
                </div>
                <div className="space-y-4 md:col-span-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">{exp.title}</h3>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">{exp.company}</span>
                        {"location" in exp && exp.location ? (
                          <>
                            <span className="text-muted-foreground"> · </span>
                            {exp.location}
                          </>
                        ) : null}
                      </p>
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
