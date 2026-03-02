import React from "react";

export default function HiringAtAstrum() {
  return (
    <div className="bg-gray-950 text-white">
      {/* 1. Our Hiring Process */}
      <section className="py-16 md:py-20 border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center mb-16 md:mb-20"
          >
            Our Hiring{" "}
            <span className="bg-gradient-to-r from-[#914FFC] to-violet-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Underline accent */}
            <div className="h-1 w-24 bg-gradient-to-r from-[#914FFC] to-violet-600 mx-auto mb-12 rounded-full" />

            <div className="space-y-12 md:space-y-16">
              {[
                {
                  number: 1,
                  title: "Apply Online",
                  desc: "Submit your application and resume.",
                },
                {
                  number: 2,
                  title: "Initial Screening",
                  desc: "Our team reviews your background and experience.",
                },
                {
                  number: 3,
                  title: "Interview Rounds",
                  desc: "Meet with team members and showcase your skills.",
                },
                {
                  number: 4,
                  title: "Offer & Onboarding",
                  desc: "Receive your offer and start your AstrumAI journey!",
                },
              ].map((step) => (
                <div key={step.number} className="flex gap-6 md:gap-10">
                  {/* Number + vertical line */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="
                      w-12 h-12 md:w-14 md:h-14 rounded-full 
                      bg-gray-900 border-2 border-[#914FFC]/40 
                      flex items-center justify-center text-2xl font-bold text-[#914FFC]
                    "
                    >
                      {step.number}
                    </div>
                    {step.number < 4 && (
                      <div className="flex-1 w-0.5 bg-gradient-to-b from-[#914FFC]/40 to-transparent my-2" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-3">
                    <h3
                      style={{ fontFamily: "'Gabarito', sans-serif" }}
                      className="text-2xl md:text-3xl font-bold text-white mb-3"
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Work at AstrumAI? */}
      <section className="py-16 md:py-20 border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center mb-16 md:mb-20"
          >
            Why Work at{" "}
            <span className="bg-gradient-to-r from-[#914FFC] to-violet-600 bg-clip-text text-transparent">
              AstrumAI
            </span>
            ?
          </h2>

          {/* Underline accent */}
          <div className="h-1 w-24 bg-gradient-to-r from-[#914FFC] to-violet-600 mx-auto mb-12 rounded-full" />

          <div className="max-w-4xl mx-auto text-center md:text-left">
            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12"
            >
              At AstrumAI, you’ll join a passionate, innovative team that’s
              shaping the future of technology. We value creativity,
              collaboration, and continuous learning. Enjoy a flexible,
              inclusive environment where your ideas matter and your growth is
              our priority.
            </p>

            {/* Bullet grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                "Work on cutting-edge AI projects",
                "Flexible remote & hybrid options",
                "Learning & development budget",
                "Supportive, diverse team culture",
                "Performance bonuses & recognition",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#914FFC]" />
                  </div>
                  <p
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-gray-300 text-base md:text-lg"
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
