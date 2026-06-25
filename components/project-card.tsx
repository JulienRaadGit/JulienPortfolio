"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Gamepad2 } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTransform(`perspective(1000px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`)
  }

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <Link href={`/projects/${project.id}`} className="group block">
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform }}
          className="relative overflow-hidden rounded-2xl border border-border/70 bg-card transition-[transform] duration-200 ease-out will-change-transform"
        >
          {/* Thumbnail */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.thumbnail || "/placeholder.svg"}
              alt={`${project.title} thumbnail`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

            {/* Engine badge */}
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass border border-border/60 px-3 py-1 text-xs font-medium text-foreground">
              <Gamepad2 className="h-3.5 w-3.5 text-primary" />
              {project.engine}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                {project.title}
              </h3>
              <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border/60 bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              View Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Hover glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [box-shadow:0_0_0_1px_var(--color-primary),0_20px_60px_-20px_color-mix(in_oklch,var(--color-primary)_50%,transparent)]" />
        </div>
      </Link>
    </motion.div>
  )
}
