import React from "react";
import {
  Trophy, Share2, Scaling, MessageSquareText, BarChart3, ArrowRight,
} from "lucide-react";
import rocketImg from "../../assets/rocket-coming-out.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ChallengeItem = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    className="flex gap-5 group items-start"
  >
    <div className="shrink-0 pt-0.5">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 + 0.15, type: "spring", stiffness: 200 }}
      >
        <Icon className="w-6 h-6 text-gray-600 group-hover:text-[#914FFC] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(145,79,252,0.6)]" />
      </motion.div>
    </div>
    <div className="space-y-2">
      <h4
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className="text-base font-light text-gray-100 tracking-tight group-hover:text-white transition-colors duration-300"
      >
        {title}
      </h4>
      <div className="w-5 h-px bg-[#914FFC]/30 group-hover:w-10 group-hover:bg-[#914FFC]/60 transition-all duration-500" />
      <p
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className="text-sm text-gray-500 leading-[1.8] font-light max-w-[260px]"
      >
        {description}
      </p>
    </div>
  </motion.div>
);

const Challenges = () => {
  const challenges = [
    {
      icon: Trophy,
      title: "Weak Market Presence",
      description: "Without a clear positioning strategy, even strong products struggle to gain attention in competitive industries.",
    },
    {
      icon: Share2,
      title: "Fragmented Marketing Execution",
      description: "Disconnected campaigns and unclear messaging drain budgets and fail to deliver measurable impact.",
    },
    {
      icon: Scaling,
      title: "Barriers to Sustainable Growth",
      description: "Scaling successfully requires structured processes, operational clarity, and disciplined project leadership.",
    },
    {
      icon: MessageSquareText,
      title: "Disjointed Brand Communication",
      description: "Inconsistent content and messaging weaken credibility and dilute brand identity.",
    },
    {
      icon: BarChart3,
      title: "Decisions Without Insight",
      description: "Data-driven growth through analytics, performance tracking, and SEO ensures optimized results.",
    },
  ];

  return (
    <section className="bg-black py-20 md:py-24 px-6 sm:px-12 relative overflow-hidden border-t border-white/[0.04]">
      {/* Decorative rocket */}
      <img
        src={rocketImg}
        alt=""
        className="absolute -right-16 bottom-0 w-[420px] h-auto opacity-[0.12] pointer-events-none hidden lg:block"
        style={{ filter: "grayscale(0.3)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.02em] text-gray-100 max-w-3xl text-left"
          >
            Solving Key{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              Challenges
            </span>{" "}
            for{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              Startups
            </span>
          </h2>
          <div className="mt-4 h-px w-16 bg-linear-to-r from-[#914FFC] to-transparent" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 text-left">
          {challenges.map((item, index) => (
            <ChallengeItem key={index} index={index} {...item} />
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="flex items-center"
          >
            <Link
              to="/contact-us"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="
                inline-flex items-center gap-2 px-7 py-3 md:px-9 md:py-4
                bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
                hover:from-violet-600 hover:to-[#914FFC]
                text-white font-light text-sm md:text-base
                rounded-full shadow-lg shadow-purple-900/30
                transition-all duration-300
                hover:shadow-xl hover:shadow-purple-700/50
                hover:-translate-y-0.5 active:scale-95
              "
            >
              How we help
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
