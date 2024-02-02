"use client";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="dark:to-slate-100transition-all fixed left-0 right-0 top-0 z-[99] h-1 origin-[0%] border-none bg-gradient-to-r from-slate-300 via-slate-500 via-90% to-slate-900 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-700 dark:via-90% dark:to-slate-100"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar;
