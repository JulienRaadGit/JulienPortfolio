"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, ImageIcon, Film, X } from "lucide-react"
import type { GalleryItem } from "@/lib/projects"

interface MediaGalleryProps {
  items: GalleryItem[]
  title: string
}

export function MediaGallery({ items, title }: MediaGalleryProps) {
  const video = items.find((i) => i.type === "video")
  const images = items.filter((i) => i.type === "image")
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div>
      {/* Video presentation */}
      {video && (
        <div className="mb-6">
          <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Play className="h-4 w-4 text-primary" />
            Gameplay Video
          </h3>
          <VideoPlayer item={video} title={title} />
        </div>
      )}

      {/* Screenshots */}
      {images.length > 0 && (
        <div>
          <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <ImageIcon className="h-4 w-4 text-primary" />
            Screenshots
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-video overflow-hidden rounded-xl border border-border/70 bg-card"
              >
                {img.placeholder || !img.src ? (
                  <PlaceholderBox
                    icon={<ImageIcon className="h-6 w-6" />}
                    label="Add screenshot"
                    hint={img.alt}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setLightbox(img.src)}
                    className="group h-full w-full"
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt ?? `${title} screenshot ${index + 1}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-6 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 glass text-foreground"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-5xl">
            <Image
              src={lightbox || "/placeholder.svg"}
              alt="Expanded screenshot"
              width={1600}
              height={900}
              className="h-auto max-h-[85vh] w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}

function VideoPlayer({ item, title }: { item: GalleryItem; title: string }) {
  // Placeholder when no source provided
  if (item.placeholder || !item.src) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-card">
        <PlaceholderBox
          icon={<Film className="h-8 w-8" />}
          label="Add your gameplay video here"
          hint={`Supports YouTube embed, MP4 URL, or a local file (e.g. /videos/${slug(title)}.mp4)`}
          large
        />
      </div>
    )
  }

  if (item.videoType === "youtube") {
    return (
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/70 bg-black">
        <iframe
          src={item.src}
          title={item.alt ?? `${title} video`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    )
  }

  // MP4 / local video
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/70 bg-black">
      <video
        src={item.src}
        controls
        preload="none"
        playsInline
        className="absolute inset-0 h-full w-full"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

function PlaceholderBox({
  icon,
  label,
  hint,
  large = false,
}: {
  icon: React.ReactNode
  label: string
  hint?: string
  large?: boolean
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
      <div
        className={`flex items-center justify-center rounded-xl bg-primary/10 text-primary ${
          large ? "h-16 w-16" : "h-12 w-12"
        }`}
      >
        {icon}
      </div>
      <p className="text-sm font-medium text-foreground">{label}</p>
      {hint && <p className="max-w-sm text-xs text-muted-foreground">{hint}</p>}
    </div>
  )
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}
