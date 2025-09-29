"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { GraduationCap, Shield } from "lucide-react"

const education = [
  {
    period: "2021 — 2025",
    degree: "Bachelor of Science in Computer Science",
    institution: "COMSATS University Islamabad",
    description:
      "Focused on software engineering, web development, and computer systems. Completed comprehensive coursework in algorithms, data structures, and modern web technologies.",
    gpa: "3.26/4.0",
    hasVerification: true,
  },
]

export function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVerificationOpen, setIsVerificationOpen] = useState(false)

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
    <section id="education" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 animate-on-scroll hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-1 flex items-start space-x-2">
                  <GraduationCap className="w-5 h-5 text-primary mt-1" />
                  <p className="text-sm text-primary font-medium">{edu.period}</p>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <p className="text-sm text-primary font-medium">CGPA: {edu.gpa}</p>
                      {edu.hasVerification && (
                        <Dialog open={isVerificationOpen} onOpenChange={setIsVerificationOpen}>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs bg-green-600 text-white hover:bg-green-700 border-green-600 hover:border-green-700 dark:bg-green-500 dark:text-white dark:hover:bg-green-400 dark:border-green-500 dark:hover:border-green-400"
                            >
                              <Shield className="w-3 h-3 mr-1" />
                              Verify
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Degree Verification</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="text-center">
                                <img
                                  src="/comsats-university-islamabad-degree-certificate-fo.jpg"
                                  alt="COMSATS University Islamabad Degree Certificate"
                                  className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                                />
                              </div>
                              <div className="text-sm text-muted-foreground text-center">
                                <p>
                                  <strong>Institution:</strong> COMSATS University Islamabad
                                </p>
                                <p>
                                  <strong>Degree:</strong> Bachelor of Science in Computer Science
                                </p>
                                <p>
                                  <strong>Graduate:</strong> Saad Amjad
                                </p>
                                <p>
                                  <strong>CGPA:</strong> 3.26/4.0
                                </p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
