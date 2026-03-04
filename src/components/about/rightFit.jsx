import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function RightFit() {
  return (
    <section className="pt-12 pb-32 md:pt-20 md:pb-52 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] bg-linear-to-b from-[#1a1a1e] via-[#111113] to-black p-10 md:p-16 text-left shadow-2xl border border-white/5"
        >
          {/* Animated corner glow */}
          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#914FFC]/15 rounded-full filter blur-[100px] pointer-events-none"
          />
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-[#2B61E5]/10 rounded-full filter blur-[120px] pointer-events-none"
          />

          <div className="relative z-10 max-w-4xl">
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#914FFC]" />
              <span
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xs tracking-[0.2em] uppercase text-gray-500 font-light"
              >
                Our Philosophy
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight text-gray-200 leading-[1.25] tracking-tight mb-10"
            >
              We believe in{" "}
              <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-semibold">
                The Right Fit
              </span>
              aligning the right expertise, the right technology, and the right
              process to deliver measurable success for every client
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                to="/contact-us"
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="inline-flex items-center px-7 py-3 md:px-10 md:py-4 bg-gray-200 text-black hover:bg-white font-light text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-black/20 active:scale-95"
              >
                Get free consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
