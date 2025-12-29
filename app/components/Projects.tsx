import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Proyectos <span className="text-gradient">Destacados</span></h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {projects.map((project, index) => (
                        <div key={project.slug} className="glass-panel" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3rem', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                            {/* Enlace principal que cubre toda la tarjeta */}
                            <Link
                                href={`/projects/${project.slug}`}
                                style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                                aria-label={`Ver detalles de ${project.title}`}
                            />

                            {/* Contenido de Texto (Izquierda) */}
                            <div style={{ flex: 1, zIndex: 2, pointerEvents: 'none' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 700 }}>{project.title}</h3>
                                <p style={{ color: '#a1a1aa', marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '1.1rem' }}>{project.description}</p>

                                <div style={{ marginBottom: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {project.tech.map(t => (
                                        <span key={t} style={{
                                            fontSize: '0.9rem',
                                            color: 'var(--primary)',
                                            background: 'rgba(139, 92, 246, 0.1)',
                                            padding: '4px 12px',
                                            borderRadius: '50px'
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', pointerEvents: 'auto' }}>
                                    <a
                                        href={project.links.code}
                                        style={{ color: '#dadada', textDecoration: 'none', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid transparent', transition: 'border-color 0.2s' }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:border-white"
                                    >
                                        Ver Código &rarr;
                                    </a>
                                </div>
                            </div>

                            {/* Imagen (Derecha) */}
                            <div style={{
                                flex: 1,
                                height: '300px',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '4rem',
                                color: 'var(--glass-border)',
                                viewTransitionName: `project-image-${project.slug}`,
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                {/* Placeholder for project image */}
                                🖼️
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
