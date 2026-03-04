import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="py-14 md:py-20 bg-black border-t border-white/[0.04] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span
            style={{ fontFamily:"'Outfit', sans-serif" }}
            className="text-[10px] tracking-[0.28em] uppercase text-gray-600 font-light"
          >
            Why
          </span>
          <h2
            style={{ fontFamily:"'Outfit', sans-serif" }}
            className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.02em] text-gray-100"
          >
            Our Mission
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-linear-to-r from-transparent via-[#914FFC] to-transparent" />
        </motion.div>

        {/* Two-column text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity:0, x:-24 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7, ease:"easeOut" }}
            className="space-y-6 text-left"
          >
            <p
              style={{ fontFamily:"'Outfit', sans-serif" }}
              className="text-lg md:text-xl font-extralight text-gray-200 leading-[1.7] tracking-tight"
            >
              At AstrumAI, we build reliable AI systems for critical decisions.
              Across industries, AI is central, but many organizations still lack
              a clear path from pilot to profit.
            </p>
            <p
              style={{ fontFamily:"'Outfit', sans-serif" }}
              className="text-sm md:text-base text-gray-500 leading-[1.85] font-light"
            >
              Across private and public sectors, AI is becoming central to
              operations. Yet despite significant investment, many organizations
              still lack a clear roadmap to move from pilot projects to
              profitable outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity:0, x:24 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7, delay:0.12, ease:"easeOut" }}
            className="space-y-5 text-left"
          >
            <p style={{ fontFamily:"'Outfit', sans-serif" }}
              className="text-sm md:text-base text-gray-500 leading-[1.85] font-light">
              Trusted by industry leaders, our RLHF, image, 3D point cloud,
              semantic, and LiDAR/RADAR annotation products deliver world-class accuracy.
            </p>
            <p style={{ fontFamily:"'Outfit', sans-serif" }}
              className="text-sm md:text-base text-gray-500 leading-[1.85] font-light">
              Our proprietary{" "}
              <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-light">
                Data Engine
              </span>{" "}
              fuels advanced LLMs, generative, and computer vision models with
              high-quality data, helping organizations customize and{" "}
              <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-light">
                Apply AI
              </span>{" "}
              to their operations.
            </p>
            <p style={{ fontFamily:"'Outfit', sans-serif" }}
              className="text-sm md:text-base text-gray-500 leading-[1.85] font-light">
              We embed our expertise into the{" "}
              <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-light">
                AstrumAI Generative AI Platform
              </span>{" "}
              helping organizations successfully apply AI to their most critical
              business and government decisions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
