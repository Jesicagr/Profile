"use client";

export default function Contact() {
    return (
        <section id="contact" style={{ paddingBottom: '8rem' }}>
            <div className="container">
                <h2 className="section-title">Ponte en <span className="text-gradient">Contacto</span></h2>

                <div className="grid-responsive" style={{ gap: '3rem' }}>
                    <div className="glass-panel">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Envía un Mensaje</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <input type="text" placeholder="Tu Nombre" className="form-input" />
                            </div>
                            <div>
                                <input type="email" placeholder="Tu Email" className="form-input" />
                            </div>
                            <div>
                                <textarea placeholder="Tu Mensaje" rows={5} className="form-textarea"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700 }}>Construyamos algo <span className="text-gradient">increíble</span> juntos.</h3>
                        <p style={{ color: '#a1a1aa', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            Actualmente estoy disponible para proyectos freelance y oportunidades de tiempo completo.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="social-icon">✉️</div>
                                <span style={{ fontSize: '1.1rem' }}>hello@santiago.dev</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="social-icon">📍</div>
                                <span style={{ fontSize: '1.1rem' }}>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
