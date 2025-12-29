import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Proyectos <span className="text-gradient">Destacados</span></h2>

                <div className="grid-responsive" style={{ gap: '2rem' }}>
                    {projects.map((project) => (
                        <div key={project.slug} className="glass-panel project-card">
                            <Link
                                href={`/projects/${project.slug}`}
                                style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                                aria-label={`Ver detalles de ${project.title}`}
                            />

                            {/* Imagen (Top in vertical layout) */}
                            <div style={{
                                width: '100%',
                                height: '200px',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '4rem',
                                color: 'var(--glass-border)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                marginBottom: '1.5rem'
                            }}>
                                🖼️
                            </div>

                            {/* Contenido (Bottom) */}
                            <div style={{ zIndex: 2, pointerEvents: 'none' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>{project.title}</h3>
                                <p style={{ color: '#a1a1aa', marginBottom: '1rem', lineHeight: 1.6, fontSize: '1rem' }}>{project.description}</p>

                                <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {project.tech.map(t => (
                                        <span key={t} className="skill-tag" style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', pointerEvents: 'auto' }}>
                                    <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                                        Ver Detalles &rarr;
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
