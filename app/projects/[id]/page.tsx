import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Users, UserCircle, Github, ExternalLink } from "lucide-react"
import { projects, getProject } from "@/lib/projects"
import { MediaGallery } from "@/components/media-gallery"
import { ProjectDetailMeta } from "@/components/project-detail-meta"

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = getProject(id)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — Julien Raad`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Julien Raad`,
      description: project.description,
      images: [{ url: project.banner }],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = getProject(id)
  if (!project) notFound()

  return (
    <main className="relative min-h-screen bg-background">
      {/* Banner */}
      <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden md:h-[55vh]">
        <Image
          src={project.banner || "/placeholder.svg"}
          alt={`${project.title} banner`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

        <div className="absolute left-0 right-0 top-0 z-10 p-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 glass px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
          <div className="mx-auto max-w-5xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
              {project.engine}
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
          {/* Main column */}
          <div className="order-2 lg:order-1">
            {/* Gallery */}
            <ProjectDetailMeta delay={0}>
              <MediaGallery items={project.gallery} title={project.title} />
            </ProjectDetailMeta>

            {/* Overview */}
            <ProjectDetailMeta delay={0.05}>
              <section className="mt-12">
                <h2 className="font-display text-2xl font-bold tracking-tight">Overview</h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {project.longDescription}
                </p>
              </section>
            </ProjectDetailMeta>

            {/* Challenges */}
            <ProjectDetailMeta delay={0.05}>
              <section className="mt-10">
                <h2 className="font-display text-2xl font-bold tracking-tight">Challenges</h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {project.challenges}
                </p>
              </section>
            </ProjectDetailMeta>

            {/* What I learned */}
            <ProjectDetailMeta delay={0.05}>
              <section className="mt-10">
                <h2 className="font-display text-2xl font-bold tracking-tight">What I Learned</h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {project.learned}
                </p>
              </section>
            </ProjectDetailMeta>
          </div>

          {/* Sidebar */}
          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-border/70 bg-card p-6">
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Project Details
                </h2>

                <dl className="mt-5 space-y-5">
                  <MetaRow icon={<Clock className="h-4 w-4" />} label="Duration" value={project.duration} />
                  <MetaRow icon={<Users className="h-4 w-4" />} label="Team Size" value={project.teamSize} />
                  <MetaRow icon={<UserCircle className="h-4 w-4" />} label="My Role" value={project.role} />
                </dl>

                <div className="mt-6">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Technologies
                  </dt>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/60 bg-secondary/40 px-2.5 py-1 text-xs text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.github || project.demo) && (
                  <div className="mt-6 flex flex-col gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm text-foreground">{value}</dd>
      </div>
    </div>
  )
}
