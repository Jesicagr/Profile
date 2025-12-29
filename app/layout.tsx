import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "Santiago | Desarrollador Full Stack",
  description: "Portafolio profesional de Santiago, Desarrollador Full Stack especializado en Tecnologías Web Modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <body className={outfit.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
