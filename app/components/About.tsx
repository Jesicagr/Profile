export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Sobre <span className="text-gradient">Mí</span></h2>

                    <p style={{ maxWidth: '800px', fontSize: '1.1rem', color: '#dadada', lineHeight: 1.8 }}>
                        Soy un desarrollador apasionado con más de 5 años de experiencia en la creación de productos digitales.
                        Me especializo en el ecosistema JavaScript, enfocándome en React, Next.js y Node.js.
                        <br /><br />
                        Mi viaje comenzó cuando creé mi primer sitio web para una organización local sin fines de lucro. Desde entonces,
                        he trabajado con startups y empresas establecidas para ofrecer soluciones robustas.
                        Creo en escribir código limpio y mantenible, y en resolver problemas complejos a través de diseños simples y elegantes.
                    </p>

                    <div style={{ display: 'flex', gap: '4rem', marginTop: '2rem' }}>
                        <div>
                            <span className="text-gradient" style={{ display: 'block', fontSize: '2.5rem', fontWeight: 700 }}>5+</span>
                            <span style={{ color: '#a1a1aa' }}>Años de Experiencia</span>
                        </div>
                        <div>
                            <span className="text-gradient" style={{ display: 'block', fontSize: '2.5rem', fontWeight: 700 }}>50+</span>
                            <span style={{ color: '#a1a1aa' }}>Proyectos Completados</span>
                        </div>
                        <div>
                            <span className="text-gradient" style={{ display: 'block', fontSize: '2.5rem', fontWeight: 700 }}>10+</span>
                            <span style={{ color: '#a1a1aa' }}>Clientes Felices</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
