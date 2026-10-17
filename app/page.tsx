import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { KoreaExchange } from "@/components/korea-exchange"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Education />
      <KoreaExchange />
      <Contact />
    </main>
  )
}
