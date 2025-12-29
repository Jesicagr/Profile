const experience = [
    {
        role: "Desarrollador Full Stack Senior",
        company: "Tech Innovators Inc.",
        period: "2023 - Presente",
        description: "Liderando un equipo de 5 desarrolladores construyendo aplicaciones escalables nativas de la nube usando Next.js y AWS."
    },
    {
        role: "Desarrollador Full Stack",
        company: "Creative Solutions",
        period: "2021 - 2023",
        description: "Desarrollé y mantuve múltiples plataformas de comercio electrónico. Mejoré el rendimiento del sitio en un 40%."
    },
    {
        role: "Desarrollador Frontend",
        company: "StartUp Hub",
        period: "2019 - 2021",
        description: "Colaboré con diseñadores para implementar interfaces de usuario responsivas usando React y Redux."
    }
];

export default function Experience() {
    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-title">Experiencia <span className="text-gradient">Laboral</span></h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experience.map((job, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                padding: '1.5rem',
                                borderRadius: '15px',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <span style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--primary)',
                                    fontWeight: 600,
                                    display: 'block',
                                    marginBottom: '0.5rem'
                                }}>
                                    {job.period}
                                </span>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{job.role}</h3>
                                <h4 style={{ fontSize: '1rem', color: '#a1a1aa', marginBottom: '1rem', fontWeight: 400 }}>{job.company}</h4>
                                <p style={{ color: '#dadada', lineHeight: 1.6 }}>{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
