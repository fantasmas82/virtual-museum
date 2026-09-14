"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Section = {
  id: number;
  title: string;
  image: string;
};

type Props = {
  section: Section;
};

export default function SectionCard({ section }: Props) {
  const router = useRouter();

  function openSection() {
    console.log("OPEN SECTION:", section.id);
    router.push(`/sections/${section.id}`);
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden border border-[#A98252]/40 bg-[#E2D3BE] shadow-lg"
    >

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={section.image}
          alt={section.title}
          className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-80"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-right md:p-8">

        <h3 className="text-2xl font-bold text-[#3B2A20] md:text-3xl">
          {section.title}
        </h3>

        <div className="mt-4 h-px w-12 bg-[#A98252]" />

        <p className="mt-4 text-sm leading-7 text-[#6B5545]">
          برای مشاهده اطلاعات این مکان وارد شوید.
        </p>

        {/* Button */}
        <button
          type="button"
          onClick={openSection}
          className="mt-6 cursor-pointer border border-[#8C663D] bg-[#F7F4ED] px-6 py-3 text-sm font-medium text-[#3B2A20] transition-all duration-300 hover:bg-[#8C663D] hover:text-white"
        >
          مشاهده این بخش
        </button>

      </div>

    </motion.div>
  );
}
