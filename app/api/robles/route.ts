import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, whatsapp, colonia, problema } = body;

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
          body { font-family: system-ui, sans-serif; background: #f0ebe8; margin: 0; padding: 20px; }
          .container { max-width: 560px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: #1A0030; color: white; padding: 28px 32px; text-align: center; }
          .header h1 { margin: 0 0 4px; font-size: 0.85rem; color: #C9A96E; letter-spacing: 0.15em; text-transform: uppercase; }
          .header h2 { margin: 0; font-size: 1.7rem; font-weight: 700; color: #F5F0E8; }
          .header p { margin: 6px 0 0; font-size: 0.8rem; color: rgba(255,255,255,0.5); font-style: italic; }
          .body { padding: 28px 32px; }
          .field { margin-bottom: 18px; border-bottom: 1px solid #f0f0f0; padding-bottom: 18px; }
          .field:last-child { border-bottom: none; margin-bottom: 0; }
          .label { font-size: 0.72rem; color: #999; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 5px; }
          .value { font-size: 1rem; color: #1a1a1a; font-weight: 600; }
          .value a { color: #1A0030; }
          .problema-box { background: #faf7ff; border-left: 3px solid #C9A96E; padding: 12px 16px; border-radius: 0 6px 6px 0; font-size: 0.95rem; color: #333; line-height: 1.6; }
          .badge { display: inline-block; background: #1A0030; color: #C9A96E; padding: 5px 14px; border-radius: 20px; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; }
          .footer { background: #faf7ff; padding: 16px 32px; text-align: center; color: #aaa; font-size: 0.78rem; }
        </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌳 Nuevo registro</h1>
              <h2>Robles de Justicia</h2>
              <p>"...plantío del Señor, para que él sea glorificado." — Is 61:3</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">Nombre completo</div>
                <div class="value">${nombre}</div>
              </div>
              <div class="field">
                <div class="label">WhatsApp</div>
                <div class="value">
                  <a href="https://wa.me/${whatsapp.replace(/\D/g, "")}">${whatsapp}</a>
                </div>
              </div>
              <div class="field">
                <div class="label">Colonia</div>
                <div class="value"><span class="badge">📍 ${colonia}</span></div>
              </div>
              <div class="field">
                <div class="label">Principal problema en su colonia</div>
                <div class="problema-box">${problema}</div>
              </div>
            </div>
            <div class="footer">
              Registro recibido el ${fecha} · miriamtenorio.com/acapulco-con-proposito
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
          subject: `🌳 Nuevo Roble — ${nombre} · ${colonia}`,
          html: htmlEmail,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error en robles:", err);
    return NextResponse.json({ error: "Error procesando registro" }, { status: 500 });
  }
}
