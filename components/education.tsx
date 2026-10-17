"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { education } from "@/lib/projects"
import { SectionHeading } from "@/components/section-heading"

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Education"
          title="My academic path"
          description="A journey from computer science fundamentals to specialized game programming and an international exchange."
        />

        <div className="relative mt-14 max-w-3xl">
          {/* Stitched thread */}
          <div
            className="absolute left-5 top-2 bottom-2 w-0 border-l-2 border-dashed border-foreground/40 md:left-6"
            aria-hidden="true"
          />

          <ul className="space-y-10">
            {education.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Pin node */}
                <span className="paper-card absolute left-0 top-0 inline-flex h-11 w-11 items-center justify-center rounded-full text-primary md:h-[3.25rem] md:w-[3.25rem]">
                  <GraduationCap className="h-5 w-5" />
                </span>

                <div className={`paper-card rounded-2xl p-6 ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}>
                  <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-primary">
                    {item.institution}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
