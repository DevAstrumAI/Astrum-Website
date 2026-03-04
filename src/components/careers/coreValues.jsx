import React from "react";
import { Heart, Shield, Zap, Trophy, Star } from "lucide-react";
import { PiBrain } from "react-icons/pi";
import { GiHoleLadder } from "react-icons/gi";
import { FaUsersLine } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  { icon: Heart,       title: "Customer Obsession",      description: "We put our customers at the heart of everything we do. Every interaction, delivery, and solution builds trust, strengthens relationships, and drives their success." },
  { icon: PiBrain,     title: "Curiosity & Clarity",     description: "We approach problems with curiosity and seek clarity through verifiable hypotheses. We ask tough questions, test assumptions, and pursue truth with intellectual honesty." },
  { icon: GiHoleLadder,title: "Bold Ambition",           description: "We aim high and pursue ambitious goals without fear. Setbacks are learning opportunities, and we use every challenge to refine our approach and accelerate success." },
  { icon: FaUsersLine, title: "Collaborative Energy",    description: "We thrive on collective achievement. By supporting one another with trust, respect, and transparency, we create an environment where ideas flow freely." },
  { icon: Shield,      title: "Ownership Mindset",       description: "We take responsibility for outcomes and embrace the power to make meaningful change. Initiative, accountability, and proactive action are how we drive impact." },
  { icon: Zap,         title: "Relentless Drive",        description: "Obstacles don't stop us. We tackle challenges head-on by stepping beyond comfort zones and rigorously testing solutions to solve complex problems." },
  { icon: FaRunning,   title: "Move Fast, Learn Fast",   description: "We act with purpose and agility. Quick, informed decisions allow us to adapt rapidly, experiment safely, and continuously improve our results." },
  { icon: Trophy,      title: "Impact Over Intentions",  description: "Results are our measure of success. We set precise goals, track progress objectively, and hold ourselves accountable to the outcomes we deliver." },
  { icon: Star,        title: "Excellence in Every Detail", description: "Quality is never accidental. From minute details to overarching strategies, we design, execute, and scale with precision, care, and deliberate intent." },
];

export default function CoreValues() {
  return (
    <div className="py-10 md:py-16 bg-black border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="mb-14 md:mb-20"
        >
          <h2
            style={{ fontFamily:"'Outfit', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.02em] text-gray-100 uppercase"
          >
            Our Core{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              Principles
            </span>
          </h2>
          <div className="mt-4 h-px w-16 bg-linear-to-r from-[#914FFC] to-transparent" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12 lg:gap-y-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity:0, y:28 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.55, delay:(index%2)*0.08, ease:"easeOut" }}
              className="flex flex-col items-start text-left group"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale:0.65, opacity:0 }}
                whileInView={{ scale:1, opacity:1 }}
                viewport={{ once:true }}
                transition={{ duration:0.45, delay:index*0.04+0.15, type:"spring", stiffness:200 }}
                className="mb-5"
              >
                <value.icon
                  className="w-6 h-6 md:w-7 md:h-7 text-gray-600 transition-all duration-300 group-hover:text-[#914FFC] group-hover:drop-shadow-[0_0_10px_rgba(145,79,252,0.6)]"
                  strokeWidth={1.4}
                />
              </motion.div>

              {/* Title */}
              <h3
                style={{ fontFamily:"'Outfit', sans-serif" }}
                className="text-base md:text-lg font-light text-gray-100 tracking-tight mb-2 group-hover:text-white transition-colors duration-300"
              >
                {value.title}
              </h3>

              {/* Accent line */}
              <div className="w-5 h-px bg-[#914FFC]/30 mb-3 group-hover:w-10 group-hover:bg-[#914FFC]/70 transition-all duration-500" />

              {/* Description */}
              <p
                style={{ fontFamily:"'Outfit', sans-serif" }}
                className="text-gray-500 text-sm leading-[1.85] font-light"
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
