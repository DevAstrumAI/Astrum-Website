import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceBaseLayout from "./ServiceBaseLayout";
import ServiceData from "./dataServices";
import ServiceHeroVisual from "./ServiceHeroVisual";

const ACCENT = "bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-normal";
const DIVIDER = "h-px w-10 bg-linear-to-r from-[#914FFC] to-transparent mb-6";

const WhiteLabelAI = () => {
  const serviceData = ServiceData.find((s) => s.slug === "white-label-ai");

  return (
    <ServiceBaseLayout serviceData={serviceData}>
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 space-y-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gray-600">Service · White Label AI</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-100 leading-[1.15] tracking-[-0.02em]">
            <span className={ACCENT}>White Label</span> AI Solutions Ready for Your Brand
          </h1>
          <div className={DIVIDER} />
          <p className="text-base text-gray-400 font-light leading-[1.8] max-w-md">
            Fully customizable, scalable AI systems built to match your brand and business goals. Deploy instantly with ready-to-launch architectures that minimize development time.
          </p>
          <Link to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] hover:from-violet-600 hover:to-[#914FFC] text-white font-light text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-95">
            See our work →
          </Link>
        </motion.div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center w-full">
          <ServiceHeroVisual src="https://res.cloudinary.com/deykcfhzj/image/upload/v1771999129/white-label-ai_szzmbw.png" alt="White Label AI" />
        </div>
      </div>
    </ServiceBaseLayout>
  );
};

export default WhiteLabelAI;
