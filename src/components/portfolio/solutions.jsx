import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Rocket,
  Mail,
  GraduationCap,
  Mic,
  Briefcase,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    icon: Rocket,
    title: "VisionCraft",
    subtitle: "Transform text prompts into production-ready HTML UI via Figma.",
    description: "Generate HTML UI from text in Figma using AI.",
    features:
      "VisionCraft generates clean HTML from text-based prompts, enabling rapid UI creation from Figma designs. It supports easy customization, editable components, and live previews to speed up prototyping.",
    impact: "↓ 70% UI prototyping time",
  },
  {
    icon: Mail,
    title: "MailGenius",
    subtitle: "AI-powered Outlook assistant for faster, smarter email composition.",
    description: "Fast, professional Outlook email generation.",
    features:
      "MailGenius is an AI-powered assistant designed to enhance email composition within Microsoft Outlook. It offers context-aware generation, tone customization, and intelligent subject-line suggestions.",
    impact: "↑ 50% user productivity",
  },
  {
    icon: GraduationCap,
    title: "GradeWise",
    subtitle: "Automated grading and intelligent feedback for modern educators.",
    description: "Automated grading and feedback for educators.",
    features:
      "GradeWise automates academic evaluation through auto-assessment and delivers intelligent feedback tailored to student responses. It supports question-answering and sentiment analysis with plagiarism detection.",
    impact: "↓ 80% grading time",
  },
  {
    icon: Mic,
    title: "Deepfake Audio",
    subtitle: "LSTM & SV2TTS models for hyper-realistic voice cloning at scale.",
    description: "AI-powered text-to-speech and voice cloning.",
    features:
      "Leverages an LSTM-based sequence model combined with an SV2TTS vocoder to generate highly realistic speech. Enables custom voice cloning with fine-grained emotion and tone control across multiple languages.",
    impact: "MOS score > 4.0",
  },
  {
    icon: Briefcase,
    title: "HR Automation",
    subtitle: "Real-time voice calls and AI-driven candidate ranking for hiring.",
    description: "Automated evaluation for hiring.",
    features:
      "Integrates real-time voice calls with intelligent resume and interview scoring to streamline hiring. Evaluates candidates through structured skill assessments and generates AI-driven rankings with bias-aware evaluation.",
    impact: "Real-time automated scoring",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Navigator AI",
    subtitle: "Automated lead extraction, scoring, and personalised outreach.",
    description: "Automated LinkedIn lead extraction and outreach.",
    features:
      "Automates lead extraction from LinkedIn with AI-powered lead scoring to prioritize high-value prospects. Users manage campaigns via a centralized analytics dashboard with one-click personalized messaging.",
    impact: "Full outreach automation",
  },
];

const projectsData = [
  { name: "VisionCraft", slug: "visioncraft" },
  { name: "MailGenius", slug: "mailgenius" },
  { name: "GradeWise", slug: "gradewise" },
  { name: "Deepfake Audio", slug: "deepfake-audio-generation" },
  { name: "HR Automation", slug: "hr-automation-platform" },
  { name: "LinkedIn Navigator AI", slug: "personalized-linkedin-sales-navigator-automation" },
];

export default function Solutions() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="py-0 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extralight text-gray-100 tracking-[-0.02em]"
          >
            Our{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-linear-to-r from-transparent via-[#914FFC] to-transparent" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 text-left">
          {solutions.map((solution, index) => {
            const isActive = activeCard === index;
            const slug = projectsData.find((p) => p.name === solution.title)?.slug;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: "easeOut" }}
                onClick={() => setActiveCard(isActive ? null : index)}
                className={`
                  relative flex flex-col cursor-pointer
                  rounded-2xl p-6 border
                  min-h-[380px] md:min-h-[420px]
                  transition-all duration-350 transform-gpu
                  ${isActive
                    ? "scale-[1.03] border-transparent bg-linear-to-br from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] shadow-xl shadow-purple-900/30"
                    : "border-white/[0.08] bg-white/[0.02] hover:scale-[1.03] hover:border-transparent hover:bg-linear-to-br hover:from-[#2B61E5] hover:via-[#7B59D0] hover:to-[#E93A8B] hover:shadow-xl hover:shadow-purple-900/30"
                  }
                  group
                `}
              >
                <div className="flex-1 w-full">

                  {/* — Default state — */}
                  <div className={isActive ? "hidden" : "block group-hover:hidden"}>
                    <div className="mb-5">
                      <solution.icon
                        className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors duration-300"
                        strokeWidth={1.4}
                      />
                    </div>
                    <h3
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-lg md:text-xl font-light text-gray-100 mb-2.5 tracking-tight"
                    >
                      {solution.title}
                    </h3>
                    <p
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-gray-500 text-sm leading-[1.75] font-light"
                    >
                      {solution.subtitle}
                    </p>

                    {/* Impact chip */}
                    <div className="mt-6 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#914FFC]/25 bg-[#914FFC]/8">
                      <div className="w-1 h-1 rounded-full bg-[#914FFC]" />
                      <span
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                        className="text-[11px] text-[#C084FC] font-light tracking-wide"
                      >
                        {solution.impact}
                      </span>
                    </div>
                  </div>

                  {/* — Active / Hover state — */}
                  <div className={isActive ? "block" : "hidden group-hover:block"}>
                    <div className="mb-4">
                      <solution.icon className="w-5 h-5 text-white/80" strokeWidth={1.4} />
                    </div>
                    <h3
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-lg md:text-xl font-light text-white tracking-tight mb-1.5"
                    >
                      {solution.title}
                    </h3>
                    <p
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-white/60 text-xs font-light mb-3 tracking-wide"
                    >
                      {solution.description}
                    </p>
                    <p
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-white/85 text-sm leading-[1.75] font-light"
                    >
                      {solution.features}
                    </p>
                  </div>
                </div>

                {/* CTA button */}
                <Link
                  to={`/projects/${slug}`}
                  onClick={(e) => e.stopPropagation()}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className={`
                    mt-5 w-full rounded-full border py-2 text-xs font-light tracking-[0.08em] uppercase
                    flex items-center justify-center gap-1.5
                    transition-all duration-300
                    ${isActive
                      ? "border-white/30 text-white/80 hover:bg-white/10"
                      : "border-white/20 text-white/70 group-hover:border-white/40 group-hover:text-white"
                    }
                  `}
                >
                  View Project <ArrowUpRight className="w-3 h-3" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
