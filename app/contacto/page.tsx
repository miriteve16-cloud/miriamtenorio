"use client";
import { useState } from "react";

const tiposConsulta = ["Conferencia / Keynote", "Evento Corporativo", "Mentoria Personal", "Colaboracion", "Medios / Prensa", "Conseguir el Libro", "Otro"];

const inputStyle = {
  width: "100%", background: "#111111", border: "1px solid #2A2520",
  padding: "14px 16px", color: "#F5F0E8", fontSize: "0.95rem",
  outline: "none", fontFamily: "'Inter', sans-serif", borderRadius: "2px",
  transition: "border-color 0.2s",
};

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", whatsapp: "", empresa: "", tipo: "", mensaje: "" });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setEnviado(true); setForm({ nombre: "", email: "", whatsapp: "", empresa: "", tipo: "", mensaje: "" }); }
      else setError("Hubo un error. Por favor intenta de nuevo.");
    } catch { setError("Error de conexión. Por favor intenta de nuevo."); }
    setEnviando(false);
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      <section style={{ padding: "80px 32px 40px", borderBottom: "1px solid #2A2520" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span className="section-label">Contacto</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#F5F0E8", marginBottom: "16px" }}>
            ¿Lista para escribir tu siguiente capítulo?
          </h1>
          <p style={{ color: "#A89880", fontSize: "1rem", maxWidth: "500px" }}>
            Conferencias, mentorías, colaboraciones y medios.
          </p>
        </div>
      </section>

      <section style={{ padding: "64px 32px 100px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "80px" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "#F5F0E8", marginBottom: "28px" }}>
              Información de contacto
            </h2>
            <div style={{ marginBottom: "40px" }}>
              <p style={{ color: "#A89880", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>Email</p>
              <a href="mailto:miriteve16@gmail.com" style={{ color: "#F5F0E8", textDecoration: "none", fontSize: "0.95rem" }}>miriteve16@gmail.com</a>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <p style={{ color: "#A89880", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px", fontFamily: "'Inter', sans-serif" }}>Al contratarme recibes</p>
              {["Respuesta en menos de 48 horas", "Propuesta personalizada para tu evento", "Llamada de alineacion", "Coordinacion completa pre y post evento"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#C9A96E", flexShrink: 0, marginTop: "2px" }}>—</span>
                  <p style={{ color: "#A89880", fontSize: "0.9rem" }}>{item}</p>
                </div>
              ))}
            </div>

            <a href="mailto:miriteve16@gmail.com" className="btn-secondary" style={{ display: "inline-block", fontSize: "0.85rem" }}>
              Escribir por email
            </a>
          </div>

          <div>
            {enviado ? (
              <div style={{ textAlign: "center", padding: "80px 40px", border: "1px solid rgba(201,169,110,0.3)", background: "#111111" }}>
                <div style={{ width: "48px", height: "1px", background: "#C9A96E", margin: "0 auto 24px" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#F5F0E8", marginBottom: "12px" }}>Mensaje recibido</h3>
                <p style={{ color: "#A89880" }}>Te responderé en menos de 48 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "#111111", border: "1px solid #2A2520", padding: "48px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", color: "#A89880", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>Nombre *</label>
                    <input name="nombre" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#A89880", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="tu@email.com" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", color: "#A89880", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>WhatsApp</label>
                    <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+52 000 000 0000" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "#A89880", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>Empresa</label>
                    <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Empresa u organización" style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", color: "#A89880", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>Tipo de consulta *</label>
                  <select name="tipo" required value={form.tipo} onChange={handleChange} style={{ ...inputStyle, background: "#111111" }}>
                    <option value="">Selecciona una opción</option>
                    {tiposConsulta.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: "28px" }}>
                  <label style={{ display: "block", color: "#A89880", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>Mensaje *</label>
                  <textarea name="mensaje" required value={form.mensaje} onChange={handleChange} rows={5} placeholder="Cuéntame en qué puedo ayudarte..." style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                {error && <p style={{ color: "#f87171", marginBottom: "16px", fontSize: "0.9rem" }}>{error}</p>}
                <button type="submit" disabled={enviando} className="btn-primary" style={{ width: "100%", fontSize: "0.9rem", padding: "16px" }}>
                  {enviando ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(2)>div{grid-template-columns:1fr!important;}form>div[style*="grid-template-columns:1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </div>
  );
}
