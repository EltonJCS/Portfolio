import { useEffect, useRef, MouseEvent } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "../context/active-section-context";

import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.8) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

// Add perspective to parent element and transform using the x and y variables
export const use3DHoverEffect = (rotationIntensity: number | null) => {
  const boundingRef = useRef<DOMRect | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!boundingRef.current || !rotationIntensity) return;
    const mouseX = event.clientX - boundingRef.current.left;
    const mouseY = event.clientY - boundingRef.current.top;
    const mouseXPercentage = mouseX / boundingRef.current.width;
    const mouseYPercentage = mouseY / boundingRef.current.height;
    const mouseXRotation = (mouseXPercentage - 0.5) * rotationIntensity;
    const mouseYRotation = (0.5 - mouseYPercentage) * rotationIntensity;

    event.currentTarget.style.setProperty(
      "--x-rotation",
      `${mouseYRotation}deg`,
    );
    event.currentTarget.style.setProperty(
      "--y-rotation",
      `${mouseXRotation}deg`,
    );
    event.currentTarget.style.setProperty("--x", `${mouseXPercentage * 100}%`);
    event.currentTarget.style.setProperty("--y", `${mouseYPercentage * 100}%`);
  };

  const handleMouseLeave = () => {
    boundingRef.current = null;
  };

  const handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
    boundingRef.current = event.currentTarget.getBoundingClientRect();
  };

  return { handleMouseMove, handleMouseLeave, handleMouseEnter };
};
