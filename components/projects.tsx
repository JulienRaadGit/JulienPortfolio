"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Work I'm proud of"
          description="A selection of games and interactive experiences. Click any project to explore the full breakdown, media gallery and technical details."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          More projects coming soon.
        </motion.p>
      </div>
    </section>
  )
}
