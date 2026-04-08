"use client";
import Link from "next/link";
import { ArrowRight, BookOpen, Mic, Star, Heart, TrendingUp } from "lucide-react";

const stats = [
  { value: "10", label: "Meses de transformación", icon: "🌱" },
  { value: "1er", label: "Libro publicado", icon: "📚" },
  { value: "∞", label: "Vidas impactadas", icon: "💜" },
  { value: "100%", label: "Desde la autenticidad", icon: "✨" },
];

const valores = [
  {
    icon: <Heart size={28} color="#a78bfa" />,
    title: "Fe y Propósito",
    desc: "Creo que cada persona fue creada con un propósito único. La fe es la base de toda transformación real.",
  },
  {
    icon: <TrendingUp size={28} color="#a78bfa" />,
    title: "Disciplina Real",
    desc: "El crecimiento no viene de la motivación pasajera, sino de la disciplina diaria y las decisiones conscientes.",
  },
  {
    icon: <Star size={28} color="#a78bfa" />,
    title: "Verdad que Libera",
    desc: "Solo desde la honestidad radical podemos reconstruir. La verdad duele, pero también sana y libera.",
  },
];

const testimonios = [
  {
    texto: "Miriam me enseñó que el primer paso es el más difícil, pero también el más poderoso. Su historia me dio el valor que necesitaba.",
    nombre: "Ana L.",
    cargo: "Emprendedora",
  },
  {
    texto: "Pensé que era demasiado tarde para empezar de nuevo. Miriam me demostró con su vida que nunca lo es.",
    nombre: "Carmen R.",
    cargo: "Empresaria",
  },
  {
    texto: "El libro de Miriam llegó a mis manos en el momento exacto. Fue como si alguien finalmente entendiera lo que yo vivía.",
    nombre: "Patricia M.",
    cargo: "Lectora",
  },
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "820px", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(167,139,250,0.3)",
              borderRadius: "50px",
              padding: "8px 20px",
              marginBottom: "28px",
              fontSize: "0.85rem",
              color: "#c4b5fd",
              letterSpacing: "0.05em",
            }}
          >
            ✨ Coach de Negocios · Autora · Conferencista
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "12px",
              color: "#f5f0ff",
            }}
          >
            Miriam{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #7c3aed, #c4b5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Tenorio
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              color: "rgba(245,240,255,0.7)",
              marginBottom: "20px",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            &ldquo;Mi avance no es visible para todos… pero es real para mí.&rdquo;
          </p>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(245,240,255,0.65)",
              lineHeight: 1.8,
              marginBottom: "48px",
              maxWidth: "640px",
              margin: "0 auto 48px",
            }}
          >
            Empresaria, autora y mujer en proceso de transformación. Después de tocar fondo, decidió reconstruir su vida desde la fe, la disciplina y la verdad. Hoy inspira a otros a crecer, emprender y volver a empezar con propósito.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/libro" className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <BookOpen size={18} /> Mi Libro
            </Link>
            <Link
              href="/contacto"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "50px",
                border: "1px solid rgba(167,139,250,0.4)",
                color: "#c4b5fd",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                transition: "all 0.3s",
              }}
            >
              Trabajemos Juntas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-dark" style={{ padding: "60px 24px" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "32px",
            textAlign: "center",
          }}
        >
          {stats.map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "rgba(245,240,255,0.6)", fontSize: "0.9rem" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MÍ (preview) */}
      <section style={{ padding: "100px 24px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
              Mi Historia
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f5f0ff", lineHeight: 1.2, marginBottom: "24px" }}>
              De tocar fondo a{" "}
              <span style={{ background: "linear-gradient(135deg, #a78bfa, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                reconstruir todo
              </span>
            </h2>
            <p style={{ color: "rgba(245,240,255,0.7)", lineHeight: 1.8, marginBottom: "16px", fontSize: "1.05rem" }}>
              Hubo un momento en mi vida donde lo perdí casi todo. Pero fue precisamente en ese fondo donde encontré algo que nadie me podía quitar: mi fe y mi voluntad de levantarme.
            </p>
            <p style={{ color: "rgba(245,240,255,0.7)", lineHeight: 1.8, marginBottom: "32px", fontSize: "1.05rem" }}>
              Dejé de tomar. Recuperé a mi familia. Escribí mi primer libro. Y aprendí que el primer paso siempre empieza en silencio, sin que nadie lo vea.
            </p>
            <Link href="/sobre-mi" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#a78bfa", textDecoration: "none", fontWeight: 600 }}>
              Conoce mi historia completa <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: "24px",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "20px" }}>💜</div>
            <blockquote
              style={{
                fontSize: "1.2rem",
                fontStyle: "italic",
                color: "#c4b5fd",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              &ldquo;Naciste para algo más grande. Tu historia no terminó — apenas está comenzando.&rdquo;
            </blockquote>
            <p style={{ color: "rgba(245,240,255,0.5)", fontSize: "0.9rem" }}>
              — Miriam Tenorio Velazco
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* LIBRO */}
      <section className="section-dark" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
            Mi Primer Libro
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f5f0ff", lineHeight: 1.2, marginBottom: "16px" }}>
            Mujer Eres La Obra del Maestro
          </h2>
          <p style={{ color: "#c4b5fd", fontSize: "1.1rem", marginBottom: "24px", fontStyle: "italic" }}>
            Naciste para algo más grande
          </p>
          <p style={{ color: "rgba(245,240,255,0.7)", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 40px", fontSize: "1.05rem" }}>
            Un libro escrito desde las entrañas de la experiencia real. No es teoría — es la historia de una mujer que decidió levantarse y el mapa que siguió para hacerlo.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/libro" className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <BookOpen size={18} /> Ver el Libro
            </Link>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
              Mi Filosofía
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f5f0ff" }}>
              Los pilares de la transformación real
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
            {valores.map((v, i) => (
              <div key={i} className="card-purple" style={{ padding: "36px 28px" }}>
                <div style={{ marginBottom: "16px" }}>{v.icon}</div>
                <h3 style={{ color: "#f5f0ff", fontWeight: 700, fontSize: "1.15rem", marginBottom: "12px" }}>
                  {v.title}
                </h3>
                <p style={{ color: "rgba(245,240,255,0.65)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFERENCIAS (preview) */}
      <section className="section-dark" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <Mic size={40} color="#a78bfa" style={{ margin: "0 auto 20px" }} />
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#f5f0ff", marginBottom: "16px" }}>
            Conferencias y Keynotes
          </h2>
          <p style={{ color: "rgba(245,240,255,0.65)", lineHeight: 1.8, marginBottom: "32px", fontSize: "1rem" }}>
            Miriam lleva su historia y aprendizajes a escenarios corporativos, eventos de mujeres emprendedoras y espacios de transformación personal. Cada conferencia es una experiencia auténtica y poderosa.
          </p>
          <Link href="/conferencias" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#a78bfa", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}>
            Ver temas disponibles <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f5f0ff" }}>
              Lo que dicen quienes me conocen
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {testimonios.map((t, i) => (
              <div key={i} className="card-purple" style={{ padding: "32px 28px" }}>
                <div style={{ color: "#a78bfa", fontSize: "2rem", marginBottom: "16px" }}>❝</div>
                <p style={{ color: "rgba(245,240,255,0.8)", lineHeight: 1.8, fontStyle: "italic", marginBottom: "20px", fontSize: "0.95rem" }}>
                  {t.texto}
                </p>
                <div>
                  <p style={{ color: "#c4b5fd", fontWeight: 700, fontSize: "0.95rem" }}>{t.nombre}</p>
                  <p style={{ color: "rgba(245,240,255,0.4)", fontSize: "0.85rem" }}>{t.cargo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          padding: "100px 24px",
          textAlign: "center",
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f5f0ff", lineHeight: 1.2, marginBottom: "20px" }}>
            ¿Lista para escribir tu siguiente capítulo?
          </h2>
          <p style={{ color: "rgba(245,240,255,0.65)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "40px" }}>
            Si estás en un punto de tu vida donde sientes que necesitas un cambio real, hablemos. No estás sola.
          </p>
          <Link href="/contacto" className="btn-primary" style={{ fontSize: "1.05rem", padding: "16px 40px" }}>
            Quiero empezar hoy 💜
          </Link>
        </div>
      </section>
    </div>
  );
}
