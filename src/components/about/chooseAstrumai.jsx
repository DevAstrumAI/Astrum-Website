import React from "react";
import {
  TrendingUp,
  Users,
  Globe,
  Rocket,
  HeartHandshake,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: TrendingUp,
    title: "Client Success",
    description:
      "Trusted by clients across diverse industries worldwide. Successfully delivered projects ranging from startups to enterprise-scale solutions. Our long-term partnerships reflect consistent value and reliability.",
  },
  {
    icon: Users,
    title: "Top-Tier Talent",
    description:
      "A world-class team of engineers, designers, and strategists with deep industry expertise. We combine technical excellence with creative thinking to build reliable, high-impact solutions. Every project is handled by specialists who understand both technology and business goals.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Serving clients worldwide from our London, UK HQ and global development hubs. Our distributed teams allow us to work across time zones with speed and efficiency. This global presence helps us deliver consistent quality and round-the-clock collaboration.",
  },
  {
    icon: Rocket,
    title: "Agile & Scalable",
    description:
      "Solutions designed to adapt as your business grows and evolves. We follow agile methodologies to ensure faster delivery and continuous improvement. Whether you're a startup or an enterprise, our systems scale seamlessly with demand.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnerships",
    description:
      "We believe in building relationships, not just delivering software. Our team stays invested beyond launch, offering continuous support and optimization. Your long-term success is the measure of our own.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description:
      "Always working with the latest tools, frameworks, and architectures. We future-proof your products by adopting proven, modern technologies. Innovation is built into everything we design and develop.",
  },
];

export default function ChooseAstrumai() {
  return (
    <section className="py-4 md:py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-left"
        >
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-5xl font-extralight tracking-tight text-gray-300 uppercase"
          >
            Why Choose{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-semibold">
              AstrumAI?
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-16">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: "easeOut" }}
              className="flex flex-col items-start group"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 + 0.15, type: "spring", stiffness: 180 }}
                className="mb-5"
              >
                <item.icon
                  className="w-7 h-7 md:w-8 md:h-8 text-gray-500 transition-all duration-400 group-hover:text-[#914FFC] group-hover:drop-shadow-[0_0_10px_rgba(145,79,252,0.6)]"
                  strokeWidth={1.5}
                />
              </motion.div>

              {/* Title */}
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xl md:text-2xl font-light text-gray-200 tracking-tight mb-2 group-hover:text-white transition-colors duration-300"
              >
                {item.title}
              </h3>

              {/* Accent line */}
              <div className="w-5 h-px bg-[#914FFC]/40 mb-4 group-hover:w-10 group-hover:bg-[#914FFC] transition-all duration-500" />

              {/* Description */}
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-500 text-sm md:text-base leading-relaxed font-light"
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
