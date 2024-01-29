"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-md backdrop-blur-[0.05rem] transition-all hover:scale-125 hover:backdrop-blur-md active:scale-110"
      onClick={toggleTheme}
    >
      <Image
        className="opacity-100 transition-all"
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
