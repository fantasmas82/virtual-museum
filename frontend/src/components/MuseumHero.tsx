"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Museum = {
  name: string;
  description: string;
  cover_image: string;
};

type Props = {
  museum: Museum;
};

export default function MuseumHero({ museum }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function enterMuseum() {
    setLoading(true);

    setTimeout(() => {
      router.push("/museums/1");
    }, 2800);
  }

  return (
    <main className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/loading-bg.png')",
        }}
      />

      {/* Very subtle overlay */}
      <div className="absolute inset-0 bg-[#3B2A20]/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center text-center"
        >

          {/* Decorative symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 text-4xl text-[#A98252]"
          >
            ✦
          </motion.div>

          {/* Museum name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl font-bold tracking-wide text-[#3B2A20] md:text-6xl"
          >
            {museum.name}
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 100, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="my-7 h-px bg-[#A98252]"
          />

          {/* Enter button */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={enterMuseum}
            disabled={loading}
            className="border border-[#8C663D] bg-[#EDE2D0]/30 px-10 py-4 text-sm font-medium tracking-[0.2em] text-[#3B2A20] backdrop-blur-[2px] transition-all duration-500 hover:bg-[#8C663D] hover:text-white disabled:cursor-default hover:cursor-pointer"
          >
            {loading ? "در حال ورود..." : "ورود به موزه"}
          </motion.button>

        </motion.div>
      </div>

      {/* Loading transition */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-50 flex items-center justify-center bg-[#EDE2D0]"
        >
          <div className="flex flex-col items-center text-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-4xl text-[#A98252]"
            >
              ✦
            </motion.div>

            <h2 className="text-3xl font-bold text-[#3B2A20] md:text-5xl">
              {museum.name}
            </h2>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="my-6 h-px bg-[#A98252]"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm tracking-[0.25em] text-[#6B5545]"
            >
              در حال ورود...
            </motion.p>

          </div>
        </motion.div>
      )}

    </main>
  );
}

