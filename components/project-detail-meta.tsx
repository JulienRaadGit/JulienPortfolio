"use client"

import { motion } from "framer-motion"

interface ProjectDetailMetaProps {
  children: React.ReactNode
  delay?: number
}

export function ProjectDetailMeta({ children, delay = 0 }: ProjectDetailMetaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}
