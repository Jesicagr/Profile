import Link from "next/link";
import { projects } from "../../data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="container" style={{ paddingTop: '8rem', minHeight: '100vh', paddingBottom: '4rem' }}>
            <Link href="/#projects" style={{ display: 'inline-block', marginBottom: '2rem', color: '#a1a1aa', textDecoration: 'none' }}>
                &larr; Volver
            </Link>

            <div className="glass-panel" style={{ padding: '3rem', borderColor: project.color }}>
                <div
                    style={{
                        height: '400px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '20px',
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '6rem',
                        color: 'var(--glass-border)',
                        viewTransitionName: `project-image-${project.slug}`
                    }}
                >
                    🖼️
                </div>

                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800 }}>{project.title}</h1>

                <div style={{ marginBottom: '2rem' }}>
                    {project.tech.map(t => (
                        <span key={t} className="skill-tag" style={{ borderColor: project.color, color: project.color }}>{t}</span>
                    ))}
                </div>

                <p style={{ fontSize: '1.2rem', color: '#dadada', lineHeight: 1.8, marginBottom: '2rem' }}>
                    {project.longDescription || project.description}
                </p>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-primary" style={{ background: project.color, boxShadow: `0 0 20px ${project.color}40` }}>Ver Demo en Vivo</button>
                    <button className="glass-panel" style={{ padding: '1rem 2rem', borderRadius: '50px', cursor: 'pointer' }}>Ver Repositorio</button>
                </div>
            </div>
        </main>
    );
}
