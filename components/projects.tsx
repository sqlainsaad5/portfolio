"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, product catalog, shopping cart",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/saadamjad/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/task-management-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/saadamjad/task-manager",
  },
  {
    title: "Weather Dashboard",
    description:
      "A modern, responsive fashion website for dresses, featuring product catalogs, smart filters, detailed product pages, and smooth animations.",
    image: "/preview/project4.png",
    technologies: ["Vue.js", "Chart.js", "SCSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/saadamjad/weather-dashboard",
  },
  {
    title: "Add to Cart",
    description:
      "A modern, responsive fashion e-commerce feature that lets users browse dresses, view details, and seamlessly add items to the cart with smooth animations.",
    image: "/modern-portfolio-website.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe"],
    liveUrl: "https://example.com/shop",
    githubUrl: "https://github.com/saadamjad/add-to-cart",

  },
  {
    title: "Structural Chemistry Insights",
    description:
      "A responsive frontend page showcasing Data Software and Insights. Join thousands of scientists leveraging CSD data and CCDC software to propel structural science forward.",
    image: "/sss.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com/structural-chemistry",
    githubUrl: "https://github.com/saadamjad/structural-chemistry-insights",
  }

]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [previewImg, setPreviewImg] = useState<string | null>(null)

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
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden animate-on-scroll group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-end items-center pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPreviewImg(project.image)}
                    className="ml-auto bg-blue-600 text-white hover:bg-blue-700 border-blue-600 hover:border-blue-700 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400 dark:border-blue-500 dark:hover:border-blue-400"
                  >
                    Preview
                  </Button>
                </div>

              </div>
            </Card>
          ))}
        </div>
      </div>
      {previewImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setPreviewImg(null)}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-2xl w-full relative max-h-[80vh] overflow-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
              onClick={() => setPreviewImg(null)}
            >
              &times;
            </button>
            <img src={previewImg} alt="Project Preview" className="w-full h-auto rounded" />
          </div>
        </div>
      )}
    </section>
  )
}
