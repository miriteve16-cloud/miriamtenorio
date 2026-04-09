import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, empresa, tipo, mensaje } = body;

    if (!nombre || !email || !tipo || !mensaje) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY no configurada");
      return NextResponse.json({ error: "Configuración de email faltante" }, { status: 500 });
    }

    const htmlEmail = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: system-ui, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #7c3aed, #4c1d95); color: white; padding: 32px; text-align: center; }
          .header h1 { margin: 0; font-size: 1.4rem; }
          .header p { margin: 8px 0 0; opacity: 0.8; font-size: 0.9rem; }
          .body { padding: 32px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 0.8rem; color: #888; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
          .value { font-size: 1rem; color: #222; font-weight: 500; }
          .mensaje-box { background: #f9f7ff; border-left: 4px solid #7c3aed; padding: 16px; border-radius: 0 8px 8px 0; }
          .footer { background: #f9f7ff; padding: 20px 32px; text-align: center; color: #888; font-size: 0.85rem; }
          .badge { display: inline-block; background: #7c3aed; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>💜 Nuevo mensaje recibido</h1>
            <p>miriamtenorio.com</p>
          </div>
          <div class="body">
            <div class="field">
              <div class="label">Tipo de consulta</div>
              <span class="badge">${tipo}</span>
            </div>
            <div class="field">
              <div class="label">Nombre</div>
              <div class="value">${nombre}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${empresa ? `<div class="field"><div class="label">Empresa</div><div class="value">${empresa}</div></div>` : ""}
            <div class="field">
              <div class="label">Mensaje</div>
              <div class="mensaje-box">${mensaje.replace(/\n/g, "<br/>")}</div>
            </div>
          </div>
          <div class="footer">
            Mensaje enviado desde miriamtenorio.com · ${new Date().toLocaleDateString("es-MX", { day: "2-digit", month: "long", year: "numeric" })}
          </div>
        </div>
      </body>
      </html>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Miriam Tenorio Web <noreply@miriamtenorio.com>",
        to: ["miriteve16@gmail.com"],
        subject: `[Nuevo lead] ${tipo} — ${nombre}`,
        html: htmlEmail,
        reply_to: email,
      }),
    });

    if (!resendResponse.ok) {
      const errData = await resendResponse.json();
      console.error("Error Resend:", errData);
      return NextResponse.json({ error: "Error al enviar email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error en API contact:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
