import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { MouseGlow } from "@/components/mouse-glow"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <MouseGlow />
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Education />
      <Contact />
    </main>
  )
}
