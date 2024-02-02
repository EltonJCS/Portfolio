import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import ActiveSectionContextProvider from "../../context/active-section-context";
import ThemeContextProvider from "../../context/theme-context";

import BackgroundOverlay from "@/components/background-overlay";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

import "./globals.css";
import ProgressBar from "@/components/progress-bar";

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
    <html lang="pt-BR" className="!scroll-smooth">
      <body
        className={`${inter.className}  relative overscroll-none bg-slate-200 pt-28 text-slate-950 selection:bg-slate-800 selection:text-slate-100 dark:bg-slate-950 dark:text-slate-100 dark:selection:bg-slate-100 dark:selection:text-slate-800 sm:pt-36`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>

        <Toaster position="bottom-center" />
        <BackgroundOverlay />
        <ProgressBar />
      </body>
    </html>
  );
}
