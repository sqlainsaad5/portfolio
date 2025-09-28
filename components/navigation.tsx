"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "group flex items-center space-x-4 text-sm font-medium transition-all duration-300",
              activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <div
              className={cn(
                "h-px transition-all duration-300",
                activeSection === item.href.slice(1)
                  ? "w-16 bg-primary"
                  : "w-8 bg-muted-foreground group-hover:w-12 group-hover:bg-foreground",
              )}
            />
            <span className="whitespace-nowrap">{item.name}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
