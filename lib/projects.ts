export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  thumbnail: string
  context: string
  whatIWorkedOn: string
  techAndTools: string
  keyTakeaways: string
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: "brickit",
    title: "BrickIt",
    description: "Personal mobile game focused on gameplay mechanics and mobile game design.",
    tech: ["Unity", "C#"],
    thumbnail: "/images/brickit.jpg",
    context: "A mobile game project designed to explore core gameplay mechanics and mobile-first game design principles. The goal was to create an engaging, polished experience optimized for touch controls.",
    whatIWorkedOn: "Designed and implemented the core gameplay loop, touch input system, level progression, and visual feedback systems. Created modular game systems for easy iteration and testing.",
    techAndTools: "Unity Engine, C#, Unity UI, Mobile optimization techniques, Git version control",
    keyTakeaways: "Learned the importance of responsive controls in mobile games, iterative design processes, and performance optimization for mobile platforms.",
    github: "#",
  },
  {
    id: "unreal-physics",
    title: "Unreal Physics Project",
    description: "Experimental project exploring physics interactions and gameplay systems in Unreal Engine.",
    tech: ["Unreal Engine", "Blueprints"],
    thumbnail: "/images/unreal-physics.jpg",
    context: "An experimental sandbox project focused on understanding physics-based gameplay in Unreal Engine. Explored various physics interactions and their applications in game mechanics.",
    whatIWorkedOn: "Implemented physics-based puzzles, interactive objects with realistic behavior, and gameplay systems that leverage Unreal's physics engine.",
    techAndTools: "Unreal Engine 5, Blueprints Visual Scripting, Physics Materials, Chaos Physics System",
    keyTakeaways: "Gained deep understanding of physics simulation in games, learned Unreal's Blueprint system, and explored the balance between realistic and fun physics.",
  },
  {
    id: "game-jam",
    title: "Game Jam Project",
    description: "Prototype built during a game jam demonstrating rapid iteration and problem solving.",
    tech: ["Unity"],
    thumbnail: "/images/gamejam.jpg",
    context: "A 48-hour game jam project that challenged rapid prototyping skills and creative problem-solving under time pressure.",
    whatIWorkedOn: "Full game development from concept to playable prototype, including game design, programming, and basic art integration. Focused on scope management and quick iteration.",
    techAndTools: "Unity Engine, C#, Rapid prototyping techniques, Time management",
    keyTakeaways: "Developed skills in scope management, rapid iteration, and making quick decisions. Learned to prioritize core gameplay over features.",
    github: "#",
    demo: "#",
  },
  {
    id: "cooking-ui",
    title: "Cooking UI/UX Project",
    description: "Interface-focused project exploring user interaction and UI flow for gameplay.",
    tech: ["Unity UI"],
    thumbnail: "/images/cooking-ui.jpg",
    context: "A UI/UX focused project exploring how interface design affects gameplay experience. Created a cooking game interface with focus on intuitive user interaction.",
    whatIWorkedOn: "Designed and implemented UI systems including menus, HUD elements, feedback systems, and animation transitions. Focused on user-friendly design patterns.",
    techAndTools: "Unity UI Toolkit, UI Animation, User Experience Design, Prototyping",
    keyTakeaways: "Understood the impact of good UI/UX on player experience, learned Unity UI best practices, and explored accessibility in game interfaces.",
  },
]

export const skills = {
  "Game Engines": ["Unity", "Unreal Engine"],
  "Programming": ["C#", "Gameplay Systems"],
  "Tools": ["Git", "Blender", "Shader Graph"],
}
