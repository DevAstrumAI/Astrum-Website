import React from "react";
import { motion } from "framer-motion";
import retailTechnology from "../../assets/retail-technology.jpeg";
import retailTechnology2 from "../../assets/retail-technology2.jpeg";
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

const Retail = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Hero ── */}
      <section className="relative pt-4 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div {...{ initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 } }}
            className="flex-1 space-y-6 order-2 md:order-1">
            <p className={SECTION_LABEL}>Industry · Retail</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-100 leading-[1.08] tracking-[-0.03em]">Retail</h1>
            <div className={DIVIDER} />
            <h2 className="text-xl md:text-2xl font-light text-gray-400 leading-snug tracking-tight">
              Transforming Retail Through <span className={ACCENT}>Digital Innovation</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-md leading-[1.85] font-light">
              We help businesses drive growth with experience-led, tech-enabled transformation. Our AI-powered retail solutions deliver omnichannel commerce, actionable insights, and automation.
            </p>
            <Link to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] hover:from-violet-600 hover:to-[#914FFC] text-white font-light text-sm transition-all duration-300 shadow-lg shadow-purple-900/30 hover:-translate-y-0.5 active:scale-95">
              Talk to us →
            </Link>
          </motion.div>
          <div className="flex-1 flex justify-center items-center order-1 md:order-2">
            <IndustryHeroVisual src="https://res.cloudinary.com/deykcfhzj/image/upload/v1771999135/retail_rx72c1.png" alt="Retail" />
          </div>
        </div>
      </section>

      {/* ── Solutions 1 ── */}
      <section className="py-16 md:py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className={SECTION_LABEL}>Solutions</p>
            <h2 className={SECTION_HEADING}>Complete <span className={ACCENT}>Retail Tech Solutions</span></h2>
          </motion.div>
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Store Innovation & Experience", desc: "Solutions that boost efficiency, engagement, and seamless shopping journeys." },
                { title: "Omnichannel Commerce", desc: "Unified online and offline shopping experiences with modern platforms and POS integrations." },
                { title: "Smart Merchandising", desc: "AI and analytics to optimize assortments, pricing, and promotions in real time." },
                { title: "Retail Analytics & Insights", desc: "Actionable insights for pricing strategies, demand forecasting, and operational excellence." },
                { title: "Personalized Customer Engagement", desc: "Seamless, tailored experiences powered by real-time data and flexible architectures." },
                { title: "POS & Payment Solutions", desc: "Secure, multi-currency, and contactless payments across digital and physical stores." },
              ].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className={CARD}>
                  <h4 className={CARD_TITLE}>{item.title}</h4>
                  <p className={CARD_DESC}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="lg:w-1/3">
              <img src={retailTechnology} alt="Retail Technology" className="w-full h-auto object-cover rounded-2xl shadow-xl shadow-blue-900/10" />
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
                { title: "Personalized Loyalty & Engagement", desc: "AI-powered loyalty programs that boost engagement, repeat purchases, and long-term retention." },
                { title: "Inventory & Supply Chain Optimization", desc: "Data-driven insights to streamline inventory, distribution, and fulfillment." },
                { title: "AI-Powered Marketing", desc: "Maximize ROI with analytics that optimize spend, media budgets, and targeted campaigns." },
                { title: "IoT & Smart Retail", desc: "Smart shelves, RFID tracking, and automated checkout for frictionless shopping." },
                { title: "AR & Virtual Try-On", desc: "Augmented reality product previews and virtual fitting room solutions." },
                { title: "Organizational Strategy & Design", desc: "Drive agile, resilient operations with structured approaches to improve speed and adaptability." },
              ].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className={CARD}>
                  <h4 className={CARD_TITLE}>{item.title}</h4>
                  <p className={CARD_DESC}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="lg:w-1/3">
              <img src={retailTechnology2} alt="Retail Innovation" className="w-full h-auto object-cover rounded-2xl shadow-xl shadow-blue-900/10" />
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
                  Why Choose Astrum AI<br /><span className={ACCENT}>for Retail Solutions?</span>
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  "Industry-Focused Expertise – Retail solutions tailored to evolving consumer trends and business priorities.",
                  "Experience-Driven Innovation – Technology solutions centered on both customers and employees.",
                  "Data-Backed Decisions – AI and analytics to optimize engagement, inventory, and pricing.",
                  "Omnichannel & Scalable – Seamless shopping experiences across digital and physical stores.",
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

export default Retail;
