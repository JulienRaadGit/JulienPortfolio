"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
          Julien Raad
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-4">
          Unity Game Developer
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Focused on mobile gameplay systems and interactive experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-border hover:bg-secondary"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
