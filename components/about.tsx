export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-primary mb-8 font-medium">
          About
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground font-medium">game programming student</span> with 
            a strong focus on <span className="text-foreground font-medium">gameplay systems</span> and 
            interactive mechanics. My passion lies in creating polished, engaging game experiences 
            that feel responsive and satisfying to play.
          </p>
          <p>
            With experience in both <span className="text-foreground font-medium">Unity</span> and{" "}
            <span className="text-foreground font-medium">Unreal Engine</span>, I enjoy exploring 
            different approaches to game development. I'm particularly interested in mobile game 
            design and the unique challenges it presents.
          </p>
          <p>
            When I'm not coding, I'm analyzing games to understand what makes them fun and 
            experimenting with new mechanics and ideas.
          </p>
        </div>
      </div>
    </section>
  )
}
