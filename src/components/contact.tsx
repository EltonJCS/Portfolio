"use client";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useSectionInView } from "../../lib/hooks";
import { sendEmail } from "@/app/actions/sendEmail";

import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

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

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          if (!data) {
            toast.error("Erro! Email não enviado!");
            return;
          }

          toast.success("Email enviado!");
        }}
      >
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
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
