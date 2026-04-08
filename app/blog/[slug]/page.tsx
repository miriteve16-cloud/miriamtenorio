import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articulos } from "../page";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const art = articulos.find((a) => a.slug === slug);
  if (!art) return {};
  return {
    title: `${art.titulo} | Blog de Miriam Tenorio`,
    description: art.resumen,
    openGraph: {
      title: art.titulo,
      description: art.resumen,
      url: `https://miriamtenorio.com/blog/${art.slug}`,
    },
  };
}

const contenidos: Record<string, string[]> = {
  "como-dejar-de-tomar-sin-perder-todo": [
    "No te voy a contar la historia bonita. La historia bonita la cuentan los que no la vivieron.",
    "El día que decidí dejar de tomar no fue un amanecer épico con música de fondo. Fue una noche de martes, sola, viendo el techo, completamente cansada de mí misma.",
    "El cansancio puede ser el mejor motor. No la inspiración, no el discurso motivacional, no el retiro espiritual. El cansancio puro y simple de ser quien estás siendo.",
    "Lo primero que nadie te dice: los primeros días no te sientes libre. Te sientes vacía. Y ese vacío da más miedo que el problema mismo, porque al menos el problema llenaba algo.",
    "Lo que sí funcionó fue ir un día a la vez. Literalmente. No 'voy a dejar de tomar para siempre'. Eso es demasiado grande. Solo: hoy no tomo. Mañana ya veré.",
    "También funcionó decírselo a alguien. No a todos, no en redes sociales, no como declaración pública. A una persona. Una sola. Que me pudiera ver a los ojos y decirme que estaba bien.",
    "Han pasado más de 10 meses. No todos los días son fáciles. Pero todos los días son reales. Y eso, para mí, lo es todo.",
    "Si estás en ese punto, si reconoces algo de tu historia en la mía: no estás sola. Y sí se puede. Pero empieza hoy, no mañana.",
  ],
  "emprender-desde-cero-cuando-todo-falla": [
    "Hay un tipo de emprendedor que nadie estudia en los libros de negocios: el que empieza desde los escombros.",
    "No desde cero. Desde menos que cero. Desde deudas, desde reputación dañada, desde relaciones rotas, desde el espejo que no quieres ver.",
    "Ese fue mi punto de partida. Y curiosamente, ese es el punto de partida más honesto que existe.",
    "Porque cuando ya lo perdiste casi todo, hay algo que sucede: desaparece el miedo a perder. Y con él, desaparece la parálisis.",
    "Lo primero que descubrí: emprender no es tener un plan perfecto. Es tener una razón lo suficientemente grande para aguantar cuando el plan falla.",
    "Mi razón era mi familia. Quería demostrarles, y demostrarme, que podía construir algo sólido. No grandioso. Sólido.",
    "Lo segundo: el 90% del emprendimiento es gestión emocional. No marketing, no finanzas, no estrategia. Emociones. La tuya, la de tus clientes, la de tu equipo.",
    "Si estás empezando desde el fondo, esto es lo que sé con certeza: ese fondo te dio algo que los que empezaron desde arriba no tienen. Tienes claro qué es lo que importa.",
  ],
  "que-hacer-cuando-tocas-fondo": [
    "El fondo tiene una cualidad que nadie te cuenta hasta que llegas ahí: es el único lugar donde ya no puedes caer más.",
    "Y esa certeza, paradójicamente, es liberadora.",
    "Pero tocar fondo no es el fin del camino. Es el principio de uno diferente. Y hay cosas que funcionan y cosas que no cuando estás ahí.",
    "Lo que NO funciona: intentar resolver todo de golpe. El fondo se acumuló durante meses o años. No se deshace en una semana de 'autodescubrimiento'.",
    "Lo que SÍ funciona: el siguiente paso. Solo el siguiente. No el plan completo. No la visión de 5 años. El siguiente paso pequeño, concreto, posible.",
    "También funciona: decir la verdad. A ti misma primero. Sin excusas, sin narrativas que te protejan. La verdad cruda de dónde estás y cómo llegaste ahí.",
    "Funciona pedir ayuda. Esto es lo más difícil para las que venimos de creer que pedir ayuda es debilidad. No lo es. Es lo más inteligente que puedes hacer.",
    "Y funciona la paciencia. La reconstrucción real no tiene atajos. Pero cada día que avanzas, aunque sea milímetros, se convierte en el cimiento del siguiente.",
    "Llevas más tiempo en el fondo de lo que crees. Date más tiempo del que crees para salir. Pero sal. Sí se puede.",
  ],
};

const defaultContent = [
  "Este es un tema que he pensado mucho desde mi propia experiencia.",
  "No vengo a darte fórmulas. Vengo a compartirte lo que aprendí cuando no había fórmulas que funcionaran.",
  "Lo primero que descubrí: las respuestas más importantes no están en los libros de motivación. Están en la honestidad brutal contigo misma.",
  "He visto a muchas mujeres intentar cambiar su vida desde afuera hacia adentro. Cambiar el trabajo, la ciudad, la pareja. Y el problema sigue ahí, porque el problema estaba adentro.",
  "El cambio real empieza cuando dejas de correr de ti misma y te sientas a escucharte. Aunque lo que escuches duela.",
  "No hay un camino único. Pero hay principios que se repiten en todas las historias de transformación real: honestidad, disciplina, conexión y fe.",
  "Si algo de esto resuena contigo, me encantaría escuchar tu historia. Escríbeme — cada mensaje que recibo me recuerda por qué hago esto.",
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const art = articulos.find((a) => a.slug === slug);
  if (!art) notFound();

  const idx = articulos.indexOf(art);
  const prev = articulos[idx - 1];
  const next = articulos[idx + 1];
  const content = contenidos[slug] || defaultContent;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: art.titulo,
    description: art.resumen,
    author: {
      "@type": "Person",
      name: "Miriam Tenorio Velazco",
      url: "https://miriamtenorio.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Miriam Tenorio Velazco",
      url: "https://miriamtenorio.com",
    },
    url: `https://miriamtenorio.com/blog/${slug}`,
    inLanguage: "es",
    articleSection: art.categoria,
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Breadcrumb */}
      <div style={{ padding: "24px 24px 0", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(245,240,255,0.4)", fontSize: "0.85rem" }}>
          <Link href="/" style={{ color: "rgba(245,240,255,0.4)", textDecoration: "none" }}>Inicio</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: "rgba(245,240,255,0.4)", textDecoration: "none" }}>Blog</Link>
          <span>/</span>
          <span style={{ color: "#a78bfa" }}>{art.categoria}</span>
        </div>
      </div>

      {/* Artículo */}
      <article style={{ padding: "40px 24px 80px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "12px" }}>
          <span style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa", padding: "4px 14px", borderRadius: "20px", fontSize: "0.8rem" }}>
            {art.categoria}
          </span>
        </div>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#f5f0ff", lineHeight: 1.2, marginBottom: "16px" }}>
          {art.titulo}
        </h1>

        <p style={{ color: "rgba(245,240,255,0.6)", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "20px" }}>
          {art.resumen}
        </p>

        <div style={{ display: "flex", gap: "16px", color: "rgba(245,240,255,0.4)", fontSize: "0.85rem", marginBottom: "48px", paddingBottom: "24px", borderBottom: "1px solid rgba(124,58,237,0.15)" }}>
          <span>Por Miriam Tenorio Velazco</span>
          <span>·</span>
          <span>{art.fecha}</span>
          <span>·</span>
          <span>{art.lectura} de lectura</span>
        </div>

        <div style={{ color: "rgba(245,240,255,0.8)", lineHeight: 1.9, fontSize: "1.05rem" }}>
          {content.map((parrafo, i) => (
            <p key={i} style={{ marginBottom: "24px" }}>{parrafo}</p>
          ))}
        </div>

        {/* Firma */}
        <div
          style={{
            marginTop: "48px",
            padding: "28px",
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <p style={{ color: "#c4b5fd", fontWeight: 700, fontSize: "1rem" }}>Miriam Tenorio Velazco</p>
          <p style={{ color: "rgba(245,240,255,0.55)", fontSize: "0.9rem" }}>
            Coach de Negocios · Autora · Conferencista
          </p>
          <Link href="/contacto" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
            Conecta conmigo <ArrowRight size={14} />
          </Link>
        </div>
      </article>

      {/* Navegación entre posts */}
      <div style={{ padding: "0 24px 80px", maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: prev ? (next ? "1fr 1fr" : "1fr") : "1fr", gap: "16px" }}>
        {prev && (
          <Link href={`/blog/${prev.slug}`} style={{ textDecoration: "none" }}>
            <div className="card-purple" style={{ padding: "20px" }}>
              <div style={{ color: "rgba(245,240,255,0.4)", fontSize: "0.75rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "4px" }}>
                <ArrowLeft size={12} /> Anterior
              </div>
              <p style={{ color: "#c4b5fd", fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.3 }}>{prev.titulo}</p>
            </div>
          </Link>
        )}
        {next && (
          <Link href={`/blog/${next.slug}`} style={{ textDecoration: "none" }}>
            <div className="card-purple" style={{ padding: "20px", textAlign: "right" }}>
              <div style={{ color: "rgba(245,240,255,0.4)", fontSize: "0.75rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "4px", justifyContent: "flex-end" }}>
                Siguiente <ArrowRight size={12} />
              </div>
              <p style={{ color: "#c4b5fd", fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.3 }}>{next.titulo}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
