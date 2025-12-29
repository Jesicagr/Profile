import { skillCategories } from "../../data/skills";
import BackButton from "../../components/BackButton";
import { notFound } from "next/navigation";

// Generate static params for all skills to be SSG compatible
export async function generateStaticParams() {
    return skillCategories.map((category) => ({
        slug: category.slug,
    }));
}

export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
    // Await params object
    const { slug } = await params;
    const category = skillCategories.find(c => c.slug === slug);

    if (!category) {
        notFound();
    }

    return (
        <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh' }}>
            <BackButton />

            <div
                className="glass-panel"
                style={{
                    padding: '3rem',
                    viewTransitionName: `skill-card-${category.slug}`
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
                    {/* Icon without transition name now */}
                    <span
                        style={{
                            fontSize: '5rem',
                            marginBottom: '1rem',
                        }}
                    >
                        {category.icon}
                    </span>

                    <h1 className="section-title" style={{ marginBottom: '1rem' }}>
                        {category.title}
                    </h1>

                    <p style={{ fontSize: '1.2rem', color: '#a1a1aa', maxWidth: '600px' }}>
                        {category.description}
                    </p>
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
                        Detalles <span className="text-gradient">Técnicos</span>
                    </h2>

                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem', color: '#dadada' }}>
                        {category.details}
                    </p>

                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Ecosistema & Herramientas</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        {category.items.map((item) => (
                            <span
                                key={item}
                                className="skill-tag"
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    fontSize: '1rem',
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    borderColor: 'var(--primary)'
                                }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
