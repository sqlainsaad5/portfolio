"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/layout/theme-toggle"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

function sectionId(href: string) {
  return href.replace("#", "")
}

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.35, rootMargin: "-72px 0px -40% 0px" },
    )

    navItems.forEach((item) => {
      const el = document.querySelector(item.href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const navLink = (href: string) => {
    const active = activeSection === sectionId(href)
    return cn(
      "group relative rounded-md px-2.5 py-2 text-sm font-medium transition-colors duration-300",
      active ? "text-primary" : "text-muted-foreground hover:text-foreground",
    )
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-[border-color,background-color,box-shadow] duration-500",
        scrolled
          ? "border-border/60 bg-background/80 shadow-md shadow-black/5 backdrop-blur-xl dark:shadow-black/20"
          : "border-transparent bg-background/55 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <a
          href="#hero"
          className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-sm font-semibold tracking-tight text-transparent transition-opacity hover:opacity-90 sm:text-base"
          onClick={() => setOpen(false)}
        >
          Saad Amjad
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const active = activeSection === sectionId(item.href)
            return (
              <a key={item.href} href={item.href} className={navLink(item.href)}>
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-1 left-2 right-2 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-primary to-[oklch(0.62_0.18_285)] transition-transform duration-300 ease-out",
                    active && "scale-x-100",
                    !active && "group-hover:scale-x-100",
                  )}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[min(100vw,320px)] flex-col gap-6">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-0.5">
                {navItems.map((item) => {
                  const active = activeSection === sectionId(item.href)
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/80 hover:text-foreground",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                })}
              </nav>
              <div className="mt-auto border-t pt-4 sm:hidden">
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
