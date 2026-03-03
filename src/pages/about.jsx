import { useEffect, useRef } from "react";
import ShapingTomorrow from "../components/about/shapingTomorrow";
import CeoMessage from "../components/about/ceoMessage";
import DeploymentScaling from "../components/about/deploymentscaling";
import CoreValues from "../components/about/coreValues";
import MeetExperts from "../components/about/meetExperts";
import ChooseAstrumai from "../components/about/chooseAstrumai";
import RightFit from "../components/about/rightFit";

function AboutBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NODE_COUNT = 55;
    const MAX_DIST = 140;

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.6,
      type: Math.floor(Math.random() * 3),
    }));

    const COLORS = ["#914FFC", "#2B61E5", "#E93A8B"];
    const pulses = [];

    const maybeAddPulse = () => {
      if (Math.random() > 0.03) return;
      const i = Math.floor(Math.random() * NODE_COUNT);
      const j = Math.floor(Math.random() * NODE_COUNT);
      if (i === j) return;
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST) {
        pulses.push({ from: i, to: j, t: 0, speed: 0.006 + Math.random() * 0.01 });
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
            const alpha = (1 - dist / MAX_DIST) * 0.14;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(145, 79, 252, ${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const color = COLORS[n.type];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(")", ", 0.5)").replace("rgb", "rgba").replace("#", "rgba(") || color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 6;
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.45;
        ctx.fill();
        ctx.globalAlpha = 1;
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
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#C084FC";
        ctx.shadowColor = "#914FFC";
        ctx.shadowBlur = 12;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
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
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <AboutBackground />

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <section className="snap-section pt-20">
          <ShapingTomorrow />
        </section>
        <div className="space-y-0">
          <section className="snap-section">
          <CeoMessage />
          </section>
          <section className="snap-section">
          <DeploymentScaling />
          </section>
          <section className="snap-section">
          <RightFit />
          </section>
          <section className="snap-section">
          <CoreValues />
          </section>
          <section className="snap-section">
          <MeetExperts />
          </section>
          <section className="snap-section">
          <ChooseAstrumai />
          </section>
        </div>
      </div>
    </div>
  );
}
