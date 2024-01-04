"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import { links } from "../../lib/data";
import { useActiveSectionContext } from "../../context/active-section-context";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-50">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full"
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2  py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={`text-slate-950" flex w-full items-center justify-center px-3 py-3 transition hover:text-slate-950 ${
                  activeSection === link.name ? "text-slate-950" : ""
                }`}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-slate-200 shadow-inner"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
