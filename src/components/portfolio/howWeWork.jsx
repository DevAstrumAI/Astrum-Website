import React from "react";
import { Lightbulb, Cog, CheckCircle } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Ideation",
      description:
        "We start by understanding your business goals and challenges, then brainstorm innovative AI solutions tailored to your needs.",
    },
    {
      icon: Cog,
      title: "Design & Build",
      description:
        "Our team designs, develops, and tests robust AI systems using the latest technologies, ensuring quality and scalability.",
    },
    {
      icon: CheckCircle,
      title: "Deliver & Support",
      description:
        "We deploy your solution, provide training, and offer ongoing support to ensure long-term success and value.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-semi-bold tracking-tight text-white"
          >
            How We{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start" // no bg, no border, no padding, no hover
            >
              {/* Icon – kept simple, no wrapper bg/border */}
              <div className="mb-6">
                <step.icon
                  className="w-10 h-10 md:w-12 md:h-12 text-gray-300s"
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3
                style={{ fontFamily: "'Gabarito', sans-serif" }}
                className="text-2xl md:text-3xl font-semi-bold text-white mb-4"
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-300 text-base md:text-lg leading-relaxed"
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
