import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import atif from "../../assets/atif.jpeg";
import bilal from "../../assets/bilal.jpeg";
import afifa from "../../assets/afifa.jpeg";
import julien from "../../assets/julien.jpeg";
import anna from "../../assets/anna.jpeg";

const experts = [
  {
    name: "Atif Mehmood",
    title: "CEO, AstrumAI",
    image: atif,
    bio: "As the visionary founder and CEO of AstrumAI, Atif Mehmood leads the company's mission to revolutionize businesses through artificial intelligence. With a background in industry leadership and a passion for innovation, Atif has guided AstrumAI from a bold idea to a global force in AI-driven digital transformation. His commitment to excellence, client success, and ethical AI sets the standard for the entire team.",
  },
  {
    name: "Bilal Ahmed",
    title: "CTO, AstrumAI",
    image: bilal,
    bio: "As CTO, Bilal Ahmed architects AstrumAI's most advanced solutions, blending deep technical expertise with strategic vision. Bilal's experience spans AI, cloud, and enterprise software, enabling AstrumAI to deliver scalable, intelligent products for clients worldwide. He is dedicated to building high-performing teams and driving continuous innovation at every level.",
  },
  {
    name: "Afifa Javed",
    title: "COO & Co-Founder, AstrumAI",
    image: afifa,
    bio: "As the COO and Co-Founder of Astrum AI, Afifa leads the company's mission to ethically harness AI for human progress. With over a decade of research experience at the intersection of education, socio-economic development, and comparative practices across the Global South and North, she brings a deep understanding of how technology can drive equitable change.",
  },
  {
    name: "Julien Chassot, CFA",
    title: "CFO, AstrumAI",
    image: julien,
    bio: "As the CFO of AstrumAI, Julien Chassot leads the company's financial strategy with a focus on capital efficiency, risk discipline, and scalable growth. With a strong background in institutional finance, quantitative analytics, and treasury management, Julien brings rigor and strategic clarity to AstrumAI's financial decision-making.",
  },
  {
    name: "Dr. Anna Losa",
    title: "Head of Sustainability, AstrumAI",
    image: anna,
    bio: "As Head of Sustainability at AstrumAI, Anna Losa combines extensive experience in ESG with a passion for leveraging advanced AI technologies for sustainable development. With in-depth knowledge of ESG reporting and practical expertise in integrating artificial intelligence with sustainability objectives, Anna leads the company's social and environmental responsibility strategy.",
  },
];

export default function MeetExperts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? experts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === experts.length - 1 ? 0 : prev + 1));
  };

  const expert = experts[currentIndex];

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.3 } }),
  };

  return (
    <section className="py-20 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-10 md:mb-12 text-left"
        >
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-200 mb-3 tracking-tight"
          >
            Talk to{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-semibold">
              Our Experts
            </span>
          </h2>
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl font-light"
          >
            Transform your vision into a working prototype with our MVP & PoC
            development services. We help you rapidly build, validate, and
            iterate your product — reducing risk while accelerating time to
            market.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center"
            >
              {/* Image */}
              <div className="md:col-span-4 lg:col-span-3">
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  {/* Gradient overlay bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black/60 to-transparent" />
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-8 lg:col-span-9 space-y-5 text-left">
                <div>
                  <div className="w-8 h-px bg-linear-to-r from-[#914FFC] to-[#E93A8B] mb-5" />
                  <h3
                    style={{ fontFamily: "'Gabarito', sans-serif" }}
                    className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-100 mb-1.5 tracking-tight"
                  >
                    {expert.name}
                  </h3>
                  <p
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-base md:text-lg text-gray-500 font-light tracking-wide"
                  >
                    {expert.title}
                  </p>
                </div>

                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl font-light"
                >
                  {expert.bio}
                </p>

                <div className="pt-4">
                  <Link
                    to="/contact-us"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="
                      inline-flex items-center px-8 py-3
                      bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
                      hover:from-violet-600 hover:to-[#914FFC]
                      text-white font-light text-base
                      rounded-full shadow-xl shadow-purple-900/40
                      transition-all duration-500
                      hover:shadow-2xl hover:shadow-purple-700/60
                      hover:-translate-y-0.5 active:scale-95
                    "
                  >
                    Get free consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-5 mt-10 md:mt-12">
            <button
              onClick={prevSlide}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-[#914FFC]/50 hover:bg-[#914FFC]/10 transition-all duration-300"
              aria-label="Previous expert"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-[#914FFC]/50 hover:bg-[#914FFC]/10 transition-all duration-300"
              aria-label="Next expert"
            >
              <ChevronRight size={20} />
            </button>

            {/* Progress dots */}
            <div className="flex gap-2 ml-3">
              {experts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
                  className={`h-px rounded-full transition-all duration-400 ${
                    idx === currentIndex
                      ? "w-10 bg-[#914FFC]"
                      : "w-3 bg-gray-700"
                  }`}
                  aria-label={`Go to expert ${idx + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <span
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="ml-auto text-sm text-gray-600 font-light tabular-nums"
            >
              {String(currentIndex + 1).padStart(2, "0")} / {String(experts.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
