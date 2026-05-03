import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Miriam Tenorio Velazco | Doctoranda, Autora, Mentora y Conferencista",
    template: "%s | Miriam Tenorio Velazco",
  },
  description:
    "Miriam Tenorio Velazco — Doctoranda en Administración Pública, autora de 'Mujer, eres la obra del Maestro' y conferencista. Liderazgo femenino con base académica, experiencia institucional y fe.",
  keywords: [
    "Miriam Tenorio Velazco",
    "Doctora Administración Pública",
    "conferencista liderazgo femenino",
    "autora mexicana",
    "emprendimiento femenino",
    "método METAMORFOSIS",
    "Secretaría de Bienestar Guerrero",
    "UAGro docente",
    "Mujer eres la obra del Maestro",
  ],
  authors: [{ name: "Miriam Tenorio Velazco", url: "https://miriamtenorio.com" }],
  creator: "Miriam Tenorio Velazco",
  metadataBase: new URL("https://miriamtenorio.com"),
  alternates: { canonical: "https://miriamtenorio.com" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://miriamtenorio.com",
    siteName: "Miriam Tenorio Velazco",
    title: "Miriam Tenorio Velazco | Doctoranda, Autora, Mentora y Conferencista",
    description: "Doctoranda en Administración Pública, autora y conferencista. Liderazgo femenino con base académica, experiencia institucional y fe.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Miriam Tenorio Velazco" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miriam Tenorio Velazco | Doctoranda, Autora, Mentora y Conferencista",
    description: "Doctoranda en Administración Pública, autora y conferencista. Liderazgo femenino con base académica y fe.",
    images: ["/og-image.jpg"],
    creator: "@miriamtenorio1",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Miriam Tenorio Velazco",
  alternateName: "Dra. Miriam Tenorio",
  url: "https://miriamtenorio.com",
  image: "https://miriamtenorio.com/miriam-tenorio.jpg",
  description: "Doctoranda en Administración Pública, autora de 'Mujer, eres la obra del Maestro' y conferencista mexicana. Creadora del método METAMORFOSIS de liderazgo personal.",
  jobTitle: "Doctoranda, Autora, Mentora y Conferencista",
  nationality: { "@type": "Country", name: "México" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidad Autónoma de Guerrero" }
  ],
  knowsLanguage: ["es", "es-MX"],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "Doctorado en Administración Pública" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "Maestría en Mercadotecnia" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "Licenciatura en Comunicación y Relaciones Públicas" }
  ],
  sameAs: [
    "https://www.instagram.com/miriamtenorio1",
    "https://www.tiktok.com/@miritenorio",
    "https://youtube.com/@miritenorio",
    "https://www.facebook.com/MiriamTenorioVelazco",
  ],
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://miriamtenorio.com" },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const isLanding = host.startsWith("masterclass.");

  return (
    <html lang="es">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {!isLanding && <Header />}
        <main>{children}</main>
        {!isLanding && <Footer />}
      </body>
    </html>
  );
}
