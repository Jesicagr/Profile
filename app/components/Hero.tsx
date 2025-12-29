export default function Hero() {
    return (
        <section className="hero">
            <div className="container" style={{ animation: 'fadeIn 1s ease-out' }}>
                <h1 style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                    Hola, soy <span className="text-gradient">Santiago</span>
                </h1>
                <p style={{ fontSize: '1.5rem', color: '#a1a1aa', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    Desarrollador Full Stack apasionado por construir webs de alto rendimiento y experiencias digitales asombrosas.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
                        Ver Proyectos
                    </a>
                    <a href="#contact" className="glass-panel" style={{ padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', color: 'white' }}>
                        Contáctame
                    </a>
                </div>
            </div>

            {/* Background Glows */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />
        </section>
    );
}
