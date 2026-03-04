import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const INDUSTRIES = [
  {
    title: "Fintech",
    description:
      "Build secure, AI-powered financial experiences with fraud prevention, analytics, and scalable transaction systems.",
    href: "/fintech",
    image:
      "https://res.cloudinary.com/deykcfhzj/image/upload/v1771999133/fintech_osnvzo.png",
  },
  {
    title: "Retail",
    description:
      "Enable personalized commerce, optimize inventory, and deliver seamless omnichannel customer journeys.",
    href: "/retail",
    image:
      "https://res.cloudinary.com/deykcfhzj/image/upload/v1771999135/retail_rx72c1.png",
  },
  {
    title: "Health Care",
    description:
      "Transform care delivery with intelligent automation, predictive insights, and data-driven digital health solutions.",
    href: "/health-care",
    image:
      "https://res.cloudinary.com/deykcfhzj/image/upload/v1771999131/health-care_rcuh7t.png",
  },
  {
    title: "Information Technology",
    description:
      "Modernize enterprise IT with scalable architecture, AI assistants, and resilient automation across operations.",
    href: "/information-tech",
    image:
      "https://res.cloudinary.com/deykcfhzj/image/upload/v1771999131/information-tech_lc6veu.png",
  },
  {
    title: "Proptech",
    description:
      "Accelerate real-estate innovation with smart property intelligence, forecasting, and connected digital workflows.",
    href: "/proptech",
    image:
      "https://res.cloudinary.com/deykcfhzj/image/upload/v1771999134/prop-tech_jh78d9.png",
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="snap-section relative px-6 sm:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#80808020 1px,transparent 1px),linear-gradient(to bottom,#80808020 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <motion.div
          initial={{ opacity: 0.3, scale: 0.96 }}
          animate={{ opacity: [0.25, 0.45, 0.25], scale: [0.96, 1.03, 0.96] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[700px] h-[420px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(145,79,252,0.10) 0%, transparent 72%)",
            filter: "blur(46px)",
          }}
        />

        <motion.div
          animate={{ opacity: [0.18, 0.3, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-12 w-56 h-56 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(43,97,229,0.16) 0%, transparent 70%)",
            filter: "blur(38px)",
          }}
        />

        <div className="w-full max-w-7xl mx-auto relative z-10 text-center py-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-[11px] uppercase tracking-[0.22em] text-gray-600 mb-3"
          >
            Industry Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.02em] leading-[1.12] text-gray-100"
          >
            Industries We{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              Transform
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-4 h-px w-16 bg-linear-to-r from-transparent via-[#914FFC] to-transparent origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
            className="mt-6 text-sm md:text-base text-gray-500 font-light leading-[1.85] max-w-3xl md:mx-auto"
          >
            We design AI-first solutions tailored to complex industry workflows
            and business goals. Explore how AstrumAI helps each sector scale
            with intelligent, reliable systems.
          </motion.p>
        </div>
      </section>

      <section className="snap-section py-10 md:py-16 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" }}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.06] bg-black/40 mb-5">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-contain p-4 mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-2xl font-extralight text-gray-100 tracking-tight mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-[1.8] mb-6">
                  {industry.description}
                </p>
                <Link
                  to={industry.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Explore {industry.title} {"->"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="snap-section px-6 sm:px-12 lg:px-16 border-t border-white/[0.06] flex items-center">
        <div className="w-full max-w-5xl mx-auto text-left md:text-center py-12 md:py-16">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-[-0.02em] text-gray-100 leading-[1.2]">
            Need an industry-specific{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              AI strategy?
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-500 font-light leading-[1.85] max-w-2xl md:mx-auto">
            Talk to our team and we will map the right architecture, use cases,
            and implementation roadmap for your sector.
          </p>
          <div className="mt-8">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] hover:from-violet-600 hover:to-[#914FFC] text-white text-sm font-light transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-md"
            >
              Talk to us {"->"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
