"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { contactInfo } from "@/lib/projects"
import { DoodleArrow, DoodleStar, PushPin } from "@/components/doodles"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  const orb1X = useTransform(springX, [-0.5, 0.5], [-40, 40])
  const orb1Y = useTransform(springY, [-0.5, 0.5], [-30, 30])
  const orb2X = useTransform(springX, [-0.5, 0.5], [30, -30])
  const orb2Y = useTransform(springY, [-0.5, 0.5], [25, -25])
  const gridX = useTransform(springX, [-0.5, 0.5], [15, -15])
  const gridY = useTransform(springY, [-0.5, 0.5], [10, -10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Faint graph-paper page */}
        <motion.div
          style={{ x: gridX, y: gridY }}
          className="premium-grid absolute inset-[-10%] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
        />

        {/* Soft paper doodle blobs instead of sci-fi glow */}
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute left-1/4 top-1/4 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[90px]"
        />
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute right-1/4 bottom-1/4 h-[26rem] w-[26rem] translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--stamp-teal)]/15 blur-[90px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.5 }}
          className="sticker relative mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--tape-yellow)] px-4 py-1.5 text-xs font-bold text-foreground"
        >
          <PushPin className="absolute -top-4 left-1/2 h-6 w-6 -translate-x-1/2 text-primary" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Open to game studios &amp; master&apos;s programs ✦
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative font-display text-7xl font-bold leading-[1.05] tracking-tight text-balance md:text-9xl"
        >
          <DoodleStar
            className="absolute -right-2 top-0 hidden h-10 w-10 rotate-12 text-[var(--stamp-teal)]/60 md:-right-6 md:block"
            aria-hidden="true"
          />
          Julien
          <br />
          <span className="squiggle-underline text-primary">Raad</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 font-display text-xl font-bold text-foreground/90 md:text-3xl"
        >
          Game Developer <span className="text-muted-foreground">·</span> Unity{" "}
          <span className="text-primary">+</span> Unreal Engine{" "}
          <span className="text-primary">+</span> VR
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          This is my scrapbook of games, sketches and VR experiments — a messy
          desk turned into a portfolio. I build immersive gameplay systems and
          interactive experiences, from mobile games to physics-driven
          sandboxes and VR, and I write down everything I learn along the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <DoodleArrow
            className="absolute -left-20 -top-12 hidden h-12 w-16 -rotate-[20deg] text-primary/50 md:block"
            aria-hidden="true"
          />
          <a
            href="#projects"
            className="sticker inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-rotate-2 hover:scale-105"
          >
            Flip through my projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <div className="flex items-center gap-3">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="paper-card inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-transform hover:rotate-6 hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="paper-card inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-transform hover:-rotate-6 hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  )
}
