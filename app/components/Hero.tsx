export default function Hero() {
    return (
        <section className="hero">
            <div className="container" style={{ animation: 'fadeIn 1s ease-out' }}>
                <h1>
                    Hola, soy <span className="text-gradient">Santiago</span>
                </h1>
                <p>
                    Desarrollador Full Stack apasionado por construir webs de alto rendimiento y experiencias digitales asombrosas.
                </p>
                <div className="hero-buttons">
                    <a href="/projects" className="btn btn-primary">
                        Ver Proyectos
                    </a>
                    <a href="/contact" className="btn btn-secondary">
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
                width: '100%',
                maxWidth: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />
        </section>
    );
}
