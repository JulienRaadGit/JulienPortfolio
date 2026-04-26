"use client"

import Image from "next/image"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="aspect-video relative overflow-hidden bg-secondary">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
