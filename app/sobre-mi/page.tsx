import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mi Historia | Miriam Tenorio Velazco",
  description:
    "Empresaria, autora, mentora de negocios, conferencista y docente universitaria. Conoce la historia real de Miriam Tenorio Velazco.",
  openGraph: {
    title: "Mi Historia | Miriam Tenorio Velazco",
    description: "Una vida construida con propósito, fe y transformación real.",
    url: "https://miriamtenorio.com.mx/sobre-mi",
  },
};

const trayectoria = [
  {
    titulo: "La preparación como herramienta de transformación",
    items: [
      "Licenciada en Comunicación y Relaciones Públicas.",
      "Maestra en Mercadotecnia.",
      "Estudios de Doctorado en Administración Pública.",
      "Docente en la Universidad Hipócrates.",
      "Catedrática de nivel maestría en INDESAG.",
      "Docente y Coordinadora de Identidad e Imagen en la Universidad Autónoma de Guerrero.",
    ],
  },
  {
    titulo: "El servicio público como vocación",
    items: [
      "Asesora de la Dirección General de Desarrollo Económico del Ayuntamiento de Acapulco, 2015–2018.",
      "Candidata de Morena a diputada local por el Distrito 7 de Acapulco en 2021.",
      "Directora General de Acciones Prioritarias y Gestión Social de la Secretaría de Bienestar de Guerrero, 2021–2023.",
      "Oficial Mayor Recaudadora del Gobierno del Estado de Guerrero, 2025–2026.",
      "Directora General del Sistema DIF Municipal de Taxco de Alarcón en 2026.",
    ],
  },
  {
    titulo: "Empresaria y mentora de negocios",
    items: [
      "Fundadora de Tenorio & Asociados, Tacos Pato, Deliche, Lavandería 2M y Los Primos.",
      "Creadora del Método Impulso, programa de mentoría empresarial para emprendedores.",
    ],
  },
];

const faqs = [
  {
    q: "¿Quién es Miriam Tenorio Velazco?",
    a: "Es una empresaria, autora, mentora de negocios, conferencista y docente universitaria mexicana, con experiencia directiva en la administración pública estatal y municipal, participación política y gestión social.",
  },
  {
    q: "¿Cuál es su preparación académica?",
    a: "Es licenciada en Comunicación y Relaciones Públicas, maestra en Mercadotecnia y cuenta con estudios de Doctorado en Administración Pública.",
  },
  {
    q: "¿Qué es Método Impulso?",
    a: "Es un programa de mentoría empresarial creado por Miriam Tenorio Velazco para ayudar a emprendedores a desarrollar negocios con claridad, estrategia comercial, herramientas tecnológicas y estructura financiera.",
  },
  {
    q: "¿Qué libro ha escrito?",
    a: "Es autora de Mujer, eres la obra del Maestro. Naciste para algo más grande, publicado en 2025, una obra sobre fe, resiliencia, transformación personal y liderazgo femenino.",
  },
  {
    q: "¿En qué temas imparte conferencias y mentorías?",
    a: "Liderazgo femenino y desarrollo humano, emprendimiento y estrategia de negocios, mercadotecnia y comunicación estratégica, resiliencia y transformación personal, fe, identidad y propósito de vida, liderazgo consciente y gestión pública.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Miriam Tenorio Velazco",
  url: "https://miriamtenorio.com.mx",
  description: "Empresaria, autora, mentora de negocios, conferencista y docente universitaria mexicana.",
  jobTitle: "Mentora de Negocios, Autora y Conferencista",
  nationality: { "@type": "Country", name: "México" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const sectionTitle = (text: string) => (
  <h2 style={{
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
    fontWeight: 700,
    color: "#f5f0ff",
    marginBottom: "20px",
    marginTop: "48px",
    paddingBottom: "12px",
    borderBottom: "1px solid rgba(167,139,250,0.2)",
  }}>{text}</h2>
);

export default function SobreMiPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{
        padding: "100px 24px 60px",
        textAlign: "center",
        background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(124,58,237,0.15) 0%, transparent 70%)",
      }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>
            Mi Historia
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f5f0ff", lineHeight: 1.15, marginBottom: "24px" }}>
            Miriam Tenorio{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Velazco
            </span>
          </h1>
          <p style={{ color: "rgba(245,240,255,0.75)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Mujer de fe. Empresaria. Autora. Mentora de negocios. Docente universitaria. Servidora pública por vocación.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section style={{ padding: "40px 24px 80px" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>

          {/* Párrafos intro */}
          <div className="card-purple" style={{ padding: "40px 48px", borderRadius: "16px", marginBottom: "8px" }}>
            <p style={{ color: "rgba(245,240,255,0.9)", fontSize: "1.1rem", lineHeight: 1.9, marginBottom: "20px", fontStyle: "italic" }}>
              "Mi mayor conquista no ha sido ocupar un cargo, construir una empresa o alcanzar un grado académico. Ha sido aprender a gobernarme a mí misma."
            </p>
          </div>

          {[
            "Soy Miriam Tenorio Velazco, una mujer guerrerense que ha aprendido que el verdadero éxito no consiste únicamente en alcanzar grandes metas, sino en convertirnos en personas capaces de sostenerlas con integridad, propósito y conciencia.",
            "He conocido el éxito y el fracaso, la abundancia y la adversidad, el reconocimiento y la incertidumbre. He dirigido instituciones, construido empresas, formado profesionales y recorrido comunidades. Pero también he tenido que detenerme, reconocer mis errores y reconstruirme desde lo más profundo de mi ser.",
            "No soy una mujer perfecta. Soy una mujer que decidió dejar de huir de sí misma. Y esa decisión cambió mi vida.",
          ].map((p, i) => (
            <p key={i} style={{ color: "rgba(245,240,255,0.78)", fontSize: "1rem", lineHeight: 1.9, marginTop: "20px" }}>
              {p}
            </p>
          ))}

          {/* Trayectoria */}
          {sectionTitle("Una trayectoria construida con propósito")}

          {trayectoria.map((bloque, i) => (
            <div key={i} style={{ marginBottom: "32px" }}>
              <h3 style={{ color: "#c4b5fd", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.05em", marginBottom: "14px" }}>
                {bloque.titulo}
              </h3>
              <ul style={{ paddingLeft: "0", listStyle: "none", margin: 0 }}>
                {bloque.items.map((item, j) => (
                  <li key={j} style={{
                    color: "rgba(245,240,255,0.72)",
                    fontSize: "0.97rem",
                    lineHeight: 1.8,
                    paddingLeft: "20px",
                    position: "relative",
                    marginBottom: "8px",
                  }}>
                    <span style={{ position: "absolute", left: 0, color: "#a78bfa" }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p style={{ color: "rgba(245,240,255,0.65)", fontSize: "0.97rem", lineHeight: 1.9, marginTop: "8px", fontStyle: "italic" }}>
            Estas experiencias me enseñaron que detrás de cada expediente, cada estadística y cada decisión gubernamental existe una historia humana. Porque servir no es un privilegio para engrandecernos, sino una responsabilidad para dignificar la vida de los demás.
          </p>

          {/* Transformación */}
          {sectionTitle("La transformación más importante de mi vida")}

          {[
            "Durante mucho tiempo creí que podía resolverlo todo. Construía proyectos, perseguía metas y asumía responsabilidades, mientras descuidaba a la persona que sostenía cada una de ellas: yo misma.",
            "Hasta que un día toqué fondo. Y en el fondo me estaba esperando Dios.",
            "Decidí dejar el alcohol, enfrentar mis heridas, asumir la responsabilidad de mis decisiones y reconstruir mi vida desde la fe, la disciplina y la verdad.",
            "Aprendí que reconocer nuestras equivocaciones no nos hace menos valientes. Que pedir ayuda no nos hace débiles. Y que volver a empezar no significa haber fracasado.",
            "Recuperé lo más sagrado: mi familia, mi paz y mi relación con Dios.",
            "Comprendí que ningún cargo, reconocimiento, cantidad de dinero o posición de poder vale la pena si para conseguirlo tenemos que perdernos a nosotros mismos.",
          ].map((p, i) => (
            <p key={i} style={{ color: "rgba(245,240,255,0.78)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "16px" }}>
              {p}
            </p>
          ))}

          {/* Libro */}
          {sectionTitle("De mis heridas nació un libro")}

          <p style={{ color: "rgba(245,240,255,0.78)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "16px" }}>
            De ese proceso de transformación nació mi primer libro: <strong style={{ color: "#c4b5fd" }}>Mujer, eres la obra del Maestro. Naciste para algo más grande.</strong> Una obra escrita desde la experiencia, la vulnerabilidad, la fe y la esperanza.
          </p>
          <p style={{ color: "rgba(245,240,255,0.78)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "16px" }}>
            No la escribí porque tuviera todas las respuestas. La escribí porque sé lo que significa necesitar una segunda oportunidad y descubrir que nuestra historia todavía puede tener un nuevo capítulo.
          </p>
          <p style={{ color: "rgba(245,240,255,0.78)", fontSize: "1rem", lineHeight: 1.9 }}>
            Es mi manera de recordarle a otras mujeres que su pasado no determina su destino y que ninguna equivocación tiene por qué convertirse en una sentencia de vida.
          </p>

          {/* Propósito */}
          {sectionTitle("Mi propósito")}

          <p style={{ color: "rgba(245,240,255,0.78)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "16px" }}>
            Hoy integro mi experiencia empresarial, académica, gubernamental y personal para formar, acompañar e inspirar a quienes desean transformar su vida y su entorno. A través de mis conferencias, mentorías, libros y proyectos, promuevo el emprendimiento, el liderazgo consciente, la autonomía económica, la resiliencia y el desarrollo humano.
          </p>
          <p style={{ color: "rgba(245,240,255,0.78)", fontSize: "1rem", lineHeight: 1.9 }}>
            Creo en las mujeres que se atreven a levantar la voz, que construyen sus propias oportunidades y que comprenden que no necesitan apagar la luz de nadie para hacer brillar la suya.
          </p>

          {/* Principios */}
          {sectionTitle("Mis principios")}

          <div className="card-purple" style={{ padding: "36px 40px", borderRadius: "16px", textAlign: "center" }}>
            <p style={{ color: "#c4b5fd", fontSize: "1.2rem", fontWeight: 700, fontFamily: "'Playfair Display', serif", marginBottom: "16px" }}>
              Dios, la verdad y mi paz.
            </p>
            <p style={{ color: "rgba(245,240,255,0.72)", fontSize: "0.97rem", lineHeight: 1.9, marginBottom: "16px" }}>
              Son los pilares desde los que he decidido construir esta nueva etapa de mi vida. Ya no mido mi éxito solamente por lo que consigo, sino por la mujer en la que me convierto mientras lo consigo.
            </p>
            <p style={{ color: "rgba(245,240,255,0.72)", fontSize: "0.97rem", lineHeight: 1.9, marginBottom: "20px" }}>
              Mi pasado forma parte de mi historia, pero no define mi destino. Y si algo he aprendido en este camino es que no importa lo que pierda, con que no me pierda yo nuevamente.
            </p>
            <p style={{ color: "#a78bfa", fontSize: "1rem", fontWeight: 700, fontStyle: "italic" }}>
              Primero el SER y después el HACER. — Miriam Tenorio Velazco
            </p>
          </div>

          {/* FAQ */}
          {sectionTitle("Preguntas frecuentes")}

          {faqs.map((f, i) => (
            <div key={i} className="card-purple" style={{ padding: "24px 28px", marginBottom: "12px", borderRadius: "10px" }}>
              <h3 style={{ color: "#c4b5fd", fontWeight: 600, marginBottom: "10px", fontSize: "1rem" }}>
                {f.q}
              </h3>
              <p style={{ color: "rgba(245,240,255,0.7)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                {f.a}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center", borderTop: "1px solid rgba(124,58,237,0.15)" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#f5f0ff", marginBottom: "16px" }}>
          ¿Te identificas con mi historia?
        </h2>
        <p style={{ color: "rgba(245,240,255,0.65)", marginBottom: "32px", fontSize: "1rem" }}>
          Hablemos. Puedo acompañarte en tu propio proceso de transformación.
        </p>
        <Link href="/contacto" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Contáctame <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
