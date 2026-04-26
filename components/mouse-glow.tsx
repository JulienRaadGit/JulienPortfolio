"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Main glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)",
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
        animate={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />
      {/* Inner bright spot */}
      <motion.div
        className="absolute w-[150px] h-[150px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
        }}
        animate={{
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
        }}
      />
    </motion.div>
  )
}
