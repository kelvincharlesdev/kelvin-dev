import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { MobileHeader, SideBar } from "@/content/Global/Navigation/section";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kelvin Charles",
  description:
    "Portfólio de Kelvin Charles, Desenvolvedor Front-End focado em criar experiências digitais modernas, responsivas e acessíveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        <MobileHeader />

        <main className="flex min-h-screen w-full flex-col md:flex-row">
          <SideBar />
          <div className="flex-1 px-5 md:px-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
