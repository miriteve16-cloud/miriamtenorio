import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "Conferencias, Talleres y Mentorías | Miriam Tenorio Velazco",
  description:
    "Empresaria, autora, conferencista y docente universitaria con experiencia directiva en administración pública estatal y municipal. Conocimiento que transforma. Liderazgo que trasciende.",
  openGraph: {
    title: "Conferencias de Miriam Tenorio Velazco",
    description: "Conocimiento académico, experiencia gubernamental y empresarial, y transformación humana para tu evento.",
    url: "https://miriamtenorio.com.mx/conferencias",
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
        text: "Miriam da conferencias en foros de gobierno, eventos corporativos, congresos universitarios, congresos de mujeres, retiros de liderazgo, convenciones empresariales y eventos de administración pública.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los temas de conferencia de Miriam Tenorio Velazco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sus temas incluyen: administración pública y gobernanza, ética y responsabilidad social, emprendimiento e innovación social, estrategia y desarrollo empresarial, liderazgo y desarrollo organizacional, mercadotecnia y comunicación, liderazgo femenino, y transformación personal y propósito.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la preparación académica de Miriam Tenorio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es licenciada en Comunicación y Relaciones Públicas, maestra en Mercadotecnia y cuenta con estudios de Doctorado en Administración Pública. Ha sido docente universitaria en licenciatura y posgrado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué experiencia gubernamental tiene Miriam Tenorio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tiene trayectoria directiva en administración pública estatal y municipal: Directora General de Acciones Prioritarias en Secretaría de Bienestar de Guerrero, Oficial Mayor Recaudadora del Gobierno del Estado, Directora General del DIF Municipal de Taxco, y Asesora en Desarrollo Económico del Ayuntamiento de Acapulco.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo contratar a Miriam Tenorio para una conferencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes contactarla a través del formulario en miriamtenorio.com.mx/contacto o por correo a miriteve16@gmail.com.",
      },
    },
  ],
};

const areas = [
  {
    num: "01",
    titulo: "Administración pública, gobernanza y políticas públicas",
    desc: "Planeación estratégica gubernamental, diseño y evaluación de políticas públicas, gestión orientada a resultados, generación de valor público, administración de recursos, transparencia, rendición de cuentas, innovación gubernamental y profesionalización del servicio público.",
  },
  {
    num: "02",
    titulo: "Ética y responsabilidad social",
    desc: "Integridad, sostenibilidad, responsabilidad empresarial e institucional, y desarrollo sostenible.",
  },
  {
    num: "03",
    titulo: "Emprendimiento e innovación social",
    desc: "Proyectos comunitarios, diseño de soluciones, pruebas piloto y evaluación del impacto social.",
  },
  {
    num: "04",
    titulo: "Estrategia y desarrollo empresarial",
    desc: "Método Impulso, modelos de negocio, ventas, rentabilidad e inteligencia artificial aplicada.",
  },
  {
    num: "05",
    titulo: "Liderazgo y desarrollo organizacional",
    desc: "Pensamiento estratégico, dirección de equipos, toma de decisiones y cultura organizacional.",
  },
  {
    num: "06",
    titulo: "Mercadotecnia y comunicación",
    desc: "Identidad institucional, posicionamiento, marca personal y comunicación estratégica.",
  },
  {
    num: "07",
    titulo: "Liderazgo femenino",
    desc: "Autonomía económica, participación social y mujeres en espacios de decisión.",
  },
  {
    num: "08",
    titulo: "Transformación personal y propósito",
    desc: "Resiliencia, identidad, fe, congruencia y liderazgo desde el SER.",
  },
];

const insignia = [
  {
    num: "01",
    titulo: "Gobernar es servir, no servirse",
    area: "Administración pública y liderazgo institucional",
    desc: "El ejercicio del poder, la ética gubernamental, la responsabilidad institucional y la generación de valor público.",
    para: "Foros de gobierno, universidades, congresos de administración pública",
    duracion: "45-90 min",
  },
  {
    num: "02",
    titulo: "El precio de nuestras decisiones",
    area: "Ética y responsabilidad social",
    desc: "Las consecuencias humanas, económicas, institucionales y sociales de las decisiones que tomamos.",
    para: "Corporativos, gobierno, instituciones educativas",
    duracion: "45-60 min",
  },
  {
    num: "03",
    titulo: "De una necesidad social a una política pública",
    area: "Emprendimiento e innovación social",
    desc: "El diseño de soluciones comunitarias, su validación mediante pruebas piloto y sus posibilidades de crecimiento e institucionalización.",
    para: "Foros de gobierno, universidades, organizaciones civiles",
    duracion: "60-90 min",
  },
  {
    num: "04",
    titulo: "Método Impulso: de la idea a la rentabilidad",
    area: "Estrategia empresarial",
    desc: "Herramientas para construir negocios con claridad, estrategia comercial, estructura financiera y propósito.",
    para: "Cámaras empresariales, universidades, eventos de emprendimiento",
    duracion: "60-90 min",
  },
  {
    num: "05",
    titulo: "Mujeres que deciden, lideran y transforman",
    area: "Liderazgo femenino",
    desc: "Autonomía económica, identidad, preparación y participación de las mujeres en espacios de decisión.",
    para: "Congresos de mujeres, eventos corporativos, gobierno",
    duracion: "45-60 min",
  },
  {
    num: "06",
    titulo: "Primero el SER y después el HACER",
    area: "Liderazgo y transformación humana",
    desc: "Identidad, congruencia, responsabilidad, propósito y liderazgo consciente como base de toda transformación real.",
    para: "Retiros, eventos ejecutivos, congresos de desarrollo humano",
    duracion: "45-60 min",
  },
  {
    num: "07",
    titulo: "Mujer, eres la obra del Maestro",
    area: "Keynote principal · basada en su libro",
    desc: "Una experiencia íntima y poderosa donde Miriam comparte su historia de transformación. Mueve audiencias porque habla desde lo vivido, con fe, vulnerabilidad y esperanza.",
    para: "Congresos de mujeres, retiros espirituales, eventos corporativos",
    duracion: "45-60 min",
  },
];

const diferenciadores = [
  {
    titulo: "Preparación académica",
    desc: "Licenciada en Comunicación y Relaciones Públicas, maestra en Mercadotecnia y con estudios de Doctorado en Administración Pública.",
  },
  {
    titulo: "Experiencia gubernamental",
    desc: "Trayectoria directiva en administración pública estatal y municipal: desarrollo económico, bienestar social, administración fiscal, asistencia social y gestión territorial.",
  },
  {
    titulo: "Experiencia empresarial",
    desc: "Empresaria, mentora de negocios y creadora del Método Impulso. Comparte herramientas desde la experiencia de haber construido y dirigido negocios propios.",
  },
  {
    titulo: "Vocación académica",
    desc: "Docente universitaria en licenciatura y posgrado, especializada en pensamiento estratégico, toma de decisiones y emprendimiento.",
  },
  {
    titulo: "Compromiso social",
    desc: "Promueve el desarrollo comunitario, la responsabilidad social, el liderazgo femenino y la vinculación entre gobierno, empresa, academia y sociedad.",
  },
  {
    titulo: "Contenidos personalizados",
    desc: "Conferencias, talleres y programas de formación diseñados de acuerdo con las necesidades y objetivos de cada organización.",
  },
];

export default function ConferenciasPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{
        padding: "90px 24px 80px",
        textAlign: "center",
        background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(124,58,237,0.15) 0%, transparent 70%)",
      }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ color: "#a78bfa", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "20px" }}>
            Conferencias · Talleres · Mentorías
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 800, color: "#f5f0ff", lineHeight: 1.15, marginBottom: "20px" }}>
            Conocimiento que transforma.{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Liderazgo que trasciende.
            </span>
          </h1>
          <p style={{ color: "rgba(245,240,255,0.78)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong style={{ color: "#f5f0ff" }}>Miriam Tenorio Velazco</strong> — Empresaria, autora, conferencista, mentora de negocios y docente universitaria con experiencia directiva en la administración pública estatal y municipal.
          </p>
          <p style={{ color: "rgba(245,240,255,0.65)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "36px" }}>
            Integra conocimiento académico, experiencia profesional y transformación humana para fortalecer personas, organizaciones e instituciones.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contacto" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Solicitar conferencia <ArrowRight size={16} />
            </Link>
          </div>
          <p style={{ color: "#c4b5fd", fontSize: "1rem", fontWeight: 700, fontStyle: "italic", marginTop: "32px" }}>
            "Primero el SER y después el HACER."
          </p>
        </div>
      </section>

      {/* ÁREAS DE ESPECIALIZACIÓN */}
      <section style={{ padding: "80px 24px", background: "#0a0a0f" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div style={{ color: "#a78bfa", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px" }}>
              Áreas de especialización
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#f5f0ff", marginBottom: "12px" }}>
              Conocimiento y experiencia para cada desafío
            </h2>
            <p style={{ color: "rgba(245,240,255,0.55)", fontSize: "0.95rem", maxWidth: "620px", margin: "0 auto" }}>
              Ocho áreas de especialización diseñadas para fortalecer las capacidades de personas, equipos, empresas, instituciones educativas, entidades gubernamentales y organizaciones de la sociedad civil, mediante conocimiento estratégico, herramientas prácticas y soluciones alineadas con los desafíos de cada sector.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {areas.map((a, i) => (
              <div key={i} className="card-purple" style={{ padding: "24px", borderRadius: "10px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #7c3aed, transparent)" }} />
                <div style={{ color: "rgba(167,139,250,0.4)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "8px" }}>{a.num}</div>
                <h3 style={{ color: "#f5f0ff", fontSize: "0.97rem", fontWeight: 700, marginBottom: "8px", lineHeight: 1.4 }}>{a.titulo}</h3>
                <p style={{ color: "rgba(245,240,255,0.55)", fontSize: "0.85rem", lineHeight: 1.7 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFERENCIAS INSIGNIA */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div style={{ color: "#a78bfa", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px" }}>
              Conferencias insignia
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#f5f0ff" }}>
              Propuestas principales
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {insignia.map((c, i) => (
              <div key={i} className="card-purple" style={{ padding: "28px", borderRadius: "12px" }}>
                <div style={{ color: "#a78bfa", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "6px" }}>{c.num}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f0ff", fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px", lineHeight: 1.3 }}>
                  {c.titulo}
                </h3>
                <div style={{ color: "#c4b5fd", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "12px", textTransform: "uppercase" }}>
                  {c.area}
                </div>
                <p style={{ color: "rgba(245,240,255,0.65)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "16px" }}>{c.desc}</p>
                <div style={{ borderTop: "1px solid rgba(124,58,237,0.2)", paddingTop: "12px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ color: "rgba(245,240,255,0.4)", fontSize: "0.78rem" }}>⏱ {c.duracion}</span>
                  <span style={{ color: "rgba(245,240,255,0.4)", fontSize: "0.78rem" }}>{c.para}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ CONTRATARME */}
      <section style={{ padding: "80px 24px", background: "#0a0a0f" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ color: "#a78bfa", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px" }}>
              ¿Por qué contratarme?
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#f5f0ff", marginBottom: "12px" }}>
              Una trayectoria que integra conocimiento, experiencia, conciencia y propósito.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "40px" }}>
            {diferenciadores.map((d, i) => (
              <div key={i} className="card-purple" style={{ padding: "24px", borderRadius: "10px" }}>
                <h3 style={{ color: "#c4b5fd", fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>
                  {d.titulo}
                </h3>
                <p style={{ color: "rgba(245,240,255,0.65)", fontSize: "0.9rem", lineHeight: 1.7 }}>{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="card-purple" style={{ padding: "32px 36px", borderRadius: "12px", textAlign: "center" }}>
            <p style={{ color: "rgba(245,240,255,0.78)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "16px", fontStyle: "italic" }}>
              "No hablo del emprendimiento sin haber emprendido, del servicio público sin haber servido, del liderazgo sin haber dirigido ni de la transformación sin haberme transformado."
            </p>
            <p style={{ color: "#a78bfa", fontWeight: 700, fontSize: "0.9rem" }}>— Miriam Tenorio Velazco</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "40px", textAlign: "center" }}>
            Preguntas frecuentes
          </h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="card-purple" style={{ padding: "24px 28px", marginBottom: "12px", borderRadius: "10px" }}>
              <h3 style={{ color: "#c4b5fd", fontWeight: 600, marginBottom: "10px", fontSize: "1rem" }}>{item.name}</h3>
              <p style={{ color: "rgba(245,240,255,0.7)", lineHeight: 1.7, fontSize: "0.95rem" }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center", borderTop: "1px solid rgba(124,58,237,0.15)" }}>
        <div style={{ color: "#a78bfa", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "16px" }}>
          Contratación
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "#f5f0ff", marginBottom: "12px" }}>
          Conocimiento para decidir.<br />
          <span style={{ background: "linear-gradient(135deg, #a78bfa, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Experiencia para construir. Conciencia para transformar.
          </span>
        </h2>
        <p style={{ color: "rgba(245,240,255,0.65)", marginBottom: "36px", fontSize: "1rem", maxWidth: "520px", margin: "0 auto 36px" }}>
          Escríbeme para recibir información sobre disponibilidad, contenidos y cotización para tu evento.
        </p>
        <Link href="/contacto" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Solicitar información <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
