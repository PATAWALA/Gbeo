// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Média Créa Plus - Agence de Création Digitale",
  description: "Agence spécialisée en copywriting, design graphique et stratégie digitale pour booster votre présence en ligne.",
  keywords: ["copywriting", "design graphique", "stratégie digitale", "marketing digital", "création de contenu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <main className="relative overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}