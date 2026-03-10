"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { SkillNode, SkillTooltip } from "./skill-node"

interface Skill {
  name: string
  description: string
  isUnlocked?: boolean
}

interface SkillClusterProps {
  centralSkill: Skill
  skills: Skill[]
  color: string
  glowColor: string
  allUnlocked?: boolean
}

export function SkillCluster({
  centralSkill,
  skills,
  color,
  glowColor,
  allUnlocked = false,
}: SkillClusterProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)

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
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setHoveredSkill(null)
      }}
    >
      {/* Tooltip positioned outside SVG */}
      <AnimatePresence>
        {hoveredSkill && (
          <SkillTooltip 
            name={hoveredSkill.name} 
            description={hoveredSkill.description}
            isUnlocked={hoveredSkill.isUnlocked ?? allUnlocked}
          />
        )}
      </AnimatePresence>

      <svg
        viewBox="-160 -160 320 320"
        className="w-full h-full max-w-[320px] max-h-[320px]"
      >
        {/* Connection lines */}
        {nodePositions.map((pos, index) => {
          const skillUnlocked = skills[index].isUnlocked ?? allUnlocked
          return (
            <motion.line
              key={`line-${index}`}
              x1={0}
              y1={0}
              x2={pos.x}
              y2={pos.y}
              stroke={skillUnlocked ? glowColor : "rgba(255,255,255,0.1)"}
              strokeWidth={skillUnlocked ? 1.5 : 1}
              initial={{ opacity: skillUnlocked ? 0.3 : 0.1 }}
              animate={{ opacity: isHovered ? (skillUnlocked ? 0.6 : 0.2) : (skillUnlocked ? 0.3 : 0.1) }}
              transition={{ duration: 0.3 }}
              style={{ filter: skillUnlocked ? `drop-shadow(0 0 ${isHovered ? 6 : 3}px ${glowColor})` : "none" }}
            />
          )
        })}

        {/* Outer skill nodes */}
        {skills.map((skill, index) => (
          <g
            key={skill.name}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <SkillNode
              name={skill.name}
              description={skill.description}
              x={nodePositions[index].x}
              y={nodePositions[index].y}
              size="small"
              color={color}
              glowColor={glowColor}
              isUnlocked={skill.isUnlocked ?? allUnlocked}
            />
          </g>
        ))}

        {/* Central node */}
        <g
          onMouseEnter={() => setHoveredSkill(centralSkill)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          <SkillNode
            name={centralSkill.name}
            description={centralSkill.description}
            x={0}
            y={0}
            size="large"
            color={color}
            glowColor={glowColor}
            isUnlocked={centralSkill.isUnlocked ?? allUnlocked}
          />
        </g>
      </svg>
    </div>
  )
}
