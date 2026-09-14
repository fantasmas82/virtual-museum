"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionCard from "./SectionCard";

type Section = {
  id: number;
  title: string;
  description: string;
  image: string;
  audio: string;
};

type Props = {
  sections: Section[];
};

export default function MuseumSlider({ sections }: Props) {
  const [current, setCurrent] = useState(0);

  if (!sections || sections.length === 0) {
    return (
      <p className="text-center text-[#6B5545]">
        هیچ مکانی ثبت نشده است.
      </p>
    );
  }

  function nextSlide() {
    setCurrent((prev) =>
      prev === sections.length - 1 ? 0 : prev + 1
    );
  }

  function previousSlide() {
    setCurrent((prev) =>
      prev === 0 ? sections.length - 1 : prev - 1
    );
  }

  return (
    <div className="mt-12">
      

      {/* Slider */}
      <div className="flex items-center justify-center gap-4 md:gap-8">

        {/* Previous */}
        <button
          type="button"
          onClick={previousSlide}
          className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#A98252]/50 bg-[#E2D3BE] text-2xl text-[#3B2A20] shadow-sm transition-all duration-300 hover:bg-[#A98252] hover:text-white hover:shadow-md"
          aria-label="مکان قبلی"
        >
          ←
        </button>

        {/* Card */}
        <div className="w-full max-w-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={sections[current].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <SectionCard section={sections[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={nextSlide}
          className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#A98252]/50 bg-[#E2D3BE] text-2xl text-[#3B2A20] shadow-sm transition-all duration-300 hover:bg-[#A98252] hover:text-white hover:shadow-md"
          aria-label="مکان بعدی"
        >
          →
        </button>

      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`رفتن به مکان ${index + 1}`}
            className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-[#A98252]"
                : "w-2 bg-[#A98252]/30"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="mt-4 text-center text-sm text-[#6B5545]">
        {current + 1} / {sections.length}
      </p>

    </div>
  );
}

