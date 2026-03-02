import React, { useRef, useState } from "react";
import { Play, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function CeoMessage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 space-y-3 text-left"
        >
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-200 tracking-tight"
          >
            A Message from Our{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-semibold">
              CEO
            </span>
          </h2>
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl font-light"
          >
            Hear directly from Atif Mehmood about our vision, mission, and
            commitment to transforming businesses through AI innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#1a1528] border border-white/5 group"
          >
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/deykcfhzj/video/upload/v1771339755/AI_Solutions_Machine_Learning_Services_-_AstrumAI_-_Leading_AI_Development_Company_pp7lik.mp4"
              className="w-full h-full object-cover aspect-video"
              controls={isPlaying}
              preload="metadata"
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            />

            {!isPlaying && (
              <div
                className="absolute inset-0 bg-[#0f0a1e]/80 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-300"
                onClick={togglePlay}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden">
                  <span className="text-[20rem] font-bold text-purple-500 blur-sm">A</span>
                </div>
                <div className="relative z-10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-full bg-[#914FFC] flex items-center justify-center shadow-[0_0_30px_rgba(145,79,252,0.6)]">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-light text-white">Atif Mehmood</h3>
                  <p className="text-purple-200 text-sm font-medium mt-1">CEO & Founder, AstrumAI</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right — Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative pt-4 text-left"
          >
            <div className="space-y-7">
              {/* Thin accent bar */}
              <div className="w-10 h-px bg-linear-to-r from-[#914FFC] to-[#E93A8B]" />

              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.8 }}
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="relative text-lg md:text-xl text-gray-300 font-light leading-[1.8] italic"
              >
                <Quote className="absolute -top-4 -left-6 w-8 h-8 text-purple-500/15 rotate-180" />
                "At AstrumAI, we believe that artificial intelligence should be
                a force for good, empowering businesses to achieve what was once
                thought impossible. Our mission is to democratize AI technology
                and make it accessible to organizations of all sizes."
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <figcaption
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-xl md:text-2xl font-semibold bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent"
                >
                  Atif Mehmood
                </figcaption>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-sm text-gray-500 font-light mt-1 tracking-wide"
                >
                  CEO & Founder, AstrumAI
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
