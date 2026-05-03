import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Masterclass Gratuita — De Idea a Negocio Rentable en 4 Días | Miriam Tenorio",
  description: "Únete a la masterclass gratuita de Miriam Tenorio Velazco. Miércoles 13 de mayo, 7:00 PM CDMX. Aprende los 4 pilares: Claridad, Estrategia, Sistema y Resultados.",
};

export default function MasterclassLayout({ children }: { children: React.ReactNode }) {
  return children;
}
