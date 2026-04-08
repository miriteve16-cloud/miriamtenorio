import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Prensa | Miriam Tenorio Velazco",
  description:
    "Cobertura de prensa y apariciones mediáticas de Miriam Tenorio Velazco. Para solicitar entrevistas o material de prensa, contáctanos.",
  openGraph: {
    title: "Prensa — Miriam Tenorio Velazco",
    url: "https://miriamtenorio.com/prensa",
  },
};

const temasPrensa = [
  { emoji: "🔄", titulo: "Transformación Personal", desc: "Historia real de recuperación, resiliencia y reconstrucción desde el fondo." },
  { emoji: "👩‍💼", titulo: "Emprendimiento Femenino", desc: "La realidad del emprendimiento para mujeres en México y Latinoamérica." },
  { emoji: "📚", titulo: "Literatura de Autoayuda", desc: "Autora de 'Mujer Eres La Obra del Maestro': proceso creativo e impacto." },
  { emoji: "🙏", titulo: "Fe y Negocios", desc: "Cómo integrar la fe como herramienta de liderazgo y toma de decisiones." },
  { emoji: "👨‍👩‍👧", titulo: "Familia y Trabajo", desc: "Reconciliar la vida profesional, la recuperación personal y el núcleo familiar." },
  { emoji: "💡", titulo: "Liderazgo Femenino", desc: "El nuevo perfil del liderazgo femenino: auténtico, vulnerable y poderoso." },
];

export default function PrensaPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 60px", textAlign: "center", background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(124,58,237,0.12) 0%, transparent 70%)" }}>
        <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
          Sala de Prensa
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f5f0ff", lineHeight: 1.15, marginBottom: "20px" }}>
          Prensa y{" "}
          <span style={{ background: "linear-gradient(135deg, #a78bfa, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Media
          </span>
        </h1>
        <p style={{ color: "rgba(245,240,255,0.65)", fontSize: "1.05rem", maxWidth: "550px", margin: "0 auto 32px" }}>
          ¿Eres periodista, podcaster o productor de contenido? Aquí tienes todo lo que necesitas para cubrir la historia de Miriam.
        </p>
        <Link href="/contacto" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Solicitar entrevista <ArrowRight size={16} />
        </Link>
      </section>

      {/* Próximamente cobertura */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", padding: "60px 40px", background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: "24px", marginBottom: "60px" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📰</div>
            <h2 style={{ color: "#f5f0ff", fontWeight: 700, fontSize: "1.5rem", marginBottom: "12px" }}>
              Cobertura en construcción
            </h2>
            <p style={{ color: "rgba(245,240,255,0.6)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
              Miriam está construyendo su presencia en medios. Si eres parte de la prensa y quieres ser de los primeros en cubrir su historia, este es el momento.
            </p>
          </div>

          {/* Temas para prensa */}
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "32px" }}>
            Ángulos y temas disponibles
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "60px" }}>
            {temasPrensa.map((tema, i) => (
              <div key={i} className="card-purple" style={{ padding: "24px" }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{tema.emoji}</div>
                <h3 style={{ color: "#c4b5fd", fontWeight: 700, fontSize: "1rem", marginBottom: "8px" }}>{tema.titulo}</h3>
                <p style={{ color: "rgba(245,240,255,0.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>{tema.desc}</p>
              </div>
            ))}
          </div>

          {/* Media Kit */}
          <div style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(76,29,149,0.15))", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "20px", padding: "40px", textAlign: "center" }}>
            <h2 style={{ color: "#f5f0ff", fontWeight: 700, fontSize: "1.5rem", marginBottom: "12px" }}>
              📁 Media Kit disponible
            </h2>
            <p style={{ color: "rgba(245,240,255,0.65)", marginBottom: "28px", lineHeight: 1.7 }}>
              Incluye: Biografía corta y larga · Foto profesional HD · Temas de entrevista sugeridos · Datos de contacto
            </p>
            <Link href="/contacto" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Solicitar Media Kit <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bio para prensa */}
      <section style={{ padding: "60px 24px 100px", background: "rgba(124,58,237,0.03)", borderTop: "1px solid rgba(124,58,237,0.1)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "32px" }}>
            Bio oficial para prensa
          </h2>

          <div className="card-purple" style={{ padding: "32px", marginBottom: "24px" }}>
            <div style={{ color: "#a78bfa", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
              Versión corta (50 palabras)
            </div>
            <p style={{ color: "rgba(245,240,255,0.85)", lineHeight: 1.8 }}>
              Miriam Tenorio Velazco es empresaria, autora y coach de negocios mexicana. Autora del libro <em>&ldquo;Mujer Eres La Obra del Maestro&rdquo;</em>, inspira a mujeres a transformarse y emprender desde la autenticidad. Su historia de recuperación personal es la base de su mensaje y su método.
            </p>
          </div>

          <div className="card-purple" style={{ padding: "32px" }}>
            <div style={{ color: "#a78bfa", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
              Versión larga (150 palabras)
            </div>
            <p style={{ color: "rgba(245,240,255,0.85)", lineHeight: 1.8 }}>
              Miriam Tenorio Velazco es empresaria, autora y coach de negocios con sede en México. Después de atravesar uno de los momentos más difíciles de su vida, tomó la decisión de reconstruirse desde la fe, la disciplina y la verdad.
            </p>
            <p style={{ color: "rgba(245,240,255,0.85)", lineHeight: 1.8, marginTop: "16px" }}>
              Su primer libro, <em>&ldquo;Mujer Eres La Obra del Maestro — Naciste para algo más grande&rdquo;</em>, nació de esa experiencia y se ha convertido en una herramienta de transformación para mujeres que buscan volver a empezar.
            </p>
            <p style={{ color: "rgba(245,240,255,0.85)", lineHeight: 1.8, marginTop: "16px" }}>
              Hoy, a través de conferencias, mentorías y su presencia digital, Miriam acompaña a emprendedoras y mujeres en proceso de cambio, compartiendo un mensaje claro: no importa desde dónde empiezas, sino que empieces. Su autenticidad y su historia verificable la distinguen en un mundo de expertos que hablan de lo que leyeron.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
