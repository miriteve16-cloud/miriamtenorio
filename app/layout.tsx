import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Miriam Tenorio Velazco | Coach de Negocios y Autora",
    template: "%s | Miriam Tenorio Velazco",
  },
  description:
    "Miriam Tenorio Velazco — Empresaria, autora de 'Mujer Eres La Obra del Maestro' y coach de negocios. Inspira a mujeres a crecer, emprender y volver a empezar con propósito.",
  keywords: [
    "Miriam Tenorio Velazco",
    "coach de negocios",
    "autora mexicana",
    "emprendimiento femenino",
    "transformación personal",
    "Mujer Eres La Obra del Maestro",
    "coach para mujeres",
  ],
  authors: [{ name: "Miriam Tenorio Velazco", url: "https://miriamtenorio.com" }],
  creator: "Miriam Tenorio Velazco",
  metadataBase: new URL("https://miriamtenorio.com"),
  alternates: {
    canonical: "https://miriamtenorio.com",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://miriamtenorio.com",
    siteName: "Miriam Tenorio Velazco",
    title: "Miriam Tenorio Velazco | Coach de Negocios y Autora",
    description:
      "Empresaria, autora y mujer en proceso de transformación. Hoy inspira a otros a crecer, emprender y volver a empezar con propósito.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miriam Tenorio Velazco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miriam Tenorio Velazco | Coach de Negocios y Autora",
    description:
      "Empresaria, autora y mujer en proceso de transformación. Inspira a crecer, emprender y volver a empezar con propósito.",
    images: ["/og-image.jpg"],
    creator: "@miriamtenorio1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Miriam Tenorio Velazco",
  alternateName: "Miriam Tenorio",
  url: "https://miriamtenorio.com",
  image: "https://miriamtenorio.com/miriam-tenorio.jpg",
  description:
    "Empresaria, autora y coach de negocios mexicana. Autora del libro 'Mujer Eres La Obra del Maestro'. Inspira a mujeres a crecer, emprender y volver a empezar con propósito.",
  jobTitle: "Coach de Negocios y Autora",
  nationality: { "@type": "Country", name: "México" },
  knowsLanguage: ["es", "es-MX"],
  sameAs: [
    "https://www.instagram.com/miriamtenorio1",
    "https://www.tiktok.com/@miritenorio",
    "https://youtube.com/@miriamtenoriovelazco",
    "https://www.facebook.com/share/1EFHUshA6C/",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://miriamtenorio.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Miriam Tenorio Velazco",
  url: "https://miriamtenorio.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://miriamtenorio.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://miriamtenorio.com" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
