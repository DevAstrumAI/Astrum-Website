import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* ── Mini neural-network canvas for the left panel ── */
function AICanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width  = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 40;
    const MAX = 120;
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.8,
      type: Math.floor(Math.random() * 3),
    }));
    const COLS = ["#914FFC", "#2B61E5", "#E93A8B"];
    const pulses = [];

    const maybeAddPulse = () => {
      if (Math.random() > 0.04) return;
      const i = Math.floor(Math.random() * N);
      const j = Math.floor(Math.random() * N);
      if (i === j) return;
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < MAX)
        pulses.push({ from: i, to: j, t: 0, speed: 0.008 + Math.random() * 0.012 });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(145,79,252,${(1 - d / MAX) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = COLS[n.type];
        ctx.shadowColor = COLS[n.type];
        ctx.shadowBlur = 8;
        ctx.globalAlpha = 0.55;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });
      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.t += p.speed;
        if (p.t >= 1) { pulses.splice(k, 1); continue; }
        const from = nodes[p.from], to = nodes[p.to];
        ctx.beginPath();
        ctx.arc(from.x + (to.x - from.x) * p.t, from.y + (to.y - from.y) * p.t, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "#C084FC";
        ctx.shadowColor = "#914FFC";
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      maybeAddPulse();
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const INPUT = "w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-gray-200 placeholder-gray-600 text-sm font-light focus:outline-none focus:border-[#914FFC]/40 transition-colors";

const ContactForm = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] overflow-hidden flex flex-col lg:flex-row">

          {/* ── LEFT: animated AI visual ── */}
          <div className="relative lg:w-[42%] min-h-[320px] lg:min-h-0 overflow-hidden">
            {/* gradient base */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(145deg, #0a0318 0%, #08051a 40%, #0d0628 100%)" }} />

            {/* animated orbs */}
            <motion.div
              animate={{ opacity:[0.4,0.7,0.4], scale:[1,1.15,1] }}
              transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
              className="absolute pointer-events-none"
              style={{ width:240, height:240, borderRadius:"50%",
                background:"radial-gradient(circle, rgba(145,79,252,0.35) 0%, transparent 70%)",
                filter:"blur(30px)", top:"10%", left:"5%" }}
            />
            <motion.div
              animate={{ opacity:[0.3,0.6,0.3], scale:[1,1.1,1] }}
              transition={{ duration:8, repeat:Infinity, ease:"easeInOut", delay:2 }}
              className="absolute pointer-events-none"
              style={{ width:180, height:180, borderRadius:"50%",
                background:"radial-gradient(circle, rgba(233,58,139,0.3) 0%, transparent 70%)",
                filter:"blur(25px)", bottom:"15%", right:"10%" }}
            />
            <motion.div
              animate={{ opacity:[0.2,0.5,0.2] }}
              transition={{ duration:10, repeat:Infinity, ease:"easeInOut", delay:1 }}
              className="absolute pointer-events-none"
              style={{ width:150, height:150, borderRadius:"50%",
                background:"radial-gradient(circle, rgba(43,97,229,0.3) 0%, transparent 70%)",
                filter:"blur(20px)", top:"50%", right:"5%" }}
            />

            {/* neural network canvas */}
            <AICanvas />

            {/* subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage:"linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

            {/* text content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
              {/* top: AstrumAI label */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#914FFC] animate-pulse" />
                <span style={{ fontFamily:"'Outfit', sans-serif" }}
                  className="text-[10px] tracking-[0.22em] uppercase text-gray-500 font-light">
                  AstrumAI
                </span>
              </div>

              {/* bottom: heading */}
              <div>
                <motion.h2
                  initial={{ opacity:0, y:16 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ duration:0.7, ease:"easeOut" }}
                  style={{ fontFamily:"'Outfit', sans-serif" }}
                  className="text-3xl lg:text-4xl font-extralight text-gray-100 leading-[1.25] tracking-tight mb-3"
                >
                  Let's{" "}
                  <span className="bg-linear-to-r from-[#914FFC] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
                    Innovate
                  </span>
                  <br />Together
                </motion.h2>
                <div className="w-10 h-px bg-linear-to-r from-[#914FFC] to-transparent" />
                <p style={{ fontFamily:"'Outfit', sans-serif" }}
                  className="mt-3 text-xs text-gray-500 font-light leading-relaxed max-w-[200px]">
                  Tell us about your project and we'll be in touch within 24h.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="flex-1 p-7 lg:p-8 text-white">
            <form style={{ fontFamily:"'Outfit', sans-serif" }} className="space-y-4 text-left">

              {/* Service select */}
              <select
                defaultValue=""
                className={`${INPUT} appearance-none cursor-pointer`}
              >
                <option value="" disabled className="bg-[#0a0318] text-gray-400">How can we help you?</option>
                <option className="bg-[#0a0318]">Build an AI Product</option>
                <option className="bg-[#0a0318]">AI Automation</option>
                <option className="bg-[#0a0318]">Web Development</option>
                <option className="bg-[#0a0318]">Consulting</option>
                <option className="bg-[#0a0318]">Other</option>
              </select>

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="text" placeholder="Name *" className={INPUT} />
                <input type="email" placeholder="Email *" className={INPUT} />
              </div>

              {/* Phone */}
              <div className="flex gap-2">
                <select className="w-[78px] shrink-0 px-3 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-gray-400 text-sm font-light focus:outline-none focus:border-[#914FFC]/40 transition-colors">
                  <option className="bg-[#0a0318]">+1</option>
                  <option className="bg-[#0a0318]">+44</option>
                  <option className="bg-[#0a0318]">+92</option>
                  <option className="bg-[#0a0318]">+49</option>
                </select>
                <input type="tel" placeholder="Phone" className={`${INPUT} flex-1 min-w-0`} />
              </div>

              {/* Company */}
              <input type="text" placeholder="Company Name" className={INPUT} />

              {/* Message */}
              <textarea rows={3} placeholder="Your Message"
                className={`${INPUT} resize-none`} />

              {/* NDA */}
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input type="checkbox" className="w-3.5 h-3.5 accent-[#914FFC] cursor-pointer shrink-0" />
                <span className="text-xs text-gray-500 group-hover:text-gray-400 font-light transition-colors">
                  I want to protect my data by signing an NDA
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full py-3
                  bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
                  hover:from-violet-600 hover:to-[#914FFC]
                  text-white font-light text-sm rounded-full
                  shadow-lg shadow-purple-900/30
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-purple-700/50
                  hover:-translate-y-0.5 active:scale-95
                "
              >
                Submit →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
