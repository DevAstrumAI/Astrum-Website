import React from "react";
import { motion } from "framer-motion";
import healthSolution1 from "../../assets/health-solution1.jpeg";
import healthSolution2 from "../../assets/health-solution2.jpeg";
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

const HealthCare = () => {
  return (
    <div className="min-h-screen text-white bg-black">

      {/* ── Hero ── */}
      <section className="relative pt-4 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div {...{ initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 } }}
            className="flex-1 space-y-6 order-2 md:order-1">
            <p className={SECTION_LABEL}>Industry · Healthtech</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-100 leading-[1.08] tracking-[-0.03em]">Healthtech</h1>
            <div className={DIVIDER} />
            <h2 className="text-xl md:text-2xl font-light text-gray-400 leading-snug tracking-tight">
              Transforming Healthcare <span className={ACCENT}>Through Innovation</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-md leading-[1.85] font-light">
              Empower your healthcare business with secure, scalable solutions. From telemedicine and AI-driven diagnostics to EHRs and intelligent automation, we deliver technology that improves patient care and streamlines operations.
            </p>
            <Link to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] hover:from-violet-600 hover:to-[#914FFC] text-white font-light text-sm transition-all duration-300 shadow-lg shadow-purple-900/30 hover:-translate-y-0.5 active:scale-95">
              Talk to us →
            </Link>
          </motion.div>
          <div className="flex-1 flex justify-center items-center order-1 md:order-2">
            <IndustryHeroVisual src="https://res.cloudinary.com/deykcfhzj/image/upload/v1771999131/health-care_rcuh7t.png" alt="Healthtech" />
          </div>
        </div>
      </section>

      {/* ── Solutions 1 ── */}
      <section className="py-16 md:py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className={SECTION_LABEL}>Solutions</p>
            <h2 className={SECTION_HEADING}>End-to-End <span className={ACCENT}>HealthTech Solutions</span></h2>
          </motion.div>
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Telemedicine & Remote Care", desc: "Virtual healthcare platforms for consultations, patient monitoring, and digital services." },
                { title: "AI & Machine Learning", desc: "AI-driven diagnostics, predictive analytics, and personalized treatment plans." },
                { title: "Data Security & Compliance", desc: "HIPAA, GDPR-aligned security with robust cybersecurity and risk management." },
                { title: "Integrated Care Management", desc: "Unified platforms for scheduling, billing, inventory, and patient data management." },
                { title: "Cloud & System Modernization", desc: "Secure, scalable, cloud-native solutions that enhance performance and interoperability." },
                { title: "AI-Accelerated Drug Innovation", desc: "Speed up R&D through AI-driven analytics, big data modeling, and automation." },
              ].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className={CARD}>
                  <h4 className={CARD_TITLE}>{item.title}</h4>
                  <p className={CARD_DESC}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="lg:w-1/3">
              <img src={healthSolution1} alt="Health Solution" className="w-full h-auto object-cover rounded-2xl shadow-xl shadow-blue-900/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions 2 ── */}
      <section className="py-16 md:py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-10">
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "EHR & EMR Solutions", desc: "Secure, interoperable systems for seamless patient data management and clinical decisions." },
                { title: "IoT & Wearable Health Tech", desc: "Connect devices and wearables for real-time health monitoring and preventive care." },
                { title: "Regulatory Assurance", desc: "Advanced security frameworks and proactive risk strategies aligned with healthcare regulations." },
                { title: "Digital Health Strategy", desc: "Expert insights on Healthtech innovation, transformation roadmaps, and technology adoption." },
                { title: "AI-Driven Data Intelligence", desc: "Maximize healthcare data value through automation, predictive analytics, and ML insights." },
              ].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className={CARD}>
                  <h4 className={CARD_TITLE}>{item.title}</h4>
                  <p className={CARD_DESC}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="lg:w-1/3">
              <img src={healthSolution2} alt="Health Solution 2" className="w-full h-auto object-cover rounded-2xl shadow-xl shadow-blue-900/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="py-16 md:py-20 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp}
            className="rounded-2xl border border-white/10 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(30,81,211,0.18) 0%, rgba(123,89,208,0.14) 50%, rgba(201,79,157,0.16) 100%)" }}>
            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className={SECTION_LABEL}>Why AstrumAI</p>
                <h2 className="text-2xl md:text-4xl font-extralight text-white tracking-tight leading-[1.2] mb-2">
                  Why Choose Astrum AI<br /><span className={ACCENT}>for HealthTech?</span>
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  "Healthcare Domain Mastery – Experience building solutions for hospitals, clinics, pharma, and health startups.",
                  "Regulation-Centric Engineering – Secure architectures aligned with healthcare regulations.",
                  "Interoperable & Future-Ready – Scalable apps designed for seamless platform integration.",
                  "AI-Powered Clinical Intelligence – Analytics and AI that enhance outcomes and optimize operations.",
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

      <ContactForm />
    </div>
  );
};

export default HealthCare;
