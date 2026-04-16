"use client";
import Link from "next/link";

const stats = [
  { value: "15+", label: "Años de trayectoria" },
  { value: "1", label: "Libro publicado en Amazon" },
  { value: "Dra.", label: "Administración Pública" },
  { value: "2", label: "Estados impactados" },
];

const filosofia = [
  { num: "01", titulo: "Fe antes que estrategia", desc: "Dios, verdad y paz. De ahí no me muevo." },
  { num: "02", titulo: "Identidad antes que imagen", desc: "Quien eres determina lo que construyes." },
  { num: "03", titulo: "Criterio antes que opinión", desc: "La formación doctoral da criterio. El criterio da dirección." },
  { num: "04", titulo: "Disciplina antes que motivación", desc: "El crecimiento viene de la constancia diaria." },
  { num: "05", titulo: "Propósito antes que dinero", desc: "El impacto real es consecuencia de vivir con propósito." },
  { num: "06", titulo: "Autenticidad antes que perfección", desc: "Mi historia no es perfecta. Pero es real." },
];

const conferencias = [
  { titulo: "Liderazgo femenino con propósito y estrategia", tags: ["Liderazgo", "Mujeres"] },
  { titulo: "El método METAMORFOSIS: transformación personal aplicada", tags: ["Desarrollo Personal", "Transformación"] },
  { titulo: "Emprendimiento social con identidad y fe", tags: ["Emprendimiento", "Propósito"] },
  { titulo: "Gestión pública y liderazgo institucional", tags: ["Sector Público", "Liderazgo"] },
  { titulo: "De tocar fondo a construir desde Dios: mi historia", tags: ["Testimonio", "Fe"] },
  { titulo: "Marca personal para mujeres en posiciones de poder", tags: ["Marca Personal", "Autoridad"] },
];

const timeline = [
  { year: "Presente", desc: "Doctorado en Administración Pública en proceso" },
  { year: "2025", desc: 'Autora "Mujer, eres la obra del Maestro" — Amazon KDP' },
  { year: "2023", desc: "Docente Universidad Autónoma de Guerrero (UAGro)" },
  { year: "2021–2023", desc: "Directora General de Acciones Prioritarias, Secretaría de Bienestar Guerrero" },
  { year: "2021", desc: "Candidata a Diputada Local Distrito 7, Acapulco — MORENA" },
  { year: "2008", desc: "Directora General, Revista CÓDIGOS Tlaxcala" },
  { year: "2005", desc: "Primer lugar nacional, Encuentro de Mercadotecnia y Publicidad" },
];

const testimonios = [
  { texto: "Miriam Tenorio es un ser humano que desborda luz, fuerza y amor. Comprometida con su propósito y con las mujeres que la rodean. Sin duda, cada palabra en este libro fue escrita desde el corazón.", nombre: "Coral Mujaes", cargo: "Coach de Vida & Autora", destacado: true },
  { texto: "Pensé que era demasiado tarde para empezar de nuevo. Miriam me demostró que nunca lo es.", nombre: "Carmen R.", cargo: "Empresaria", destacado: false },
  { texto: "Su libro llegó a mis manos en el momento exacto.", nombre: "Patricia M.", cargo: "Lectora", destacado: false },
];

const photoPlaceholder = (height: string) => (
  <div style={{
    height, width: "100%",
    background: "#1A0D2E",
    border: "1px solid rgba(201,169,110,0.2)",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
  }}>
    <div style={{
      width: "110px", height: "110px",
      borderRadius: "50%",
      background: "rgba(201,169,110,0.08)",
      border: "2px solid rgba(201,169,110,0.25)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#C9A96E" }}>MT</span>
    </div>
    <p style={{ color: "rgba(201,169,110,0.4)", fontSize: "0.75rem", letterSpacing: "0.12em", fontFamily: "'Inter', sans-serif", margin: 0 }}>
      Foto próximamente
    </p>
  </div>
);

const libroPlaceholder = (
  <div style={{
    height: "480px", width: "100%",
    background: "#1A0D2E",
    border: "1px solid rgba(201,169,110,0.2)",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  }}>
    <div style={{
      width: "100px", height: "140px",
      background: "rgba(201,169,110,0.08)",
      border: "2px solid rgba(201,169,110,0.25)",
      display: "flex", alignItems: "center", justifyContent: "center",
      borderRadius: "2px",
    }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#C9A96E" }}>📖</span>
    </div>
    <p style={{ color: "rgba(201,169,110,0.4)", fontSize: "0.75rem", letterSpacing: "0.12em", fontFamily: "'Inter', sans-serif", margin: 0 }}>
      Portada próximamente
    </p>
  </div>
);

export default function HomePage() {
  return (
    <div style={{ paddingTop: "120px" }}>

      {/* HERO */}
      <section style={{
        minHeight: "calc(100vh - 120px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 32px",
        gap: "80px",
      }}>
        <div>
          <span style={{
            display: "inline-block",
            border: "1px solid rgba(212,55,154,0.35)",
            color: "#D4379A",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            padding: "8px 16px",
            marginBottom: "32px",
            fontFamily: "'Inter', sans-serif",
            background: "rgba(212,55,154,0.08)",
          }}>
            Doctoranda en Administración Pública &nbsp;·&nbsp; Autora &nbsp;·&nbsp; Conferencista &nbsp;·&nbsp; Mentora &nbsp;·&nbsp; Docente
          </span>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#F5F0E8",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}>
            Transformación con propósito, criterio y dirección.
          </h1>

          <div className="divider" />

          <p style={{ color: "#A89880", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "40px", maxWidth: "500px" }}>
            Liderazgo femenino con base académica, experiencia institucional y fe. Acompañando a mujeres a construir desde su identidad más poderosa.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contacto" className="btn-primary">
              Hagámoslo Juntas
            </Link>
            <Link href="/sobre-mi" className="btn-secondary">
              Conoce mi historia
            </Link>
          </div>
        </div>

        {photoPlaceholder("580px")}

        <style>{`
          @media (max-width: 768px) {
            section:first-of-type {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* STATS */}
      <section style={{ background: "#130A22", borderTop: "1px solid rgba(201,169,110,0.15)", borderBottom: "1px solid rgba(201,169,110,0.15)", padding: "60px 32px" }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", textAlign: "center",
        }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.8rem", fontWeight: 700, color: "#C9A96E", marginBottom: "8px",
              }}>{s.value}</div>
              <div style={{ color: "#A89880", fontSize: "0.85rem", letterSpacing: "0.05em", fontFamily: "'Inter', sans-serif" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(2)>div{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* SOBRE MI */}
      <section style={{ padding: "100px 32px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {photoPlaceholder("560px")}
          <div>
            <span className="section-label">Trayectoria</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, color: "#F5F0E8", marginBottom: "20px" }}>
              Una trayectoria construida desde la autenticidad.
            </h2>
            <div className="divider" />
            <p style={{ color: "#A89880", lineHeight: 1.9, marginBottom: "20px", fontSize: "0.95rem" }}>
              Soy Miriam Tenorio Velazco, empresaria, autora y mujer en proceso de transformación. Después de tocar fondo, decidí reconstruir mi vida desde la fe, la disciplina y la verdad. No fue fácil. No fue rápido. Pero fue real.
            </p>
            <p style={{ color: "#A89880", lineHeight: 1.9, marginBottom: "20px", fontSize: "0.95rem" }}>
              Hoy, más de diez meses después de tomar la decisión más valiente de mi vida — dejar el alcohol — puedo decir que el avance no siempre es visible para todos, pero es completamente real para mí.
            </p>
            <p style={{ color: "#A89880", lineHeight: 1.9, marginBottom: "28px", fontSize: "0.95rem" }}>
              Escribí mi primer libro, recuperé a mi familia y encontré mi propósito: inspirar a otras mujeres a que vuelvan a empezar, sin importar desde dónde están comenzando.
            </p>
            <ul style={{ listStyle: "none", marginBottom: "36px" }}>
              {[
                "Doctoranda en Administración Pública",
                "Directora General — Secretaría de Bienestar Guerrero",
                "Candidata a Diputada Local — MORENA Distrito 7",
                "Docente universitaria UAGro",
                "Autora publicada en Amazon KDP",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px", color: "#A89880", fontSize: "0.9rem" }}>
                  <span style={{ color: "#C9A96E", marginTop: "2px", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/sobre-mi" className="btn-secondary">
              Ver trayectoria completa
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(3)>div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* FILOSOFIA */}
      <section style={{ background: "#130A22", borderTop: "1px solid rgba(201,169,110,0.15)", borderBottom: "1px solid rgba(201,169,110,0.15)", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-label">Filosofia</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#F5F0E8" }}>
              Los principios que guían todo lo que hago.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(201,169,110,0.15)" }}>
            {filosofia.map((f, i) => (
              <div key={i} className="card" style={{ padding: "36px 32px", background: "#1A0D2E", borderRadius: 0, border: "none" }}>
                <div style={{ color: "#C9A96E", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", marginBottom: "12px", fontFamily: "'Inter', sans-serif" }}>
                  {f.num}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#F5F0E8", marginBottom: "10px" }}>
                  {f.titulo}
                </h3>
                <p style={{ color: "#A89880", fontSize: "0.9rem", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(4)>div>div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CONFERENCIAS */}
      <section style={{ padding: "100px 32px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div>
            <span className="section-label">Conferencias</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#F5F0E8", marginBottom: "20px" }}>
              Ideas que transforman audiencias.
            </h2>
            <div className="divider" />
            <p style={{ color: "#A89880", lineHeight: 1.9, marginBottom: "32px", fontSize: "0.95rem" }}>
              Docente universitaria, exfuncionaria de gobierno y autora. Cada conferencia combina rigor académico con testimonio auténtico.
            </p>
            <Link href="/contacto" className="btn-primary">
              Hagámoslo Juntas
            </Link>
          </div>
          <div>
            {conferencias.map((c, i) => (
              <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid rgba(201,169,110,0.15)" }}>
                <p style={{ color: "#F5F0E8", fontWeight: 500, marginBottom: "10px", fontSize: "0.95rem" }}>{c.titulo}</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {c.tags.map(t => (
                    <span key={t} style={{
                      border: "1px solid rgba(201,169,110,0.3)",
                      color: "#C9A96E", padding: "3px 10px",
                      fontSize: "0.72rem", letterSpacing: "0.08em", fontFamily: "'Inter', sans-serif",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(5)>div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* MENTORÍA */}
      <section style={{ background: "#130A22", borderTop: "1px solid rgba(212,55,154,0.2)", borderBottom: "1px solid rgba(212,55,154,0.2)", padding: "100px 32px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <span className="section-label">Mentoría</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#F5F0E8", marginBottom: "20px" }}>
            Mentoría Grupal para Mujeres Emprendedoras
          </h2>
          <div className="divider" style={{ margin: "0 auto 28px" }} />
          <p style={{ color: "#A89880", lineHeight: 1.9, marginBottom: "20px", fontSize: "1rem" }}>
            Acompañamiento mensual para mujeres que quieren transformar su vida y su negocio. Sesiones en vivo, comunidad de apoyo y herramientas prácticas.
          </p>
          <p style={{ color: "#D4379A", fontWeight: 600, fontSize: "1rem", marginBottom: "40px", fontFamily: "'Inter', sans-serif" }}>
            Plazas limitadas para el 2 de junio. Escríbeme y te cuento todo.
          </p>
          <Link href="/contacto" className="btn-primary">
            Hagámoslo Juntas
          </Link>
        </div>
      </section>

      {/* LIBRO */}
      <section style={{ padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {libroPlaceholder}
          <div>
            <span className="section-label">Libro</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#F5F0E8", marginBottom: "8px" }}>
              Un libro que nació de la experiencia real.
            </h2>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontStyle: "italic", color: "#C9A96E", marginBottom: "20px" }}>
              Mujer, eres la obra del Maestro
            </p>
            <div className="divider" />
            <p style={{ color: "#A89880", fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: "20px", fontFamily: "'Inter', sans-serif" }}>
              LEGACY PUBLISHERS · AMAZON KDP, 2025
            </p>
            <p style={{ color: "#A89880", lineHeight: 1.9, marginBottom: "32px", fontSize: "0.95rem" }}>
              No es teoría. Es el mapa de una mujer que tocó fondo, encontró su fe y decidió reconstruirse con propósito. Escrito para mujeres que sienten que su historia aún no ha terminado.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="https://a.co/d/0couRUZG" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Consigue tu ejemplar
              </a>
              <Link href="/libro" className="btn-secondary">
                Conoce el libro
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(7)>div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* TIMELINE */}
      <section style={{ background: "#130A22", borderTop: "1px solid rgba(201,169,110,0.15)", borderBottom: "1px solid rgba(201,169,110,0.15)", padding: "100px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-label">Trayectoria</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#F5F0E8" }}>
              Una trayectoria construida con propósito.
            </h2>
          </div>
          <div style={{ position: "relative", paddingLeft: "32px", borderLeft: "1px solid rgba(201,169,110,0.2)" }}>
            {timeline.map((item, i) => (
              <div key={i} style={{ position: "relative", paddingBottom: "36px" }}>
                <div style={{
                  position: "absolute", left: "-37px", top: "4px",
                  width: "10px", height: "10px", background: "#C9A96E", borderRadius: "50%",
                }} />
                <div style={{ color: "#C9A96E", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", marginBottom: "6px", fontFamily: "'Inter', sans-serif" }}>
                  {item.year}
                </div>
                <p style={{ color: "#A89880", fontSize: "0.95rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE ANCLA */}
      <section style={{ padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.3rem,2.5vw,1.8rem)",
            fontStyle: "italic",
            color: "#F5F0E8",
            lineHeight: 1.6,
            marginBottom: "16px",
          }}>
            "Todo lo que se da con amor, regresa multiplicado."
          </p>
          <p style={{ color: "#C9A96E", fontSize: "0.85rem", letterSpacing: "0.1em", fontFamily: "'Inter', sans-serif" }}>
            — Miriam Tenorio Velazco
          </p>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ background: "#130A22", borderTop: "1px solid rgba(201,169,110,0.15)", borderBottom: "1px solid rgba(201,169,110,0.15)", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-label">Testimonios</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#F5F0E8" }}>
              Lo que dicen quienes me conocen.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {testimonios.map((t, i) => (
              <div key={i} className="card" style={{
                padding: "36px 32px",
                borderLeft: `2px solid ${t.destacado ? "#D4379A" : "#C9A96E"}`,
                background: t.destacado ? "rgba(212,55,154,0.06)" : undefined,
              }}>
                <p style={{ color: "#A89880", lineHeight: 1.8, fontStyle: "italic", marginBottom: "24px", fontSize: "0.95rem" }}>
                  "{t.texto}"
                </p>
                <div>
                  <p style={{ color: t.destacado ? "#D4379A" : "#F5F0E8", fontWeight: 600, fontSize: "0.9rem", fontFamily: "'Inter', sans-serif" }}>{t.nombre}</p>
                  <p style={{ color: "#C9A96E", fontSize: "0.8rem", letterSpacing: "0.08em" }}>{t.cargo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-last-of-type(3)>div>div:last-child{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* REGALO GRATUITO */}
      <section style={{
        background: "linear-gradient(135deg, #1A0D2E 0%, #2D1458 100%)",
        borderTop: "1px solid rgba(212,55,154,0.2)",
        borderBottom: "1px solid rgba(212,55,154,0.2)",
        padding: "80px 32px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <div style={{ fontSize: "2.2rem", marginBottom: "20px" }}>🎁</div>
          <span className="section-label">Regalo para ti</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#F5F0E8", marginBottom: "16px" }}>
            Descarga gratis los 3 primeros pasos del Método METAMORFOSIS
          </h2>
          <p style={{ color: "#A89880", lineHeight: 1.8, marginBottom: "36px", fontSize: "0.95rem" }}>
            Una guía práctica para mujeres listas para transformarse. Sin rodeos, sin teoría vacía.
          </p>
          <Link href="/contacto" className="btn-primary">
            Quiero mi guía gratis
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: "#130A22", borderTop: "1px solid rgba(201,169,110,0.15)", padding: "100px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", textAlign: "center" }}>Contacto</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#F5F0E8", marginBottom: "20px" }}>
            ¿Lista para escribir tu siguiente capítulo?
          </h2>
          <p style={{ color: "#A89880", marginBottom: "36px", lineHeight: 1.8 }}>
            Conferencias, mentorías, colaboraciones y medios.
          </p>
          <Link href="/contacto" className="btn-primary" style={{ fontSize: "0.95rem", padding: "16px 40px" }}>
            Hagámoslo Juntas
          </Link>
        </div>
      </section>
    </div>
  );
}
