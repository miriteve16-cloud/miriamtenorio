"use client";
import { useState } from "react";
import Link from "next/link";

const WHATSAPP_GROUP = "https://chat.whatsapp.com/XXXXXXXXXXXXXXXXXX"; // ← reemplazar con link real

const GFORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeTxq4gX9CKvpuromN5Hhz1ANk73TcSqF2s4gnxg7Jpum2B3Q/formResponse";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(201,169,110,0.25)",
  borderRadius: "4px",
  color: "#F5F0E8",
  padding: "14px 16px",
  fontSize: "0.95rem",
  fontFamily: "'Inter', sans-serif",
  outline: "none",
  boxSizing: "border-box",
};

export default function RoblesPage() {
  const [form, setForm] = useState({ nombre: "", whatsapp: "", colonia: "", problema: "" });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData();
    fd.append("entry.1488884290", form.nombre);
    fd.append("entry.2087587791", form.whatsapp);
    fd.append("entry.964213705", form.colonia);
    fd.append("entry.1581201708", form.problema);
    try {
      await fetch(GFORM_ACTION, { method: "POST", mode: "no-cors", body: fd });
    } catch { /* no-cors siempre falla en fetch pero sí envía */ }
    setEnviado(true);
    setLoading(false);
  };

  return (
    <div style={{ background: "#060008", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>

      {/* NAV MÍNIMO */}
      <div style={{
        padding: "16px 24px",
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid rgba(201,169,110,0.1)",
        background: "#060008",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#C9A96E" }}>
            Miriam Tenorio Velazco
          </span>
        </Link>
      </div>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(180deg, #1A0030 0%, #060008 70%)",
        padding: "72px 24px 64px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>

          {/* Versículo */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(201,169,110,0.08)",
            border: "1px solid rgba(201,169,110,0.25)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}>
            <span style={{ color: "#C9A96E", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em" }}>
              ISAÍAS 61:3
            </span>
          </div>

          {/* Título */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 8vw, 4rem)",
            fontWeight: 700,
            color: "#F5F0E8",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}>
            Robles de<br />
            <span style={{ color: "#C9A96E" }}>Justicia</span>
          </h1>

          {/* Cita bíblica */}
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 36px",
          }}>
            "...para que se llamen robles de justicia, plantío del Señor, para que él sea glorificado."
          </p>

          {/* Descripción */}
          <p style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            maxWidth: "560px",
            margin: "0 auto 44px",
          }}>
            Una comunidad de personas enraizadas en la justicia y el propósito. Ciudadanas y ciudadanos comprometidos con construir un Acapulco más digno, con más oportunidades para todas las familias.
          </p>

          {/* CTA */}
          <a href="#registro" style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #C9A96E, #D4A843)",
            color: "#060008",
            textDecoration: "none",
            padding: "18px 48px",
            fontWeight: 800,
            fontSize: "0.95rem",
            letterSpacing: "0.08em",
            borderRadius: "4px",
            boxShadow: "0 8px 32px rgba(201,169,110,0.25)",
            fontFamily: "'Inter', sans-serif",
          }}>
            HAGÁMOSLO JUNTOS
          </a>
        </div>
      </section>

      {/* POR QUÉ */}
      <section style={{
        background: "#0D0618",
        borderTop: "1px solid rgba(201,169,110,0.1)",
        borderBottom: "1px solid rgba(201,169,110,0.1)",
        padding: "72px 24px",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <p style={{ color: "#C9A96E", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "12px" }}>
              NUESTRA VISIÓN
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              color: "#F5F0E8",
              lineHeight: 1.2,
            }}>
              Un roble no se mueve con el viento.
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}>
            {[
              { num: "01", titulo: "Raíces profundas", desc: "Actuamos desde la fe, la integridad y el compromiso genuino con nuestra comunidad." },
              { num: "02", titulo: "Justicia real", desc: "Trabajamos por un Acapulco donde cada familia tenga dignidad, seguridad y oportunidades." },
              { num: "03", titulo: "Liderazgo con propósito", desc: "No buscamos poder por el poder. Buscamos servir desde la convicción y el carácter." },
              { num: "04", titulo: "Comunidad que actúa", desc: "Somos personas que no solo hablamos de cambio — lo construimos juntas, colonia por colonia." },
            ].map((p, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,169,110,0.15)",
                borderRadius: "8px",
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: "linear-gradient(90deg, #C9A96E, transparent)",
                }} />
                <div style={{ color: "rgba(201,169,110,0.4)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "10px" }}>
                  {p.num}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  color: "#F5F0E8",
                  marginBottom: "10px",
                }}>
                  {p.titulo}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MIRIAM */}
      <section style={{ padding: "72px 24px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <div style={{
          width: "100px", height: "100px",
          borderRadius: "50%",
          border: "2px solid #C9A96E",
          margin: "0 auto 20px",
          overflow: "hidden",
          boxShadow: "0 0 32px rgba(201,169,110,0.2)",
        }}>
          <img src="/miriam-foto.jpg" alt="Miriam Tenorio Velazco"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <p style={{ color: "#C9A96E", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "12px" }}>
          QUIEN CONVOCA
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#F5F0E8", marginBottom: "16px" }}>
          Miriam Tenorio Velazco
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "12px" }}>
          Doctoranda en Administración Pública, autora, mentora y conferencista. Con más de 15 años de experiencia en la academia, el gobierno y el mundo empresarial.
        </p>
        <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontSize: "0.95rem" }}>
          Acapulqueña comprometida con el desarrollo de nuestra ciudad y con la participación ciudadana como motor de transformación real.
        </p>
      </section>

      {/* FORMULARIO */}
      <section id="registro" style={{
        background: "#0D0618",
        borderTop: "1px solid rgba(201,169,110,0.15)",
        padding: "72px 24px 80px",
      }}>
        <div style={{ maxWidth: "580px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <p style={{ color: "#C9A96E", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "12px" }}>
              SÚMATE
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "#F5F0E8", marginBottom: "12px" }}>
              Regístrate en la comunidad
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem" }}>
              Es gratuito · Sin compromisos · Solo personas con propósito
            </p>
          </div>

          {!enviado ? (
            <form onSubmit={handleSubmit} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(201,169,110,0.2)",
              borderRadius: "8px",
              padding: "36px 32px",
            }}>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", color: "#C9A96E", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                  Nombre completo *
                </label>
                <input name="nombre" required value={form.nombre} onChange={handleChange}
                  placeholder="Tu nombre completo" style={inputStyle} />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", color: "#C9A96E", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                  WhatsApp *
                </label>
                <input name="whatsapp" required value={form.whatsapp} onChange={handleChange}
                  placeholder="+52 744 000 0000" style={inputStyle} />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", color: "#C9A96E", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                  Colonia donde vives *
                </label>
                <input name="colonia" required value={form.colonia} onChange={handleChange}
                  placeholder="Ej: Jardín, Las Brisas, Renacimiento..." style={inputStyle} />
              </div>

              <div style={{ marginBottom: "32px" }}>
                <label style={{ display: "block", color: "#C9A96E", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                  ¿Cuál es el principal problema que ves en tu colonia? *
                </label>
                <textarea name="problema" required value={form.problema} onChange={handleChange}
                  placeholder="Cuéntame con tus palabras..." rows={3}
                  style={{ ...inputStyle, resize: "vertical" }} />
              </div>

              <button type="submit" disabled={loading} style={{
                width: "100%",
                background: loading ? "rgba(201,169,110,0.4)" : "linear-gradient(135deg,#C9A96E,#D4A843)",
                color: "#060008",
                border: "none",
                padding: "18px",
                fontSize: "0.9rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                fontFamily: "'Inter', sans-serif",
                cursor: loading ? "not-allowed" : "pointer",
                borderRadius: "4px",
                boxShadow: "0 4px 20px rgba(201,169,110,0.2)",
              }}>
                {loading ? "ENVIANDO..." : "HAGÁMOSLO JUNTOS"}
              </button>

            </form>

          ) : (
            /* CONFIRMACIÓN + WHATSAPP */
            <div style={{ textAlign: "center" }}>
              <div style={{
                background: "rgba(201,169,110,0.06)",
                border: "1px solid rgba(201,169,110,0.25)",
                borderRadius: "8px",
                padding: "48px 32px",
                marginBottom: "24px",
              }}>
                <div style={{ fontSize: "2.8rem", marginBottom: "16px" }}>🌳</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#C9A96E", marginBottom: "12px" }}>
                  ¡Ya eres parte de los Robles!
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "24px" }}>
                  Hola <strong style={{ color: "#F5F0E8" }}>{form.nombre}</strong>, gracias por sumarte. Ahora únete al grupo de WhatsApp para mantenerte al tanto de todo.
                </p>
              </div>

              {/* PASO 2 — WHATSAPP */}
              <div style={{
                background: "rgba(37,211,102,0.06)",
                border: "1px solid rgba(37,211,102,0.2)",
                borderRadius: "8px",
                padding: "32px 24px",
              }}>
                <p style={{ color: "#C9A96E", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "12px" }}>
                  ÚLTIMO PASO
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "#ffffff", marginBottom: "12px" }}>
                  Únete al grupo de WhatsApp
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginBottom: "24px", lineHeight: 1.7 }}>
                  Ahí compartiremos información, convocatorias y espacios de participación ciudadana.
                </p>
                <a href={WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#25D366",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "16px 32px",
                  borderRadius: "4px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  fontFamily: "'Inter', sans-serif",
                }}>
                  <span style={{ fontSize: "1.2rem" }}>💬</span>
                  UNIRME AL GRUPO
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER MÍNIMO */}
      <div style={{
        textAlign: "center",
        padding: "24px",
        borderTop: "1px solid rgba(201,169,110,0.1)",
        color: "rgba(255,255,255,0.3)",
        fontSize: "0.78rem",
        fontFamily: "'Inter', sans-serif",
      }}>
        © 2026 Miriam Tenorio Velazco · <Link href="/" style={{ color: "rgba(201,169,110,0.5)", textDecoration: "none" }}>miriamtenorio.com</Link>
      </div>

    </div>
  );
}
