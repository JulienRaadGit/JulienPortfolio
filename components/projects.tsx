"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { projects, type ProjectCategory } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"

const categories: Array<ProjectCategory | "All"> = [
  "All",
  "VR",
  "Game Development",
  "Game Jam",
  "3D / Environment",
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Work I'm proud of"
          description="A selection of games and interactive experiences. Click any project to explore the full breakdown, media gallery and technical details."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition-all ${
                activeCategory === category
                  ? "sticker -rotate-1 border-foreground bg-primary text-primary-foreground"
                  : "border-foreground/30 bg-card text-muted-foreground hover:-rotate-1 hover:border-foreground/70 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
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
