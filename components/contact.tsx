import { Github, Linkedin, Mail } from "lucide-react"

const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:julien@example.com",
    icon: Mail,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary mb-8 font-medium">
          Contact
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {"Interested in working together? Let's connect."}
        </p>
        <div className="flex gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <link.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
