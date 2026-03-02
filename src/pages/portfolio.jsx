import React from "react";
import { motion } from "framer-motion";
import Solutions from "../components/portfolio/solutions.jsx";
import OurExperties from "../components/portfolio/ourExperties.jsx";
import { Link } from "react-router-dom";

const SPARKLE_POSITIONS = [
  { top: "22%", left: "28%", color: "#914FFC", size: 5, dur: 3.2 },
  { top: "18%", left: "58%", color: "#E93A8B", size: 4, dur: 2.8 },
  { top: "35%", left: "72%", color: "#2B61E5", size: 6, dur: 3.6 },
  { top: "65%", left: "70%", color: "#C084FC", size: 4, dur: 2.5 },
  { top: "72%", left: "38%", color: "#E93A8B", size: 5, dur: 3.9 },
  { top: "60%", left: "22%", color: "#2B61E5", size: 4, dur: 3.1 },
  { top: "40%", left: "14%", color: "#914FFC", size: 3, dur: 4.0 },
  { top: "30%", left: "83%", color: "#C084FC", size: 3, dur: 2.6 },
];

function GemHero() {
  return (
    <div className="relative w-full flex justify-center items-center" style={{ height: "520px" }}>

      {/* ── Layer 1: deep radial background glow ── */}
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.12, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(145,79,252,0.18) 0%, rgba(233,58,139,0.08) 45%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* ── Layer 2: AI aurora ribbons (no orbit) ── */}
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          animate={{
            x: i === 0 ? [-36, 36, -36] : [36, -36, 36],
            opacity: [0.25, 0.55, 0.25],
            scale: [0.95, 1.06, 0.95],
          }}
          transition={{
            duration: i === 0 ? 7.5 : 8.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full pointer-events-none blur-2xl"
          style={{
            width: i === 0 ? 470 : 420,
            height: i === 0 ? 130 : 110,
            top: i === 0 ? "38%" : "60%",
            left: "50%",
            translate: "-50% -50%",
            transform: `rotate(${i === 0 ? -12 : 10}deg)`,
            background:
              i === 0
                ? "linear-gradient(90deg, rgba(43,97,229,0), rgba(43,97,229,0.45), rgba(145,79,252,0.5), rgba(233,58,139,0))"
                : "linear-gradient(90deg, rgba(233,58,139,0), rgba(145,79,252,0.45), rgba(43,97,229,0.45), rgba(233,58,139,0))",
          }}
        />
      ))}

      {/* ── Layer 3: animated data bars behind crystal ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 220,
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          opacity: 0.46,
        }}
      >
        {[18, 32, 24, 44, 30, 52, 28, 48, 34, 22, 40, 26].map((h, i) => (
          <motion.div
            key={i}
            animate={{
              height: [`${h}%`, `${Math.min(96, h + 24)}%`, `${h}%`],
              opacity: [0.35, 0.9, 0.35],
            }}
            transition={{
              duration: 2.6 + (i % 4) * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.12,
            }}
            style={{
              width: 4,
              borderRadius: 999,
              background:
                i % 3 === 0
                  ? "linear-gradient(to top, rgba(43,97,229,0.05), rgba(43,97,229,0.95))"
                  : i % 2 === 0
                    ? "linear-gradient(to top, rgba(145,79,252,0.05), rgba(145,79,252,0.95))"
                    : "linear-gradient(to top, rgba(233,58,139,0.05), rgba(233,58,139,0.95))",
              boxShadow: "0 0 14px rgba(145,79,252,0.35)",
            }}
          />
        ))}
      </div>

      {/* ── Layer 4: vertical scan sweep ── */}
      <motion.div
        animate={{ y: [-120, 120, -120], opacity: [0.05, 0.45, 0.05] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 330,
          height: 4,
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(145,79,252,0.65) 20%, rgba(233,58,139,0.7) 50%, rgba(43,97,229,0.65) 80%, transparent 100%)",
          boxShadow: "0 0 18px rgba(145,79,252,0.5)",
        }}
      />

      {/* ── Layer 5: inner halo glow ── */}
      <motion.div
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [0.95, 1.05, 0.95],
          background: [
            "radial-gradient(circle, rgba(145,79,252,0.35) 0%, transparent 65%)",
            "radial-gradient(circle, rgba(233,58,139,0.3) 0%, transparent 65%)",
            "radial-gradient(circle, rgba(43,97,229,0.3) 0%, transparent 65%)",
            "radial-gradient(circle, rgba(145,79,252,0.35) 0%, transparent 65%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full pointer-events-none blur-2xl"
        style={{ width: 280, height: 280, top: "50%", left: "50%", translate: "-50% -50%" }}
      />

      {/* ── Layer 6: THE GEM — float + tilt + color-glow shift ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.55, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <motion.img
          src="https://res.cloudinary.com/deykcfhzj/image/upload/v1771999133/animation-rock_lffzuv.png"
          alt="AI Crystal"
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 6, 0, -6, 0],
            rotateZ: [0, 1, 0, -1, 0],
            filter: [
              "drop-shadow(0 0 24px rgba(145,79,252,0.7)) drop-shadow(0 0 60px rgba(145,79,252,0.3)) brightness(1.05)",
              "drop-shadow(0 0 32px rgba(233,58,139,0.8)) drop-shadow(0 0 80px rgba(233,58,139,0.25)) brightness(1.1)",
              "drop-shadow(0 0 28px rgba(43,97,229,0.7)) drop-shadow(0 0 70px rgba(43,97,229,0.2)) brightness(1.05)",
              "drop-shadow(0 0 24px rgba(145,79,252,0.7)) drop-shadow(0 0 60px rgba(145,79,252,0.3)) brightness(1.05)",
            ],
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            rotateZ: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            filter: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            height: 290,
            width: "auto",
            objectFit: "contain",
            transformStyle: "preserve-3d",
          }}
        />
      </motion.div>

      {/* ── Layer 7: floating sparkle particles ── */}
      {SPARKLE_POSITIONS.map((s, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -14, 0],
            opacity: [0.25, 1, 0.25],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: s.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.38,
          }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: s.size,
            height: s.size,
            background: s.color,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
            top: s.top,
            left: s.left,
          }}
        />
      ))}

      {/* ── Layer 8: diagonal AI energy streaks ── */}
      {[-24, -8, 0, 10, 22].map((deg, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.06, 0.34, 0.06], x: [-18, 18, -18] }}
          transition={{
            duration: 3.6 + i * 0.55,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          className="absolute pointer-events-none origin-bottom"
          style={{
            width: 2,
            height: 210,
            background:
              i % 2 === 0
                ? "linear-gradient(to top, rgba(145,79,252,0), rgba(145,79,252,0.75), rgba(145,79,252,0))"
                : "linear-gradient(to top, rgba(43,97,229,0), rgba(233,58,139,0.72), rgba(43,97,229,0))",
            top: "50%",
            left: "50%",
            transformOrigin: "bottom center",
            transform: `translateX(-50%) translateY(-50%) rotate(${deg}deg)`,
            filter: "blur(0.2px)",
          }}
        />
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="bg-black min-h-screen">

      {/* ═══ Hero Section ═══ */}
      <section className="relative pt-16 pb-4 md:pt-20 overflow-hidden">
        {/* subtle background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#80808020 1px,transparent 1px),linear-gradient(to bottom,#80808020 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10">

          {/* Text (left on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left mt-2 lg:mt-0"
          >
            <h1
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-100 text-center lg:text-left mb-5 tracking-[-0.02em] leading-[1.15]"
            >
              Our AI{" "}
              <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              Portfolio
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto lg:mx-0 mb-8 h-px w-20 bg-linear-to-r from-transparent via-[#914FFC] to-transparent origin-center lg:origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-base md:text-lg text-gray-400 font-light leading-[1.8] max-w-2xl mx-auto lg:mx-0"
            >
              Engineered by AI specialists for AI specialists — enabling
              organizations to obtain production-grade results, delivered fast.
            </motion.p>
          </motion.div>

          {/* Gem animation (right on desktop) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <GemHero />
          </div>
        </div>
      </section>

      {/* ═══ Solutions & Expertise ═══ */}
      <div className="mt-20">
        <Solutions />
        <OurExperties />
      </div>

      {/* ═══ Final CTA ═══ */}
      <section className="py-12 md:py-16 border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.02em] text-gray-100 mb-5 leading-[1.2]"
          >
            The future of your industry{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              starts here
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-[1.8] mb-10 font-light tracking-wide"
          >
            Contact our team to discuss your project or request a free AI
            consultation. Let's innovate together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28, duration: 0.6 }}
          >
            <Link
              to="/contact-us"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="
                inline-flex items-center px-8 py-3.5 md:px-12 md:py-5
                bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
                hover:from-violet-600 hover:to-[#914FFC]
                text-white font-light text-base md:text-xl
                rounded-full shadow-xl shadow-purple-900/40
                transition-all duration-500
                hover:shadow-2xl hover:shadow-purple-700/60
                hover:-translate-y-1 active:scale-95
              "
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
