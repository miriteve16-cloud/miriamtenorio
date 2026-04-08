"use client";
import { useState } from "react";
import { Mail, Phone, Instagram, Youtube } from "lucide-react";

const tiposConsulta = [
  "Conferencia / Keynote",
  "Evento Corporativo",
  "Mentoría Personal",
  "Colaboración",
  "Medios / Prensa",
  "Conseguir el Libro",
  "Otro",
];

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    empresa: "",
    tipo: "",
    mensaje: "",
  });
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setEnviado(true);
        setForm({ nombre: "", email: "", whatsapp: "", empresa: "", tipo: "", mensaje: "" });
      } else {
        setError("Hubo un error. Por favor intenta de nuevo.");
      }
    } catch {
      setError("Error de conexión. Por favor intenta de nuevo.");
    }
    setEnviando(false);
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 60px", textAlign: "center", background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(124,58,237,0.12) 0%, transparent 70%)" }}>
        <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
          Contacto
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f5f0ff", lineHeight: 1.15, marginBottom: "20px" }}>
          Hablemos{" "}
          <span style={{ background: "linear-gradient(135deg, #a78bfa, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            juntas
          </span>
        </h1>
        <p style={{ color: "rgba(245,240,255,0.65)", fontSize: "1.05rem", maxWidth: "550px", margin: "0 auto" }}>
          ¿Tienes un evento, quieres el libro, o simplemente quieres conectar? Escríbeme — respondo en menos de 24 horas.
        </p>
      </section>

      {/* Contenido */}
      <section style={{ padding: "40px 24px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px" }}>

          {/* Sidebar */}
          <div>
            <h2 style={{ color: "#f5f0ff", fontWeight: 700, fontSize: "1.3rem", marginBottom: "28px" }}>
              Información de contacto
            </h2>

            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <div style={{ background: "rgba(124,58,237,0.2)", padding: "10px", borderRadius: "10px" }}>
                  <Mail size={20} color="#a78bfa" />
                </div>
                <div>
                  <p style={{ color: "rgba(245,240,255,0.5)", fontSize: "0.8rem", marginBottom: "2px" }}>Email</p>
                  <a href="mailto:miriteve16@gmail.com" style={{ color: "#c4b5fd", textDecoration: "none", fontSize: "0.95rem" }}>
                    miriteve16@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <div style={{ background: "rgba(124,58,237,0.2)", padding: "10px", borderRadius: "10px" }}>
                  <Phone size={20} color="#a78bfa" />
                </div>
                <div>
                  <p style={{ color: "rgba(245,240,255,0.5)", fontSize: "0.8rem", marginBottom: "2px" }}>WhatsApp</p>
                  <a href="https://wa.me/527441757547" target="_blank" rel="noopener noreferrer" style={{ color: "#c4b5fd", textDecoration: "none", fontSize: "0.95rem" }}>
                    +52 744 175 7547
                  </a>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{ color: "rgba(245,240,255,0.5)", fontSize: "0.85rem", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Redes sociales
              </p>
              {[
                { icon: <Instagram size={18} />, label: "@miriamtenorio1", href: "https://www.instagram.com/miriamtenorio1" },
                { icon: <Youtube size={18} />, label: "YouTube", href: "https://youtube.com/@miriamtenoriovelazco" },
                { icon: <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>TT</span>, label: "@miritenorio (TikTok)", href: "https://www.tiktok.com/@miritenorio" },
                { icon: <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>FB</span>, label: "Facebook", href: "https://www.facebook.com/share/1EFHUshA6C/" },
              ].map((red, i) => (
                <a key={i} href={red.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(245,240,255,0.65)", textDecoration: "none", marginBottom: "12px", fontSize: "0.9rem", transition: "color 0.2s" }}
                >
                  <span style={{ color: "#a78bfa" }}>{red.icon}</span>
                  {red.label}
                </a>
              ))}
            </div>

            {/* WhatsApp directo */}
            <a
              href="https://wa.me/527441757547?text=Hola%20Miriam%2C%20me%20gustar%C3%ADa%20conectar%20contigo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                background: "#25d366",
                color: "white",
                padding: "14px 24px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              💬 Escribir por WhatsApp
            </a>
          </div>

          {/* Formulario */}
          <div>
            {enviado ? (
              <div style={{ textAlign: "center", padding: "60px 40px", background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "24px" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>💜</div>
                <h3 style={{ color: "#f5f0ff", fontWeight: 700, fontSize: "1.4rem", marginBottom: "12px" }}>
                  ¡Mensaje recibido!
                </h3>
                <p style={{ color: "rgba(245,240,255,0.65)", lineHeight: 1.7 }}>
                  Gracias por escribirme. Te responderé en menos de 24 horas. ¡Hasta pronto! 🌸
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "rgba(124,58,237,0.05)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: "24px", padding: "40px" }}>
                <h2 style={{ color: "#f5f0ff", fontWeight: 700, fontSize: "1.3rem", marginBottom: "28px" }}>
                  Envíame un mensaje
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", color: "rgba(245,240,255,0.7)", fontSize: "0.85rem", marginBottom: "8px" }}>
                      Nombre *
                    </label>
                    <input
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      style={{ width: "100%", background: "rgba(10,10,15,0.6)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "10px", padding: "12px 16px", color: "#f5f0ff", fontSize: "0.95rem", outline: "none" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "rgba(245,240,255,0.7)", fontSize: "0.85rem", marginBottom: "8px" }}>
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      style={{ width: "100%", background: "rgba(10,10,15,0.6)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "10px", padding: "12px 16px", color: "#f5f0ff", fontSize: "0.95rem", outline: "none" }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", color: "rgba(245,240,255,0.7)", fontSize: "0.85rem", marginBottom: "8px" }}>
                      WhatsApp (opcional)
                    </label>
                    <input
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="+52 000 000 0000"
                      style={{ width: "100%", background: "rgba(10,10,15,0.6)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "10px", padding: "12px 16px", color: "#f5f0ff", fontSize: "0.95rem", outline: "none" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "rgba(245,240,255,0.7)", fontSize: "0.85rem", marginBottom: "8px" }}>
                      Empresa / Organización
                    </label>
                    <input
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      style={{ width: "100%", background: "rgba(10,10,15,0.6)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "10px", padding: "12px 16px", color: "#f5f0ff", fontSize: "0.95rem", outline: "none" }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", color: "rgba(245,240,255,0.7)", fontSize: "0.85rem", marginBottom: "8px" }}>
                    Tipo de consulta *
                  </label>
                  <select
                    name="tipo"
                    required
                    value={form.tipo}
                    onChange={handleChange}
                    style={{ width: "100%", background: "rgba(10,10,15,0.9)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "10px", padding: "12px 16px", color: "#f5f0ff", fontSize: "0.95rem", outline: "none" }}
                  >
                    <option value="">Selecciona una opción</option>
                    {tiposConsulta.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", color: "rgba(245,240,255,0.7)", fontSize: "0.85rem", marginBottom: "8px" }}>
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Cuéntame en qué puedo ayudarte..."
                    style={{ width: "100%", background: "rgba(10,10,15,0.6)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "10px", padding: "12px 16px", color: "#f5f0ff", fontSize: "0.95rem", outline: "none", resize: "vertical" }}
                  />
                </div>

                {error && <p style={{ color: "#f87171", marginBottom: "16px", fontSize: "0.9rem" }}>{error}</p>}

                <button type="submit" disabled={enviando} className="btn-primary" style={{ width: "100%", fontSize: "1rem", padding: "16px" }}>
                  {enviando ? "Enviando..." : "Enviar mensaje 💜"}
                </button>
              </form>
            )}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section > div[style*="grid-template-columns: 1fr 1.5fr"] {
              grid-template-columns: 1fr !important;
            }
            form > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
