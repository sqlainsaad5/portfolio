"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { skillBars, skillCategories } from "@/lib/data/skills"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const [chartReady, setChartReady] = useState(false)

  useEffect(() => {
    setChartReady(true)
  }, [])

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
    <section id="skills" ref={sectionRef} className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Expertise</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Skills & technologies</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            MERN-focused stack with measurable emphasis — bars are illustrative; swap values in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">lib/data/skills.ts</code>.
          </p>
        </motion.div>

        <Card className="animate-on-scroll mb-10 overflow-hidden border-border/60 bg-card/50 p-4 shadow-sm backdrop-blur-sm sm:p-6">
          <h3 className="mb-4 text-center text-sm font-semibold text-muted-foreground">Stack depth (relative)</h3>
          <div className="h-[280px] w-full min-w-0">
            {chartReady ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[...skillBars]}
                  layout="vertical"
                  margin={{ top: 8, right: 28, left: 8, bottom: 8 }}
                  className="text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground"
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} tickLine={false} axisLine={false} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={128}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 11 }}
                  />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                    {[...skillBars].map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                    <LabelList
                      dataKey="value"
                      position="right"
                      formatter={(v: number) => `${v}%`}
                      className="fill-foreground text-[11px]"
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div
                className="flex h-full w-full items-center justify-center rounded-md bg-muted/50 text-sm text-muted-foreground"
                aria-hidden
              >
                Loading chart…
              </div>
            )}
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card
              key={category.category}
              className="animate-on-scroll border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/25"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3 className="mb-4 text-lg font-semibold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="cursor-default font-normal transition-colors hover:bg-primary hover:text-primary-foreground"
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
