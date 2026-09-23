"use client"

import { motion } from "framer-motion"
import { clientTimeline } from "@/lib/data/client-work"
import { ArrowUpRight } from "lucide-react"

export function ClientWork() {
  return (
    <section id="client-work" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Commissions</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Client work timeline</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Selected builds for real clients — from internship suites to live professional sites.
          </p>
        </motion.div>

        <div className="relative pl-2">
          <div
            className="absolute bottom-3 left-[19px] top-3 w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent"
            aria-hidden
          />

          <ul className="space-y-6">
            {clientTimeline.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative flex gap-5"
              >
                <div
                  className={`relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-primary bg-background ${
                    index === clientTimeline.length - 1 ? "ring-4 ring-primary/20" : ""
                  }`}
                  aria-hidden
                />

                <div className="flex-1 rounded-2xl border border-border/60 bg-card/40 px-4 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 sm:px-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.period}</p>
                    <p className="text-sm text-muted-foreground">
                      for <span className="font-medium text-foreground">{item.client}</span>
                    </p>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{item.project}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.outcome}</p>
                  <a
                    href="#projects"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-opacity hover:opacity-80"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    See in projects
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
