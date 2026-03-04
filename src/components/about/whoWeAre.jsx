import React from "react";
import { motion } from "framer-motion";

const points = [
  {
    label: "Mission",
    title: "Building AI that creates measurable outcomes",
    description:
      "Our mission is to help organizations solve real business challenges with responsible, production-ready AI. We design practical systems that improve decisions, accelerate operations, and unlock sustainable growth.",
  },
  {
    label: "Vision",
    title: "A future where intelligent systems empower every team",
    description:
      "Our vision is to make advanced AI accessible, reliable, and human-centered across industries. We aim to be the trusted partner that transforms bold ideas into scalable impact through innovation and execution excellence.",
  },
];

export default function WhoWeAre() {
  return (
    <div className="relative py-10 md:py-16 bg-black border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-12 md:mb-16 text-left"
        >
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-xs uppercase tracking-[0.2em] text-gray-600 font-light mb-4"
          >
            Identity
          </p>
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.02em] text-gray-100"
          >
            Who{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              We Are
            </span>
          </h2>
          <div className="mt-5 h-px w-24 bg-gray-700" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {points.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md p-6 md:p-8 overflow-hidden"
            >
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xs uppercase tracking-[0.18em] text-gray-500 font-light"
              >
                {item.label}
              </p>
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="mt-4 text-xl md:text-2xl font-light text-gray-100 leading-[1.35] tracking-tight"
              >
                {item.title}
              </h3>
              <div
                className="mt-4 h-px w-12 group-hover:w-20 transition-all duration-500"
                style={{ background: "rgba(255,255,255,0.25)" }}
              />
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="mt-4 text-sm md:text-base text-gray-500 leading-[1.85] font-light"
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
