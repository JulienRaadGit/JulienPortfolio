"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "lucide-react"
import { contactInfo } from "@/lib/projects"

const links = [
  { name: "GitHub", href: contactInfo.github, icon: Github, external: true },
  { name: "LinkedIn", href: contactInfo.linkedin, icon: Linkedin, external: true },
  { name: "Email", href: `mailto:${contactInfo.email}`, icon: Mail, external: false },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-8 md:p-14"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[oklch(0.55_0.18_265)]/20 blur-[100px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-px w-6 bg-primary" />
              Contact
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-balance md:text-5xl">
              Let&apos;s build something memorable
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Open to opportunities with game studios and master&apos;s programs.
              Feel free to reach out — I&apos;d love to talk about games, technology
              and how I can contribute to your team.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                {contactInfo.email}
              </a>
              <a
                href={contactInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <link.icon className="h-4 w-4" />
                  {link.name}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Julien Raad. All rights reserved.</p>
          <p>Game Developer — Unity • Unreal Engine • VR</p>
        </footer>
      </div>
    </section>
  )
}
