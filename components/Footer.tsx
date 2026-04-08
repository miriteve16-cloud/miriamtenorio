import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(10, 10, 15, 0.98)",
        borderTop: "1px solid rgba(124, 58, 237, 0.2)",
        padding: "60px 24px 30px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "16px",
              }}
            >
              Miriam Tenorio Velazco
            </h3>
            <p style={{ color: "rgba(245,240,255,0.6)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "20px" }}>
              Empresaria, autora y coach de negocios. <br />
              Inspirando a mujeres a emprender y volver a empezar con propósito.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="https://www.instagram.com/miriamtenorio1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a78bfa", transition: "color 0.2s" }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@miriamtenoriovelazco"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a78bfa", transition: "color 0.2s" }}
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@miritenorio"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600 }}
                aria-label="TikTok"
              >
                TikTok
              </a>
              <a
                href="https://www.facebook.com/share/1EFHUshA6C/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a78bfa" }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: "#c4b5fd", fontWeight: 600, marginBottom: "16px", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Navegación
            </h4>
            {[
              { href: "/sobre-mi", label: "Sobre Mí" },
              { href: "/libro", label: "Mi Libro" },
              { href: "/conferencias", label: "Conferencias" },
              { href: "/blog", label: "Blog" },
              { href: "/prensa", label: "Prensa" },
              { href: "/contacto", label: "Contacto" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  color: "rgba(245,240,255,0.6)",
                  textDecoration: "none",
                  marginBottom: "10px",
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ color: "#c4b5fd", fontWeight: 600, marginBottom: "16px", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Contacto
            </h4>
            <p style={{ color: "rgba(245,240,255,0.6)", fontSize: "0.9rem", marginBottom: "10px" }}>
              📧 miriteve16@gmail.com
            </p>
            <p style={{ color: "rgba(245,240,255,0.6)", fontSize: "0.9rem", marginBottom: "20px" }}>
              📱 WhatsApp: +52 744 175 7547
            </p>
            <Link href="/contacto" className="btn-primary" style={{ fontSize: "0.85rem", padding: "10px 24px" }}>
              Enviar Mensaje
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(124, 58, 237, 0.15)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "rgba(245,240,255,0.4)", fontSize: "0.8rem" }}>
            © 2025 Miriam Tenorio Velazco. Todos los derechos reservados.
          </p>
          <p style={{ color: "rgba(245,240,255,0.4)", fontSize: "0.8rem" }}>
            Hecho con 💜 en México
          </p>
        </div>
      </div>
    </footer>
  );
}
