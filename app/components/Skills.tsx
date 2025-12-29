export default function Skills() {
    const skills = {
        Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
        Backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"],
        Herramientas: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"]
    };

    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title">Habilidades <span className="text-gradient">Técnicas</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="glass-panel">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>{category}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {items.map((skill) => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
