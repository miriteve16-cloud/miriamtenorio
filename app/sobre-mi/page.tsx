import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Mí | Miriam Tenorio Velazco",
  description:
    "Conoce la historia real de Miriam Tenorio Velazco: empresaria, autora y coach de negocios que reconstruyó su vida desde la fe, la disciplina y la verdad.",
  openGraph: {
    title: "Sobre Mí | Miriam Tenorio Velazco",
    description: "La historia real de una mujer que tocó fondo y decidió reconstruir todo.",
    url: "https://miriamtenorio.com/sobre-mi",
  },
};

const timeline = [
  {
    año: "El inicio",
    titulo: "Una vida que parecía perfecta",
    desc: "Como muchas mujeres, Miriam construyó una vida exterior que parecía sólida. Empresa, familia, proyectos. Pero por dentro, algo no cuadraba.",
  },
  {
    año: "El fondo",
    titulo: "Tocar fondo",
    desc: "Llegó el momento más oscuro. Un punto de quiebre donde las máscaras ya no alcanzaban. Fue el comienzo del cambio real, aunque en ese momento dolía demasiado para entenderlo.",
  },
  {
    año: "La decisión",
    titulo: "Dejar de tomar. Volver a vivir.",
    desc: "Hace 10 meses tomó la decisión más valiente de su vida: soltar lo que la destruía. Día a día, sin aplausos, sin que nadie lo viera. Solo ella y su compromiso.",
  },
  {
    año: "La familia",
    titulo: "Recuperar lo más sagrado",
    desc: "El proceso de sanación no fue solo personal. Fue también relacional. Reconstruir puentes con quienes más amaba fue uno de los frutos más hermosos de su transformación.",
  },
  {
    año: "El libro",
    titulo: "Mujer Eres La Obra del Maestro",
    desc: "Escribió lo que vivió. Sin filtros, sin postureo. Un libro para las mujeres que sienten que llegaron tarde, que se equivocaron demasiado, que ya no tienen derecho a soñar.",
  },
  {
    año: "Hoy",
    titulo: "Inspirar desde la autenticidad",
    desc: "Hoy Miriam comparte su historia, su metodología y su fe con mujeres que necesitan saber que sí se puede. Que no importa desde dónde empiezas, sino que empieces.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Miriam Tenorio Velazco",
  url: "https://miriamtenorio.com",
  description:
    "Empresaria, autora de 'Mujer Eres La Obra del Maestro' y coach de negocios. Inspirando a mujeres a emprender y transformarse.",
  jobTitle: "Coach de Negocios y Autora",
  nationality: { "@type": "Country", name: "México" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Quién es Miriam Tenorio Velazco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miriam Tenorio Velazco es una empresaria, autora y coach de negocios mexicana. Es autora del libro 'Mujer Eres La Obra del Maestro' e inspira a mujeres a emprender y transformarse.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la historia de Miriam Tenorio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miriam tocó fondo y decidió reconstruir su vida desde cero. Dejó de tomar hace más de 10 meses, recuperó a su familia y escribió su primer libro. Hoy inspira a otras mujeres con su historia real.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué temas da conferencias Miriam Tenorio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miriam habla sobre transformación personal, emprendimiento femenino, resiliencia, fe y propósito, liderazgo desde la autenticidad y cómo volver a empezar.",
      },
    },
  ],
};

export default function SobreMiPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          padding: "100px 24px 80px",
          textAlign: "center",
          background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
            Mi Historia
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f5f0ff", lineHeight: 1.15, marginBottom: "24px" }}>
            Sobre Miriam Tenorio{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Velazco
            </span>
          </h1>
          <p style={{ color: "rgba(245,240,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Empresaria, autora y mujer en proceso de transformación. Esta es mi historia sin filtros, sin postureo, tal como fue.
          </p>
        </div>
      </section>

      {/* Bio principal */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            className="card-purple"
            style={{
              padding: "48px",
              borderRadius: "24px",
              marginBottom: "60px",
            }}
          >
            <p style={{ color: "rgba(245,240,255,0.85)", fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "20px" }}>
              Soy Miriam Tenorio Velazco. Empresaria, autora y mujer en proceso de transformación.
            </p>
            <p style={{ color: "rgba(245,240,255,0.75)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "20px" }}>
              Después de tocar fondo, decidí reconstruir mi vida desde la fe, la disciplina y la verdad. No fue fácil. No fue rápido. Pero fue real.
            </p>
            <p style={{ color: "rgba(245,240,255,0.75)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "20px" }}>
              Hoy, más de 10 meses después de tomar la decisión más valiente de mi vida, puedo decir que el avance puede no ser visible para todos, pero es completamente real para mí.
            </p>
            <p style={{ color: "rgba(245,240,255,0.75)", fontSize: "1rem", lineHeight: 1.9 }}>
              Escribí mi primer libro, recuperé a mi familia y encontré mi propósito: inspirar a otras mujeres a que vuelvan a empezar, sin importar desde dónde estén empezando.
            </p>
          </div>

          {/* Timeline */}
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f5f0ff", marginBottom: "48px", textAlign: "center" }}>
            Mi camino
          </h2>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: 0,
                bottom: 0,
                width: "2px",
                background: "linear-gradient(180deg, #7c3aed, transparent)",
              }}
            />
            {timeline.map((item, i) => (
              <div key={i} style={{ paddingLeft: "56px", paddingBottom: "40px", position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "4px",
                    width: "18px",
                    height: "18px",
                    background: "#7c3aed",
                    borderRadius: "50%",
                    border: "3px solid #0a0a0f",
                    boxShadow: "0 0 10px rgba(124,58,237,0.5)",
                  }}
                />
                <div style={{ color: "#a78bfa", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                  {item.año}
                </div>
                <h3 style={{ color: "#f5f0ff", fontWeight: 700, fontSize: "1.1rem", marginBottom: "10px" }}>
                  {item.titulo}
                </h3>
                <p style={{ color: "rgba(245,240,255,0.65)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "40px", textAlign: "center" }}>
            Preguntas frecuentes
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
      <section style={{ padding: "80px 24px", textAlign: "center", borderTop: "1px solid rgba(124,58,237,0.15)" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "16px" }}>
          ¿Te identificas con mi historia?
        </h2>
        <p style={{ color: "rgba(245,240,255,0.65)", marginBottom: "32px", fontSize: "1rem" }}>
          Hablemos. Puedo acompañarte en tu propio proceso de transformación.
        </p>
        <Link href="/contacto" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Contáctame <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
