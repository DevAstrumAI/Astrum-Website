import React from "react";
import { Users, Target } from "lucide-react";
import { FaCogs } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { motion } from "framer-motion";

const values = [
  {
    icon: FaCogs,
    title: "Innovation",
    description: "We push the boundaries of what's possible with AI.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best solutions are built together.",
  },
  {
    icon: FaHandshakeAngle,
    title: "Integrity",
    description: "We're committed to transparency and ethical practices.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-0 md:pt-5 md:pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-gray-300 uppercase"
          >
            Our Core{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-semibold">
              Values
            </span>
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-12 max-w-3xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-start text-left group"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <value.icon
                  className="
                    w-8 h-8 md:w-10 md:h-10
                    text-gray-400
                    transition-all duration-400
                    group-hover:text-[#914FFC]
                    group-hover:drop-shadow-[0_0_12px_rgba(145,79,252,0.7)]
                  "
                  strokeWidth={1}
                />
              </motion.div>

              {/* Title */}
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xl md:text-2xl font-light text-gray-200 tracking-tight mb-3 group-hover:text-white transition-colors duration-300"
              >
                {value.title}
              </h3>

              {/* Divider */}
              <div className="w-6 h-px bg-linear-to-r from-[#914FFC] to-transparent mb-4 group-hover:w-12 transition-all duration-500" />

              {/* Description */}
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-500 text-sm md:text-base leading-relaxed font-light"
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
