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

const WHO_WE_DO_IT_FOR = [
  {
    title: "Startups",
    points: [
      "Rapid development and launch of validated MVPs",
      "Clear, predictable pricing with no hidden costs",
      "Guidance in agile workflows and delivery practices",
      "Hands-on support for smooth project execution",
    ],
  },
  {
    title: "SMBs",
    points: [
      "Optimized processes and environments for growth",
      "Flexible engagement models by business stage",
      "Solutions designed to maximize ROI",
      "Domain expertise to execute with confidence",
    ],
  },
  {
    title: "Enterprises",
    points: [
      "Strategic consulting with specialist teams",
      "Transparent progress tracking and reporting",
      "Support for large-scale digital initiatives",
      "Alignment with regulatory and industry standards",
    ],
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
      <section className="snap-section">
        {children}
      </section>

      {/* ── What We Do ── */}
      <section className="snap-section py-10 md:py-16 px-6 border-t border-white/[0.06]">
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

      {/* ── How We Do It ── */}
      <section className="snap-section py-10 md:py-16 px-6 border-t border-white/[0.06]">
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

      {/* ── Who We Do It For ── */}
      <section className="snap-section py-10 md:py-16 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <p className={SECTION_LABEL}>Audience</p>
            <h2 className={SECTION_HEADING}>
              <span className={ACCENT}>Who</span> we do it for
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WHO_WE_DO_IT_FOR.map((group, i) => (
              <motion.div
                key={group.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-base md:text-lg font-light text-gray-200 tracking-tight mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-500 font-light">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#7B59D0] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Partner ── */}
      <section className="snap-section py-10 md:py-14 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            className="rounded-3xl p-8 md:p-14 border border-white/10 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #17172a 0%, #111119 55%, #1b1026 100%)" }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#914FFC]/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="relative z-10 flex flex-col space-y-8">
              <div className="space-y-3">
                <h2
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-2xl md:text-4xl font-extralight leading-tight tracking-[-0.02em] text-white"
                >
                  Why Partner with{" "}
                  <span className="font-semibold">Astrum AI?</span>
                </h2>
                <p style={{ fontFamily: "'Outfit', sans-serif" }} className="text-base md:text-lg text-gray-300 font-light">
                  Accelerate growth. Innovate faster. Optimize costs.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
                {[
                  { title: "Focus on What Matters Most", desc: "Let your internal team concentrate on core business priorities while we manage development and technical execution." },
                  { title: "Faster Product Launches", desc: "Launch products faster with dedicated teams and streamlined delivery." },
                  { title: "Tap into Global Expertise", desc: "Access a curated pool of top-tier developers and specialists without the hassle of recruitment." },
                  { title: "Flexible Scaling", desc: "Easily expand or reduce your team as project demands change with no long-term obligations required." },
                  { title: "Lower Costs, Minimized Risk", desc: "Eliminate infrastructure overhead and operational bottlenecks while maintaining high-quality output." },
                ].map((item, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ duration: 0.45, delay: i * 0.07 }} className="space-y-2">
                    <h4 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-lg md:text-xl font-light text-gray-100 tracking-tight">{item.title}</h4>
                    <div className="w-5 h-px bg-[#914FFC]/40" />
                    <p style={{ fontFamily: "'Outfit', sans-serif" }} className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stack Marquee ── */}
      <section className="snap-section py-10 md:py-14 border-t border-white/[0.06] overflow-hidden">
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

      {/* ── Let's Discuss ── */}
      <section className="snap-section py-10 md:py-14 px-6 border-t border-white/[0.06]">
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
              Get a free consultation and share your project idea. We'll help turn it into an outstanding digital product.
            </p>
            <Link to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] hover:from-violet-600 hover:to-[#914FFC] text-white font-light text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-95">
              Talk to us →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="snap-section pt-5 md:pt-30">
        <ContactFrom />
      </section>
    </div>
  );
};

export default ServiceBaseLayout;
