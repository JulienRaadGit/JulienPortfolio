"use client"

import { motion } from "framer-motion"
import { Boxes, Code2, Box, Gamepad2 } from "lucide-react"
import { skillCategories } from "@/lib/projects"
import { SectionHeading } from "@/components/section-heading"

const categoryIcons: Record<string, typeof Boxes> = {
  "Game Engines": Boxes,
  Programming: Code2,
  "3D": Box,
  "Game Development": Gamepad2,
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & expertise"
          description="The engines, languages and disciplines I use to bring games and immersive experiences to life."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, index) => {
            const Icon = categoryIcons[cat.category] ?? Boxes
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {cat.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border/60 bg-secondary/40 px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
