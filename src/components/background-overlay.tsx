"use client";
import { motion } from "framer-motion";

const BackgroundOverlay = () => {
  return (
    <>
      <motion.div
        className="absolute right-0 top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-red-200 blur-[10rem] sm:w-[68.75rem]"
        initial={{ opacity: 1, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-blue-200 blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        initial={{ opacity: 1, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </>
  );
};

export default BackgroundOverlay;
