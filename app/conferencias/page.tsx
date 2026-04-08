import type { Metadata } from "next";
import Link from "next/link";
import { Mic, ArrowRight, Users, Heart, TrendingUp, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Conferencias y Keynotes | Miriam Tenorio Velazco",
  description:
    "Contrata a Miriam Tenorio Velazco para tu evento. Temas: transformación personal, emprendimiento femenino, liderazgo auténtico y resiliencia. Conferencista mexicana.",
  openGraph: {
    title: "Conferencias de Miriam Tenorio Velazco",
    description: "Experiencias auténticas y poderosas para eventos corporativos, retiros y congresos de mujeres.",
    url: "https://miriamtenorio.com/conferencias",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿En qué eventos puede dar conferencias Miriam Tenorio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miriam da conferencias en eventos corporativos, congresos de mujeres, retiros espirituales, convenciones de ventas, eventos de emprendimiento y graduaciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los temas de conferencia de Miriam Tenorio Velazco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sus temas incluyen: transformación personal desde el fondo, emprendimiento femenino, resiliencia y fe, liderazgo auténtico, cómo volver a empezar, y el poder de las decisiones difíciles.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo contratar a Miriam Tenorio para una conferencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes contactarla a través del formulario en miriamtenorio.com/contacto o directamente por WhatsApp al +52 744 175 7547.",
      },
    },
  ],
};

const temas = [
  {
    icon: <Heart size={32} color="#a78bfa" />,
    titulo: "Mujer, Eres La Obra del Maestro",
    subtitulo: "Keynote principal",
    desc: "La conferencia basada en su libro. Una experiencia íntima y poderosa donde Miriam comparte su historia de transformación. Mueve audiencias porque habla desde lo vivido, no desde lo aprendido.",
    duracion: "45-60 min",
    para: "Congresos de mujeres, eventos corporativos, retiros",
  },
  {
    icon: <TrendingUp size={32} color="#a78bfa" />,
    titulo: "Emprender Desde Cero: Lo que Nadie Te Cuenta",
    subtitulo: "Emprendimiento",
    desc: "El camino real del emprendimiento femenino. Sin poses, sin Instagram, solo las verdades que marcan la diferencia entre rendirse y seguir. Práctica, honesta y accionable.",
    duracion: "45-90 min",
    para: "Eventos de negocios, universidades, cámaras empresariales",
  },
  {
    icon: <Star size={32} color="#a78bfa" />,
    titulo: "Volver a Empezar: El Poder de las Segundas Oportunidades",
    subtitulo: "Resiliencia",
    desc: "Cuando todo se cae, ¿qué queda? Esta conferencia habla del proceso real de reconstrucción personal, familiar y profesional. Para quienes lideran equipos en crisis o personas en transición.",
    duracion: "30-60 min",
    para: "Corporativos, hospitales, iglesias, organizaciones sin fines de lucro",
  },
  {
    icon: <Users size={32} color="#a78bfa" />,
    titulo: "Liderazgo Desde la Autenticidad",
    subtitulo: "Liderazgo",
    desc: "Los mejores líderes no lideran desde la perfección, sino desde la verdad. Cómo construir equipos, familias y organizaciones basadas en la confianza y la vulnerabilidad estratégica.",
    duracion: "45-60 min",
    para: "Eventos ejecutivos, líderes de equipos, directivos",
  },
];

export default function ConferenciasPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        style={{
          padding: "100px 24px 80px",
          textAlign: "center",
          background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      >
        <Mic size={48} color="#a78bfa" style={{ margin: "0 auto 24px" }} />
        <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
          Conferencias y Keynotes
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f5f0ff", lineHeight: 1.15, marginBottom: "24px" }}>
          Una historia que{" "}
          <span style={{ background: "linear-gradient(135deg, #a78bfa, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            mueve audiencias
          </span>
        </h1>
        <p style={{ color: "rgba(245,240,255,0.7)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "650px", margin: "0 auto 40px" }}>
          Miriam no habla desde los libros que leyó. Habla desde lo que vivió. Y eso hace toda la diferencia en un escenario.
        </p>
        <Link href="/contacto" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Contratar para mi evento <ArrowRight size={16} />
        </Link>
      </section>

      {/* Temas */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "48px", textAlign: "center" }}>
            Temas disponibles
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            {temas.map((tema, i) => (
              <div key={i} className="card-purple" style={{ padding: "36px 28px" }}>
                <div style={{ marginBottom: "16px" }}>{tema.icon}</div>
                <div style={{ color: "#a78bfa", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                  {tema.subtitulo}
                </div>
                <h3 style={{ color: "#f5f0ff", fontWeight: 700, fontSize: "1.1rem", marginBottom: "14px", lineHeight: 1.3 }}>
                  {tema.titulo}
                </h3>
                <p style={{ color: "rgba(245,240,255,0.65)", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "20px" }}>
                  {tema.desc}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ background: "rgba(124,58,237,0.2)", color: "#c4b5fd", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem" }}>
                    ⏱ {tema.duracion}
                  </span>
                </div>
                <p style={{ color: "rgba(245,240,255,0.4)", fontSize: "0.8rem", marginTop: "12px" }}>
                  {tema.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué Miriam */}
      <section style={{ padding: "80px 24px", background: "rgba(124,58,237,0.03)", borderTop: "1px solid rgba(124,58,237,0.1)", borderBottom: "1px solid rgba(124,58,237,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "16px" }}>
            ¿Por qué Miriam en tu evento?
          </h2>
          <p style={{ color: "rgba(245,240,255,0.65)", marginBottom: "48px" }}>
            En un mundo de expertos que hablan de lo que leyeron, Miriam habla de lo que vivió.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {[
              { emoji: "🔥", titulo: "Autenticidad radical", desc: "Nada de guiones perfectos. Habla desde el corazón." },
              { emoji: "💜", titulo: "Conexión real", desc: "Las audiencias lloran, ríen y se levantan. Juntas." },
              { emoji: "📚", titulo: "Autora publicada", desc: "Respaldada por su libro y su historia verificable." },
              { emoji: "🎯", titulo: "Contenido a medida", desc: "Cada conferencia se adapta a tu audiencia y objetivo." },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>{item.emoji}</div>
                <h3 style={{ color: "#c4b5fd", fontWeight: 700, fontSize: "1rem", marginBottom: "8px" }}>{item.titulo}</h3>
                <p style={{ color: "rgba(245,240,255,0.55)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "40px", textAlign: "center" }}>
            Preguntas frecuentes
          </h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="card-purple" style={{ padding: "28px", marginBottom: "16px" }}>
              <h3 style={{ color: "#c4b5fd", fontWeight: 600, marginBottom: "10px", fontSize: "1rem" }}>{item.name}</h3>
              <p style={{ color: "rgba(245,240,255,0.7)", lineHeight: 1.7, fontSize: "0.95rem" }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "16px" }}>
          ¿Lista para llevar esta experiencia a tu evento?
        </h2>
        <p style={{ color: "rgba(245,240,255,0.65)", marginBottom: "32px" }}>
          Escríbenos y en 24 horas te respondemos con disponibilidad y propuesta.
        </p>
        <Link href="/contacto" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Solicitar información <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
