import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  LineChart,
  MessageSquare,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const expertiseItems = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Supervised, unsupervised, and deep learning for real-world business impact.",
  },
  {
    icon: Cloud,
    title: "Cloud AI",
    description: "Scalable AI deployments on AWS, Azure, and Google Cloud.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "Forecasting, anomaly detection, and data-driven decision support.",
  },
  {
    icon: MessageSquare,
    title: "NLP & Chatbots",
    description: "Conversational AI, text analysis, and language models.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Pipelines, ETL, and data warehousing for AI readiness.",
  },
];

function ExpertiseCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="flex flex-col items-start group"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.08 + 0.15, type: "spring", stiffness: 200 }}
        className="mb-5"
      >
        <item.icon
          className="w-7 h-7 text-gray-500 transition-all duration-400 group-hover:text-[#914FFC] group-hover:drop-shadow-[0_0_10px_rgba(145,79,252,0.6)]"
          strokeWidth={1.4}
        />
      </motion.div>

      <h3
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className="text-lg sm:text-xl font-light text-gray-100 mb-2 tracking-tight group-hover:text-white transition-colors duration-300"
      >
        {item.title}
      </h3>

      {/* Animated underline */}
      <div className="w-5 h-px bg-[#914FFC]/35 mb-3 group-hover:w-10 group-hover:bg-[#914FFC] transition-all duration-500" />

      <p
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className="text-gray-500 text-sm leading-[1.8] font-light"
      >
        {item.description}
      </p>
    </motion.div>
  );
}

export default function OurExperties() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1);
      else if (window.innerWidth < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxSlide = Math.max(0, expertiseItems.length - itemsPerSlide);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, maxSlide));
  }, [maxSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [maxSlide]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));

  const cardWidth = 100 / itemsPerSlide;

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extralight text-gray-100 tracking-[-0.02em]"
          >
            Our{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-linear-to-r from-transparent via-[#914FFC] to-transparent" />
        </motion.div>

        {/* Slider */}
        <div className="relative px-4 sm:px-8 md:px-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * cardWidth}%)` }}
            >
              {expertiseItems.map((item, index) => (
                <div
                  key={index}
                  style={{ minWidth: `${cardWidth}%` }}
                  className="px-4 sm:px-5"
                >
                  <ExpertiseCard item={item} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute -left-1 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#914FFC]/40 hover:bg-[#914FFC]/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed z-10"
          >
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            className="absolute -right-1 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#914FFC]/40 hover:bg-[#914FFC]/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed z-10"
          >
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-px rounded-full transition-all duration-400 ${
                currentSlide === index ? "w-10 bg-[#914FFC]" : "w-4 bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
