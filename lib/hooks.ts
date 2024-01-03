import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { useActiveSectionContext } from "../context/active-section-context";

import { links } from "./data";

type SectionName = (typeof links)[number]["name"];

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
