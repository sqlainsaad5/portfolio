"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const descriptionText = `I  build accessible, pixel-perfect digital experiences for the web. Passionate about crafting user interfaces that blend thoughtful design with robust engineering.`

  useEffect(() => {
    let index = 0

    const typingInterval = setInterval(() => {
      if (index < descriptionText.length) {
        // Use charAt to avoid undefined
        setDisplayedText((prev) => prev + descriptionText.charAt(index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 50) // typing speed in ms per character

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
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/professional-headshot-of-a-frontend-developer.jpg"
                alt="Saad Amjad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-float">
              <span className="text-primary-foreground font-bold text-xl">SA</span>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-6xl font-bold text-balance">Saad Amjad</h1>
            <h2 className="text-2xl lg:text-3xl text-primary font-medium">Frontend Developer</h2>
          </div>

          {/* Typewriter Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            {displayedText}
            <span className={`text-primary font-bold ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <Button onClick={handleDownloadCV} className="group">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button variant="outline" onClick={handleGetInTouch}>
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>

          <div className="flex space-x-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/sqlainsaad5" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/sqlainsaad5/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
