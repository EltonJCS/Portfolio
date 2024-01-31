"use client";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

type ProjectProps = {
  title: string;
  description: string;
  tags: Readonly<string[]>;
  imageURL: StaticImageData;
  demo: string;
  repository: string;
};

const Project = ({
  title,
  description,
  tags,
  imageURL,
  demo,
  repository,
}: ProjectProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.10 1"],
  });

  return (
    <motion.article
      ref={ref}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      className="group relative mb-3 max-w-[42rem] overflow-clip rounded-lg border border-black/5 bg-slate-50 shadow-xl transition last:mb-0 even:pl-8 hover:bg-slate-100/50 hover:shadow-[0_0_8px_rgba(0,0,0,0.2)] dark:bg-slate-100/10 dark:hover:shadow-[0_0_8px_rgba(255,255,255,0.4)] sm:mb-8 sm:h-[20rem] sm:pr-8"
    >
      <div className="flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
        <h3 className="text-2xl font-semibold drop-shadow-[0_0_16px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]">
          {title}
        </h3>
        <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-200">
          {description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="select-all rounded-full bg-slate-500 px-3 py-1 text-[0.65rem] font-bold tracking-wider text-slate-100/90 hover:bg-slate-500/80 hover:text-slate-50"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-8">
          {demo ? (
            <a href={demo} target="_blank">
              <button
                type="button"
                className="mb-2 flex items-center gap-1 rounded-lg  border border-black/50 bg-white py-2 pl-3 pr-5 text-center text-sm font-medium text-slate-900 shadow-md hover:bg-slate-300/50 focus:outline-none  active:bg-slate-400/50"
              >
                <Image
                  className="self-end"
                  src="/icons/preview.svg"
                  alt="Visualizar projeto"
                  width={16}
                  height={16}
                  quality={100}
                />
                Visualizar
              </button>
            </a>
          ) : (
            <></>
          )}
          <a href={repository} target="_blank">
            <button
              type="button"
              className="mb-2 flex items-center gap-1 rounded-lg border border-white/25 bg-slate-800 py-2 pl-3 pr-5 text-center text-sm font-medium text-slate-100 shadow-md hover:bg-slate-700 focus:outline-none active:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:active:bg-slate-600"
            >
              <Image
                className="invert"
                src="/icons/github.svg"
                alt="Repositório do projeto"
                width={16}
                height={16}
                quality={100}
              />
              Repositório
            </button>
          </a>
        </div>
      </div>
      <Image
        src={imageURL}
        alt={""}
        quality={95}
        className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
      />
    </motion.article>
  );
};

export default Project;
