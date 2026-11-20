import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Robles de Justicia — Comunidad Ciudadana | Miriam Tenorio Velazco",
  description: "Una comunidad de personas enraizadas en la justicia y el propósito. Súmate a Robles de Justicia con Miriam Tenorio Velazco en Acapulco.",
};

export default function RoblesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
