"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../context/active-section-context";
import { useEffect } from "react";

export default function Intro() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Início");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="início"
      className="mb-28 max-w-[50rem] scroll-mt-80 text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <Image
              src="/images/avatar-light.png"
              alt="Foto de perfil"
              width={160}
              height={160}
              quality={90}
              className="h-[10rem] w-[10rem] rounded-full border-[0.35rem] border-white object-cover shadow-xl"
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
        className="mb-10 mt-4 px-4 text-2xl font-medium text-white drop-shadow-md sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Me chamo <b className="text-slate-800">Elton</b>{" "}
        <b className="text-slate-800">Jatobá</b> e sou um{" "}
        <b className="text-slate-800">
          desenvolvedor <i>front-end</i>{" "}
        </b>
        com foco em <b className="text-slate-800">React (Next.js).</b>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-white shadow-xl outline-none transition hover:scale-110 hover:bg-slate-800 active:scale-105 active:bg-slate-950"
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

        <a className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/20 bg-white px-7 py-3 text-slate-900 shadow-xl  outline-none transition active:scale-105 active:bg-slate-400">
          Currículo
          <Image
            className="opacity-50 transition group-hover:translate-y-1 group-hover:scale-95 group-hover:opacity-100"
            src="/icons/download.svg"
            alt=""
            width={24}
            height={24}
            quality={100}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/eltonjcs"
          className="group flex items-center gap-2 rounded-full border border-black/20 bg-white p-4 text-slate-900 shadow-xl transition active:scale-105 active:bg-slate-400"
          target="_blank"
        >
          <Image
            className="opacity-80 transition group-hover:scale-[2.5] group-hover:opacity-100"
            src="/icons/linkedin.svg"
            alt=""
            width={24}
            height={24}
            quality={100}
          />
        </a>
        <a
          href="https://www.github.com/eltonjcs"
          className="group flex items-center gap-2 rounded-full border border-black/20 bg-white p-4 text-slate-900 shadow-xl transition active:scale-105 active:bg-slate-400"
          target="_blank"
        >
          <Image
            className="opacity-80 transition group-hover:scale-[2.5] group-hover:opacity-100"
            src="/icons/github.svg"
            alt=""
            width={24}
            height={24}
            quality={100}
          />
        </a>
      </motion.div>
    </section>
  );
}
