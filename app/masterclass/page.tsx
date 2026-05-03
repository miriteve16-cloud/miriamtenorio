"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const GFORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeTxq4gX9CKvpuromN5Hhz1ANk73TcSqF2s4gnxg7Jpum2B3Q/formResponse";
const WHATSAPP_URL = "https://chat.whatsapp.com/CnKql4iGkMhHZJsoYhYXyI";
const EVENT_DATE = new Date("2026-05-13T19:00:00-06:00");

const pilares = [
  { num: "01", titulo: "Claridad", desc: "Descubre exactamente qué negocio es para ti, a quién sirves y cuál es tu propuesta de valor única.", icon: "🎯" },
  { num: "02", titulo: "Estrategia", desc: "El mapa de ruta probado para pasar de idea a primeras ventas sin perder tiempo ni dinero.", icon: "🗺️" },
  { num: "03", titulo: "Sistema", desc: "Construye los procesos que hacen que tu negocio funcione incluso cuando tú no estás.", icon: "⚙️" },
  { num: "04", titulo: "Resultados", desc: "Acciones concretas que generan ingresos reales desde el primer día.", icon: "🚀" },
];

function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = EVENT_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
      {[
        { val: time.days, label: "Días" },
        { val: time.hours, label: "Horas" },
        { val: time.minutes, label: "Minutos" },
        { val: time.seconds, label: "Segundos" },
      ].map(({ val, label }) => (
        <div key={label} style={{ textAlign: "center", minWidth: "64px" }}>
          <div style={{
            background: "rgba(212,168,67,0.12)",
            border: "1px solid rgba(212,168,67,0.35)",
            borderRadius: "6px",
            padding: "12px 16px",
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem",
            fontWeight: 700,
            color: "#D4A843",
            lineHeight: 1,
            minWidth: "64px",
          }}>
            {String(val).padStart(2, "0")}
          </div>
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.65rem", letterSpacing: "0.12em", marginTop: "6px", fontFamily: "'Inter', sans-serif" }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(212,168,67,0.25)",
  borderRadius: "4px",
  color: "#ffffff",
  padding: "14px 16px",
  fontSize: "0.95rem",
  fontFamily: "'Inter', sans-serif",
  outline: "none",
  boxSizing: "border-box",
};

export default function MasterclassPage() {
  const [form, setForm] = useState({ nombre: "", whatsapp: "", situacion: "", vende: "", frena: "" });
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
    fd.append("entry.1107756395", form.situacion);
    fd.append("entry.964213705", form.vende);
    fd.append("entry.1581201708", form.frena);
    try {
      await fetch(GFORM_ACTION, { method: "POST", mode: "no-cors", body: fd });
    } catch { /* no-cors siempre "falla" en fetch pero sí envía */ }
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
        borderBottom: "1px solid rgba(212,168,67,0.1)",
        background: "#060008",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#D4A843" }}>
            Miriam Tenorio Velazco
          </span>
        </Link>
      </div>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(180deg, #1A0030 0%, #060008 60%)",
        padding: "60px 24px 56px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(212,168,67,0.1)",
            border: "1px solid rgba(212,168,67,0.35)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "28px",
          }}>
            <span style={{ width: "6px", height: "6px", background: "#D4A843", borderRadius: "50%", display: "inline-block" }} />
            <span style={{ color: "#D4A843", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em" }}>
              MASTERCLASS 100% GRATUITA
            </span>
          </div>

          {/* Título principal */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 7vw, 3.6rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}>
            De Idea a Negocio<br />
            <span style={{ color: "#D4A843" }}>Rentable en 4 Días</span>
          </h1>

          {/* Fecha */}
          <div style={{
            display: "inline-flex",
            flexDirection: "column" as const,
            alignItems: "center",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "16px 32px",
            marginBottom: "40px",
          }}>
            <span style={{ color: "#D4A843", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "4px" }}>
              MIÉRCOLES 13 DE MAYO DEL 2026
            </span>
            <span style={{ color: "#ffffff", fontSize: "1.4rem", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
              7:00 PM hora CDMX
            </span>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", marginTop: "4px" }}>
              En vivo · Acceso gratuito
            </span>
          </div>

          {/* Foto */}
          <div style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            border: "3px solid #D4A843",
            margin: "0 auto 20px",
            boxShadow: "0 0 40px rgba(212,168,67,0.25)",
            overflow: "hidden",
          }}>
            <img
              src="/miriam-foto.jpg"
              alt="Miriam Tenorio Velazco"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginBottom: "8px" }}>
            Con <strong style={{ color: "#ffffff" }}>Miriam Tenorio Velazco</strong>
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", letterSpacing: "0.06em", marginBottom: "40px" }}>
            Doctoranda · Autora · Mentora · Conferencista
          </p>

          {/* CTA principal */}
          <a href="#registro" style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #D4A843, #C9A96E)",
            color: "#060008",
            textDecoration: "none",
            padding: "18px 48px",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "0.06em",
            borderRadius: "4px",
            boxShadow: "0 8px 32px rgba(212,168,67,0.3)",
            marginBottom: "16px",
            transition: "transform 0.2s",
          }}>
            ✨ QUIERO MI LUGAR GRATIS
          </a>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
            CUPOS LIMITADOS · REGÍSTRATE AHORA
          </p>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section style={{
        background: "#0A000E",
        borderTop: "1px solid rgba(212,168,67,0.1)",
        borderBottom: "1px solid rgba(212,168,67,0.1)",
        padding: "36px 24px",
        textAlign: "center",
      }}>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.7rem", letterSpacing: "0.15em", marginBottom: "20px" }}>
          LA MASTERCLASS COMIENZA EN
        </p>
        <Countdown />
      </section>

      {/* LOS 4 PILARES */}
      <section style={{ padding: "72px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: "#D4A843", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "12px" }}>
            LO QUE VAS A APRENDER
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            color: "#ffffff",
            fontWeight: 700,
          }}>
            Los 4 pilares de un negocio que funciona
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}>
          {pilares.map((p, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(212,168,67,0.15)",
              borderRadius: "8px",
              padding: "28px 24px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: "linear-gradient(90deg, #D4A843, transparent)",
              }} />
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{p.icon}</div>
              <div style={{ color: "rgba(212,168,67,0.5)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "6px" }}>
                {p.num}
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.2rem",
                color: "#D4A843",
                marginBottom: "10px",
                fontWeight: 700,
              }}>
                {p.titulo}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.7 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section style={{
        background: "#0A000E",
        borderTop: "1px solid rgba(212,168,67,0.1)",
        borderBottom: "1px solid rgba(212,168,67,0.1)",
        padding: "72px 24px",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#D4A843", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "12px" }}>
            ESTA MASTERCLASS ES PARA TI SI...
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "#ffffff", marginBottom: "40px" }}>
            Reconoces esto en ti
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "14px" }}>
            {[
              "Tienes una idea de negocio pero no sabes por dónde empezar",
              "Llevas tiempo queriendo emprender pero el miedo o la duda te detienen",
              "Ya tienes algo pero no estás generando los ingresos que esperabas",
              "Quieres construir algo tuyo con propósito, no solo por dinero",
              "Estás lista para pasar del pensamiento a la acción",
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(212,168,67,0.1)",
                borderRadius: "6px",
                padding: "16px 20px",
                textAlign: "left",
              }}>
                <span style={{ color: "#D4A843", fontSize: "1.1rem", flexShrink: 0, marginTop: "1px" }}>✓</span>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MIRIAM */}
      <section style={{ padding: "72px 24px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#D4A843", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "12px" }}>
          TU MENTORA
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "#ffffff", marginBottom: "24px" }}>
          Miriam Tenorio Velazco
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "32px" }}>
          Doctoranda en Administración Pública, autora de <em style={{ color: "#D4A843" }}>"Mujer, eres la obra del Maestro"</em>, conferencista y mentora de mujeres emprendedoras. Con más de 15 años de trayectoria entre la academia, el gobierno y el mundo empresarial, Miriam acompaña a mujeres a transformar sus ideas en negocios reales con propósito.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          {["15+ años de experiencia", "Autora publicada", "Doctoranda UAGro", "Mentora activa"].map((tag) => (
            <span key={tag} style={{
              border: "1px solid rgba(212,168,67,0.3)",
              color: "#D4A843",
              padding: "6px 14px",
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
              borderRadius: "100px",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="registro" style={{
        background: "#0A000E",
        borderTop: "1px solid rgba(212,168,67,0.15)",
        padding: "72px 24px",
      }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ color: "#D4A843", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "12px" }}>
              PASO 1 DE 2
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "#ffffff", marginBottom: "12px" }}>
              Reserva tu lugar ahora
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }}>
              Es gratis · Tarda menos de 1 minuto
            </p>
          </div>

          {/* Formulario elegante */}
          {!enviado ? (
          <form onSubmit={handleSubmit} style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(212,168,67,0.2)",
            borderRadius: "8px",
            padding: "36px 32px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          }}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", color: "#D4A843", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                Nombre completo *
              </label>
              <input name="nombre" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre completo" style={inputStyle} />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", color: "#D4A843", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                WhatsApp (con lada) *
              </label>
              <input name="whatsapp" required value={form.whatsapp} onChange={handleChange} placeholder="+52 744 000 0000" style={inputStyle} />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", color: "#D4A843", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px", fontFamily: "'Inter', sans-serif" }}>
                ¿En qué situación estás? *
              </label>
              {["Tengo una idea de negocio", "Ya tengo un negocio", "Quiero empezar pero no sé qué hacer"].map(op => (
                <label key={op} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px", cursor: "pointer" }}>
                  <input type="radio" name="situacion" value={op} required onChange={handleChange}
                    style={{ accentColor: "#D4A843", width: "16px", height: "16px", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>{op}</span>
                </label>
              ))}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", color: "#D4A843", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                ¿Qué vendes o te gustaría vender? *
              </label>
              <input name="vende" required value={form.vende} onChange={handleChange} placeholder="Ej: ropa, servicios, comida..." style={inputStyle} />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <label style={{ display: "block", color: "#D4A843", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px", fontFamily: "'Inter', sans-serif" }}>
                ¿Qué es lo que más te está frenando hoy? *
              </label>
              {["No sé por dónde empezar", "No vendo lo que quisiera", "No tengo claro a quién vender", "No sé cómo estructurar mi negocio"].map(op => (
                <label key={op} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px", cursor: "pointer" }}>
                  <input type="radio" name="frena" value={op} required onChange={handleChange}
                    style={{ accentColor: "#D4A843", width: "16px", height: "16px", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>{op}</span>
                </label>
              ))}
            </div>

            <button type="submit" disabled={loading} style={{
              width: "100%",
              background: loading ? "rgba(212,168,67,0.4)" : "linear-gradient(135deg,#D4A843,#C9A96E)",
              color: "#060008",
              border: "none",
              padding: "18px",
              fontSize: "0.9rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              fontFamily: "'Inter', sans-serif",
              cursor: loading ? "not-allowed" : "pointer",
              borderRadius: "4px",
              boxShadow: "0 4px 20px rgba(212,168,67,0.25)",
            }}>
              {loading ? "ENVIANDO..." : "✨ QUIERO MI LUGAR GRATIS"}
            </button>
          </form>
          ) : (
          <div style={{
            background: "rgba(212,168,67,0.06)",
            border: "1px solid rgba(212,168,67,0.3)",
            borderRadius: "8px",
            padding: "48px 32px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎉</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#D4A843", marginBottom: "12px" }}>
              ¡Ya estás registrada!
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "8px" }}>
              {form.nombre}, tu lugar está reservado para el<br />
              <strong style={{ color: "#ffffff" }}>Miércoles 13 de mayo a las 7:00 PM CDMX.</strong>
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
              Ahora completa el paso 2 👇
            </p>
          </div>
          )}

          {/* Paso 2 - WhatsApp */}
          <div style={{
            marginTop: "40px",
            textAlign: "center",
            background: "rgba(37,211,102,0.06)",
            border: "1px solid rgba(37,211,102,0.2)",
            borderRadius: "8px",
            padding: "32px 24px",
          }}>
            <p style={{ color: "#D4A843", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", marginBottom: "12px" }}>
              PASO 2 DE 2 — MUY IMPORTANTE
            </p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#ffffff", marginBottom: "12px" }}>
              Únete al grupo de WhatsApp
            </h3>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginBottom: "28px", lineHeight: 1.7 }}>
              Aquí recibirás el enlace de acceso, recordatorios y material exclusivo antes de la masterclass.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#25D366",
                color: "#ffffff",
                textDecoration: "none",
                padding: "16px 36px",
                fontWeight: 800,
                fontSize: "0.95rem",
                letterSpacing: "0.05em",
                borderRadius: "4px",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              UNIRME AL GRUPO DE WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER MÍNIMO */}
      <footer style={{
        borderTop: "1px solid rgba(212,168,67,0.1)",
        padding: "24px",
        textAlign: "center",
        background: "#060008",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "rgba(212,168,67,0.5)" }}>
            miriamtenorio.com
          </span>
        </Link>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.72rem", marginTop: "8px" }}>
          © 2026 Miriam Tenorio Velazco · Todos los derechos reservados
        </p>
      </footer>

      <style>{`
        @media (max-width: 600px) {
          h1 { font-size: 1.9rem !important; }
          iframe { height: 720px !important; }
        }
        a:hover { opacity: 0.88; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
