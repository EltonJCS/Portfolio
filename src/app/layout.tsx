import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EltonJCS | Portfolio",
  description:
    "Desenvolvedor Front-end. Portfólio com meus projetos, experiência e habilidades.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className}  relative overscroll-none bg-slate-200 pt-28 text-slate-950 sm:pt-36`}
      >
        <div className="absolute right-0 top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-red-100 blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-blue-100 blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
