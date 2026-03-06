import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ModelCustomization from "../assets/model-customization.png";
import AdvancedModelEcosystem from "../assets/Advanced-Model-Ecosystem.png";
import EnterpriseGradeData from "../assets/Enterprise-Grade-Data.png";

const TypewriterText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentFullText = texts[index % texts.length];

    const handleType = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        setSpeed(50);
      } else {
        setDisplayText((prev) => currentFullText.slice(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, speed]);

  return (
    <span className="bg-linear-to-r from-[#914FFC] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent inline min-h-[1.2em]">
      {displayText}
      <span className="w-[3px] h-[0.9em] bg-[#914FFC] inline-block ml-1 animate-pulse align-middle" />
    </span>
  );
};

const NeuralNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NODE_COUNT = 80;
    const MAX_DIST = 160;

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
      type: Math.floor(Math.random() * 3),
    }));

    const COLORS = ["#914FFC", "#2B61E5", "#E93A8B"];
    const pulses = [];

    const maybeAddPulse = () => {
      if (Math.random() > 0.04) return;
      const i = Math.floor(Math.random() * NODE_COUNT);
      const j = Math.floor(Math.random() * NODE_COUNT);
      if (i === j) return;
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST) {
        pulses.push({ from: i, to: j, t: 0, speed: 0.007 + Math.random() * 0.013 });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        n.x = Math.max(0, Math.min(canvas.width, n.x));
        n.y = Math.max(0, Math.min(canvas.height, n.y));
      });

      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(145, 79, 252, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const color = COLORS[n.type];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.t += p.speed;
        if (p.t >= 1) { pulses.splice(k, 1); continue; }
        const from = nodes[p.from];
        const to = nodes[p.to];
        const px = from.x + (to.x - from.x) * p.t;
        const py = from.y + (to.y - from.y) * p.t;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#C084FC";
        ctx.shadowColor = "#914FFC";
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      maybeAddPulse();
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

const AI3DSphereVisual = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let angle = 0;

    const setup = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    setup();
    window.addEventListener("resize", setup);

    const N = 90;
    const pts = [];
    for (let i = 0; i < N; i++) {
      const theta = Math.acos(1 - (2 * (i + 0.5)) / N);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;
      pts.push({
        x: Math.sin(theta) * Math.cos(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(theta),
      });
    }

    const pulses = [];
    const addSpherePulse = () => {
      if (Math.random() > 0.06) return;
      const i = Math.floor(Math.random() * N);
      const j = Math.floor(Math.random() * N);
      if (i === j) return;
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      const dz = pts[i].z - pts[j].z;
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 0.55) {
        pulses.push({ from: i, to: j, t: 0, speed: 0.012 + Math.random() * 0.018 });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      angle += 0.004;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const R = Math.min(canvas.width, canvas.height) * 0.38;
      const fov = 600;

      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const cosT = Math.cos(0.25);
      const sinT = Math.sin(0.25);

      const project = (p) => {
        let rx = p.x * cosA - p.z * sinA;
        let rz = p.x * sinA + p.z * cosA;
        let ry = p.y * cosT - rz * sinT;
        let rz2 = p.y * sinT + rz * cosT;
        const scale = fov / (fov + rz2 * R);
        return { sx: cx + rx * R * scale, sy: cy + ry * R * scale, sz: rz2, scale };
      };

      const projected = pts.map((p) => ({ ...p, ...project(p) }));

      // Outer glow
      const grad = ctx.createRadialGradient(cx, cy, R * 0.3, cx, cy, R * 1.1);
      grad.addColorStop(0, "rgba(145, 79, 252, 0.06)");
      grad.addColorStop(0.6, "rgba(43, 97, 229, 0.04)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.1, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Edges
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const pi = projected[i];
          const pj = projected[j];
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dz = pts[i].z - pts[j].z;
          const dist3d = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist3d < 0.5) {
            const midZ = (pi.sz + pj.sz) / 2;
            const depth = (midZ + 1) / 2;
            const alpha = depth * 0.45;
            ctx.beginPath();
            ctx.moveTo(pi.sx, pi.sy);
            ctx.lineTo(pj.sx, pj.sy);
            ctx.strokeStyle = `rgba(145, 79, 252, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Nodes
      projected.forEach((p) => {
        const depth = (p.sz + 1) / 2;
        const r = p.scale * 2.8;
        const alpha = 0.35 + depth * 0.65;
        let color;
        if (depth > 0.72) color = `rgba(145, 79, 252, ${alpha})`;
        else if (depth > 0.45) color = `rgba(43, 97, 229, ${alpha})`;
        else color = `rgba(233, 58, 139, ${alpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = depth > 0.6 ? "#914FFC" : "#2B61E5";
        ctx.shadowBlur = 8 * depth;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Pulse dots on sphere edges
      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.t += p.speed;
        if (p.t >= 1) { pulses.splice(k, 1); continue; }
        const from = projected[p.from];
        const to = projected[p.to];
        const px = from.sx + (to.sx - from.sx) * p.t;
        const py = from.sy + (to.sy - from.sy) * p.t;
        const depth = (from.sz + to.sz) / 2;
        if (depth > -0.2) {
          ctx.beginPath();
          ctx.arc(px, py, 2.8, 0, Math.PI * 2);
          ctx.fillStyle = "#E879F9";
          ctx.shadowColor = "#914FFC";
          ctx.shadowBlur = 20;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Central core glow
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.15);
      coreGrad.addColorStop(0, "rgba(145, 79, 252, 0.4)");
      coreGrad.addColorStop(1, "rgba(145, 79, 252, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      addSpherePulse();
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: "400px" }}
    />
  );
};

export default function Home() {
  const headings = [
    "Artificial Intelligence",
    "Machine Learning",
    "AI Solutions",
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const newIndex = Math.round(scrollPosition / width);
    if (newIndex !== activeCardIndex) setActiveCardIndex(newIndex);
  };

  const handleFeatureScroll = (e) => {
    const scrollPosition = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const newIndex = Math.round(scrollPosition / width);
    if (newIndex !== activeFeatureIndex) setActiveFeatureIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center pt-12 md:pt-20">
      <NeuralNetworkBackground />

      <section className="snap-section relative z-10 w-full">
        <Hero headings={headings} />
      </section>

      {/* Full-Stack AI Solutions Section */}
      <section className="snap-section relative z-10 w-full bg-black py-12 md:py-15 px-5 sm:px-10 lg:px-16 border-t border-white/5 text-left">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.25 }}
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-extralight text-gray-100 tracking-[-0.02em]"
            >
              Full-Stack
              <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
                {" "}AI Solutions
              </span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.25 }}
              className="mx-auto h-px w-16 bg-linear-to-r from-transparent via-[#914FFC] to-transparent origin-center"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false, amount: 0.25 }}
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-[1.8]"
            >
              End-to-end AI systems powered by elite data engineering, advanced
              models, intelligent agents, and production-ready deployment.
            </motion.p>
          </div>

          {/* Feature blocks – horizontal scroll on mobile, stacked on lg+ */}
          <div
            onScroll={handleFeatureScroll}
            className="
            flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 pb-8 lg:pb-0
            lg:flex lg:flex-col lg:overflow-visible lg:gap-16 scroll-smooth
            hide-scrollbar
          "
          >
            {/* Block 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.25 }}
              className="
              min-w-full lg:min-w-0 
              lg:w-full snap-start flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16
            "
            >
              <motion.div
                className="w-full lg:w-1/2 lg:order-last"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={ModelCustomization}
                  alt="Model Customization"
                  className="w-full h-auto rounded-2xl border border-white/5 shadow-2xl"
                />
              </motion.div>
              <div className="flex-1 space-y-4">
                <span
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-xs text-gray-600 font-light tracking-[0.2em] uppercase"
                >
                  01 / Model Layer
                </span>
                <h2
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-2xl sm:text-3xl font-extralight text-gray-100 tracking-[-0.02em] leading-[1.25]"
                >
                  Model Customization & Alignment
                </h2>
                <div className="w-8 h-px bg-linear-to-r from-[#914FFC] to-transparent" />
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-500 text-sm sm:text-base leading-[1.85] font-light"
                >
                  We customize leading foundation models to match your domain,
                  workflows, and proprietary data. Through advanced fine-tuning
                  and human-in-the-loop alignment, we ensure accurate,
                  responsible, and business-focused AI performance.
                </p>
              </div>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: false, amount: 0.25 }}
              className="
              min-w-full lg:min-w-0 
              lg:w-full snap-start flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16
            "
            >
              <motion.div
                className="w-full lg:w-1/2 lg:order-last"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={AdvancedModelEcosystem}
                  alt="Advanced Model Ecosystem"
                  className="w-full h-auto rounded-2xl border border-white/5 shadow-2xl"
                />
              </motion.div>
              <div className="flex-1 space-y-4">
                <span
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-xs text-gray-600 font-light tracking-[0.2em] uppercase"
                >
                  02 / Model Ecosystem
                </span>
                <h2
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-2xl sm:text-3xl font-extralight text-gray-100 tracking-[-0.02em] leading-[1.25]"
                >
                  Advanced Model Ecosystem
                </h2>
                <div className="w-8 h-px bg-linear-to-r from-[#2B61E5] to-transparent" />
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-500 text-sm sm:text-base leading-[1.85] font-light"
                >
                  We integrate top-tier open-source and enterprise AI models,
                  including LLMs and multimodal systems, to build scalable,
                  flexible, and future-ready solutions tailored to your needs.
                </p>
              </div>
            </motion.div>

            {/* Block 3 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false, amount: 0.25 }}
              className="
              min-w-full lg:min-w-0 
              lg:w-full snap-start flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16
            "
            >
              <motion.div
                className="w-full lg:w-1/2 lg:order-last"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={EnterpriseGradeData}
                  alt="Enterprise Grade Data Infrastructure"
                  className="w-full h-auto rounded-2xl border border-white/5 shadow-2xl"
                />
              </motion.div>
              <div className="flex-1 space-y-4">
                <span
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-xs text-gray-600 font-light tracking-[0.2em] uppercase"
                >
                  03 / Data Layer
                </span>
                <h2
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-2xl sm:text-3xl font-extralight text-gray-100 tracking-[-0.02em] leading-[1.25]"
                >
                  Enterprise-Grade Data Infrastructure
                </h2>
                <div className="w-8 h-px bg-linear-to-r from-[#E93A8B] to-transparent" />
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-500 text-sm sm:text-base leading-[1.85] font-light"
                >
                  Strong AI starts with strong data. We design secure,
                  structured, and compliant data pipelines that unify enterprise
                  systems and power reliable, high-performing AI applications.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Swipe Dots for Full-Stack AI Section (Mobile Only) */}
          <div className="lg:hidden flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={`h-px rounded-full transition-all duration-400 ${activeFeatureIndex === idx ? "w-10 bg-[#914FFC]" : "w-3 bg-gray-700"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Agentic Solutions Section */}
      <section className="snap-section relative z-10 w-full bg-black py-10 px-6 sm:px-12 lg:px-16 border-t border-white/5 text-left">
        <div className="max-w-8xl mx-auto space-y-20">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.25 }}
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-extralight text-gray-100 tracking-[-0.02em]"
            >
              Agentic
              <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
                {" "}Solutions
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: false, amount: 0.25 }}
              className="mx-auto h-px w-16 bg-linear-to-r from-transparent via-[#914FFC] to-transparent origin-center"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false, amount: 0.25 }}
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-gray-500 text-sm md:text-base max-w-xl md:mx-auto font-light leading-[1.8]"
            >
              Turn your organizational knowledge and data into intelligent
              agents that adapt, collaborate, and continuously improve through
              guided human interaction.
            </motion.p>
          </div>

          {/* Solution Grid - Slider on mobile, Grid on Desktop */}
          <div
            onScroll={handleScroll}
            className="flex lg:grid lg:grid-cols-2 gap-6 lg:gap-10 overflow-x-auto lg:overflow-x-visible pb-8 lg:pb-0 snap-x snap-mandatory scroll-smooth hide-scrollbar transition-all duration-300"
          >
            {/* Public Sector Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.25 }}
              className="group relative bg-white/10 rounded-4xl md:rounded-5xl overflow-hidden border border-white/5 min-h-[400px] shrink-0 w-full lg:w-full snap-start flex flex-col pt-4 pb-12"
            >
              <div className="p-12 space-y-8">
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-[10px] text-gray-600 tracking-[0.28em] uppercase font-light"
                >
                  Public Sector
                </p>
                <div className="space-y-4">
                  <h3
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-2xl md:text-3xl font-extralight text-gray-100 leading-[1.25] tracking-[-0.015em]"
                  >
                    Agentic Systems for Defense & Intelligence
                  </h3>
                  <div className="w-8 h-px bg-linear-to-r from-[#914FFC] to-transparent" />
                  <p
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-gray-500 text-sm md:text-base font-light leading-[1.8]"
                  >
                    Design coordinated AI agent workflows that enhance
                    situational awareness, accelerate analysis, and support
                    faster, smarter decision-making in mission-critical
                    environments.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.25 }}
              className="group relative bg-white/10 rounded-4xl md:rounded-5xl overflow-hidden border border-white/5 h-auto min-h-[400px] shrink-0 w-full lg:w-full snap-start flex flex-col pt-4 pb-12"
            >
              <div className="p-12 space-y-8">
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-[10px] text-gray-600 tracking-[0.28em] uppercase font-light"
                >
                  Enterprise
                </p>
                <div className="space-y-4">
                  <h3
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-2xl md:text-3xl font-extralight text-gray-100 leading-[1.25] tracking-[-0.015em]"
                  >
                    Agentic Solutions for Enterprise Transformation
                  </h3>
                  <div className="w-8 h-px bg-linear-to-r from-[#2B61E5] to-transparent" />
                  <p
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-gray-500 text-sm md:text-base font-light leading-[1.8]"
                  >
                    Deploy dependable AI agents that automate complex tasks,
                    learn from feedback, and consistently optimize business
                    outcomes across operations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Swipe Dots (Mobile Only) */}
          <div className="flex lg:hidden justify-center gap-2 mt-4">
            {[0, 1].map((idx) => (
              <div
                key={idx}
                className={`h-px rounded-full transition-all duration-400 ${activeCardIndex === idx ? "w-10 bg-[#914FFC]" : "w-3 bg-gray-700"}`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* AI Data Section */}
      <section className="snap-section relative z-10 w-full bg-black py-15 px-6 sm:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-8xl mx-auto text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.25 }}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extralight text-gray-100 leading-[1.2] tracking-[-0.02em] text-left md:text-center"
          >
            We Have Redefined the World of{" "}
            <br className="hidden md:block" />
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              AI Data
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mx-auto h-px w-16 bg-linear-to-r from-transparent via-[#914FFC] to-transparent origin-center hidden md:block"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false, amount: 0.25 }}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-gray-500 text-sm md:text-base max-w-xl md:mx-auto font-light leading-[1.85] text-left md:text-center"
          >
            From intelligent data pipelines to enterprise-ready AI systems,
            our approach reshapes how AI creates measurable business value
            built to perform in real-world environments.
          </motion.p>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="snap-section relative z-10 w-full bg-black py-15 px-6 sm:px-12 lg:px-16 border-t border-white/5">
        <div className="max-w-8xl mx-auto text-left md:text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.25 }}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-100 leading-[1.2] tracking-[-0.02em]"
          >
            What Our{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              Clients
            </span>{" "}
            Say
          </motion.h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="snap-section relative z-10 w-full bg-black py-10 pt-10 pb-20 px-4 sm:px-12 lg:px-16">
        <div className="max-w-8xl mx-auto text-left md:text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.25 }}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] tracking-[-0.025em]"
          >
            <span className="text-gray-600">The future of your</span>
            <br className="hidden md:block" />
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              {" "}industry
            </span>
            <span className="text-gray-200"> starts here</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-start md:justify-center gap-5 pt-6"
          >
            <Link
              to="/contact-us"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="
                inline-flex items-center gap-2 px-7 py-3 md:px-10 md:py-4
                bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
                hover:from-violet-600 hover:to-[#914FFC]
                text-white font-light text-sm md:text-base
                rounded-full shadow-lg shadow-purple-900/30
                transition-all duration-300
                hover:shadow-xl hover:shadow-purple-700/50
                hover:-translate-y-0.5 active:scale-95
              "
            >
              Book a Demo →
            </Link>
            <button
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="inline-flex items-center gap-1.5 px-7 py-3 md:px-10 md:py-4 text-gray-400 hover:text-white transition-all duration-300 font-light text-sm md:text-base border border-white/10 rounded-full hover:border-white/20"
            >
              Build AI →
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      quote: `Their machine learning expertise transformed our business operations. 
       Their custom AI solutions helped us automate key processes, resulting in 40% time savings and 
       significant cost reductions. The team's deep knowledge of artificial intelligence and their commitment to 
       delivering measurable results exceeded our expectations. Their AI consulting services provided invaluable 
       insights for our digital transformation journey.`,
      author: "Rohit Sriram",
      role: "Chief Technology Officer",
    },
    {
      quote: `Working with them on our machine learning implementation was exceptional. Despite complex technical challenges,
        the development team demonstrated outstanding expertise and dedication. They seamlessly integrated AI technologies
        into our existing systems, and their ongoing support ensures our artificial intelligence solutions
        continue to deliver optimal performance. Highly recommended for any business seeking cutting-edge AI solutions.`,
      author: "Sarah Johnson",
      role: "VP of Engineering",
    },
    {
      quote: `The team delivered outstanding results with their custom machine learning models. Their AI development process
         was transparent, efficient, and focused on our specific business needs. The artificial intelligence solutions 
         they implemented have significantly improved our operational efficiency and decision-making capabilities.
          Their expertise in AI consulting and development is truly world-class.`,
      author: "Emily Rodriguez",
      role: "Director of Operations",
    },
    {
      quote: `We were impressed by their comprehensive approach to AI implementation. From initial consultation to final deployment, their team demonstrated
       exceptional technical skills and business acumen. The machine learning solutions they developed have revolutionized 
       our data processing capabilities, leading to improved customer experiences and increased revenue. Their commitment
        to excellence is evident in every project.`,
      author: "Michael Chen",
      role: "CTO",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="max-w-4xl mx-auto min-h-[400px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full"
        >
          <div className="relative bg-[#09090b] rounded-[2rem] p-8 md:p-14 border border-white/[0.07] text-left md:text-center space-y-8 shadow-2xl">
            {/* Quote mark */}
            <div
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-4xl text-[#914FFC]/20 font-light leading-none select-none"
            >
              "
            </div>
            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-base md:text-lg text-gray-400 font-light leading-[1.9] italic"
            >
              {testimonials[index].quote}
            </p>

            <div className="space-y-1.5 pt-2">
              <div className="mx-auto md:mx-auto w-8 h-px bg-linear-to-r from-[#914FFC] to-[#E93A8B] md:mx-auto" />
              <h4
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-base font-light text-gray-100 tracking-tight"
              >
                {testimonials[index].author}
              </h4>
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-600 text-[11px] font-light tracking-[0.2em] uppercase"
              >
                {testimonials[index].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Hero = ({ headings }) => {
  return (
    <section
      className="
      relative z-10 w-full max-w-8xl mx-auto 
      px-4 sm:px-12 lg:px-16 
      -mt-16 md:-mt-20 lg:-mt-24 pt-10 pb-16 md:py-20 
      flex flex-col-reverse lg:flex-row items-center gap-16
      "
    >
      {/* Content Column */}
      <div className="flex-1 space-y-10 text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <span
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-sm md:text-base text-gray-500 font-light tracking-[0.18em] uppercase block"
            >
              Transform Your Business With
            </span>
            <h1
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-[-0.02em] leading-[1.15] text-gray-100"
            >
              <TypewriterText texts={headings} />
            </h1>
          </div>

          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-base md:text-lg text-gray-500 max-w-xl leading-[1.85] font-light"
          >
            Accelerate growth with custom AI models, consulting, and
            production-ready solutions that deliver measurable results
            for businesses worldwide.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 pt-4"
        >
          <Link
            to="/contact-us"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="
              inline-flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3
              bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] 
              hover:from-violet-600 hover:to-[#914FFC] 
              text-white font-light text-sm md:text-base
              rounded-full shadow-lg shadow-purple-900/30 
              transition-all duration-300 
              hover:shadow-xl hover:shadow-purple-700/50 
              hover:-translate-y-0.5 active:scale-95
            "
          >
            Get Quote
          </Link>
          <Link
            to="https://calendly.com/bilal-astrumai/30min?month=2026-02"
            target="_blank"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="
              inline-flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3
              bg-white/10 border border-white/20 
              text-white font-light text-sm md:text-base
              rounded-full transition-all duration-300 
              active:scale-95
            "
          >
            Schedule AI Strategy Meeting
          </Link>
        </motion.div>
      </div>

      {/* Visual Column / AI Neural Sphere */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="flex-1 relative flex mt-2 lg:mt-0 justify-center items-center"
      >
        <div className="relative w-full max-w-xl" style={{ height: "480px" }}>
          {/* Outer ring glow */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(145,79,252,0.08) 0%, rgba(43,97,229,0.04) 50%, transparent 75%)",
            }}
          />
          <AI3DSphereVisual />
          {/* Floating label chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-4 px-3 py-1.5 rounded-full text-xs font-light text-purple-300 border border-purple-500/30 bg-purple-900/20 backdrop-blur-sm"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Neural Networks
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-12 left-2 px-3 py-1.5 rounded-full text-xs font-light text-blue-300 border border-blue-500/30 bg-blue-900/20 backdrop-blur-sm"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Deep Learning
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-16 right-2 px-3 py-1.5 rounded-full text-xs font-light text-pink-300 border border-pink-500/30 bg-pink-900/20 backdrop-blur-sm"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            LLM Models
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-0 px-3 py-1.5 rounded-full text-xs font-light text-violet-300 border border-violet-500/30 bg-violet-900/20 backdrop-blur-sm"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Computer Vision
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
