import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ContactFrom from "../contactForm";
import letsDicussYourProject from "../../assets/lets-discuss-your-project.jpeg";

const CARD = "group p-6 md:p-7 rounded-2xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3";
const CARD_TITLE = "text-base font-light text-gray-200 leading-snug tracking-tight";
const CARD_DESC = "text-sm text-gray-500 leading-relaxed font-light";
const SECTION_LABEL = "text-[11px] uppercase tracking-[0.22em] text-gray-600 mb-3";
const SECTION_HEADING = "text-3xl md:text-5xl font-extralight text-gray-100 tracking-[-0.02em] leading-[1.15] mb-3";
const ACCENT = "bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-normal";
const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const PROCESS_STEPS = [
  {
    label: "Discovery",
    items: ["Discovery Workshop", "Goal Setting", "Prototyping", "Project Plan"],
  },
  {
    label: "Execution",
    items: ["Architecture & Design", "Backend Development", "APIs & Integrations"],
  },
  {
    label: "QA & Launch",
    items: ["Go Live", "Project Launch", "User Feedback", "Monitoring", "Operational Testing"],
  },
  {
    label: "Support",
    items: ["SLA Support", "Operational Support", "On-going Support", "Feedback Integration"],
  },
];

const ServiceBaseLayout = ({ serviceData, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceData.slug]);

  if (!serviceData) return null;

  return (
    <div className="min-h-screen text-white bg-black selection:bg-purple-500/30 selection:text-purple-100">

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-6 pt-3 pb-2">
        <Link to="/services"
          className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-200 transition-colors text-xs tracking-wide">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
        </Link>
      </div>

      {/* Hero slot */}
      {children}

      {/* ── What We Do ── */}
      <section className="py-16 md:py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-10">
            <p className={SECTION_LABEL}>Capabilities</p>
            <h2 className={SECTION_HEADING}>
              <span className={ACCENT}>What</span> we do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceData.whatWeDo.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className={CARD}>
                <h4 className={CARD_TITLE}>{item.title}</h4>
                <p className={CARD_DESC}>{item.description}</p>
              </motion.div>
            ))}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: serviceData.whatWeDo.length * 0.07 }}
              className="flex items-center justify-center p-6 rounded-2xl border border-white/8 bg-white/[0.015]">
              <Link to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] hover:from-violet-600 hover:to-[#914FFC] text-white font-light text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-95">
                Talk to us →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Let's Discuss ── */}
      <section className="py-16 md:py-20 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <img src={letsDicussYourProject} alt="Lets Discuss Your Project"
              className="w-full h-auto object-cover rounded-2xl shadow-xl shadow-purple-900/10" />
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <p className={SECTION_LABEL}>Let's Connect</p>
            <h2 className={SECTION_HEADING}>
              Let's Discuss <span className={ACCENT}>Your Project</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 leading-[1.85] font-light mb-8 max-w-md">
              Get a free consultation and share your project idea — we'll help turn it into an outstanding digital product.
            </p>
            <Link to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] hover:from-violet-600 hover:to-[#914FFC] text-white font-light text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-95">
              Talk to us →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── How We Do It ── */}
      <section className="py-16 md:py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-10">
            <p className={SECTION_LABEL}>Process</p>
            <h2 className={SECTION_HEADING}>
              <span className={ACCENT}>How</span> we do it
            </h2>
            <p className="text-sm text-gray-500 font-light mt-1">Simple, transparent, end-to-end delivery.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-light text-gray-600 uppercase tracking-widest">0{i + 1}</span>
                  <h3 className="text-base font-light text-gray-200 tracking-tight">{step.label}</h3>
                </div>
                <ul className="space-y-1.5">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-500 font-light">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#7B59D0] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack Marquee ── */}
      <section className="py-16 md:py-20 border-t border-white/[0.06] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <motion.div {...fadeUp}>
            <p className={SECTION_LABEL}>Tech Stack</p>
            <h2 className={SECTION_HEADING}>
              Yes, We cover your <span className={ACCENT}>Tech Stack</span>
            </h2>
            <p className="text-sm text-gray-500 font-light mt-1">Our team has expertise across virtually every major language and framework.</p>
          </motion.div>
        </div>

        <div className="relative flex overflow-x-hidden mb-5">
          <div className="py-3 animate-marquee whitespace-nowrap flex gap-14 md:gap-20">
            {["Rails", "C#", "Python", "React", "Ruby", "PHP", "Laravel", "Django", "Flask",
              "Rails", "C#", "Python", "React", "Ruby", "PHP", "Laravel", "Django", "Flask"].map((tech, i) => (
              <span key={i} className="text-2xl md:text-4xl font-extralight text-white/15 hover:text-purple-400 transition-colors cursor-default tracking-tight">
                {tech}
              </span>
            ))}
          </div>
          <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap flex gap-14 md:gap-20">
            {["Rails", "C#", "Python", "React", "Ruby", "PHP", "Laravel", "Django", "Flask",
              "Rails", "C#", "Python", "React", "Ruby", "PHP", "Laravel", "Django", "Flask"].map((tech, i) => (
              <span key={i} className="text-2xl md:text-4xl font-extralight text-white/15 hover:text-purple-400 transition-colors cursor-default tracking-tight">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex overflow-x-hidden">
          <div className="py-3 animate-marquee whitespace-nowrap flex gap-14 md:gap-20">
            {["React", "Java", "Node.JS", "Swift", "JavaScript", "Vue.js", "Golang", "iOS", "Android",
              "React", "Java", "Node.JS", "Swift", "JavaScript", "Vue.js", "Golang", "iOS", "Android"].map((tech, i) => (
              <span key={i} className="text-2xl md:text-4xl font-extralight text-white/15 hover:text-purple-400 transition-colors cursor-default tracking-tight">
                {tech}
              </span>
            ))}
          </div>
          <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap flex gap-14 md:gap-20">
            {["React", "Java", "Node.JS", "Swift", "JavaScript", "Vue.js", "Golang", "iOS", "Android",
              "React", "Java", "Node.JS", "Swift", "JavaScript", "Vue.js", "Golang", "iOS", "Android"].map((tech, i) => (
              <span key={i} className="text-2xl md:text-4xl font-extralight text-white/15 hover:text-purple-400 transition-colors cursor-default tracking-tight">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactFrom />
    </div>
  );
};

export default ServiceBaseLayout;
