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

export type ProjectCategory = "VR" | "Game Development" | "Game Jam" | "3D / Environment"

export interface Project {
  id: string
  title: string
  engine: string
  category: ProjectCategory
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
  demo?: string
  // Marks projects created during the Namseoul University exchange (South Korea)
  koreaExchange?: boolean
}

export const projects: Project[] = [
  {
    id: "art-heist",
    title: "Art Heist",
    engine: "Unreal Engine 5",
    category: "VR",
    koreaExchange: true,
    description:
      "A virtual reality stealth game where players infiltrate a museum, steal valuable artifacts, avoid security systems and escape without being caught.",
    longDescription:
      "Art Heist is a first-person virtual reality stealth game developed in Unreal Engine 5 during an exchange semester at Namseoul University, South Korea. Players must infiltrate a museum, avoid laser security systems, outsmart an AI guard, collect five valuable artifacts and reach the extraction point. The project focuses on immersive interactions, AI behavior, level design and VR gameplay.",
    tech: ["Unreal Engine 5", "Blueprint", "VR", "AI", "Level Design"],
    thumbnail: "/images/Art1.png",
    banner: "/images/Art1.png",
    duration: "2 months",
    teamSize: "5",
    role: "Level design, item & extraction systems, intro and escape cinematics",
    challenges:
      "Designing immersive VR interactions while creating challenging stealth gameplay through AI behavior, laser systems and level design.",
    learned:
      "VR interaction design, AI implementation, level design, player guidance and immersive gameplay systems.",
    gallery: [
      { type: "video", src: "/images/Art_vid.mp4", videoType: "mp4", alt: "Art Heist gameplay" },
      { type: "image", src: "/images/Art1.png", alt: "Art Heist screenshot 1" },
      { type: "image", src: "/images/Art2.png", alt: "Art Heist screenshot 2" },
      { type: "image", src: "/images/Art3.png", alt: "Art Heist screenshot 3" },
    ],
  },

  {
    id: "ashen-hollow",
    title: "Ashen Hollow",
    engine: "Unreal Engine 5",
    category: "VR",
    koreaExchange: true,
    description:
      "A narrative VR experience focused on atmosphere, environmental storytelling and cinematic presentation.",
    longDescription:
      "Ashen Hollow tells the story of a soldier returning home after war only to discover his village destroyed by a dragon. Rather than focusing on gameplay, the project emphasizes atmosphere through lighting, visual effects, environmental storytelling and cinematic direction. Developed during an exchange semester at Namseoul University, South Korea.",
    tech: ["Unreal Engine 5", "VR", "Lighting", "Niagara", "Environment Art"],
    thumbnail: "/images/Ashen1.png",
    banner: "/images/Ashen1.png",
    duration: "2 months",
    teamSize: "2",
    role: "Terrain, texturing, object placement and VR navmesh",
    challenges:
      "Creating emotion using only environment, lighting, visual effects and level composition.",
    learned:
      "Environmental storytelling, cinematic lighting, VFX integration and immersive scene composition.",
    gallery: [
      { type: "video", src: "/images/Ashen_vid.mp4", videoType: "mp4", alt: "Ashen Hollow cinematic" },
      { type: "image", src: "/images/Ashen1.png", alt: "Ashen Hollow screenshot 1" },
      { type: "image", src: "/images/Ashen2.png", alt: "Ashen Hollow screenshot 2" },
      { type: "image", src: "/images/Ashen3.png", alt: "Ashen Hollow screenshot 3" },
    ],
  },

  {
    id: "souls-judgment",
    title: "Soul's Judgment",
    engine: "Unity",
    category: "Game Jam",
    description:
      "A procedural dungeon crawler created during a 39-hour Game Jam where bugs became gameplay mechanics.",
    longDescription:
      "Developed in only 39 hours during a Game Jam, Soul's Judgment is a procedural dungeon crawler based on the theme 'Bug = Feature'. The project required rapid iteration, teamwork and efficient scope management, ultimately earning second place.",
    tech: ["Unity", "C#", "Procedural Generation", "Gameplay Programming"],
    thumbnail: "/images/souls-judgment.jpg",
    banner: "/images/banners/souls-judgment-banner.jpg",
    duration: "39 hours",
    teamSize: "[PLACEHOLDER]",
    role: "[PLACEHOLDER]",
    challenges:
      "Building a complete playable experience under severe time constraints while implementing procedural generation.",
    learned:
      "Rapid prototyping, teamwork, gameplay iteration and efficient development workflows.",
    gallery: [
      { type: "video", src: "/videos/souls-judgment.mp4", videoType: "mp4", alt: "Soul's Judgment gameplay", placeholder: true },
      { type: "image", src: "/images/projects/souls-judgment/1.jpg", alt: "Gameplay" },
      { type: "image", src: "/images/projects/souls-judgment/2.jpg", alt: "Dungeon" },
      { type: "image", src: "/images/projects/souls-judgment/3.jpg", alt: "Combat" },
      { type: "image", src: "/images/projects/souls-judgment/4.jpg", alt: "Procedural level" },
    ],
  },

  {
    id: "minecraft-cinematic",
    title: "Minecraft Cinematic Environment",
    engine: "Blender",
    category: "3D / Environment",
    description:
      "A cinematic Minecraft environment showcasing lighting, composition, rendering and camera animation.",
    longDescription:
      "This Blender project recreates a Minecraft-inspired environment through a cinematic approach. Instead of focusing on complex modeling, the project explores composition, lighting, textures, rendering and animated camera movement to create an immersive visual experience. The final result is presented as a one-minute cinematic flythrough.",
    tech: ["Blender", "Lighting", "Rendering", "Camera Animation", "Composition"],
    thumbnail: "/images/minecraft-cinematic.jpg",
    banner: "/images/banners/minecraft-cinematic-banner.jpg",
    duration: "[PLACEHOLDER]",
    teamSize: "Solo",
    role: "Environment Artist",
    challenges:
      "Creating a visually compelling cinematic using intentionally simple Minecraft-inspired assets.",
    learned:
      "Lighting, cinematic composition, rendering techniques, camera animation and visual storytelling.",
    gallery: [
      { type: "video", src: "/videos/minecraft-cinematic.mp4", videoType: "mp4", alt: "Minecraft cinematic", placeholder: true },
      { type: "image", src: "/images/projects/minecraft/1.jpg", alt: "Overview" },
      { type: "image", src: "/images/projects/minecraft/2.jpg", alt: "Overworld" },
      { type: "image", src: "/images/projects/minecraft/3.jpg", alt: "Cave" },
      { type: "image", src: "/images/projects/minecraft/4.jpg", alt: "Stronghold" },
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
    title: "Master SYNVA",
    institution: "Université de Strasbourg",
    detail: "Currently studying VR, simulation and immersive technologies.",
  },
  {
    title: "Exchange Semester",
    institution: "Namseoul University, South Korea",
    detail: "International exchange focused on technology and cross-cultural collaboration.",
  },
  {
    title: "Bachelor Game Programming",
    institution: "Game Development",
    detail: "Specialized training in gameplay programming, engines, and production.",
  },
  {
    title: "Licence Informatique",
    institution: "Computer Science Degree",
    detail: "Foundations in algorithms, programming, and software engineering.",
  },
]

export const contactInfo = {
  email: "julien.raadd@gmail.com",
  github: "https://github.com/JulienRaadGit",
  linkedin: "https://www.linkedin.com/in/julien-raad/",
  cv: "/images/CV.pdf",
}
