"use client";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

import { useSectionInView } from "../../lib/hooks";
import { sendEmail } from "@/app/actions/sendEmail";

import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

const Contact = () => {
  const { ref } = useSectionInView("Contato");

  return (
    <>
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
        <p className="text-slate-700 dark:text-slate-200 dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">
          Entre em contato diretamente em{" "}
          <a
            className="text-slate-900 underline dark:text-slate-50"
            href="mailto:eltjcs@gmail.com"
          >
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
            className="h-14 rounded-lg border border-black/10 px-4 shadow-[0_0_4px_rgba(0,0,0,0.4)_inset] dark:border-slate-600 dark:bg-slate-800 dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]"
            name="senderEmail"
            type="email"
            maxLength={320}
            placeholder="Seu email"
            required
          />
          <textarea
            className="my-3 h-52 rounded-lg border border-black/10 p-4 shadow-[0_0_4px_rgba(0,0,0,0.4)_inset] dark:border-slate-600 dark:bg-slate-800 dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]"
            name="message"
            maxLength={2500}
            minLength={25}
            placeholder="Sua mensagem"
            required
          ></textarea>
          <SubmitBtn />
        </form>
      </motion.section>
      <Toaster position="bottom-center" />
    </>
  );
};

export default Contact;
