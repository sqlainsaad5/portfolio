"use client"

import { motion } from "framer-motion"
import { Code2, Layers3, Rocket } from "lucide-react"

const pillars = [
  {
    icon: Layers3,
    title: "End-to-end MERN",
    body: "Schemas, secured Express APIs, React UIs, and Node services that stay maintainable after handoff.",
  },
  {
    icon: Code2,
    title: "Product-minded UI",
    body: "Accessible, responsive interfaces — dashboards, booking flows, and marketing sites that feel intentional.",
  },
  {
    icon: Rocket,
    title: "Ship & document",
    body: "Clear Git workflows, deployable setups, and notes so teammates (and future you) move faster.",
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Introduction</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">About me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="space-y-5 text-center"
        >
          <p className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            I ship web products that survive real users — booking, exams, and ops dashboards.
          </p>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Across agencies, product teams, and client commissions, I turn ambiguous requirements into typed APIs,
            predictable UI state, and deployable artifacts. Continuous learning is non-negotiable in this stack.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
              className="rounded-2xl border border-border/60 bg-card/40 p-5 text-left backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
            >
              <item.icon className="mb-3 h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
