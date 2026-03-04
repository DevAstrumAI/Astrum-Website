import React from "react";
import { motion } from "framer-motion";
import Mission from "../components/careers/mission";
import CoreValues from "../components/careers/coreValues";
import Hiring from "../components/careers/hiring";
import OurBenefits from "../components/careers/ourBenefits";

/* ── floating role cards ── */
const ROLES = [
  { title: "ML Engineer",      dept: "Engineering",     color: "#914FFC", top: "4%",   left: "12%",  floatY: -14, dur: 4.2, delay: 0 },
  { title: "AI Researcher",    dept: "Research",         color: "#2B61E5", top: "6%",   right: "5%",  floatY: -10, dur: 3.8, delay: 0.5 },
  { title: "Product Manager",  dept: "Product",          color: "#E93A8B", top: "40%",  right: "0%",  floatY: 12,  dur: 4.5, delay: 0.8 },
  { title: "Data Scientist",   dept: "Analytics",        color: "#C084FC", bottom:"8%", right:"10%",  floatY: -12, dur: 3.5, delay: 0.3 },
  { title: "DevOps Engineer",  dept: "Infrastructure",   color: "#2B61E5", bottom:"6%", left: "8%",  floatY: 10,  dur: 4.8, delay: 1.0 },
  { title: "Frontend Dev",     dept: "Engineering",      color: "#914FFC", top: "42%",  left: "0%",  floatY: -10, dur: 3.9, delay: 0.6 },
];

/* ── sparkle particles ── */
const SPARKS = [
  { top:"20%", left:"48%", color:"#914FFC", size:4, dur:3.2 },
  { top:"65%", left:"55%", color:"#E93A8B", size:3, dur:2.8 },
  { top:"30%", left:"30%", color:"#2B61E5", size:3, dur:3.6 },
  { top:"75%", left:"38%", color:"#C084FC", size:4, dur:2.5 },
  { top:"15%", left:"65%", color:"#914FFC", size:3, dur:3.9 },
];

function RoleCard({ title, dept, color, style, floatY, dur, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="absolute pointer-events-none"
      style={style}
    >
      <motion.div
        animate={{ y: [0, floatY, 0] }}
        transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border border-white/[0.08] bg-black/60 backdrop-blur-md shadow-lg"
        style={{ minWidth: 140 }}
      >
        {/* Color dot */}
        <div
          className="shrink-0 w-2 h-2 rounded-full"
          style={{ background: color, boxShadow: `0 0 6px ${color}` }}
        />
        <div>
          <div
            style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,0.88)", fontSize: 12, fontWeight: 300, lineHeight: 1.3 }}
          >
            {title}
          </div>
          <div
            style={{ fontFamily: "'Outfit', sans-serif", color: "rgba(255,255,255,0.35)", fontSize: 10, fontWeight: 300, marginTop: 1, letterSpacing: "0.05em" }}
          >
            {dept}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <div className="relative flex justify-center items-center w-full" style={{ height: 460 }}>

      {/* ── background ambient glow ── */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none"
        style={{
          width: 340, height: 340,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(145,79,252,0.14) 0%, rgba(43,97,229,0.05) 50%, transparent 75%)",
          filter: "blur(20px)",
          top: "50%", left: "50%", translate: "-50% -50%",
        }}
      />

      {/* ── pulsing sonar rings ── */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ scale: [0.5, 1.8], opacity: [0.35, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: i * 1.3 }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 200, height: 200,
            border: "1px solid rgba(145,79,252,0.3)",
            top: "50%", left: "50%", translate: "-50% -50%",
          }}
        />
      ))}

      {/* ── dashed orbit ring ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{
          width: 320, height: 320, borderRadius: "50%",
          border: "1px dashed rgba(145,79,252,0.15)",
          top: "50%", left: "50%", translate: "-50% -50%",
        }}
      />

      {/* ── central glowing orb ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex items-center justify-center"
      >
        {/* outer glow ring */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 130, height: 130,
            background: "radial-gradient(circle, rgba(145,79,252,0.25) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        {/* orb */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 28px rgba(145,79,252,0.5), 0 0 60px rgba(145,79,252,0.15)",
              "0 0 36px rgba(233,58,139,0.55), 0 0 75px rgba(233,58,139,0.15)",
              "0 0 30px rgba(43,97,229,0.5), 0 0 65px rgba(43,97,229,0.12)",
              "0 0 28px rgba(145,79,252,0.5), 0 0 60px rgba(145,79,252,0.15)",
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-28 h-28 rounded-full border border-white/10 flex items-center justify-center relative"
          style={{ background: "linear-gradient(145deg, #0e0e16, #070710)" }}
        >
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(145,79,252,0.28) 0%, transparent 70%)" }}
          />
          <span
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 36, fontWeight: 300 }}
            className="relative z-10 bg-linear-to-br from-[#914FFC] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent select-none"
          >
            A
            </span>
        </motion.div>
      </motion.div>

      {/* ── floating role cards ── */}
      {ROLES.map((role, i) => {
        const { top, bottom, left, right, ...rest } = role;
        const style = { top, bottom, left, right };
        return <RoleCard key={i} {...rest} style={style} />;
      })}

      {/* ── sparkle particles ── */}
      {SPARKS.map((s, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.45 }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: s.size, height: s.size,
            background: s.color,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
            top: s.top, left: s.left,
          }}
        />
      ))}

      {/* ── join badge at bottom center ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#914FFC]/25 bg-[#914FFC]/8 backdrop-blur-sm"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#914FFC] animate-pulse" />
          <span
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 300, color: "rgba(192,132,252,0.9)", letterSpacing: "0.12em" }}
          >
            WE'RE HIRING
            </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

const Careers = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ══ HERO ══ */}
      <section className="snap-section relative pt-28 pb-10 md:pt-32 md:pb-14 px-6 sm:px-12 lg:px-16">
        {/* subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(to right,#80808020 1px,transparent 1px),linear-gradient(to bottom,#80808020 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* ambient glow */}
        <motion.div
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(145,79,252,0.07) 0%, transparent 70%)", filter: "blur(40px)" }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left text — fade UP only (no x shift) to avoid clipping ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-7 text-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#914FFC]" />
              <span
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xs tracking-[0.22em] uppercase text-gray-500 font-light"
              >
                Careers at AstrumAI
              </span>
            </motion.div>

            {/* Heading stack */}
            <div className="space-y-1">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.65 }}
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-lg md:text-2xl font-extralight text-gray-500 tracking-tight"
              >
                AstrumAI is
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "'Outfit', sans-serif", paddingBottom: "0.12em" }}
                className="text-6xl sm:text-7xl md:text-8xl font-extralight tracking-[-0.03em] leading-[1.05] bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent"
              >
                Growing
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-px w-20 bg-linear-to-r from-[#914FFC] to-transparent origin-left mt-3"
              />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.65 }}
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl md:text-3xl font-extralight text-gray-100 tracking-tight leading-snug pt-1"
              >
                Grow with Us
              </motion.p>
            </div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.65 }}
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-sm md:text-base text-gray-500 leading-[1.85] font-light max-w-sm"
            >
              Join us as we develop reliable AI systems for the world's most
              important decisions. Be part of a team that builds what matters.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#open-positions"
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
              View Open Positions →
            </a>
              <a
                href="/contact-us"
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="
                  inline-flex items-center gap-2 px-7 py-3
                  border border-white/10 text-gray-400 hover:text-white hover:border-white/20
                  font-light text-sm rounded-full
                  transition-all duration-300
                "
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right animated visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <HeroVisual />
          </motion.div>
          </div>
      </section>

      {/* ══ SECTIONS ══ */}
      <section className="snap-section">
      <Mission />
      </section>
      <section className="snap-section">
      <CoreValues />
      </section>
      <section className="snap-section">
      <OurBenefits />
      </section>
      <section id="open-positions" className="snap-section">
      <Hiring />
      </section>
    </div>
  );
};

export default Careers;
