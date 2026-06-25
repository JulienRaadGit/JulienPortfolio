export interface GalleryItem {
  type: "video" | "image"
  // For video: a YouTube embed URL, an MP4 URL, or a local path like "/videos/brickit.mp4"
  // For image: a local path or remote URL
  src: string
  // For video only: "youtube" | "mp4". Ignored for images.
  videoType?: "youtube" | "mp4"
  // Optional caption / alt text
  alt?: string
  // Marks a slot the owner should replace later
  placeholder?: boolean
}

export interface Project {
  id: string
  title: string
  engine: string
  description: string
  longDescription: string
  tech: string[]
  thumbnail: string
  banner: string
  duration: string
  teamSize: string
  role: string
  challenges: string
  learned: string
  gallery: GalleryItem[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: "brickit",
    title: "BrickIt",
    engine: "Unity",
    description:
      "A polished personal mobile game exploring satisfying core gameplay loops and mobile-first game design.",
    longDescription:
      "BrickIt is a personal mobile game built to explore core gameplay mechanics and mobile-first design principles. The goal was to craft an engaging, tactile experience optimized for touch controls, with responsive feedback and a progression system that keeps players coming back.",
    tech: ["Unity", "C#", "Mobile", "Unity UI"],
    thumbnail: "/images/brickit.jpg",
    banner: "/images/banners/brickit-banner.png",
    duration: "[PLACEHOLDER] e.g. 3 months (2024)",
    teamSize: "[PLACEHOLDER] e.g. Solo project",
    role: "[PLACEHOLDER] e.g. Game Developer & Designer",
    challenges:
      "[PLACEHOLDER] Describe the main technical or design challenges you faced — for example, achieving responsive touch controls, balancing difficulty, or optimizing for low-end devices.",
    learned:
      "[PLACEHOLDER] Describe what you took away from the project — responsive mobile controls, iterative design, performance optimization.",
    gallery: [
      { type: "video", src: "", videoType: "mp4", alt: "BrickIt gameplay video", placeholder: true },
      { type: "image", src: "/images/brickit.jpg", alt: "BrickIt screenshot 1" },
      { type: "image", src: "", alt: "BrickIt screenshot 2", placeholder: true },
      { type: "image", src: "", alt: "BrickIt screenshot 3", placeholder: true },
      { type: "image", src: "", alt: "BrickIt screenshot 4", placeholder: true },
    ],
    github: "#",
  },
  {
    id: "unreal-physics",
    title: "Unreal Physics Project",
    engine: "Unreal Engine 5",
    description:
      "An experimental sandbox exploring physics-driven gameplay systems and interactions in Unreal Engine 5.",
    longDescription:
      "An experimental sandbox project focused on understanding physics-based gameplay in Unreal Engine 5. It explores a range of physics interactions and their applications in game mechanics, from interactive props to physics-driven puzzles built with Chaos Physics.",
    tech: ["Unreal Engine", "Blueprint", "Chaos Physics"],
    thumbnail: "/images/unreal-physics.jpg",
    banner: "/images/banners/unreal-physics-banner.png",
    duration: "[PLACEHOLDER] e.g. 2 months (2024)",
    teamSize: "[PLACEHOLDER] e.g. Solo project",
    role: "[PLACEHOLDER] e.g. Gameplay Programmer",
    challenges:
      "[PLACEHOLDER] Describe the main challenges — tuning physics to feel fun rather than purely realistic, debugging Blueprint logic, performance.",
    learned:
      "[PLACEHOLDER] Describe what you learned — physics simulation, Unreal Blueprints, balancing realism and fun.",
    gallery: [
      { type: "video", src: "", videoType: "youtube", alt: "Unreal Physics gameplay video", placeholder: true },
      { type: "image", src: "/images/unreal-physics.jpg", alt: "Unreal Physics screenshot 1" },
      { type: "image", src: "", alt: "Unreal Physics screenshot 2", placeholder: true },
      { type: "image", src: "", alt: "Unreal Physics screenshot 3", placeholder: true },
      { type: "image", src: "", alt: "Unreal Physics screenshot 4", placeholder: true },
    ],
  },
  {
    id: "game-jam",
    title: "Game Jam Project",
    engine: "Unity",
    description:
      "A prototype built under time pressure during a game jam, demonstrating rapid iteration and scope management.",
    longDescription:
      "A 48-hour game jam project that challenged rapid prototyping skills and creative problem-solving under tight time constraints. The focus was on shipping a playable, fun core loop while managing scope aggressively.",
    tech: ["Unity", "C#", "Rapid Prototyping"],
    thumbnail: "/images/gamejam.jpg",
    banner: "/images/banners/game-jam-banner.png",
    duration: "[PLACEHOLDER] e.g. 48 hours",
    teamSize: "[PLACEHOLDER] e.g. Team of 4",
    role: "[PLACEHOLDER] e.g. Gameplay Programmer",
    challenges:
      "[PLACEHOLDER] Describe the main challenges — scope management, working fast as a team, integrating art quickly.",
    learned:
      "[PLACEHOLDER] Describe what you learned — prioritizing core gameplay, quick decision making, teamwork.",
    gallery: [
      { type: "video", src: "", videoType: "mp4", alt: "Game Jam gameplay video", placeholder: true },
      { type: "image", src: "/images/gamejam.jpg", alt: "Game Jam screenshot 1" },
      { type: "image", src: "", alt: "Game Jam screenshot 2", placeholder: true },
      { type: "image", src: "", alt: "Game Jam screenshot 3", placeholder: true },
      { type: "image", src: "", alt: "Game Jam screenshot 4", placeholder: true },
    ],
    github: "#",
    demo: "#",
  },
  {
    id: "cooking-ui",
    title: "Cooking UI/UX Project",
    engine: "Unity",
    description:
      "An interface-focused project exploring how UI and UX design shape the gameplay experience.",
    longDescription:
      "A UI/UX focused project exploring how interface design affects the gameplay experience. It centers on a cooking game interface built around intuitive interaction, clear feedback, and smooth animated transitions.",
    tech: ["Unity", "Unity UI", "UX Design"],
    thumbnail: "/images/cooking-ui.jpg",
    banner: "/images/banners/cooking-ui-banner.png",
    duration: "[PLACEHOLDER] e.g. 1 month",
    teamSize: "[PLACEHOLDER] e.g. Solo project",
    role: "[PLACEHOLDER] e.g. UI/UX Programmer",
    challenges:
      "[PLACEHOLDER] Describe the main challenges — designing intuitive flows, animating UI smoothly, accessibility.",
    learned:
      "[PLACEHOLDER] Describe what you learned — UI/UX impact on player experience, Unity UI best practices, accessibility.",
    gallery: [
      { type: "video", src: "", videoType: "mp4", alt: "Cooking UI walkthrough video", placeholder: true },
      { type: "image", src: "/images/cooking-ui.jpg", alt: "Cooking UI screenshot 1" },
      { type: "image", src: "", alt: "Cooking UI screenshot 2", placeholder: true },
      { type: "image", src: "", alt: "Cooking UI screenshot 3", placeholder: true },
      { type: "image", src: "", alt: "Cooking UI screenshot 4", placeholder: true },
    ],
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export interface SkillCategory {
  category: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  { category: "Game Engines", items: ["Unreal Engine 5", "Unity"] },
  { category: "Programming", items: ["C#", "Blueprint"] },
  { category: "3D", items: ["Blender"] },
  {
    category: "Game Development",
    items: ["VR", "Gameplay Programming", "AI", "UI", "Lighting", "Level Design"],
  },
]

export interface EducationItem {
  title: string
  institution: string
  detail: string
}

export const education: EducationItem[] = [
  {
    title: "Licence Informatique",
    institution: "Computer Science Degree",
    detail: "Foundations in algorithms, programming, and software engineering.",
  },
  {
    title: "Bachelor Game Programming",
    institution: "Game Development",
    detail: "Specialized training in gameplay programming, engines, and production.",
  },
  {
    title: "Exchange Semester",
    institution: "Namseoul University, South Korea",
    detail: "International exchange focused on technology and cross-cultural collaboration.",
  },
]

export const contactInfo = {
  email: "julienraad.dev@gmail.com",
  github: "https://github.com/julienraad",
  linkedin: "https://www.linkedin.com/in/julienraad",
  cv: "/cv/julien-raad-cv.pdf",
}
