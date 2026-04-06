import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Education } from "@/components/sections/education"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/layout/navigation"
import { PageBackground } from "@/components/layout/page-background"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <Navigation />
      <main className="relative pt-14 sm:pt-16">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}
