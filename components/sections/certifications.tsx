"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"


const certifications = [
  {
    title: "DevelopersHub.co ",
    issuer: "FRONTEND DEVELOPMENT",
    date: "2025",
    credentialId: "DHC-29",
    description: "Demonstrates expertise in designing and developing responsive, user-friendly frontend applications with modern frameworks.",
    verifyUrl: "https://aws.amazon.com/verification",
    image: "/developerhub.png", // <-- Add this
  },
  {
    title: "SQL intermediate",
    issuer: "Databases",
    date: "2023",
    credentialId: "99A322AFA467",
    description: "Proficiency in SQL, including intermediate-level queries, data manipulation, joins, and reporting techniques.",
    verifyUrl: "https://skillshop.exceedlms.com/student/path/508845",
    image: "/sql.png", // <-- Add this
  },
  {
    title: "React Developer Certification",
    issuer: "FASH",
    date: "2024",
    credentialId: "PPY-TNG-TVC-9S",
    description: "Advanced React development skills including hooks, context, and performance optimization.",
    verifyUrl: "https://www.coursera.org/account/accomplishments",
    image: "/PPY-TNG-TVC-9S.png", // <-- Add this
  },
  // {
  //   title: "Web Accessibility Specialist",
  //   issuer: "International Association of Accessibility Professionals",
  //   date: "2022",
  //   credentialId: "IAAP-WAS-2022-123",
  //   description: "Comprehensive knowledge of web accessibility standards and implementation techniques.",
  //   verifyUrl: "https://www.accessibilityassociation.org/certification",
  //   image: "/certificates/aws.png", // <-- Add this
  // },
]

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openImage, setOpenImage] = useState<string | null>(null) // <-- Add this

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
    <section id="certifications" ref={sectionRef} className="scroll-mt-24 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll">
          <h2 className="mb-8 text-center text-2xl font-bold sm:mb-12 sm:text-3xl">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="flex h-full flex-col gap-0 p-4 animate-on-scroll hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group hover:border-primary/20 sm:p-5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                <div className="shrink-0">
                  <Award className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                </div>
                <div className="min-w-0 flex-1 space-y-2.5 sm:space-y-3">
                  <div>
                    <h3 className="text-base font-semibold leading-snug break-words group-hover:text-primary transition-colors sm:text-lg">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground break-words">{cert.issuer}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                    <span className="text-xs text-muted-foreground break-all">ID: {cert.credentialId}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 sm:pt-5">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setOpenImage(cert.image)}
                  className="h-10 w-full bg-green-600 text-white hover:bg-green-700 border-green-600 hover:border-green-700 dark:bg-green-500 dark:text-white dark:hover:bg-green-400 dark:border-green-500 dark:hover:border-green-400"
                >
                  <ExternalLink className="mr-2 h-4 w-4 shrink-0" />
                  Verify Certificate
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {openImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenImage(null)}
        >
          <div
            className="relative w-full max-w-lg max-h-[90dvh] overflow-auto rounded-lg bg-white p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-md text-2xl leading-none text-gray-500 hover:text-gray-700"
              onClick={() => setOpenImage(null)}
              aria-label="Close certificate"
            >
              ×
            </button>
            <img src={openImage} alt="Certificate" className="mt-6 h-auto w-full rounded" />
          </div>
        </div>
      ) : null}
    </section>
  )
}
