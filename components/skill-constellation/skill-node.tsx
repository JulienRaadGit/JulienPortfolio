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
  isUnlocked: boolean
}

export function SkillNode({
  name,
  description,
  x,
  y,
  size = "small",
  color,
  glowColor,
  isUnlocked,
}: SkillNodeProps) {
  const [isHovered, setIsHovered] = useState(false)

  const nodeSize = size === "large" ? 70 : 50

  return (
    <motion.g
      style={{ x, y }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      {/* White ring for unlocked skills */}
      {isUnlocked && (
        <motion.circle
          cx={0}
          cy={0}
          r={nodeSize / 2 + 6}
          fill="transparent"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth={2}
          initial={{ opacity: 0.6 }}
          animate={{
            opacity: isHovered ? 1 : 0.6,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{ filter: `drop-shadow(0 0 ${isHovered ? 8 : 4}px rgba(255, 255, 255, 0.5))` }}
        />
      )}

      {/* Outer glow for unlocked */}
      <motion.circle
        cx={0}
        cy={0}
        r={nodeSize / 2 + 12}
        fill="transparent"
        stroke={glowColor}
        strokeWidth={1}
        initial={{ opacity: isUnlocked ? 0.3 : 0.1 }}
        animate={{
          opacity: isHovered ? 0.6 : isUnlocked ? 0.3 : 0.1,
          scale: isHovered ? 1.15 : 1,
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
        opacity={isUnlocked ? 1 : 0.25}
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.2 }}
        style={{ filter: `drop-shadow(0 0 ${isHovered ? 16 : 8}px ${glowColor})` }}
      />

      {/* Inner highlight for unlocked */}
      {isUnlocked && (
        <circle
          cx={-nodeSize / 6}
          cy={-nodeSize / 6}
          r={nodeSize / 8}
          fill="rgba(255,255,255,0.25)"
        />
      )}

      {/* Node label */}
      <text
        x={0}
        y={nodeSize / 2 + 20}
        textAnchor="middle"
        fill="currentColor"
        className="text-xs font-medium"
        style={{ 
          fontSize: size === "large" ? 12 : 10,
          fill: isUnlocked ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)"
        }}
      >
        {name}
      </text>
    </motion.g>
  )
}

interface SkillTooltipProps {
  name: string
  description: string
  isUnlocked: boolean
}

export function SkillTooltip({ name, description, isUnlocked }: SkillTooltipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 z-50 pointer-events-none"
    >
      <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg p-4 shadow-2xl min-w-[200px] max-w-[280px]">
        <h4 className="text-sm font-semibold text-foreground mb-1">{name}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        {!isUnlocked && (
          <span className="inline-block mt-2 text-xs text-muted-foreground/60 italic">En exploration</span>
        )}
      </div>
    </motion.div>
  )
}
