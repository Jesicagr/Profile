import Link from "next/link";
import { skillCategories } from "../data/skills";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title">Habilidades <span className="text-gradient">Técnicas</span></h2>

                <div className="grid-responsive">
                    {skillCategories.map((category) => (
                        <Link
                            href={`/skills/${category.slug}`}
                            key={category.slug}
                            className="glass-panel"
                            style={{
                                display: 'block',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                viewTransitionName: `skill-card-${category.slug}`
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                {/* Icon without transition name now, as container handles it */}
                                <span
                                    style={{
                                        fontSize: '2rem',
                                    }}
                                >
                                    {category.icon}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 700, margin: 0 }}>
                                    {category.title}
                                </h3>
                            </div>

                            <p style={{ color: '#a1a1aa', marginBottom: '1.5rem', fontSize: '1rem' }}>
                                {category.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {category.items.slice(0, 4).map((skill) => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                                {category.items.length > 4 && (
                                    <span className="skill-tag" style={{ background: 'transparent', border: 'none', color: 'var(--primary)' }}>
                                        +{category.items.length - 4} más...
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
