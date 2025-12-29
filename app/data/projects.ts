export const projects = [
    {
        slug: "ecommerce-platform",
        title: "Plataforma E-Commerce",
        description: "Una tienda en línea completa con pagos, carrito de compras y panel de administración.",
        longDescription: "Este proyecto es una solución completa de comercio electrónico diseñada para escalar. Incluye gestión de inventario, procesamiento de pagos seguro con Stripe, y un panel de administración intuitivo. La arquitectura utiliza Server Components de Next.js para un rendimiento óptimo.",
        tech: ["Next.js", "Stripe", "PostgreSQL"],
        links: { demo: "#", code: "#" },
        color: "#8b5cf6" // Purple
    },
    {
        slug: "ai-dashboard",
        title: "Dashboard con IA",
        description: "Panel de análisis impulsado por modelos de aprendizaje automático para visualización de datos.",
        longDescription: "Un panel de control inteligente que procesa grandes volúmenes de datos para ofrecer insights predictivos. Utiliza modelos de TensorFlow ejecutados en el servidor para analizar tendencias en tiempo real y mostrarlas mediante gráficas interactivas.",
        tech: ["Python", "React", "TensorFlow"],
        links: { demo: "#", code: "#" },
        color: "#ec4899" // Pink
    },
    {
        slug: "social-network",
        title: "Red Social",
        description: "Plataforma social en tiempo real con chat, notificaciones y uso compartido de medios.",
        longDescription: "Una red social moderna enfocada en la interacción en tiempo real. Cuenta con un sistema de chat basado en WebSockets, notificaciones push instantáneas y un feed de actividad altamente optimizado con scroll infinito.",
        tech: ["Node.js", "Socket.io", "MongoDB"],
        links: { demo: "#", code: "#" },
        color: "#00f3ff" // Cyan
    }
];
