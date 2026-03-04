import React from "react";
import { motion } from "framer-motion";
import aws from "../../assets/aws.png";
import google from "../../assets/g-cloud.png";
import microsoft from "../../assets/microsoft.png";
import sap from "../../assets/sap.png";
import adobe from "../../assets/adobe.png";
import salesforce from "../../assets/salesforce.png";
import bigCommerce from "../../assets/big-commerce.png";
import ContactForm from "../contactForm";
import { Link } from "react-router-dom";
import IndustryHeroVisual from "./IndustryHeroVisual";
import { ArrowLeft } from "lucide-react";

/* ── shared class strings ── */
const CARD = "group p-6 md:p-8 rounded-2xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3";
const CARD_TITLE = "text-base md:text-lg font-light text-gray-200 leading-snug tracking-tight";
const CARD_DESC = "text-sm text-gray-500 leading-relaxed font-light";
const SECTION_LABEL = "text-[11px] uppercase tracking-[0.22em] text-gray-600 mb-3";
const SECTION_HEADING = "text-3xl md:text-5xl font-extralight text-gray-100 tracking-[-0.02em] leading-[1.15] mb-3";
const ACCENT = "bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-normal";
const DIVIDER = "h-px w-12 bg-linear-to-r from-[#914FFC] to-transparent mb-8";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const Fintech = () => {
  return (
    <div className="min-h-screen text-white bg-black">
      <div className="max-w-7xl mx-auto px-6 pt-3 pb-2">
        <Link
          to="/industries"
          className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-200 transition-colors text-xs tracking-wide"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Industries
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="snap-section relative pt-4 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div {...{ initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 } }}
            className="flex-1 space-y-6 order-2 md:order-1">
            <p className={SECTION_LABEL}>Industry · Fintech</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-100 leading-[1.08] tracking-[-0.03em]">Fintech</h1>
            <div className={DIVIDER} />
            <h2 className="text-xl md:text-2xl font-light text-gray-400 leading-snug tracking-tight">
              Driving <span className={ACCENT}>Tomorrow's Finance</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-md leading-[1.85] font-light">
              Accelerate innovation with secure, scalable, AI-powered fintech solutions. From digital banking and payments to fraud prevention and blockchain, we help startups and enterprises stay ahead.
            </p>
            <Link to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] hover:from-violet-600 hover:to-[#914FFC] text-white font-light text-sm transition-all duration-300 shadow-lg shadow-purple-900/30 hover:-translate-y-0.5 active:scale-95">
              Talk to us →
            </Link>
          </motion.div>
          <div className="flex-1 flex justify-center items-center order-1 md:order-2">
            <IndustryHeroVisual src="https://res.cloudinary.com/deykcfhzj/image/upload/v1771999133/fintech_osnvzo.png" alt="Fintech" />
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className="snap-section py-10 md:py-16 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className={SECTION_LABEL}>Challenges</p>
            <h2 className={SECTION_HEADING}>Challenges in <span className={ACCENT}>Fintech</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Compliance Made Simple", desc: "Confidently navigate complex financial regulations, industry standards, and security requirements." },
              { title: "Secure by Design", desc: "Protect sensitive data and transactions with advanced fraud detection and robust security measures." },
              { title: "Instant & Reliable", desc: "Deliver high-speed, seamless payment and transaction experiences in real time." },
              { title: "Built to Scale", desc: "Easily handle growing customer demands, transaction volumes, and business expansion." },
              { title: "Connected Ecosystem", desc: "Integrate effortlessly with financial systems, third-party APIs, and banking networks." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className={CARD}>
                <h4 className={CARD_TITLE}>{item.title}</h4>
                <p className={CARD_DESC}>{item.desc}</p>
              </motion.div>
            ))}
            <div className="flex items-center justify-center p-6">
              <Link to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-gray-300 text-sm font-light hover:bg-white/5 transition-all duration-300">
                How we help →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients & Partners ── */}
      <section className="snap-section py-10 md:py-14 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className={SECTION_LABEL}>Who We Serve</p>
            <h2 className={SECTION_HEADING}>Our <span className={ACCENT}>Clients & Partners</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["Investment Banks", "Wealth Management Firms", "Insurance Companies"],
              ["Retail & Commercial Banks", "Market Data Providers", "Exchanges & Brokerages"],
              ["Payment Service Providers", "Technology Providers"],
            ].map((col, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`space-y-4 ${i < 2 ? "md:border-r border-white/10 md:pr-8" : ""}`}>
                {col.map((item, idx) => (
                  <p key={idx} className="text-base md:text-lg text-gray-400 font-extralight hover:text-gray-200 transition-colors cursor-default">{item}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="snap-section py-10 md:py-16 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className={SECTION_LABEL}>Solutions</p>
            <h2 className={SECTION_HEADING}>Fintech <span className={ACCENT}>Solutions</span> We Provide</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Next-Gen Digital Banking & Payments", desc: "Build secure, intuitive banking apps, mobile wallets, and seamless payment solutions." },
              { title: "Blockchain & Crypto Innovations", desc: "Facilitate transparent, decentralized transactions with blockchain and cryptocurrency technologies." },
              { title: "AI-Powered Risk & Fraud Detection", desc: "Use AI and machine learning to identify fraud, assess risk, and strengthen financial security." },
              { title: "Smart Wealth & Robo-Advisory", desc: "Automate investment planning and portfolio management with AI-powered advisory tools." },
              { title: "Advanced Lending & Credit Platforms", desc: "Streamline lending with AI-based credit scoring and automated loan management." },
              { title: "Open Banking & Seamless Integrations", desc: "Connect financial systems securely with open banking APIs for smooth data sharing." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className={CARD}>
                <h4 className={CARD_TITLE}>{item.title}</h4>
                <p className={CARD_DESC}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Partners ── */}
      <section className="snap-section py-10 md:py-14 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className={SECTION_LABEL}>Ecosystem</p>
            <h2 className={SECTION_HEADING}>Technology <span className={ACCENT}>Partners</span></h2>
          </motion.div>
          <div className="flex flex-wrap items-center justify-start gap-10 md:gap-16">
            {[{ src: aws, alt: "AWS" }, { src: google, alt: "Google Cloud" }, { src: adobe, alt: "Adobe" },
              { src: bigCommerce, alt: "BigCommerce" }, { src: microsoft, alt: "Microsoft" },
              { src: salesforce, alt: "Salesforce" }, { src: sap, alt: "SAP" }].map((p, i) => (
              <img key={i} src={p.src} alt={p.alt}
                className="h-7 md:h-9 w-auto grayscale brightness-150 hover:grayscale-0 hover:brightness-100 transition-all duration-300 opacity-60 hover:opacity-100" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="snap-section py-10 md:py-14 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp}
            className="rounded-2xl border border-white/10 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(30,81,211,0.18) 0%, rgba(123,89,208,0.14) 50%, rgba(201,79,157,0.16) 100%)" }}>
            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className={SECTION_LABEL}>Why AstrumAI</p>
                <h2 className="text-2xl md:text-4xl font-extralight text-white tracking-tight leading-[1.2] mb-2">
                  Why Choose Astrum AI<br /><span className={ACCENT}>for Fintech Solutions?</span>
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  "Deep Industry Knowledge: Extensive experience delivering secure, scalable fintech platforms.",
                  "Security-First Mindset: Adherence to PCI DSS, GDPR, and evolving financial regulations.",
                  "Built to Scale: AI, blockchain, cloud infrastructure, and API-first architectures.",
                  "Full-Lifecycle Delivery: Strategy, design, deployment and scaling under one roof.",
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

export default Fintech;
