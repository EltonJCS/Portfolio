"use client";
import { useThemeContext } from "../../context/theme-context";

const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <footer className="mx-auto flex w-full items-center justify-center bg-slate-950 pb-3 shadow-[0_0_32px_48px_rgba(2,6,23,1)] transition-all dark:bg-slate-300 dark:shadow-[0_0_28px_32px_rgba(203,213,225,1)]">
      <svg
        viewBox="-21 0 100 20"
        width="258"
        height="21"
        className="font-semibold transition-all hover:scale-125"
      >
        <defs>
          <linearGradient id="gradientWave" x1="0" x2="0" y1="0" y2="1">
            <stop
              offset="5%"
              stopColor={theme === "dark" ? "#000" : "#fff"}
            ></stop>
            <stop offset="95%" stopColor="#6525ff"></stop>
          </linearGradient>
          <pattern
            id="wave"
            x="0"
            y="3"
            width="120"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              id="wavePath"
              d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
              mask="url(#mask)"
              fill={theme === "dark" ? "#004" : "#fff"}
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="1s"
                type="translate"
                from="0,0"
                to="40,0"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </pattern>
        </defs>
        <text
          textAnchor="middle"
          fontSize="14px"
          x="27px"
          y="16px"
          fill="url(#wave)"
          fillOpacity="1.0"
        >
          Desenvolvido com ☕ por EltonJCS
        </text>
        <text
          textAnchor="middle"
          fontSize="14px"
          x="27px"
          y="16px"
          fill="url(#gradientWave)"
          fillOpacity="0.4"
        >
          Desenvolvido com ☕ por EltonJCS
        </text>
      </svg>
    </footer>
  );
};

export default Footer;
