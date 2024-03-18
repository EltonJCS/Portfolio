"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { use3DHoverEffect, useSectionInView } from "../../lib/hooks";
import { useActiveSectionContext } from "../../context/active-section-context";
import { useThemeContext } from "../../context/theme-context";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Início", 0.5);
  const { theme } = useThemeContext();
  const { handleMouseMove, handleMouseLeave, handleMouseEnter } =
    use3DHoverEffect(60);

  return (
    <section
      ref={ref}
      id="início"
      className="mb-28 max-w-[50rem] scroll-mt-80 text-center sm:mb-0"
    >
      <div className="flex items-center justify-center [perspective:800px]">
        <div
          className="relative transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.2)]"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="drop-shadow-[0_0_8px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <Image
              src={`/images/avatar-${theme}.png`}
              alt="Foto de perfil"
              width={160}
              height={160}
              quality={90}
              priority
              className="h-[10rem] w-[10rem] rounded-full border-4 border-white object-cover"
            />
          </motion.div>
          <motion.span
            className="absolute -right-6 bottom-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: 0.5,
              duration: 0.5,
            }}
          >
            <Image
              className="transition hover:scale-125"
              src="/icons/EJ_Logo.svg"
              alt="Elton Jatobá Logo"
              width={88}
              height={88}
              quality={100}
            />
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium text-white drop-shadow-md dark:text-slate-400 dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.2)] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Me chamo{" "}
        <b className="text-slate-800 dark:text-slate-100">Elton Jatobá</b> e sou
        um{" "}
        <b className="text-slate-800 dark:text-slate-100">
          desenvolvedor <i>front-end</i>{" "}
        </b>
        com foco em{" "}
        <b className="text-slate-800 dark:text-slate-100">React (Next.js).</b>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="#contato"
          className="group flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-slate-100 shadow-xl outline outline-1 -outline-offset-4 outline-slate-100/10 transition hover:scale-110 hover:bg-slate-800 active:scale-105 active:bg-slate-950 dark:bg-slate-950 dark:shadow-[0_0_4px_rgba(255,255,255,0.1)] dark:hover:bg-slate-900 dark:active:bg-black"
          onClick={() => {
            setActiveSection("Contato");
            setTimeOfLastClick(Date.now());
          }}
        >
          Entrar em contato
          <Image
            className="opacity-50 transition group-hover:translate-x-4 group-hover:opacity-100"
            src="/icons/arrow_right.svg"
            alt=""
            width={24}
            height={24}
            quality={100}
          />
        </Link>

        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 text-slate-900 shadow-xl transition hover:scale-110 hover:bg-white/50 focus:scale-110 active:scale-105 active:bg-slate-300 dark:bg-slate-100/10 dark:text-slate-100 dark:shadow-[0_0_8px_2px_rgba(0,0,0,0.2)_inset] dark:hover:bg-slate-100/25 dark:active:bg-slate-100/50"
          href="/CV.pdf"
          download="Currículo-Elton_Jatobá"
        >
          Currículo
          <Image
            className="opacity-50 transition group-hover:translate-y-1 group-hover:scale-95 group-hover:opacity-100 dark:invert"
            src="/icons/download.svg"
            alt=""
            width={24}
            height={24}
            quality={100}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/eltonjcs"
          className="group flex items-center gap-2 rounded-full border border-black/20 bg-white p-4 text-slate-900 shadow-xl transition active:scale-105 active:bg-slate-400 dark:bg-slate-100/10"
          target="_blank"
        >
          <Image
            className="opacity-80 saturate-50 transition hover:saturate-100 group-hover:scale-[2.5] group-hover:opacity-100"
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            quality={100}
          />
        </a>
        <a
          href="https://www.github.com/eltonjcs"
          className="group flex items-center gap-2 rounded-full border border-black/20 bg-white p-4 text-slate-900 shadow-xl transition active:scale-105 active:bg-slate-400 dark:bg-slate-100/10"
          target="_blank"
        >
          <Image
            className="opacity-80 transition group-hover:scale-[2.5] group-hover:opacity-100 dark:invert"
            src="/icons/github.svg"
            alt="Github"
            width={24}
            height={24}
            quality={100}
          />
        </a>
      </motion.div>
    </section>
  );
}
