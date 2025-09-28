"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Frontend Engineer",
    company: "Sirovista",
    description:
      "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
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
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
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
