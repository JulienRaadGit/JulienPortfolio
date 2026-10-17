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

  const tilt = index % 2 === 0 ? "-rotate-1" : "rotate-1"

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={tilt}
    >
      <Link href={`/projects/${project.id}`} className="group block">
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform }}
          className="paper-card relative overflow-hidden rounded-2xl transition-[transform] duration-200 ease-out will-change-transform group-hover:-translate-y-1"
        >
          {/* Washi tape pinning the card */}
          <div className="washi-tape left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rotate-3" />

          {/* Thumbnail */}
          <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-foreground/70">
            <Image
              src={project.thumbnail || "/placeholder.svg"}
              alt={`${project.title} thumbnail`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Engine badge */}
            <div className="sticker absolute left-4 top-6 inline-flex -rotate-2 items-center gap-1.5 rounded-full bg-[var(--card)] px-3 py-1 text-xs font-bold text-foreground">
              <Gamepad2 className="h-3.5 w-3.5 text-primary" />
              {project.engine}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                {project.title}
              </h3>
              <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-foreground/70 text-muted-foreground transition-all duration-300 group-hover:rotate-12 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
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
                  className="rounded-md border border-foreground/30 bg-secondary/60 px-2.5 py-1 text-xs font-semibold text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 inline-flex items-center gap-1.5 font-display text-base font-bold text-primary">
              Read the entry
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
