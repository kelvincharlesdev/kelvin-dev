import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { MobileHeader, SideBar } from "@/content/globals/Navigation";
import { Footer } from "@/content/globals/Footer";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Kelvin Charles",
    template: "Kelvin Charles | %s",
  },
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
        <ToastContainer />
        <MobileHeader />

        <div className="flex h-screen w-full md:flex-row">
          <SideBar />

          <div className="flex-1 overflow-y-auto px-5 md:px-10">
            <main className="mx-auto w-full max-w-[1440px]">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
