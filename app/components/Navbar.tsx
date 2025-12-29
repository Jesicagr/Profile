"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsOpen(false); // Close menu on click
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <Link href="/" className="nav-logo">
                Santiago<span className="text-gradient">.</span>
            </Link>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
            </button>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="nav-link">
                    Sobre Mí
                </a>
                <a href="#skills" onClick={(e) => scrollToSection(e, "skills")} className="nav-link">
                    Habilidades
                </a>
                <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="nav-link">
                    Proyectos
                </a>
                <a href="#experience" onClick={(e) => scrollToSection(e, "experience")} className="nav-link">
                    Experiencia
                </a>
                <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="nav-link" style={{ color: 'var(--primary)' }}>
                    Contacto
                </a>
            </div>
        </nav>
    );
}
