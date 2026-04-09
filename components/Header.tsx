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
      borderBottom: "1px solid rgba(201,169,110,0.15)",
      backdropFilter: "blur(12px)",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 32px",
        height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between",
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
            Contratame
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
            Contratame
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
