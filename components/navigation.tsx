"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
import { contactInfo } from "@/lib/projects"
import { Paperclip } from "@/components/doodles"

const navItems = [
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "About", href: "/#about" },
  { name: "Education", href: "/#education" },
  { name: "Korea", href: "/#korea" },
  { name: "Contact", href: "/#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b-2 border-foreground/70" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="relative inline-flex items-center font-display text-2xl font-bold tracking-tight text-foreground hover:text-primary hover:-rotate-2 transition-all"
        >
          <Paperclip className="absolute -left-3 -top-3 h-6 w-4 -rotate-12 text-primary/70" aria-hidden="true" />
          Julien<span className="text-primary">Raad</span> ✎
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm font-semibold text-muted-foreground hover:text-primary hover:squiggle-underline transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={contactInfo.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:-rotate-3 hover:scale-105"
          >
            <Download className="h-4 w-4" />
            CV
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t-2 border-foreground/70 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={contactInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="sticker inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
