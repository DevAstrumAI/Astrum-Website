import React from "react";
import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 80, skewY: 4 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ShapingTomorrow = () => {
  const words = ["About", "Us"];

  return (
    <section className="w-full pb-16 pt-8 md:pb-24 md:pt-4 bg-black overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="text-center">

          {/* Animated heading — word-by-word reveal */}
          <div className="relative isolate mx-auto w-fit overflow-hidden">
            <h1
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              className="
                relative z-0 flex gap-[0.25em] justify-center
                text-[min(16vw,80px)]
                sm:text-[min(18vw,110px)]
                md:text-[min(16vw,140px)]
                lg:text-[min(14vw,180px)]
                xl:text-[min(12vw,220px)]
                font-light tracking-[-0.03em] text-gray-100
                leading-none whitespace-nowrap
              "
            >
              {words.map((word, i) => (
                <span key={i} className="overflow-hidden inline-block">
                  <motion.span
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Glowing underline */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 h-px bg-linear-to-r from-transparent via-[#914FFC] to-transparent origin-center"
            />
          </div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="mt-10 text-2xl font-extralight tracking-tight leading-snug text-gray-300 sm:text-3xl md:text-4xl"
          >
            Shaping Tomorrow with{" "}
            <br className="hidden md:block" />
            Intelligent Innovation by
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-semibold">
              {" "}AstrumAI
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl font-light"
          >
            We empower ambitious brands to unlock new possibilities, accelerate
            growth, and solve real-world challenges through cutting-edge AI and
            digital transformation. Experience the future—built by{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-semibold">
              AstrumAI
            </span>
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1.5"
            >
              <span
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xs tracking-[0.2em] uppercase text-gray-600 font-light"
              >
                Scroll
              </span>
              <div className="w-px h-8 bg-linear-to-b from-[#914FFC] to-transparent" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ShapingTomorrow;
