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
    <section id="certifications" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 animate-on-scroll hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                    <span className="text-xs text-muted-foreground">ID: {cert.credentialId}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setOpenImage(cert.image)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {openImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    onClick={() => setOpenImage(null)}
  >
    <div
      className="bg-white rounded-lg p-4 max-w-lg w-full relative"
      onClick={e => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        onClick={() => setOpenImage(null)}
      >
        ×
      </button>
      <img src={openImage} alt="Certificate" className="w-full h-auto rounded" />
    </div>
  </div>
)}
    </section>
  )
}
