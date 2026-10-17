"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <span className="sticker inline-block -rotate-2 rounded-md bg-[var(--tape-yellow)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
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
