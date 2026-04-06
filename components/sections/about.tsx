"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
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
    <section id="about" ref={sectionRef} className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Introduction</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">About me</h2>
        </motion.div>

        <Card className="animate-on-scroll border-border/60 bg-card/50 p-8 shadow-sm backdrop-blur-sm">
          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <p>
              I build end-to-end web products with the{" "}
              <span className="font-medium text-foreground">MERN stack</span> — structuring data in MongoDB, exposing
              clear Express APIs, crafting interfaces in React, and running services on Node.js. I care about
              accessibility, performance, and maintainable components that teams can extend with confidence.
            </p>

            <p>
              Across <span className="text-foreground">agencies</span>,{" "}
              <span className="text-foreground">product teams</span>, and{" "}
              <span className="text-foreground">personal projects</span>, I have shipped dashboards, marketing sites, and
              internal tools. I enjoy turning ambiguous requirements into typed APIs, predictable UI state, and deployable
              artifacts.
            </p>

            <p>
              Outside client work, I experiment with new tooling, refine Git workflows, and document decisions so
              future me (and teammates) can move faster. Continuous learning is non-negotiable in this stack.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
