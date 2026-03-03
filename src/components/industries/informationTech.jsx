import React from "react";
import { motion } from "framer-motion";
import ChallengesInIT from "../../assets/Challenges-in-IT.jpeg";
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

const InformationTech = () => {
  return (
    <div className="min-h-screen text-white bg-black">

      {/* ── Hero ── */}
      <section className="snap-section relative pt-4 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div {...{ initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 } }}
            className="flex-1 space-y-6 order-2 md:order-1">
            <p className={SECTION_LABEL}>Industry · Information Technology</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-100 leading-[1.08] tracking-[-0.03em]">Information Technology</h1>
            <div className={DIVIDER} />
            <h2 className="text-xl md:text-2xl font-light text-gray-400 leading-snug tracking-tight">
              Empowering IT with <span className={ACCENT}>Intelligent, Scalable Solutions</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-md leading-[1.85] font-light">
              We deliver custom software that streamlines IT operations, strengthens infrastructure management, and enhances cybersecurity—helping IT teams drive innovation and operational excellence.
            </p>
            <Link to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] hover:from-violet-600 hover:to-[#914FFC] text-white font-light text-sm transition-all duration-300 shadow-lg shadow-purple-900/30 hover:-translate-y-0.5 active:scale-95">
              Talk to us →
            </Link>
          </motion.div>
          <div className="flex-1 flex justify-center items-center order-1 md:order-2">
            <IndustryHeroVisual src="https://res.cloudinary.com/deykcfhzj/image/upload/v1771999131/information-tech_lc6veu.png" alt="IT" />
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className="snap-section py-16 md:py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className={SECTION_LABEL}>Challenges</p>
            <h2 className={SECTION_HEADING}>Challenges in <span className={ACCENT}>IT</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Disconnected Systems & Tool Sprawl", desc: "Hybrid and multi-cloud environments create fragmented platforms, leading to inefficiencies and data silos." },
              { title: "Manual & Repetitive Workloads", desc: "Routine tasks like user provisioning and patch management consume time and slow service delivery." },
              { title: "Evolving Cybersecurity Risks", desc: "Growing digital footprints increase exposure to threats and complicate compliance." },
              { title: "Limited Real-Time Visibility", desc: "Without centralized monitoring, issues escalate unnoticed—resulting in downtime and reactive responses." },
              { title: "Escalating Cloud Costs", desc: "Cloud sprawl and underutilized resources inflate budgets without proportional business value." },
              { title: "Legacy System Limitations", desc: "Outdated infrastructure hinders innovation, complicates integrations, and increases technical debt." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className={CARD}>
                <h4 className={CARD_TITLE}>{item.title}</h4>
                <p className={CARD_DESC}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visual ── */}
      <section className="snap-section py-10 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <img src={ChallengesInIT} alt="IT Challenges" className="w-full h-auto rounded-2xl shadow-xl shadow-blue-900/10 object-cover" />
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="snap-section py-16 md:py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className={SECTION_LABEL}>Solutions</p>
            <h2 className={SECTION_HEADING}>How <span className={ACCENT}>Astrum AI Solves</span> These Challenges</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Integrated IT Ecosystems", desc: "Unify ITSM, monitoring, and security tools into a cohesive platform—eliminating silos." },
              { title: "Intelligent Workflow Automation", desc: "RPA, scripting, and custom automation to eliminate repetitive tasks and free strategic capacity." },
              { title: "Built-In Cyber Resilience", desc: "Security at every layer—identity controls, encryption, and automated compliance." },
              { title: "Advanced Monitoring & Insights", desc: "Centralized observability with real-time visibility and proactive issue resolution." },
              { title: "Cloud Performance & Cost Governance", desc: "Optimize multi-cloud environments to reduce waste and enhance operational performance." },
              { title: "Next-Gen System Modernization", desc: "Transform legacy infrastructure into scalable, future-ready systems without disruption." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className={CARD}>
                <h4 className={CARD_TITLE}>{item.title}</h4>
                <p className={CARD_DESC}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our IT Solutions (scrollable list) ── */}
      <section className="snap-section py-16 md:py-24 px-6 sm:px-12 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <motion.div {...fadeUp} className="lg:sticky lg:top-28">
              <p className={SECTION_LABEL}>Capability</p>
              <h2 className={SECTION_HEADING}>Our <span className={ACCENT}>IT Solutions</span></h2>
            </motion.div>
          </div>
          <div className="lg:w-2/3 space-y-0">
            {[
              { title: "DevOps & Infrastructure Automation", desc: "CI/CD pipelines, infrastructure provisioning, and smooth cloud migrations for deployment speed and reliability." },
              { title: "IT Service Management Solutions", desc: "ITSM platforms that streamline ticketing, automate workflows, and enhance service delivery." },
              { title: "Advanced Cybersecurity", desc: "IAM, threat detection, and compliance automation to safeguard critical systems and data." },
              { title: "IT Operations & Observability", desc: "Centralized monitoring dashboards for real-time system insights and maximum uptime." },
              { title: "RPA & Workflow Automation", desc: "Automate routine IT processes to boost efficiency and minimize human error." },
              { title: "Cloud Financial Optimization", desc: "Intelligent tools to track, manage, and optimize cloud spending and resource performance." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-t border-white/[0.07] py-7 group">
                <h4 className="text-base md:text-xl font-light text-gray-200 mb-2 group-hover:text-white transition-colors tracking-tight">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light max-w-xl">{item.desc}</p>
              </motion.div>
            ))}
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
                  Why Choose Astrum AI<br /><span className={ACCENT}>for IT Solutions?</span>
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  "Proven Infrastructure Expertise – Experience designing and managing complex IT environments.",
                  "Security-First Mindset – Robust cybersecurity frameworks that safeguard data and ensure compliance.",
                  "Built to Scale – Flexible, future-ready systems that evolve with your organization's growth.",
                  "Agile & Adaptive Delivery – Rapid development and continuous improvement for faster value.",
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

export default InformationTech;
