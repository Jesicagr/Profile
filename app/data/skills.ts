export interface SkillCategory {
    title: string;
    slug: string;
    description: string;
    items: string[];
    icon: string;
    details: string; // Extra content for the detail page
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        slug: "frontend",
        icon: "🎨",
        description: "Creación de interfaces de usuario dinámicas, accesibles y de alto rendimiento.",
        details: "Desde la arquitectura de componentes hasta animaciones complejas, me especializo en construir el lado del cliente de aplicaciones web modernas. Utilizo React y Next.js para asegurar que las aplicaciones no solo se vean bien, sino que sean extremadamente rápidas y SEO-friendly.",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"]
    },
    {
        title: "Backend",
        slug: "backend",
        icon: "⚙️",
        description: "Sistemas robustos, escalables y seguros para potenciar aplicaciones.",
        details: "Diseño y desarrollo de APIs RESTful y GraphQL, gestión de bases de datos y arquitectura de microservicios. Mi enfoque está en la seguridad, la escalabilidad y la eficiencia de los datos.",
        items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
        title: "Herramientas",
        slug: "tools",
        icon: "🛠️",
        description: "DevOps, diseño y flujo de trabajo eficiente.",
        details: "El desarrollo moderno requiere más que solo código. Utilizo herramientas de vanguardia para integración continua, despliegue automatizado y colaboración de diseño.",
        items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"]
    }
];
