import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { SkillConstellation } from "@/components/skill-constellation"
import { Contact } from "@/components/contact"
import { MouseGlow } from "@/components/mouse-glow"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <MouseGlow />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <SkillConstellation />
      <Contact />
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Julien Raad. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
