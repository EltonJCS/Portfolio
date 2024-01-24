"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { useSectionInView } from "../../lib/hooks";

import SectionHeading from "./section-heading";

const Contact = () => {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      ref={ref}
      id="contato"
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading title="Contato" />
      <p className="text-slate-700">
        Entre em contato diretamente em{" "}
        <a className="underline" href="mailto:eltjcs@gmail.com">
          eltjcs@gmail.com
        </a>{" "}
        ou por meio do formulário.
      </p>

      <form className="mt-10 flex flex-col" action="">
        <input
          className="h-14 rounded-lg border border-black/10 px-4"
          name="senderEmail"
          type="email"
          maxLength={320}
          placeholder="Seu email"
          required
        />
        <textarea
          className="my-3 h-52 rounded-lg border border-black/10 p-4 "
          name="message"
          maxLength={2500}
          minLength={25}
          placeholder="Sua mensagem"
          required
        ></textarea>
        <button
          className="group flex h-[3rem] w-[8rem] items-center justify-center gap-1 rounded-full bg-slate-900 text-white outline-none transition-all hover:scale-110 hover:bg-slate-950 focus:scale-110 active:scale-105"
          type="submit"
        >
          Enviar{" "}
          <Image
            className="opacity-90 invert transition-all group-hover:translate-x-2 group-hover:scale-125"
            src="/icons/send.svg"
            alt=""
            width={20}
            height={20}
            quality={100}
          />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
