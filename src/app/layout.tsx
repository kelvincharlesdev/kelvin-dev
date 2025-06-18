import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { MobileHeader, SideBar } from "@/content/globals/Navigation";

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

        <main className="flex min-h-screen w-full md:flex-row">
          <SideBar />
          <div className="flex flex-1 justify-center px-5 md:px-10">
            <div className="w-full max-w-[1440px]">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
