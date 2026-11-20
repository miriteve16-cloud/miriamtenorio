import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Acapulco con Propósito — Comunidad Ciudadana | Miriam Tenorio Velazco",
  description: "Una comunidad comprometida con construir un Acapulco más digno. Súmate a Acapulco con Propósito con Miriam Tenorio Velazco.",
};

export default function AcapulcoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
