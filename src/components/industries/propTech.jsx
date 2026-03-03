import React from "react";
import { motion } from "framer-motion";
import propTechSolution from "../../assets/propTech-solutions.jpeg";
import propTechSolution2 from "../../assets/propTech-solutions2.jpeg";
import ContactForm from "../contactForm";
import { Link } from "react-router-dom";
import IndustryHeroVisual from "./IndustryHeroVisual";

const CARD = "group p-6 md:p-8 rounded-2xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3";
const CARD_TITLE = "text-base md:text-lg font-light text-gray-200 leading-snug tracking-tight";
const CARD_DESC = "text-sm text-gray-500 leading-relaxed font-light";
const SECTION_LABEL = "text-[11px] uppercase tracking-[0.22em] text-gray-600 mb-3";
const SECTION_HEADING = "text-3xl md:text-5xl font-extralight text-gray-100 tracking-[-0.02em] leading-[1.15] mb-3";
const ACCENT = "bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-normal";
const DIVIDER = "h-px w-12 bg-linear-to-r from-[#914FFC] to-transparent mb-8";
const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const PropTech = () => {
  return (
    <div className="min-h-screen text-white bg-black">

      {/* ── Hero ── */}
      <section className="snap-section relative pt-4 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div {...{ initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 } }}
            className="flex-1 space-y-6 order-2 md:order-1">
            <p className={SECTION_LABEL}>Industry · PropTech</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-100 leading-[1.08] tracking-[-0.03em]">PropTech</h1>
            <div className={DIVIDER} />
            <h2 className="text-xl md:text-2xl font-light text-gray-400 leading-snug tracking-tight">
              Redefining Real Estate Through <span className={ACCENT}>Intelligent Technology</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-md leading-[1.85] font-light">
              Harness advanced digital solutions to modernize property management, real estate transactions, and smart building ecosystems. We combine AI insights and IoT automation to accelerate digital transformation.
            </p>
            <Link to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] hover:from-violet-600 hover:to-[#914FFC] text-white font-light text-sm transition-all duration-300 shadow-lg shadow-purple-900/30 hover:-translate-y-0.5 active:scale-95">
              Talk to us →
            </Link>
          </motion.div>
          <div className="flex-1 flex justify-center items-center order-1 md:order-2">
            <IndustryHeroVisual src="https://res.cloudinary.com/deykcfhzj/image/upload/v1771999134/prop-tech_jh78d9.png" alt="PropTech" />
          </div>
        </div>
      </section>

      {/* ── Solutions 1 ── */}
      <section className="snap-section py-16 md:py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className={SECTION_LABEL}>Solutions</p>
            <h2 className={SECTION_HEADING}>Next-Generation <span className={ACCENT}>PropTech Solutions</span></h2>
          </motion.div>
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Intelligent Property Operations", desc: "Streamline lease management, tenant screening, maintenance tracking, and financial reporting with AI automation." },
                { title: "Digital Real Estate Platforms", desc: "Modern property marketplaces with advanced search, virtual tours, and AI-driven recommendations." },
                { title: "Secure Blockchain Transactions", desc: "Blockchain-enabled smart contracts and digital identity solutions for transparency and trust." },
                { title: "Immersive AR & VR Experiences", desc: "Interactive 3D visualizations and virtual property tours that simplify buying and leasing decisions." },
              ].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className={CARD}>
                  <h4 className={CARD_TITLE}>{item.title}</h4>
                  <p className={CARD_DESC}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="lg:w-1/3 rounded-2xl overflow-hidden">
              <img src={propTechSolution} alt="PropTech Solution" className="w-full h-full object-cover shadow-xl shadow-blue-900/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions 2 ── */}
      <section className="snap-section py-16 md:py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-10">
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Smart Buildings & IoT Integration", desc: "IoT-driven automation for energy efficiency, security systems, and predictive maintenance." },
                { title: "AI-Driven Valuation & Investment Insights", desc: "ML analytics to evaluate property values and optimize real estate investment strategies." },
                { title: "Compliance & Legal Automation", desc: "AI-powered contract management, lease processing, and secure digital documentation." },
                { title: "Real Estate CRM & Lead Intelligence", desc: "Intelligent CRM solutions that streamline lead tracking, communication, and relationship management." },
              ].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className={CARD}>
                  <h4 className={CARD_TITLE}>{item.title}</h4>
                  <p className={CARD_DESC}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="lg:w-1/3 rounded-2xl overflow-hidden">
              <img src={propTechSolution2} alt="PropTech Solution 2" className="w-full h-full object-cover shadow-xl shadow-purple-900/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="snap-section py-16 md:py-20 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp}
            className="rounded-2xl border border-white/10 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(30,81,211,0.18) 0%, rgba(123,89,208,0.14) 50%, rgba(201,79,157,0.16) 100%)" }}>
            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className={SECTION_LABEL}>Why AstrumAI</p>
                <h2 className="text-2xl md:text-4xl font-extralight text-white tracking-tight leading-[1.2] mb-2">
                  Why Choose Astrum AI<br /><span className={ACCENT}>for PropTech Solutions?</span>
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  "End-to-End Development – From strategy and design to deployment and scaling.",
                  "Data-Driven Intelligence – AI and big data to optimize valuations and tenant experiences.",
                  "Seamless System Integration – Connect PropTech platforms with IoT, CRM, and compliance systems.",
                  "Security & Compliance – Regulation-ready solutions that protect sensitive property data.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#914FFC] mt-2 shrink-0" />
                    <p className="text-sm text-gray-300 font-light leading-relaxed">{text}</p>
                  </div>
                ))}
                <Link to="/contact-us"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full bg-white text-black text-sm font-light hover:bg-gray-100 transition-all shadow-md hover:-translate-y-px active:scale-95">
                  Get free consultation →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="snap-section">
        <ContactForm />
      </section>
    </div>
  );
};

export default PropTech;
