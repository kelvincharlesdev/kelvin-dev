import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileHeader } from "@/content/Global/Navigation/section";

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
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <MobileHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
