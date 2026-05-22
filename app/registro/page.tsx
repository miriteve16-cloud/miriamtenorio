"use client";
import { useState } from "react";
import Link from "next/link";

type FormData = {
  nombre: string;
  whatsapp: string;
  email: string;
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#1A0D2E",
  border: "1px solid rgba(201,169,110,0.2)",
  color: "#F5F0E8",
  padding: "14px 16px",
  fontSize: "0.95rem",
  fontFamily: "'Inter', sans-serif",
  outline: "none",
  borderRadius: "2px",
  boxSizing: "border-box",
};

export default function RegistroPage() {
  const [form, setForm] = useState<FormData>({ nombre: "", whatsapp: "", email: "" });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, folio: "LISTA-" + Math.random().toString(36).substring(2, 7).toUpperCase() }),
      });
    } catch { /* continúa aunque falle el correo */ }
    setEnviado(true);
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: "90px", paddingBottom: "80px", background: "#0D0618" }}>
      <div style={{ maxWidth: "540px", margin: "0 auto", padding: "60px 24px 0" }}>

        {/* ENCABEZADO */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{
            display: "inline-block",
            border: "1px solid rgba(212,55,154,0.35)",
            color: "#D4379A",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            padding: "6px 16px",
            fontFamily: "'Inter', sans-serif",
            background: "rgba(212,55,154,0.08)",
            marginBottom: "24px",
          }}>
            PRÓXIMOS EVENTOS · MIRIAM TENORIO
          </span>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            fontWeight: 700,
            color: "#F5F0E8",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}>
            Sé la primera en enterarte
          </h1>
          <p style={{ color: "#A89880", fontSize: "0.98rem", lineHeight: 1.7 }}>
            Apúntate y te aviso en cuanto anuncie la próxima conferencia, masterclass o taller. Sin spam, solo lo que importa.
          </p>
        </div>

        {/* FORMULARIO o CONFIRMACIÓN */}
        {!enviado ? (
          <form onSubmit={handleSubmit} style={{
            background: "#130A22",
            border: "1px solid rgba(201,169,110,0.15)",
            padding: "40px 36px",
            borderRadius: "4px",
          }}>
            <div style={{ marginBottom: "18px" }}>
              <label style={{ display: "block", color: "#A89880", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                Nombre completo *
              </label>
              <input name="nombre" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre" style={inputStyle} />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label style={{ display: "block", color: "#A89880", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                WhatsApp *
              </label>
              <input name="whatsapp" required value={form.whatsapp} onChange={handleChange} placeholder="+52 000 000 0000" style={inputStyle} />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <label style={{ display: "block", color: "#A89880", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                Email *
              </label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="tu@email.com" style={inputStyle} />
            </div>

            <button type="submit" disabled={loading} style={{
              width: "100%",
              background: loading ? "rgba(201,169,110,0.4)" : "#C9A96E",
              color: "#0D0618",
              border: "none",
              padding: "16px",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              fontFamily: "'Inter', sans-serif",
              cursor: loading ? "not-allowed" : "pointer",
              textTransform: "uppercase",
              borderRadius: "2px",
              transition: "all 0.2s",
            }}>
              {loading ? "Guardando..." : "Avísame del próximo evento"}
            </button>
          </form>

        ) : (
          <div style={{
            background: "#130A22",
            border: "1px solid rgba(201,169,110,0.2)",
            borderRadius: "4px",
            padding: "48px 36px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>✨</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#F5F0E8", marginBottom: "12px" }}>
              ¡Quedaste apuntada!
            </h2>
            <p style={{ color: "#A89880", lineHeight: 1.7, marginBottom: "32px", fontSize: "0.95rem" }}>
              Hola <strong style={{ color: "#F5F0E8" }}>{form.nombre}</strong>, te escribiré por WhatsApp en cuanto confirme la fecha del próximo evento.
            </p>
            <Link href="/" style={{
              display: "inline-block",
              background: "#C9A96E",
              color: "#0D0618",
              textDecoration: "none",
              padding: "14px 32px",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              fontFamily: "'Inter', sans-serif",
              borderRadius: "2px",
            }}>
              Volver al inicio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
