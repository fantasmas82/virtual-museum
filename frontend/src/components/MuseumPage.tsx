"use client";

import { motion } from "framer-motion";
import MuseumSlider from "./MuseumSlider";

type Section = {
  id: number;
  title: string;
  description: string;
  image: string;
  audio: string;
};

type Museum = {
  id: number;
  name: string;
  description: string;
  cover_image: string;
  sections: Section[];
};

type Props = {
  museum: Museum;
};

export default function MuseumPage({ museum }: Props) {
  return (
    <main className="min-h-screen bg-[#F7F4ED] text-[#3B2A20]">

      {/* Museum Header */}
      <section className="px-6 pb-16 pt-12">
        <div className="mx-auto max-w-5xl">

          {/* Museum Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-2xl border border-[#A98252]/40 bg-[#EFE7DA] shadow-lg"
          >
            <div className="flex flex-col md:flex-row">

              {/* Museum Image */}
              <div className="w-full p-4 md:w-[42%]">
                <div className="h-full min-h-[260px] overflow-hidden rounded-xl border border-[#A98252]/30">
                  <img
                    src={museum.cover_image}
                    alt={museum.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Museum Info */}
              <div className="flex w-full flex-col justify-center px-6 pb-8 pt-4 text-center md:w-[58%] md:px-10 md:py-10 md:text-right">

                <h1 className="text-3xl font-bold md:text-4xl">
                  {museum.name}
                </h1>

                <div className="my-5 h-px w-16 bg-[#A98252] md:mr-0 md:ml-auto" />

                <p className="text-base leading-8 text-[#6B5545] md:text-lg">
                  {museum.description}
                </p>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Museum Sections */}
      <section className="border-t border-[#A98252]/20 px-6 py-16">
        <div className="mx-auto max-w-6xl">

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              مکان‌های موزه
            </h2>

            <div className="mx-auto mt-5 h-px w-16 bg-[#A98252]" />
          </motion.div>

          {/* Slider */}
          <MuseumSlider sections={museum.sections} />

        </div>
      </section>

    </main>
  );
}

