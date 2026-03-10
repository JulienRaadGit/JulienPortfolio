"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/julienraad",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/julienraad",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:julienraad.dev@gmail.com",
    icon: Mail,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {"Looking for a Game Programming Apprenticeship starting September 2026."}
          </p>
          <div className="flex flex-wrap gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all"
              >
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-foreground">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
