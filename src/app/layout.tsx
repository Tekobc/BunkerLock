import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BunkerLock | Puertas Blindadas y Herrería de Máxima Seguridad",
  description:
    "Fabricación artesanal e industrial de puertas acorazadas, cámaras de seguridad balísticas y herrería de alta precisión. Máxima resistencia certificada EN 1627 y normas balísticas internacionales.",
  keywords: [
    "puertas blindadas",
    "puertas acorazadas",
    "herrería de alta seguridad",
    "bunker",
    "blindaje balístico",
    "puertas antipánico",
    "cerrojos de alta seguridad",
  ],
  authors: [{ name: "BunkerLock Security Systems" }],
  openGraph: {
    title: "BunkerLock | Puertas Blindadas y Herrería de Máxima Seguridad",
    description:
      "Ingeniería de blindaje inexpugnable, cerraduras multipunto y forja estructural de precisión.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#0e1013] text-[#e2e8f0] font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
