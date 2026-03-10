"use client"

import { useState } from "react"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import type { Project } from "@/lib/projects"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary mb-12 font-medium">
          Selected Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
