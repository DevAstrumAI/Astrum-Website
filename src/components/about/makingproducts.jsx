import React from "react";
import techno1 from "../../assets/techno1.png";

function MakingProducts() {
  return (
    <section className="w-full py-12 md:py-16 bg-black overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative group max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-4 bg-linear-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden bg-black border border-white/5">
              <img
                src={techno1}
                alt="AI Illustration"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 mix-blend-screen"
              />
              {/* Optional subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right - Text content */}
          <div className="space-y-6">
            <h2
              style={{ fontFamily: "'Gabarito', sans-serif" }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white"
            >
              Making amazing products for{" "}
              <span className="bg-gradient-to-r from-[#914FFC] to-purple-400 bg-clip-text text-transparent">
                web &
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-[#914FFC] to-purple-400 bg-clip-text text-transparent">
                mobile
              </span>{" "}
              since 2020
            </h2>

            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              AstrumAI is a global AI company committed to building
              transformative digital solutions. With a focus on innovation and
              collaboration, we help businesses harness the power of AI to solve
              real-world challenges.
            </p>

            <button
              style={{ fontFamily: "'Rubik', sans-serif" }}
              className="px-6 py-3.5 bg-[#914FFC] hover:bg-[#7c3aed] text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(145,79,252,0.4)] hover:shadow-[0_0_30px_rgba(145,79,252,0.6)] hover:-translate-y-1 active:scale-95"
            >
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MakingProducts;
 