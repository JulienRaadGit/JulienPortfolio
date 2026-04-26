"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (project) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEscape)
    }
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-secondary transition-colors"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        {/* Image */}
        <div className="aspect-video relative bg-secondary">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary mb-2 font-medium">
                Context
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.context}
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary mb-2 font-medium">
                What I Worked On
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.whatIWorkedOn}
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary mb-2 font-medium">
                Tech & Tools
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.techAndTools}
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary mb-2 font-medium">
                Key Takeaways
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.keyTakeaways}
              </p>
            </div>
          </div>

          {/* Buttons */}
          {(project.github || project.demo) && (
            <div className="flex gap-4 mt-8 pt-6 border-t border-border">
              {project.github && (
                <Button asChild variant="outline" className="border-border hover:bg-secondary">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
