"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

const DESCRIPTION = `Full Stack developer focused on the MERN stack — MongoDB, Express, React, and Node.js — with a strong eye for UI/UX, responsive interfaces, and APIs that serve dynamic data securely. I ship polished web apps, from idea to deploy.`

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [imgSrc, setImgSrc] = useState("/professional-headshot-of-a-frontend-developer.jpg")

  useEffect(() => {
    let index = 0

    const typingInterval = setInterval(() => {
      if (index < DESCRIPTION.length) {
        setDisplayedText((prev) => prev + DESCRIPTION.charAt(index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 28)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Copy of Saad Amjad.pdf"
    link.download = "Saad_Amjad_CV.pdf"
    link.click()
  }

  const handleGetInTouch = () => {
    const phoneNumber = "923061975881"
    const message = "Hi Saad, I'd like to get in touch regarding your portfolio."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="hero" className="relative flex min-h-[calc(100dvh-3.5rem)] items-center overflow-hidden px-4 sm:min-h-[calc(100dvh-4rem)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_70%_20%,oklch(0.55_0.16_195/0.12),transparent_55%),radial-gradient(ellipse_50%_40%_at_20%_80%,oklch(0.5_0.18_285/0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_70%_55%_at_70%_20%,oklch(0.5_0.14_195/0.2),transparent_55%),radial-gradient(ellipse_50%_40%_at_20%_80%,oklch(0.45_0.15_285/0.12),transparent_50%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          className="flex justify-center lg:order-2 lg:justify-end"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-primary/30 shadow-[0_0_0_1px_oklch(0.65_0.14_195/0.15),0_25px_50px_-12px_oklch(0.5_0.14_195/0.35)] ring-2 ring-primary/20 dark:shadow-[0_0_0_1px_oklch(0.65_0.14_195/0.25),0_28px_56px_-12px_oklch(0.45_0.12_195/0.45)] sm:h-80 sm:w-80">
              <img
                src={imgSrc}
                alt="Saad Amjad"
                className="h-full w-full object-cover"
                onError={() => setImgSrc("/placeholder.svg")}
              />
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg sm:-bottom-4 sm:-right-4 sm:h-16 sm:w-16"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <span className="text-lg font-bold text-primary-foreground sm:text-xl">SA</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="space-y-2">
            <motion.h1
              className="text-balance bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Saad Amjad
            </motion.h1>
            <motion.p
              className="text-xl font-semibold sm:text-2xl"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.22, duration: 0.45 }}
            >
              <span className="bg-gradient-to-r from-primary to-[oklch(0.62_0.18_285)] bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              <span className="text-muted-foreground"> · </span>
              <span className="text-primary">MERN</span>
            </motion.p>
          </div>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            {displayedText}
            <span className={`font-bold text-primary ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
          </p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.4 }}
          >
            <Button onClick={handleDownloadCV} className="group shadow-md shadow-primary/15 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Download CV
            </Button>
            <Button
              variant="outline"
              onClick={handleGetInTouch}
              className="border-primary/25 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/45 hover:bg-primary/5 hover:shadow-md"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </motion.div>

          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/sqlainsaad5" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/sqlainsaad5/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
