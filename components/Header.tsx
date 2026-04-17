"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/conferencias", label: "Conferencias" },
  { href: "/libro", label: "Mi Libro" },
  { href: "/blog", label: "Blog" },
  { href: "/prensa", label: "Prensa" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(13,6,24,0.97)" : "#0D0618",
      backdropFilter: "blur(12px)",
      transition: "all 0.3s ease",
    }}>

      {/* BANNER CONFERENCIA */}
      <div style={{
        background: "#3B1050",
        borderBottom: "1px solid rgba(212,55,154,0.3)",
        padding: "14px 24px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3px",
      }}>
        <p style={{ color: "#C9A96E", fontSize: "0.67rem", fontWeight: 600, letterSpacing: "0.15em", margin: 0, fontFamily: "'Inter', sans-serif" }}>
          PRÓXIMA CONFERENCIA GRATUITA
        </p>
        <p style={{ color: "#ffffff", fontSize: "1.35rem", fontWeight: 700, margin: "2px 0 0", fontFamily: "'Playfair Display', serif", letterSpacing: "0.08em", lineHeight: 1.1 }}>
          METAMORFOSIS
        </p>
        <p style={{ color: "#ffffff", fontSize: "0.78rem", fontStyle: "italic", margin: "1px 0 0", fontFamily: "'Playfair Display', serif", opacity: 0.9 }}>
          "De la transformación personal al negocio que sueñas"
        </p>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.67rem", fontFamily: "'Inter', sans-serif", margin: "5px 0 0", letterSpacing: "0.06em" }}>
          30 de abril del 2026 &nbsp;·&nbsp; Entrada Gratuita · Cupo Limitado &nbsp;·&nbsp; Facultad FCA/UAGro · Acapulco
        </p>
        <Link href="/registro" style={{
          background: "#D4379A",
          color: "white",
          textDecoration: "none",
          padding: "6px 18px",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          fontFamily: "'Inter', sans-serif",
          whiteSpace: "nowrap",
          borderRadius: "2px",
          marginTop: "8px",
          display: "inline-block",
        }}>
          Quiero registrarme
        </Link>
      </div>

      {/* NAV BAR */}
      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 32px",
        height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid rgba(201,169,110,0.15)",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.25rem", fontWeight: 700, color: "#C9A96E", letterSpacing: "0.02em",
          }}>
            Miriam Tenorio
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "36px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              color: "#A89880", textDecoration: "none", fontSize: "0.85rem",
              fontWeight: 500, letterSpacing: "0.05em", transition: "color 0.2s",
              fontFamily: "'Inter', sans-serif",
            }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "#F5F0E8"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "#A89880"}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn-primary" style={{ fontSize: "0.8rem", padding: "10px 24px" }}>
            Hagámoslo Juntas
          </Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-btn"
          style={{ display: "none", background: "none", border: "none", color: "#C9A96E", cursor: "pointer", fontSize: "1.5rem" }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: "#0D0618", borderTop: "1px solid rgba(201,169,110,0.15)", padding: "20px 32px" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", color: "#A89880", textDecoration: "none",
              padding: "12px 0", borderBottom: "1px solid rgba(201,169,110,0.15)", fontSize: "0.95rem",
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" onClick={() => setMenuOpen(false)} className="btn-primary"
            style={{ display: "inline-block", marginTop: "16px", fontSize: "0.85rem" }}>
            Hagámoslo Juntas
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
