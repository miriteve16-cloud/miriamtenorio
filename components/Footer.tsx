import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0D0618", borderTop: "1px solid rgba(201,169,110,0.15)", padding: "64px 32px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#C9A96E", marginBottom: "16px" }}>
              Miriam Tenorio Velazco
            </h3>
            <p style={{ color: "#A89880", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "8px" }}>
              Doctora en Administración Pública
            </p>
            <p style={{ color: "#A89880", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "20px" }}>
              Autora · Conferencista · Docente UAGro
            </p>
            <p style={{ color: "#A89880", fontSize: "0.85rem", fontStyle: "italic", borderLeft: "2px solid #C9A96E", paddingLeft: "16px" }}>
              "Todo lo que se cree, se crea."
            </p>
          </div>

          <div>
            <h4 style={{ color: "#F5F0E8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px", fontFamily: "'Inter', sans-serif" }}>
              Navegacion
            </h4>
            {[
              { href: "/sobre-mi", label: "Sobre mi" },
              { href: "/conferencias", label: "Conferencias" },
              { href: "/libro", label: "Mi Libro" },
              { href: "/blog", label: "Blog" },
              { href: "/prensa", label: "Prensa" },
              { href: "/contacto", label: "Contacto" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: "block", color: "#A89880", textDecoration: "none",
                marginBottom: "10px", fontSize: "0.9rem", transition: "color 0.2s",
              }}>{l.label}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: "#F5F0E8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px", fontFamily: "'Inter', sans-serif" }}>
              Contacto
            </h4>
            <p style={{ color: "#A89880", fontSize: "0.9rem", marginBottom: "10px" }}>miriteve16@gmail.com</p>
            <a href="https://wa.me/527441757547" target="_blank" rel="noopener noreferrer"
              style={{ color: "#A89880", textDecoration: "none", fontSize: "0.9rem", display: "block", marginBottom: "20px" }}>
              +52 744 175 7547
            </a>
            <div style={{ display: "flex", gap: "16px" }}>
              {[
                { href: "https://www.instagram.com/miriamtenorio1", label: "IG" },
                { href: "https://youtube.com/@miriamtenoriovelazco", label: "YT" },
                { href: "https://www.tiktok.com/@miritenorio", label: "TK" },
              ].map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  color: "#A89880", textDecoration: "none", fontSize: "0.8rem", fontWeight: 600,
                  border: "1px solid rgba(201,169,110,0.15)", padding: "6px 10px", transition: "all 0.2s",
                }}>{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(201,169,110,0.15)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ color: "#A89880", fontSize: "0.8rem" }}>
            © 2025 Miriam Tenorio Velazco. Todos los derechos reservados.
          </p>
          <p style={{ color: "rgba(201,169,110,0.15)", fontSize: "0.8rem" }}>
            Mexico
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
