"use client"

import { motion } from "framer-motion"
import { SkillCluster } from "./skill-cluster"
import { useEffect, useState } from "react"

const skillClusters = [
  {
    id: "unity",
    central: {
      name: "Unity",
      description: "Primary game engine for professional development and mobile games.",
      isUnlocked: true,
    },
    skills: [
      {
        name: "Gameplay Systems",
        description: "Design and implementation of gameplay mechanics and player interactions in Unity.",
        isUnlocked: true,
      },
      {
        name: "UI Integration",
        description: "Implementation of responsive gameplay-oriented UI systems.",
        isUnlocked: true,
      },
      {
        name: "Mobile Development",
        description: "Experience building and optimizing games for mobile platforms.",
        isUnlocked: true,
      },
      {
        name: "Optimization",
        description: "Improving performance and frame stability for gameplay systems.",
        isUnlocked: true,
      },
      {
        name: "Shader Graph",
        description: "Creation of visual effects and materials using Unity Shader Graph.",
        isUnlocked: true,
      },
    ],
    color: "rgba(74, 222, 128, 0.8)",
    glowColor: "rgb(74, 222, 128)",
    allUnlocked: true,
  },
  {
    id: "unreal",
    central: {
      name: "Unreal Engine",
      description: "Exploring advanced game development with Unreal Engine 5.",
      isUnlocked: true,
    },
    skills: [
      {
        name: "Blueprints",
        description: "Gameplay scripting and systems built using Unreal Blueprints.",
        isUnlocked: true,
      },
      {
        name: "Physics Prototyping",
        description: "Experimentation with physics-based gameplay mechanics.",
        isUnlocked: true,
      },
      {
        name: "Gameplay Logic",
        description: "Implementation of gameplay behaviors and interactions.",
        isUnlocked: false,
      },
      {
        name: "Level Interaction",
        description: "Designing interactive gameplay environments.",
        isUnlocked: false,
      },
      {
        name: "Performance Basics",
        description: "Understanding performance considerations in Unreal projects.",
        isUnlocked: false,
      },
    ],
    color: "rgba(168, 85, 247, 0.8)",
    glowColor: "rgb(168, 85, 247)",
    allUnlocked: false,
  },
  {
    id: "vr",
    central: {
      name: "VR / XR",
      description: "Exploring immersive technologies and virtual reality development.",
      isUnlocked: false,
    },
    skills: [
      {
        name: "Interaction Design",
        description: "Designing intuitive player interactions in VR environments.",
        isUnlocked: false,
      },
      {
        name: "Spatial UX",
        description: "Understanding player movement and comfort in virtual space.",
        isUnlocked: false,
      },
      {
        name: "Hand Interaction",
        description: "Exploring hand-based interaction mechanics.",
        isUnlocked: false,
      },
      {
        name: "Prototype Exploration",
        description: "Experimenting with immersive gameplay ideas in VR.",
        isUnlocked: false,
      },
      {
        name: "XR Tools",
        description: "Learning XR development tools and workflows.",
        isUnlocked: false,
      },
    ],
    color: "rgba(59, 130, 246, 0.8)",
    glowColor: "rgb(59, 130, 246)",
    allUnlocked: false,
  },
]

// Particle component for background effect
function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function SkillConstellation() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30 pointer-events-none" />
      
      <Particles />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            Skills
          </h2>
          <p className="text-muted-foreground mb-16 max-w-xl">
            Technical expertise visualized. Hover over nodes to explore each skill area.
          </p>
        </motion.div>

        {/* Skill Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {skillClusters.map((cluster, index) => (
            <motion.div
              key={cluster.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-full aspect-square flex items-center justify-center">
                <SkillCluster
                  centralSkill={cluster.central}
                  skills={cluster.skills}
                  color={cluster.color}
                  glowColor={cluster.glowColor}
                  allUnlocked={cluster.allUnlocked}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
