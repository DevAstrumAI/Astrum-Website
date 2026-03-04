import React from "react";
import {
  Rocket,
  Briefcase,
  Building2,
  CheckCircle2,
  Link2Icon,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceHeroVisual from "./ServiceHeroVisual";

const revealUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.25 },
  transition: { duration: 0.65, ease: "easeOut" },
};

const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 [font-family:'Outfit',sans-serif]">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-2">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-100 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
      </div>

      {/* SECTION 1: HERO */}
      <section className="snap-section relative pt-10 md:pt-16 pb-20 px-6 sm:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center space-y-5 order-2 md:order-1"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-600">
              Service · Custom Software Development
            </p>
            <h1
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-100 leading-[1.15] tracking-[-0.02em]"
            >
              <span
                className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] 
              bg-clip-text text-transparent font-normal"
              >
                Custom Software
              </span>{" "}
              Development
            </h1>

            <div className="h-px w-10 bg-linear-to-r from-[#914FFC] to-transparent mb-1" />

            <div className="space-y-3">
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-lg md:text-xl lg:text-2xl text-gray-300 font-extralight tracking-tight leading-snug"
              >
                Tailored solutions to meet your needs
              </p>
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-base text-gray-500 max-w-md mx-auto leading-[1.8] font-light"
              >
                AstrumAI empowers digital innovation by building intelligent,
                high-impact products for modern businesses.
              </p>
            </div>

            <Link
              to="/contact-us"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="inline-flex items-center gap-2 px-6 py-3
             bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] 
              hover:from-violet-600 hover:to-[#914FFC] 
              text-white font-light text-sm
              rounded-full shadow-md
              transition-all duration-300
              hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              Get your custom app now
            </Link>
          </motion.div>

          {/* 3D Image */}
          <div className="flex-1 flex justify-center items-center order-1 md:order-2">
            <ServiceHeroVisual
              src="https://res.cloudinary.com/deykcfhzj/image/upload/v1771999131/software-development_dt7juw.png"
              alt="Custom Software Development"
              imageClassName="-mt-2 md:-mt-4 lg:-mt-6"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO? */}
      <section className="snap-section py-12 md:py-16 px-6 sm:px-12 lg:px-16 bg-black/50 text-left">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...revealUp}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl md:text-5xl font-extralight text-white mb-12 tracking-[-0.02em] leading-[1.15] text-center"
          >
            <span className="bg-linear-to-r from-[#2B61E5] to-[#E93A8B] bg-clip-text text-transparent font-normal">
              What
            </span>{" "}
            we do?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* App Development Card */}
            <motion.div
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.22 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-2xl p-7 md:p-8 border border-white/10 bg-white/[0.03] text-gray-100 flex flex-col justify-between min-h-[300px] shadow-[0_10px_26px_rgba(145,79,252,0.08)] hover:shadow-[0_16px_36px_rgba(145,79,252,0.14)] transition-all duration-500 hover:translate-y-[-3px] group"
            >
              <div className="space-y-5">
                <h3
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-xl md:text-2xl font-extralight tracking-tight"
                >
                  App Development
                </h3>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-sm"
                >
                  We build user-friendly, custom apps tailored to your needs.
                  Using agile methodologies and scalable architectures, our
                  solutions adapt seamlessly to future technological
                  advancements.
                </p>
              </div>
              <div className="pt-6 text-left">
                <button
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-200 border-b border-white/20 pb-1 text-sm font-medium hover:text-gray-100 hover:border-white/40 transition-all group-hover:pl-2"
                >
                  Learn more
                </button>
              </div>
            </motion.div>

            {/* Web Development Card */}
            <motion.div
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.22 }}
              transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
              className="rounded-2xl p-7 md:p-8 border border-white/10 bg-white/[0.03] text-gray-100 flex flex-col justify-between min-h-[300px] shadow-[0_10px_26px_rgba(145,79,252,0.08)] hover:shadow-[0_16px_36px_rgba(145,79,252,0.14)] transition-all duration-500 hover:translate-y-[-3px] group"
            >
              <div className="space-y-5">
                <h3
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-xl md:text-2xl font-extralight tracking-tight"
                >
                  Web Development
                </h3>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-sm"
                >
                  We craft custom websites with the latest technologies,
                  combining seamless functionality and captivating UI/UX design.
                  Our top-tier developers deliver solutions that engage users
                  and scale with your business.
                </p>
              </div>
              <div className="pt-6 text-left">
                <button
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-200 border-b border-white/20 pb-1 text-sm font-medium hover:text-gray-100 hover:border-white/40 transition-all group-hover:pl-2"
                >
                  Learn more
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW WE DO IT */}
      <section className="snap-section py-12 md:py-16 px-6 sm:px-12 lg:px-16 border-t border-white/5 text-left">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...revealUp}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl md:text-5xl font-extralight text-white mb-4 tracking-[-0.02em] leading-[1.15] text-center"
          >
            <span className="bg-linear-to-r from-[#2B61E5] to-[#E93A8B] bg-clip-text text-transparent font-normal">
              How
            </span>{" "}
            we do it?
          </motion.h2>
          <motion.p
            {...revealUp}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-sm md:text-base text-gray-500 mb-12 md:mb-14 max-w-2xl mx-auto font-light text-center leading-[1.85]"
          >
            A streamlined, collaborative process designed to deliver the right
            solution on time and with precision.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: "1",
                title: "Discover",
                desc: "We start with a deep discussion to understand your vision and avoid unnecessary revisions down the line.",
              },
              {
                id: "2",
                title: "Strategize",
                desc: "Our team analyzes potential risks and outlines a clear, strategic plan of action tailored to your goals.",
              },
              {
                id: "3",
                title: "Prototype & Visualize",
                desc: "We create interactive UI/UX prototypes so you can visualize your software before development begins.",
              },
              {
                id: "4",
                title: "Plan & Schedule",
                desc: "We define a structured timeline to ensure your project is delivered on time without compromising quality.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="p-6 rounded-2xl border border-white/8 bg-white/[0.025] hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-[11px] font-light text-gray-600 uppercase tracking-widest"
                  >
                    0{step.id}
                  </span>
                  <h3
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-base font-light text-gray-200 tracking-tight"
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-sm text-gray-500 leading-relaxed font-light"
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO WE DO IT FOR */}
      <section className="snap-section py-12 md:py-16 px-6 sm:px-12 lg:px-16 text-left">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...revealUp}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl md:text-5xl font-extralight text-white mb-12 tracking-[-0.02em] leading-[1.15] text-center"
          >
            <span className="bg-linear-to-r from-[#2B61E5] to-[#E93A8B] bg-clip-text text-transparent font-normal">
              Who
            </span>{" "}
            we do it for?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Startups */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.22 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="p-10 rounded-[45px] border border-white/10 bg-white/5 flex flex-col items-start text-left space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl  flex items-center justify-center text-gray-200 mb-4">
                <Rocket size={32} />
              </div>
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl md:text-3xl font-extralight tracking-tight py-1 -mt-2 text-white"
              >
                Startups
              </h3>
              <ul
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-500 text-sm space-y-4 font-light text-left w-full"
              >
                <li className="flex items-start gap-3 -mt-2 md:-mt-2 lg:-mt-1">
                  <CheckCircle2 size={16} className=" mt-1 shrink-0" />
                  <span>Rapid development and launch of validated MVPs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className=" mt-1 shrink-0" />
                  <span>Clear, predictable pricing with no hidden costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className=" mt-1 shrink-0" />
                  <span>
                    Guidance in agile team workflows and delivery practices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className=" mt-1 shrink-0" />
                  <span>
                    Access to experienced Scrum Masters for smooth project
                    execution
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* SMBs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.22 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="p-10 rounded-[45px] border border-white/10 bg-white/5 flex flex-col items-start text-left space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-gray-200 mb-4">
                <Briefcase size={32} />
              </div>
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl md:text-3xl font-extralight tracking-tight py-1 -mt-2 text-white"
              >
                SMBs
              </h3>
              <ul
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-500 text-sm space-y-4 font-light text-left w-full"
              >
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0" />
                  <span>
                    Optimized processes and environments for efficient growth
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0" />
                  <span>
                    Flexible engagement models tailored to your business stage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0" />
                  <span>
                    Solutions designed to maximize ROI using industry insights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0" />
                  <span>
                    Hands-on domain expertise to execute projects effectively
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Enterprises */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.22 }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              className="p-10 rounded-[45px] border border-white/10 bg-white/5 flex flex-col items-start text-left space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-gray-200 mb-4">
                <Building2 size={32} />
              </div>
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl md:text-3xl font-extralight tracking-tight py-1 -mt-2 text-white"
              >
                Enterprises
              </h3>
              <ul
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-500 text-sm space-y-3 font-light text-left w-full -mt-2 md:-mt-2 lg:-mt-2"
              >
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0" />
                  <span>
                    Strategic consulting with access to specialized experts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0" />
                  <span>
                    Transparent progress tracking and engagement reporting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0" />
                  <span>
                    Support for large-scale enterprise mobility and digital
                    initiatives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-1 shrink-0" />
                  <span>
                    Ensuring full compliance with regulatory and industry
                    standards
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* SECTION 5: WHY OUTSOURCE */}
      <section className="snap-section py-12 md:py-20 px-6 sm:px-12 lg:px-16 text-left">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.24 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[40px] p-10 md:p-16 bg-linear-to-br from-[#17172a] via-[#111119] to-[#1b1026] border border-white/10 text-gray-100 shadow-2xl relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#914FFC]/20 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <div className="relative z-10 flex flex-col space-y-10">
              <div className="space-y-6">
                <h2
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-2xl md:text-4xl font-extralight leading-tight tracking-[-0.02em]"
                >
                  Why Partner with <br />
                  <span className="font-semibold">
                    Astrum AI for Development?
                  </span>
                </h2>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-lg md:text-xl text-gray-200 font-light"
                >
                  Accelerate growth. Innovate faster. Optimize costs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
                {[
                  {
                    title: "Focus on What Matters Most",
                    desc: "Let your internal team concentrate on core business priorities while we manage development and technical execution.",
                  },
                  {
                    title: "Faster Product Launches",
                    desc: "Launch products faster with dedicated teams and streamlined delivery.",
                  },
                  {
                    title: "Tap into Global Expertise",
                    desc: "Access a curated pool of top-tier developers and specialists without the hassle of recruitment.",
                  },
                  {
                    title: "Flexible Scaling",
                    desc: "Easily expand or reduce your development team as project demands change-no long-term obligations required.",
                  },
                  {
                    title: "Lower Costs, Minimized Risk",
                    desc: "Eliminate infrastructure overhead and operational bottlenecks while maintaining high-quality output.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
                    className="space-y-3"
                  >
                    <h4
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-xl md:text-2xl font-extralight tracking-tight"
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-gray-300 text-base leading-relaxed font-light"
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* SECTION 6: YOUR TRUSTED PARTNER */}
      <section className="snap-section py-8 md:py-16 px-6 sm:px-12 lg:px-16 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.24 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:w-1/3 space-y-8 mt-24 md:mt-36 lg:mt-64"
          >
            <h2
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl md:text-5xl font-extralight leading-tight tracking-[-0.02em] text-gray-100 text-left"
            >
              Your Trusted Partner in <br />
              <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-medium">
                Custom Software <br />
                Development
              </span>
            </h2>
            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-lg text-gray-500 font-light max-w-sm leading-relaxed text-left"
            >
              Building software that performs, scales, and delivers impact.
            </p>
          </motion.div>

          {/* Right Side - List */}
          <div className="lg:w-2/3 grid grid-cols-1 gap-y-12 text-left">
            {[
              {
                title: "Industry-Proven Expertise",
                desc: "From retail and fintech to healthcare, we bring deep domain knowledge to every project.",
              },
              {
                title: "Top-Tier Developers Across Technologies",
                desc: "Our vetted teams handle everything from legacy systems to the latest tech stacks with precision.",
              },
              {
                title: "AI-Powered Innovation",
                desc: "We integrate AI where it delivers maximum impact-predictive analytics, automation, personalization, and more.",
              },
              {
                title: "Agile, Transparent, Reliable",
                desc: "Stay informed with real-time updates, iterative sprints, and clear communication throughout development.",
              },
              {
                title: "Flexible Engagement Options",
                desc: "Choose the model that works best-dedicated teams, fixed-scope projects, or staff augmentation.",
              },
              {
                title: "A Long-Term Partnership Approach",
                desc: "We don't just deliver software; we grow with you, providing ongoing support and scaling alongside your business.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.24 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                className="space-y-4 border-b border-white/10 pb-8 last:border-0 hover:border-white/20 transition-colors"
              >
                <h4
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-lg md:text-xl font-extralight text-gray-200 tracking-tight"
                >
                  {item.title}
                </h4>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-500 text-base leading-relaxed font-light"
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="snap-section py-12 md:py-20 border-t border-white/10 overflow-hidden ">
        <motion.div
          {...revealUp}
          className="max-w-7xl mx-auto px-6 mb-12 text-left"
        >
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl md:text-5xl font-extralight mb-4 text-white tracking-[-0.02em]"
          >
            Yes, We cover your{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-normal">
              Tech Stack
            </span>
          </h2>
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-gray-500 text-lg"
          >
            Our team has expertise in almost every programming language.
          </p>
        </motion.div>

        {/* Row 1 */}
        <div className="relative flex overflow-x-hidden mb-8">
          <div className="py-4 animate-marquee whitespace-nowrap flex gap-16 md:gap-24">
            {[
              "Rails",
              "C#",
              "Python",
              "React",
              "Ruby",
              "PHP",
              "Laravel",
              "Django",
              "Flask",
              "Rails",
              "C#",
              "Python",
              "React",
              "Ruby",
              "PHP",
              "Laravel",
              "Django",
              "Flask",
            ].map((tech, index) => (
              <span
                key={index}
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl md:text-4xl font-extralight text-white/15 hover:text-purple-400 transition-colors cursor-default tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex gap-16 md:gap-24">
            {[
              "Rails",
              "C#",
              "Python",
              "React",
              "Ruby",
              "PHP",
              "Laravel",
              "Django",
              "Flask",
              "Rails",
              "C#",
              "Python",
              "React",
              "Ruby",
              "PHP",
              "Laravel",
              "Django",
              "Flask",
            ].map((tech, index) => (
              <span
                key={index}
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl md:text-4xl font-extralight text-white/15 hover:text-purple-400 transition-colors cursor-default tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-4 animate-marquee whitespace-nowrap flex gap-16 md:gap-24">
            {[
              "React",
              "Java",
              "Node.JS",
              "Swift",
              "JavaScript",
              "Vue.js",
              "Golang",
              "iOS",
              "Android",
              "React",
              "Java",
              "Node.JS",
              "Swift",
              "JavaScript",
              "Vue.js",
              "Golang",
              "iOS",
              "Android",
            ].map((tech, index) => (
              <span
                key={index}
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl md:text-4xl font-extralight text-white/15 hover:text-purple-400 transition-colors cursor-default tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex gap-16 md:gap-24">
            {[
              "React",
              "Java",
              "Node.JS",
              "Swift",
              "JavaScript",
              "Vue.js",
              "Golang",
              "iOS",
              "Android",
              "React",
              "Java",
              "Node.JS",
              "Swift",
              "JavaScript",
              "Vue.js",
              "Golang",
              "iOS",
              "Android",
            ].map((tech, index) => (
              <span
                key={index}
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl md:text-4xl font-extralight text-white/15 hover:text-purple-400 transition-colors cursor-default tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
