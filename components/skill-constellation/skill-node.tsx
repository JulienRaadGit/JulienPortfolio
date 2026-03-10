"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface SkillNodeProps {
  name: string
  description: string
  x: number
  y: number
  size?: "large" | "small"
  color: string
  glowColor: string
  masteryLevel: "advanced" | "intermediate" | "beginner"
}

export function SkillNode({
  name,
  description,
  x,
  y,
  size = "small",
  color,
  glowColor,
  masteryLevel,
}: SkillNodeProps) {
  const [isHovered, setIsHovered] = useState(false)

  const nodeSize = size === "large" ? 70 : 50
  const masteryOpacity =
    masteryLevel === "advanced" ? 1 : masteryLevel === "intermediate" ? 0.75 : 0.5

  return (
    <motion.g
      style={{ x, y }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      {/* Outer glow */}
      <motion.circle
        cx={0}
        cy={0}
        r={nodeSize / 2 + 8}
        fill="transparent"
        stroke={glowColor}
        strokeWidth={2}
        initial={{ opacity: 0.2 }}
        animate={{
          opacity: isHovered ? 0.6 : 0.2,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{ filter: `drop-shadow(0 0 ${isHovered ? 12 : 6}px ${glowColor})` }}
      />

      {/* Main node circle */}
      <motion.circle
        cx={0}
        cy={0}
        r={nodeSize / 2}
        fill={color}
        opacity={masteryOpacity}
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.2 }}
        style={{ filter: `drop-shadow(0 0 ${isHovered ? 16 : 8}px ${glowColor})` }}
      />

      {/* Inner highlight */}
      <circle
        cx={-nodeSize / 6}
        cy={-nodeSize / 6}
        r={nodeSize / 8}
        fill="rgba(255,255,255,0.2)"
      />

      {/* Node label */}
      <text
        x={0}
        y={nodeSize / 2 + 20}
        textAnchor="middle"
        fill="currentColor"
        className="text-xs font-medium fill-foreground"
        style={{ fontSize: size === "large" ? 12 : 10 }}
      >
        {name}
      </text>

      {/* Tooltip */}
      {isHovered && (
        <motion.foreignObject
          x={-120}
          y={-nodeSize - 80}
          width={240}
          height={70}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-card/90 backdrop-blur-md border border-border rounded-lg p-3 shadow-xl">
            <p className="text-xs text-muted-foreground leading-relaxed text-center">
              {description}
            </p>
          </div>
        </motion.foreignObject>
      )}
    </motion.g>
  )
}
