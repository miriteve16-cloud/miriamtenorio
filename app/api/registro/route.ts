import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, whatsapp, email, negocio, folio } = body;

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (GOOGLE_SCRIPT_URL) {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fecha: new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" }),
            folio,
            nombre,
            whatsapp,
            email,
            negocio,
          }),
        });
      } catch (err) {
        console.error("Error enviando a Google Sheets:", err);
        // No bloqueamos el registro si Sheets falla
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Error procesando registro" }, { status: 500 });
  }
}
