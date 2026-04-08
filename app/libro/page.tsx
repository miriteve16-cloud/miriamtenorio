import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mujer Eres La Obra del Maestro | Libro de Miriam Tenorio Velazco",
  description:
    "Descubre el primer libro de Miriam Tenorio Velazco: 'Mujer Eres La Obra del Maestro — Naciste para algo más grande'. Una historia real de transformación, fe y propósito.",
  openGraph: {
    title: "Mujer Eres La Obra del Maestro — El libro de Miriam Tenorio",
    description: "Un libro escrito desde las entrañas de la experiencia real. No es teoría — es la historia de una mujer que decidió levantarse.",
    url: "https://miriamtenorio.com/libro",
  },
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Mujer Eres La Obra del Maestro",
  description: "Naciste para algo más grande",
  author: {
    "@type": "Person",
    name: "Miriam Tenorio Velazco",
    url: "https://miriamtenorio.com",
  },
  inLanguage: "es",
  genre: ["Autoayuda", "Desarrollo Personal", "Espiritualidad"],
  url: "https://miriamtenorio.com/libro",
  publisher: {
    "@type": "Organization",
    name: "Miriam Tenorio Velazco",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿De qué trata el libro 'Mujer Eres La Obra del Maestro'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es el libro autobiográfico de Miriam Tenorio Velazco donde comparte su proceso de transformación personal: cómo dejó de tomar, recuperó a su familia y encontró su propósito. Es una guía para mujeres que quieren volver a empezar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para quién está escrito este libro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para mujeres que sienten que llegaron tarde, que cometieron demasiados errores o que ya no tienen derecho a soñar. Para cualquier persona en proceso de transformación que necesita saber que sí se puede.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo conseguir el libro de Miriam Tenorio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes contactar a Miriam directamente a través del formulario de contacto en miriamtenorio.com o escribirle por WhatsApp para conocer los formatos disponibles.",
      },
    },
  ],
};

const capítulos = [
  { num: "01", titulo: "El día que todo se cayó", desc: "La historia sin adornos del punto más bajo. Cuando la verdad ya no podía seguir escondida." },
  { num: "02", titulo: "La decisión", desc: "No fue un momento de grandeza. Fue un momento de cansancio. Y de suficiente amor propio para elegirme." },
  { num: "03", titulo: "Los primeros 30 días", desc: "Lo que nadie te cuenta sobre el proceso real de cambio. El silencio, el miedo, la soledad elegida." },
  { num: "04", titulo: "Recuperar lo sagrado", desc: "Cómo reconstruir los lazos que el dolor rompió. El camino de regreso a la familia." },
  { num: "05", titulo: "Fe como ancla", desc: "Por qué la fe no es un escape, sino el punto de apoyo más sólido que existe." },
  { num: "06", titulo: "Naciste para algo más grande", desc: "El propósito no se busca, se descubre. Y siempre estuvo ahí, esperando que te quitaras del camino." },
];

export default function LibroPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        style={{
          padding: "100px 24px 80px",
          background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      >
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
          {/* Book visual */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4c1d95)",
                borderRadius: "16px",
                padding: "60px 40px",
                boxShadow: "0 20px 60px rgba(124,58,237,0.4)",
                display: "inline-block",
                minWidth: "260px",
              }}
            >
              <BookOpen size={64} color="rgba(255,255,255,0.9)" style={{ margin: "0 auto 24px" }} />
              <h2 style={{ color: "white", fontSize: "1.4rem", fontWeight: 800, lineHeight: 1.3, marginBottom: "12px" }}>
                Mujer Eres La Obra del Maestro
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", fontStyle: "italic" }}>
                Naciste para algo más grande
              </p>
              <div style={{ marginTop: "20px", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "16px" }}>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>Miriam Tenorio Velazco</p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginTop: "20px" }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#a78bfa" color="#a78bfa" />)}
            </div>
          </div>

          {/* Info */}
          <div>
            <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
              Primer Libro
            </div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#f5f0ff", lineHeight: 1.2, marginBottom: "8px" }}>
              Mujer Eres La Obra
            </h1>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "8px" }}>
              <span style={{ background: "linear-gradient(135deg, #a78bfa, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                del Maestro
              </span>
            </h1>
            <p style={{ color: "#c4b5fd", fontSize: "1.1rem", fontStyle: "italic", marginBottom: "28px" }}>
              Naciste para algo más grande
            </p>
            <p style={{ color: "rgba(245,240,255,0.75)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "20px" }}>
              Este libro no es teoría de motivación. Es la historia real de una mujer que tocó fondo y encontró en ese fondo la fuerza para levantarse.
            </p>
            <p style={{ color: "rgba(245,240,255,0.75)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "36px" }}>
              Miriam comparte sin filtros su proceso: la oscuridad, las decisiones difíciles, la recuperación, la familia, la fe. Y el descubrimiento de que todas fuimos creadas para algo más grande.
            </p>
            <Link href="/contacto" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Conseguir el Libro <ArrowRight size={16} />
            </Link>
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

      {/* Para quién es */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "40px" }}>
            Este libro es para ti si…
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              "Sientes que cometiste demasiados errores para volver a empezar",
              "Has perdido la conexión con tu familia y quieres recuperarla",
              "Buscas algo más que motivación — buscas un camino real",
              "Tu fe se ha debilitado y necesitas reconectarte con tu propósito",
              "Estás en un proceso de recuperación y necesitas saber que no estás sola",
              "Quieres emprender pero el miedo te paraliza",
            ].map((punto, i) => (
              <div key={i} className="card-purple" style={{ padding: "24px", textAlign: "left" }}>
                <div style={{ color: "#a78bfa", fontSize: "1.5rem", marginBottom: "10px" }}>✓</div>
                <p style={{ color: "rgba(245,240,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6 }}>{punto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capítulos */}
      <section style={{ padding: "80px 24px", background: "rgba(124,58,237,0.03)", borderTop: "1px solid rgba(124,58,237,0.1)", borderBottom: "1px solid rgba(124,58,237,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "40px", textAlign: "center" }}>
            Dentro del libro
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {capítulos.map((cap, i) => (
              <div key={i} className="card-purple" style={{ padding: "28px" }}>
                <div style={{ color: "rgba(124,58,237,0.5)", fontSize: "2rem", fontWeight: 800, marginBottom: "8px" }}>
                  {cap.num}
                </div>
                <h3 style={{ color: "#c4b5fd", fontWeight: 700, fontSize: "1rem", marginBottom: "10px" }}>
                  {cap.titulo}
                </h3>
                <p style={{ color: "rgba(245,240,255,0.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "40px", textAlign: "center" }}>
            Preguntas sobre el libro
          </h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="card-purple" style={{ padding: "28px", marginBottom: "16px" }}>
              <h3 style={{ color: "#c4b5fd", fontWeight: 600, marginBottom: "10px", fontSize: "1rem" }}>
                {item.name}
              </h3>
              <p style={{ color: "rgba(245,240,255,0.7)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                {item.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "16px" }}>
          ¿Lista para leerlo?
        </h2>
        <p style={{ color: "rgba(245,240,255,0.65)", marginBottom: "32px" }}>
          Contáctame para saber cómo conseguir tu copia.
        </p>
        <Link href="/contacto" className="btn-primary">
          Quiero mi libro 📚
        </Link>
      </section>
    </div>
  );
}
