"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export function About() {
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
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        </div>

        <Card className="p-8 animate-on-scroll bg-card/50 backdrop-blur-sm border-border/50">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Currently, I'm a Senior Frontend Engineer specializing in accessibility and modern web technologies. I
              contribute to the creation and maintenance of UI components that power cutting-edge web applications,
              ensuring our platforms meet web accessibility standards and best practices to deliver inclusive user
              experiences.
            </p>

            <p>
              In the past, I've had the opportunity to develop software across a variety of settings — from
              <span className="text-foreground font-medium"> advertising agencies</span> and
              <span className="text-foreground font-medium"> large corporations</span> to
              <span className="text-foreground font-medium"> start-ups</span> and
              <span className="text-foreground font-medium"> small digital product studios</span>. Additionally, I also
              released a comprehensive video course a few years ago, guiding learners through building modern web
              applications.
            </p>

            <p>
              In my spare time, I'm usually exploring new technologies, contributing to open source projects, or working
              on personal projects that challenge me to grow as a developer. I believe in continuous learning and
              staying up-to-date with the latest trends in web development.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
