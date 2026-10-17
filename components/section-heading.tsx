"use client"

import { motion } from "framer-motion"
import { DoodleStar } from "@/components/doodles"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  tapeColor?: "yellow" | "blue"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tapeColor = "yellow",
}: SectionHeadingProps) {
  const tapeBg = tapeColor === "blue" ? "bg-[var(--tape-blue)]" : "bg-[var(--tape-yellow)]"

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className={`relative ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <DoodleStar
        className={`absolute -top-6 h-7 w-7 text-primary/50 ${align === "center" ? "left-1/2 -translate-x-[4.5rem]" : "-left-2 md:-left-8"}`}
        aria-hidden="true"
      />
      <span className={`sticker inline-block -rotate-2 rounded-md ${tapeBg} px-3 py-1 text-xs font-bold uppercase tracking-widest text-foreground`}>
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  )
}
