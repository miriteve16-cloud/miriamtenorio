import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Miriam Tenorio Velazco — Transformación, Negocios y Propósito",
  description:
    "Artículos sobre transformación personal, emprendimiento femenino, fe, resiliencia y liderazgo. Escritos por Miriam Tenorio Velazco desde la experiencia real.",
  openGraph: {
    title: "Blog de Miriam Tenorio Velazco",
    url: "https://miriamtenorio.com/blog",
  },
};

export const articulos = [
  {
    slug: "como-dejar-de-tomar-sin-perder-todo",
    titulo: "Cómo Dejé de Tomar Sin Perder lo Que Me Quedaba",
    categoria: "Transformación Personal",
    fecha: "Marzo 2025",
    resumen: "No fue un momento de fuerza. Fue un momento de cansancio total. Pero eso fue suficiente para que todo cambiara.",
    lectura: "7 min",
  },
  {
    slug: "emprender-desde-cero-cuando-todo-falla",
    titulo: "Cómo Emprender Desde Cero Cuando Todo lo Demás Ha Fallado",
    categoria: "Emprendimiento",
    fecha: "Marzo 2025",
    resumen: "El peor momento para emprender se convierte en el mejor cuando ya no tienes nada que perder — y eso te libera de todas las excusas.",
    lectura: "8 min",
  },
  {
    slug: "recuperar-tu-familia-despues-del-error",
    titulo: "Cómo Recuperar a Tu Familia Después de Haberla Lastimado",
    categoria: "Familia",
    fecha: "Febrero 2025",
    resumen: "El camino de regreso es más largo que el camino de salida. Pero es el más hermoso que he recorrido.",
    lectura: "9 min",
  },
  {
    slug: "fe-no-es-religion-es-ancla",
    titulo: "La Fe No Es Religión — Es el Ancla Que Evita Que Te Hundas",
    categoria: "Fe y Propósito",
    fecha: "Febrero 2025",
    resumen: "Me tardé mucho en entender que la fe no se trata de perfección. Se trata de seguir caminando cuando no ves el camino.",
    lectura: "6 min",
  },
  {
    slug: "primer-libro-lecciones-autora",
    titulo: "Lo Que Aprendí Escribiendo Mi Primer Libro",
    categoria: "Autoría",
    fecha: "Enero 2025",
    resumen: "Escribir 'Mujer Eres La Obra del Maestro' fue el acto más vulnerable de mi vida. Y también el más liberador.",
    lectura: "7 min",
  },
  {
    slug: "mujeres-que-vuelven-a-empezar",
    titulo: "Las Mujeres Que Vuelven a Empezar: El Perfil de la Guerrera Moderna",
    categoria: "Emprendimiento Femenino",
    fecha: "Enero 2025",
    resumen: "No son superheroínas. Son mujeres normales que un día decidieron que el dolor no sería su definición.",
    lectura: "8 min",
  },
  {
    slug: "disciplina-vs-motivacion",
    titulo: "Por Qué la Motivación Es una Mentira y la Disciplina Es Libertad",
    categoria: "Desarrollo Personal",
    fecha: "Diciembre 2024",
    resumen: "Deja de esperar sentirte lista, inspirada o con energía. La libertad real viene de hacer lo que prometiste cuando no quieres hacerlo.",
    lectura: "6 min",
  },
  {
    slug: "coaching-de-negocios-para-mujeres",
    titulo: "Por Qué el Coaching de Negocios Para Mujeres Es Diferente",
    categoria: "Negocios",
    fecha: "Diciembre 2024",
    resumen: "Las mujeres no necesitamos que nos enseñen a trabajar más. Necesitamos permiso para trabajar diferente.",
    lectura: "7 min",
  },
  {
    slug: "liderar-desde-la-vulnerabilidad",
    titulo: "Liderar Desde la Vulnerabilidad: El Estilo de Liderazgo del Siglo XXI",
    categoria: "Liderazgo",
    fecha: "Noviembre 2024",
    resumen: "Los mejores líderes que conozco no tienen respuestas para todo. Tienen la valentía de admitir cuando no las tienen.",
    lectura: "8 min",
  },
  {
    slug: "que-hacer-cuando-tocas-fondo",
    titulo: "¿Qué Hacer Cuando Tocas Fondo? Una Guía Honesta",
    categoria: "Transformación Personal",
    fecha: "Noviembre 2024",
    resumen: "El fondo no es el fin. Es el lugar más sólido desde donde puedes empujar hacia arriba. Pero hay pasos que funcionan y pasos que no.",
    lectura: "10 min",
  },
];

const categorias = [...new Set(articulos.map((a) => a.categoria))];

export default function BlogPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 60px", textAlign: "center", background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(124,58,237,0.12) 0%, transparent 70%)" }}>
        <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
          Blog
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f5f0ff", lineHeight: 1.15, marginBottom: "20px" }}>
          Desde la experiencia{" "}
          <span style={{ background: "linear-gradient(135deg, #a78bfa, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            real
          </span>
        </h1>
        <p style={{ color: "rgba(245,240,255,0.65)", fontSize: "1.05rem", maxWidth: "550px", margin: "0 auto" }}>
          Artículos sobre transformación, emprendimiento, fe y liderazgo. Sin filtros, sin postureo.
        </p>
      </section>

      {/* Categorías */}
      <section style={{ padding: "20px 24px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          {categorias.map((cat) => (
            <span key={cat} style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)", color: "#c4b5fd", padding: "6px 16px", borderRadius: "20px", fontSize: "0.8rem" }}>
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Artículos */}
      <section style={{ padding: "48px 24px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
          {articulos.map((art) => (
            <Link key={art.slug} href={`/blog/${art.slug}`} style={{ textDecoration: "none" }}>
              <article className="card-purple" style={{ padding: "32px", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem" }}>
                    {art.categoria}
                  </span>
                  <span style={{ color: "rgba(245,240,255,0.4)", fontSize: "0.75rem" }}>{art.lectura}</span>
                </div>
                <h2 style={{ color: "#f5f0ff", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.4, marginBottom: "12px", flex: 1 }}>
                  {art.titulo}
                </h2>
                <p style={{ color: "rgba(245,240,255,0.6)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "20px" }}>
                  {art.resumen}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "rgba(245,240,255,0.35)", fontSize: "0.8rem" }}>{art.fecha}</span>
                  <span style={{ color: "#a78bfa", display: "flex", alignItems: "center", gap: "4px", fontSize: "0.85rem" }}>
                    Leer <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
