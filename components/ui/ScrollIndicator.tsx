"use client";

import { sacramento } from "@/lib/fonts";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const scrollIndicator = document.querySelector(".scroll-indicator") as HTMLElement;

    const handleUpdate = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      
      if (scrollIndicator) {
        scrollIndicator.style.height = `${scrollPercentage}%`;
      }
      
      setPercentage(Math.ceil(scrollPercentage));
    };

    handleUpdate();

    window.addEventListener("scroll", handleUpdate);

    return () => {
      window.removeEventListener("scroll", handleUpdate);
    };
  }, []);

  return (
    <div className="hidden md:flex fixed right-8 top-[50%] translate-y-[-50%] w-1 h-[80vh] bg-[#61cc9c]/[0.04] before:absolute before:w-full before:aspect-[1/2] before:top-0 before:border before:border-b-0 after:absolute after:w-full after:aspect-[1/2] after:bottom-0 after:border after:border-t-0">
      <div
        className="scroll-indicator absolute w-full h-[0%] top-0 rounded-full"
        style={{
          backgroundImage: "linear-gradient(transparent, #61cc9c)",
          transition: ".3s ease",
        }}
      ></div>
      <span
        className={`${sacramento.className} absolute top-[101%] font-semibold left-[50%] translate-x-[-50%]`}
      >
        {percentage}%
      </span>
    </div>
  );
};

export default ScrollIndicator;
