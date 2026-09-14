"use client";

import { motion } from "framer-motion";

type Props = {
  museumName: string;
};

export default function LoadingScreen({ museumName }: Props) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#EDE2D0]"
    >
      <div className="flex flex-col items-center text-center">

        {/* Decorative symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-3xl text-[#A98252]"
        >
          ✦
        </motion.div>

        {/* Museum name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl font-bold text-[#3B2A20] md:text-5xl"
        >
          {museumName}
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="my-6 h-px w-24 bg-[#A98252]"
        />

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-sm tracking-[0.25em] text-[#6B5545]"
        >
          در حال ورود...
        </motion.p>

      </div>
    </motion.div>
  );
}