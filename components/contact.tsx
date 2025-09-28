"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-12 text-pretty">
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
            to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 animate-on-scroll bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>saadamjad558@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+92 3061975881</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Vehari, Pakistan</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
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
                {/* <Button variant="ghost" size="icon" asChild>
                  <a href="https://twitter.com/saadamjad" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button> */}
              </div>
            </div>
          </Card>

          <Card
            className="p-8 animate-on-scroll bg-card/50 backdrop-blur-sm border-border/50"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="text-xl font-semibold mb-6">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm currently available for freelance work and full-time opportunities. If you have a project in mind or
              would like to discuss potential collaboration, I'd love to hear from you.
            </p>
            
<Button className="w-full" asChild>
  <a
    href="https://wa.me/923061975881"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Mail className="w-4 h-4 mr-2" />
    Send Message
  </a>
</Button>

          </Card>
        </div>

        <div className="text-center mt-12 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
          <p className="text-muted-foreground text-sm">© 2025 Saad Amjad. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}
