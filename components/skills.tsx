"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Frontend Technologies",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "SCSS"],
  },
  {
    category: "Tools & Frameworks",
    skills: ["Git", "Webpack", "Vite", "Jest", "Cypress", "Figma", "Adobe XD", "Storybook"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    category: "Other Skills",
    skills: ["Responsive Design", "Web Accessibility", "Performance Optimization", "SEO", "Agile/Scrum"],
  },
]

export function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 animate-on-scroll bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
