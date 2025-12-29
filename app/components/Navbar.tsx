"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <Link href="/" className="nav-logo">
                Santiago<span className="text-gradient">.</span>
            </Link>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
            </button>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <Link href="/about" className="nav-link">
                    Sobre Mí
                </Link>
                <Link href="/skills" className="nav-link">
                    Habilidades
                </Link>
                <Link href="/projects" className="nav-link">
                    Proyectos
                </Link>
                <Link href="/about" className="nav-link"> {/* Experience is in About now */}
                    Experiencia
                </Link>
                <Link href="/contact" className="nav-link" style={{ color: 'var(--primary)' }}>
                    Contacto
                </Link>
            </div>
        </nav>
    );
}
