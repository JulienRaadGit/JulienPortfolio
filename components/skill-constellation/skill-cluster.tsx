"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { SkillNode } from "./skill-node"

interface Skill {
  name: string
  description: string
}

interface SkillClusterProps {
  centralSkill: Skill
  skills: Skill[]
  color: string
  glowColor: string
  masteryLevel: "advanced" | "intermediate" | "beginner"
}

export function SkillCluster({
  centralSkill,
  skills,
  color,
  glowColor,
  masteryLevel,
}: SkillClusterProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Position nodes in a circle around center
  const radius = 90
  const nodePositions = skills.map((_, index) => {
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    }
  })

  return (
    <svg
      viewBox="-160 -160 320 320"
      className="w-full h-full max-w-[320px] max-h-[320px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Connection lines */}
      {nodePositions.map((pos, index) => (
        <motion.line
          key={`line-${index}`}
          x1={0}
          y1={0}
          x2={pos.x}
          y2={pos.y}
          stroke={glowColor}
          strokeWidth={1.5}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: isHovered ? 0.6 : 0.3 }}
          transition={{ duration: 0.3 }}
          style={{ filter: `drop-shadow(0 0 ${isHovered ? 6 : 3}px ${glowColor})` }}
        />
      ))}

      {/* Outer skill nodes */}
      {skills.map((skill, index) => (
        <SkillNode
          key={skill.name}
          name={skill.name}
          description={skill.description}
          x={nodePositions[index].x}
          y={nodePositions[index].y}
          size="small"
          color={color}
          glowColor={glowColor}
          masteryLevel={masteryLevel}
        />
      ))}

      {/* Central node */}
      <SkillNode
        name={centralSkill.name}
        description={centralSkill.description}
        x={0}
        y={0}
        size="large"
        color={color}
        glowColor={glowColor}
        masteryLevel={masteryLevel}
      />
    </svg>
  )
}
