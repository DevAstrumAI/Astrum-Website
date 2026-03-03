import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Challenges from "../components/services/challenges";
import OurServices from "../components/services/ourServices";
import ContactFrom from "../components/contactForm";

/* ── Professional SVG icons per service ── */
const TileIcon = ({ id, color }) => {
  const cls = `w-4 h-4 flex-shrink-0`;
  const icons = {
    automation: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    ml: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
        <path d="M12 7v4M12 11l-5.5 6M12 11l5.5 6"/>
      </svg>
    ),
    nlp: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="13" x2="13" y2="13"/>
      </svg>
    ),
    vision: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    analytics: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
    cloud: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
      </svg>
    ),
  };
  return icons[id] ?? null;
};

/* ── Service tiles scattered around the canvas ── */
const SERVICE_TILES_DESKTOP = [
  { label: "AI Automation",   iconId: "automation", top: "8%",  left: "5%",  delay: 0,   accent: "#914FFC" },
  { label: "ML Models",       iconId: "ml",         top: "6%",  left: "55%", delay: 0.5, accent: "#2B61E5" },
  { label: "NLP & LLMs",      iconId: "nlp",        top: "38%", left: "72%", delay: 0.9, accent: "#E93A8B" },
  { label: "Computer Vision", iconId: "vision",     top: "70%", left: "58%", delay: 0.3, accent: "#914FFC" },
  { label: "Data Analytics",  iconId: "analytics",  top: "74%", left: "10%", delay: 0.7, accent: "#2B61E5" },
  { label: "Cloud AI Deploy", iconId: "cloud",      top: "38%", left: "2%",  delay: 1.1, accent: "#E93A8B" },
];

const SERVICE_TILES_MOBILE = [
  { label: "AI Automation",   iconId: "automation", top: "9%",  left: "4%",  delay: 0,   accent: "#914FFC" },
  { label: "ML Models",       iconId: "ml",         top: "8%",  left: "48%", delay: 0.5, accent: "#2B61E5" },
  { label: "NLP & LLMs",      iconId: "nlp",        top: "38%", left: "60%", delay: 0.9, accent: "#E93A8B" },
  { label: "Computer Vision", iconId: "vision",     top: "70%", left: "50%", delay: 0.3, accent: "#914FFC" },
  { label: "Data Analytics",  iconId: "analytics",  top: "76%", left: "8%",  delay: 0.7, accent: "#2B61E5" },
  { label: "Cloud AI Deploy", iconId: "cloud",      top: "38%", left: "1%",  delay: 1.1, accent: "#E93A8B" },
];

/* SVG connector endpoints (% of 500x500 box) */
const CONNECTORS = [
  { x1: 15, y1: 14, x2: 60, y2: 11, dur: 3.2, delay: 0   },
  { x1: 60, y1: 11, x2: 78, y2: 42, dur: 2.8, delay: 0.4 },
  { x1: 78, y1: 42, x2: 64, y2: 74, dur: 3.1, delay: 0.8 },
  { x1: 64, y1: 74, x2: 20, y2: 78, dur: 2.9, delay: 0.2 },
  { x1: 20, y1: 78, x2: 10, y2: 42, dur: 3.3, delay: 0.6 },
  { x1: 10, y1: 42, x2: 15, y2: 14, dur: 2.7, delay: 1.0 },
  { x1: 15, y1: 14, x2: 50, y2: 50, dur: 3.6, delay: 0.3 },
  { x1: 60, y1: 11, x2: 50, y2: 50, dur: 3.0, delay: 0.7 },
  { x1: 78, y1: 42, x2: 50, y2: 50, dur: 2.8, delay: 1.1 },
  { x1: 20, y1: 78, x2: 50, y2: 50, dur: 3.2, delay: 0.5 },
];

function HeroVisual() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const tiles = isMobile ? SERVICE_TILES_MOBILE : SERVICE_TILES_DESKTOP;

  return (
    <div className="relative w-full max-w-[560px] mx-auto" style={{ height: isMobile ? 420 : 520 }}>

      {/* deep ambient glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(145,79,252,0.14) 0%, rgba(43,97,229,0.07) 50%, transparent 78%)",
          filter: "blur(16px)",
        }}
      />

      {/* SVG connector lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {CONNECTORS.map((c, i) => (
          <motion.line
            key={i}
            x1={`${c.x1}%`} y1={`${c.y1}%`}
            x2={`${c.x2}%`} y2={`${c.y2}%`}
            stroke={i % 3 === 0 ? "rgba(145,79,252,0.5)" : i % 3 === 1 ? "rgba(43,97,229,0.45)" : "rgba(233,58,139,0.42)"}
            strokeWidth="0.35"
            strokeLinecap="round"
            strokeDasharray="2 3"
            animate={{ opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: c.dur, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
          />
        ))}
      </svg>

      {/* Central pulsing AI badge */}
      <motion.div
        animate={{ scale: [0.97, 1.04, 0.97], opacity: [0.88, 1, 0.88] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-10 flex flex-col items-center justify-center rounded-full"
        style={{
          width: isMobile ? 90 : 110, height: isMobile ? 90 : 110,
          top: "50%", left: "50%",
          translate: "-50% -50%",
          background: "radial-gradient(circle, rgba(145,79,252,0.55) 0%, rgba(43,97,229,0.3) 55%, rgba(0,0,0,0.1) 100%)",
          border: "1px solid rgba(192,132,252,0.45)",
          boxShadow: "0 0 32px rgba(145,79,252,0.4), 0 0 72px rgba(43,97,229,0.2), inset 0 0 20px rgba(145,79,252,0.25)",
        }}
      >
        <motion.span
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className={`${isMobile ? "text-xl" : "text-2xl"} font-extralight bg-linear-to-r from-[#a78bfa] via-white to-[#f472b6] bg-clip-text text-transparent`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          AI
        </motion.span>
        <motion.span
          animate={{ opacity: [0.4, 0.85, 0.4], letterSpacing: ["0.12em", "0.2em", "0.12em"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className={`${isMobile ? "text-[8px]" : "text-[9px]"} uppercase text-[#c4b5fd]`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Services
        </motion.span>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: isMobile ? 170 : 200, height: isMobile ? 170 : 200,
          top: "50%", left: "50%",
          translate: "-50% -50%",
          border: "1px solid rgba(145,79,252,0.35)",
          boxShadow: "0 0 24px rgba(145,79,252,0.15)",
        }}
      />

      {/* Floating service tiles */}
      {tiles.map((tile, i) => (
        <motion.div
          key={tile.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, i % 2 === 0 ? -10 : 10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: tile.delay },
            scale: { duration: 0.6, delay: tile.delay },
            y: { duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: tile.delay },
          }}
          className={`absolute z-20 flex items-center ${isMobile ? "gap-2 px-2.5 py-2" : "gap-2.5 px-3.5 py-2.5"} rounded-xl backdrop-blur-md pointer-events-none`}
          style={{
            top: tile.top,
            left: tile.left,
            border: `1px solid ${tile.accent}50`,
            background: `linear-gradient(135deg, rgba(8,8,16,0.82), rgba(14,14,28,0.68))`,
            boxShadow: `0 0 18px ${tile.accent}28, inset 0 0 10px ${tile.accent}12`,
            fontFamily: "'Outfit', sans-serif",
            minWidth: isMobile ? 112 : 148,
          }}
        >
          <motion.div
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 2.4 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: tile.delay }}
            className="flex-shrink-0"
          >
            <TileIcon id={tile.iconId} color={tile.accent} />
          </motion.div>
          <span className={`${isMobile ? "text-[11px]" : "text-[12px]"} font-light text-gray-200 whitespace-nowrap`}>
            {tile.label}
          </span>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
            className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: tile.accent, boxShadow: `0 0 6px ${tile.accent}` }}
          />
        </motion.div>
      ))}

      {/* Pulse rings from center */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [0.5, 2.2], opacity: [0.45, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeOut", delay: i * 1.2 }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: isMobile ? 90 : 110, height: isMobile ? 90 : 110,
            top: "50%", left: "50%",
            translate: "-50% -50%",
            border: "1px solid rgba(145,79,252,0.5)",
          }}
        />
      ))}
    </div>
  );
}

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* ══ HERO ══ */}
      <section className="snap-section relative pt-20 pb-10 md:pt-24 md:pb-14 px-6 sm:px-12 lg:px-16 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(to right,#80808020 1px,transparent 1px),linear-gradient(to bottom,#80808020 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

        {/* Ambient glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(145,79,252,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
        />

        <div className="max-w-7xl mx-auto -mt-2 md:-mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-7 text-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#914FFC]" />
              <span
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xs tracking-[0.22em] uppercase text-gray-500 font-light"
              >
                AI Services
              </span>
            </motion.div>

            {/* Heading stack */}
            <div className="space-y-1">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-lg md:text-xl lg:text-2xl font-extralight text-gray-500 tracking-tight leading-snug"
              >
                Transforming Your
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-[-0.03em] leading-none bg-linear-to-r from-[#7635e8] via-[#a56cd0] to-[#E93A8B] bg-clip-text text-transparent"
              >
                Business
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-px w-20 bg-linear-to-r from-[#914FFC] to-transparent origin-left mt-3"
              />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xl md:text-2xl lg:text-3xl font-extralight text-gray-100 tracking-tight leading-snug pt-1"
              >
                with Intelligent AI Solutions
              </motion.p>
            </div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-sm md:text-base text-gray-500 leading-[1.85] font-light max-w-sm"
            >
              A comprehensive range of AI-powered services to help your business
              grow, innovate, and lead in the digital era.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
            >
              <Link
                to="/contact-us"
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="
                  inline-flex items-center gap-2 px-7 py-3 md:px-9 md:py-3.5
                  bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
                  hover:from-violet-600 hover:to-[#914FFC]
                  text-white font-light text-sm md:text-base
                  rounded-full shadow-lg shadow-purple-900/30
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-purple-700/50
                  hover:-translate-y-0.5 active:scale-95
                "
              >
                Hire us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right animated visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* ══ SECTIONS ══ */}
      <section className="snap-section">
        <Challenges />
      </section>
      <section className="snap-section">
        <OurServices />
      </section>
      <section className="snap-section">
        <ContactFrom />
      </section>
    </div>
  );
};

export default Services;
