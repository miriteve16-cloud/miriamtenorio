import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, whatsapp, email, negocio, folio } = body;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const fecha = new Date().toLocaleString("es-MX", {
        timeZone: "America/Mexico_City",
        day: "2-digit", month: "long", year: "numeric",
        hour: "2-digit", minute: "2-digit",
      });

      const htmlEmail = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8" />
        <style>
          body { font-family: system-ui, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
          .container { max-width: 560px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: #3B1050; color: white; padding: 28px 32px; text-align: center; }
          .header h1 { margin: 0 0 4px; font-size: 1.1rem; color: #C9A96E; letter-spacing: 0.1em; text-transform: uppercase; }
          .header h2 { margin: 0; font-size: 1.6rem; font-weight: 700; }
          .body { padding: 28px 32px; }
          .field { margin-bottom: 16px; border-bottom: 1px solid #f0f0f0; padding-bottom: 16px; }
          .label { font-size: 0.75rem; color: #888; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
          .value { font-size: 1rem; color: #222; font-weight: 600; }
          .folio { display: inline-block; background: #3B1050; color: #C9A96E; padding: 6px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.1em; }
          .footer { background: #faf7ff; padding: 16px 32px; text-align: center; color: #999; font-size: 0.8rem; }
        </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎟 Nueva Inscripción</h1>
              <h2>METAMORFOSIS · 30 abril 2026</h2>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">Folio</div>
                <span class="folio">${folio}</span>
              </div>
              <div class="field">
                <div class="label">Nombre completo</div>
                <div class="value">${nombre}</div>
              </div>
              <div class="field">
                <div class="label">WhatsApp</div>
                <div class="value"><a href="https://wa.me/${whatsapp.replace(/\D/g, '')}" style="color:#3B1050;">${whatsapp}</a></div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color:#3B1050;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">¿Tiene negocio?</div>
                <div class="value">${negocio}</div>
              </div>
            </div>
            <div class="footer">
              Registro recibido el ${fecha} · miriamtenorio.com/registro
            </div>
          </div>
        </body>
        </html>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Miriam Tenorio Web <noreply@miriamtenorio.com>",
          to: ["miriteve16@gmail.com"],
          subject: `🎟 Nueva inscripción METAMORFOSIS — ${nombre} (${folio})`,
          html: htmlEmail,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error en registro:", err);
    return NextResponse.json({ error: "Error procesando registro" }, { status: 500 });
  }
}
