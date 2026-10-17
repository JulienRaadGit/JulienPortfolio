"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Camera } from "lucide-react"
import { getProject } from "@/lib/projects"
import { SectionHeading } from "@/components/section-heading"
import { PushPin } from "@/components/doodles"

const koreaProjectIds = ["art-heist", "ashen-hollow"]

export function KoreaExchange() {
  const koreaProjects = koreaProjectIds
    .map((id) => getProject(id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))

  return (
    <section id="korea" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="paper-card relative max-w-3xl -rotate-1 rounded-3xl p-6 md:p-8">
          <div className="washi-tape left-10 top-0 -translate-y-1/2 -rotate-6" />
          <SectionHeading
            eyebrow="International Exchange"
            title="Namseoul University, South Korea"
            description="Korea was an incredible experience — the local VR scene is way ahead of what I'd seen before, and having to speak, read and work in English every single day leveled up my English fast."
          />
          <span
            className="absolute -bottom-3 left-14 h-6 w-6 rotate-45 border-b-2 border-r-2 border-foreground/70 bg-card"
            aria-hidden="true"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {koreaProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={index % 2 === 0 ? "-rotate-1" : "rotate-1"}
            >
              <Link href={`/projects/${project.id}`} className="group block">
                <div className="paper-card relative overflow-hidden rounded-2xl">
                  <div className="washi-tape washi-tape-blue left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rotate-6" />
                  <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-foreground/70">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={`${project.title} thumbnail`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Personal photos placeholder */}
        <div className="mt-16">
          <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Camera className="h-4 w-4 text-primary" />
            Photos from Korea
          </h3>
          <p className="mb-6 max-w-2xl text-sm text-muted-foreground">
            Personal photos from the exchange — including the people met along the way — coming soon.
          </p>
          <div className="corkboard grid grid-cols-2 gap-6 p-6 sm:grid-cols-3 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`paper-card relative flex aspect-square flex-col items-center justify-center gap-2 border-dashed p-4 text-center ${i % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
              >
                <PushPin className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 text-primary" aria-hidden="true" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Camera className="h-6 w-6" />
                </div>
                <p className="text-xs font-semibold text-foreground">Add your photo here</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
