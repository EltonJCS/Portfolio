"use client";
import Image from "next/image";

import { useThemeContext } from "../../context/theme-context";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-slate-500 border-opacity-40 bg-white bg-opacity-80 shadow-[0_0_4px_1px_rgba(0,0,0,0.2)] backdrop-blur-[0.05rem] transition-all hover:scale-125 hover:border-slate-700 hover:shadow-[0_0_4px_rgba(0,0,0,0.5)_inset] hover:backdrop-blur-md active:scale-110 dark:border-slate-500 dark:bg-slate-900 dark:shadow-[0_0_8px_1px_rgba(255,255,255,0.2)] dark:hover:border-white"
      onClick={toggleTheme}
    >
      <Image
        className="animate-[spin_6s_linear_infinite] opacity-100 transition-all dark:animate-[pulse_1s_linear_infinite] dark:invert"
        src={`/icons/mode-${theme}.svg`}
        alt=""
        width={20}
        height={20}
        quality={100}
      />
    </button>
  );
};

export default ThemeSwitch;
