"use client"

import { motion } from "framer-motion"
import { Sparkles, Globe2, GraduationCap, Headset, Gamepad } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const highlights = [
  { icon: GraduationCap, label: "Computer Science degree" },
  { icon: Gamepad, label: "Game Programming Bachelor" },
  { icon: Globe2, label: "Exchange semester in South Korea" },
  { icon: Headset, label: "Passionate about VR & immersive tech" },
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Building immersive experiences"
            />
            <div className="mt-6 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I&apos;m a game developer with a{" "}
                <span className="text-foreground">Computer Science degree</span> and a{" "}
                <span className="text-foreground">Bachelor in Game Programming</span>,
                focused on gameplay systems, immersive technologies and polished
                interactive experiences.
              </p>
              <p>
                I work across <span className="text-foreground">Unity</span> and{" "}
                <span className="text-foreground">Unreal Engine 5</span>, and I&apos;m
                especially passionate about{" "}
                <span className="text-foreground">VR and immersive technologies</span> —
                exploring how players move, interact and feel inside virtual worlds.
              </p>
              <p>
                My exchange semester at{" "}
                <span className="text-foreground">Namseoul University in South Korea</span>{" "}
                pushed me to grow technically and collaborate across cultures — an
                experience that shapes how I approach teamwork and problem-solving today.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-5"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-foreground">{h.label}</span>
              </motion.div>
            ))}
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Always exploring new tools and game ideas.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
