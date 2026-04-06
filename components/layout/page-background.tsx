"use client"

import { motion, useReducedMotion } from "framer-motion"

export function PageBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-background" />
      {/* Soft mesh orbs — teal + violet, contemporary duo-tone */}
      <motion.div
        className="absolute -left-[20%] top-[-10%] h-[min(520px,55vw)] w-[min(520px,55vw)] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.65_0.17_195/0.35),transparent_68%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,oklch(0.55_0.16_195/0.45),transparent_68%)]"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.55, 0.85, 0.55],
                scale: [1, 1.05, 1],
              }
        }
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] top-[25%] h-[min(480px,50vw)] w-[min(480px,50vw)] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.58_0.2_285/0.22),transparent_65%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,oklch(0.5_0.18_285/0.35),transparent_65%)]"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[30%] h-[min(400px,45vw)] w-[min(400px,45vw)] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.14_220/0.18),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,oklch(0.45_0.12_220/0.28),transparent_70%)]"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.35, 0.6, 0.35],
              }
        }
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.5 0.02 260 / 0.06) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.5 0.02 260 / 0.06) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  )
}
