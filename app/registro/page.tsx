"use client";
import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

type FormData = {
  nombre: string;
  whatsapp: string;
  email: string;
  negocio: string;
};

type Registro = FormData & { folio: string };

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
  const [form, setForm] = useState<FormData>({ nombre: "", whatsapp: "", email: "", negocio: "" });
  const [registro, setRegistro] = useState<Registro | null>(null);
  const [loading, setLoading] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const folio = "MT-" + Math.random().toString(36).substring(2, 7).toUpperCase();
    const datos = { ...form, folio };

    try {
      await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
    } catch {
      // Si falla la API el QR sigue apareciendo
    }

    setRegistro(datos);
    setLoading(false);
  };

  const handleDescargar = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const width = 480;
    const height = 600;
    const offscreen = document.createElement("canvas");
    offscreen.width = width;
    offscreen.height = height;
    const ctx = offscreen.getContext("2d");
    if (!ctx) return;

    // Fondo
    ctx.fillStyle = "#0D0618";
    ctx.fillRect(0, 0, width, height);

    // Franja superior morada
    ctx.fillStyle = "#3B1050";
    ctx.fillRect(0, 0, width, 90);

    // Título
    ctx.fillStyle = "#C9A96E";
    ctx.font = "bold 16px serif";
    ctx.textAlign = "center";
    ctx.fillText("CONFERENCIA GRATUITA", width / 2, 32);
    ctx.fillStyle = "#ffffff";
    ctx.font = "13px sans-serif";
    ctx.fillText("METAMORFOSIS · 30 de abril, Acapulco", width / 2, 54);
    ctx.fillText("Auditorio Facultad UAGro", width / 2, 74);

    // Nombre del asistente
    ctx.fillStyle = "#D4379A";
    ctx.font = "bold 22px serif";
    ctx.fillText(registro!.nombre, width / 2, 130);

    ctx.fillStyle = "rgba(201,169,110,0.6)";
    ctx.font = "13px sans-serif";
    ctx.fillText("PASE DE ENTRADA", width / 2, 155);

    // QR
    const qrCanvas = canvas;
    const qrSize = 240;
    const qrX = (width - qrSize) / 2;
    ctx.drawImage(qrCanvas, qrX, 175, qrSize, qrSize);

    // Folio
    ctx.fillStyle = "#A89880";
    ctx.font = "12px monospace";
    ctx.fillText(`Folio: ${registro!.folio}`, width / 2, 440);

    // Firma
    ctx.fillStyle = "rgba(201,169,110,0.4)";
    ctx.font = "11px sans-serif";
    ctx.fillText("miriamtenorio.com", width / 2, 470);

    const link = document.createElement("a");
    link.download = `pase-entrada-${registro!.folio}.png`;
    link.href = offscreen.toDataURL("image/png");
    link.click();
  };

  const qrData = registro
    ? JSON.stringify({ nombre: registro.nombre, folio: registro.folio, evento: "METAMORFOSIS-30ABR-ACAPULCO" })
    : "";

  return (
    <div style={{ minHeight: "100vh", paddingTop: "210px", paddingBottom: "80px", background: "#0D0618" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "0 24px" }}>

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
            marginBottom: "20px",
          }}>
            CONFERENCIA GRATUITA · 30 DE ABRIL · ACAPULCO
          </span>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            fontWeight: 700,
            color: "#F5F0E8",
            lineHeight: 1.2,
            marginBottom: "12px",
          }}>
            METAMORFOSIS
          </h1>
          <p style={{ color: "#A89880", fontSize: "1rem", lineHeight: 1.6, marginBottom: "8px" }}>
            De la transformación personal al negocio que sueñas
          </p>
          <p style={{ color: "rgba(201,169,110,0.6)", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}>
            Auditorio Facultad UAGro · Entrada gratuita
          </p>
        </div>

        {/* FORMULARIO o PASE */}
        {!registro ? (
          <form onSubmit={handleSubmit} style={{
            background: "#130A22",
            border: "1px solid rgba(201,169,110,0.15)",
            padding: "40px 36px",
            borderRadius: "4px",
          }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8", fontSize: "1.3rem", marginBottom: "28px", textAlign: "center" }}>
              Registra tu lugar
            </h2>

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

            <div style={{ marginBottom: "18px" }}>
              <label style={{ display: "block", color: "#A89880", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                Email *
              </label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="tu@email.com" style={inputStyle} />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <label style={{ display: "block", color: "#A89880", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>
                ¿Tienes un negocio? *
              </label>
              <select name="negocio" required value={form.negocio} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                <option value="" disabled>Selecciona una opción</option>
                <option value="Sí">Sí</option>
                <option value="No">No</option>
                <option value="Lo estoy iniciando">Lo estoy iniciando</option>
              </select>
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
              {loading ? "Generando tu pase..." : "Quiero registrarme"}
            </button>
          </form>

        ) : (
          /* PASE DE ENTRADA */
          <div style={{ textAlign: "center" }}>
            <div style={{
              background: "#130A22",
              border: "1px solid rgba(201,169,110,0.2)",
              borderRadius: "4px",
              padding: "40px 36px",
              marginBottom: "24px",
            }}>
              {/* Header del pase */}
              <div style={{
                background: "#3B1050",
                margin: "-40px -36px 32px",
                padding: "24px 36px",
                borderRadius: "4px 4px 0 0",
              }}>
                <p style={{ color: "#C9A96E", fontSize: "0.72rem", letterSpacing: "0.14em", fontFamily: "'Inter', sans-serif", marginBottom: "4px" }}>
                  PASE DE ENTRADA · CONFERENCIA GRATUITA
                </p>
                <p style={{ color: "#ffffff", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif" }}>
                  30 de abril · Auditorio Facultad UAGro · Acapulco
                </p>
              </div>

              <p style={{ color: "#A89880", fontSize: "0.75rem", letterSpacing: "0.12em", fontFamily: "'Inter', sans-serif", marginBottom: "8px" }}>
                REGISTRADA
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
                color: "#D4379A",
                marginBottom: "32px",
              }}>
                {registro.nombre}
              </h2>

              {/* QR */}
              <div ref={qrRef} style={{
                display: "inline-block",
                padding: "16px",
                background: "#ffffff",
                borderRadius: "4px",
                marginBottom: "20px",
              }}>
                <QRCodeCanvas
                  value={qrData}
                  size={200}
                  bgColor="#ffffff"
                  fgColor="#0D0618"
                  level="M"
                />
              </div>

              <p style={{ color: "#A89880", fontSize: "0.78rem", letterSpacing: "0.1em", fontFamily: "'Inter', sans-serif", marginBottom: "8px" }}>
                Folio: <span style={{ color: "#C9A96E", fontWeight: 600 }}>{registro.folio}</span>
              </p>
              <p style={{ color: "#A89880", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "0" }}>
                ¡Listo! Este es tu pase de entrada.<br />
                <strong style={{ color: "#F5F0E8" }}>Preséntalo el 30 de abril.</strong>
              </p>
            </div>

            <button onClick={handleDescargar} style={{
              width: "100%",
              background: "#C9A96E",
              color: "#0D0618",
              border: "none",
              padding: "16px",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              fontFamily: "'Inter', sans-serif",
              cursor: "pointer",
              textTransform: "uppercase",
              borderRadius: "2px",
              marginBottom: "12px",
            }}>
              Descargar mi pase
            </button>

            <p style={{ color: "rgba(201,169,110,0.5)", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif" }}>
              Toma una captura de pantalla como respaldo
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
