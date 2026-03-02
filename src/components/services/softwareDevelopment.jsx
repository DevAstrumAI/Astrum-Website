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

const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-2">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative pt-10 md:pt-16 pb-20 px-6 sm:px-12 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-left">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left space-y-8 order-2 md:order-1"
          >
            <h1
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-4xl md:text-6xl lg:text-6xl font-extralight text-gray-300 leading-snug tracking-tight"
            >
              <span
                className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] 
              bg-clip-text text-transparent font-normal"
              >
                Custom Software
              </span>{" "}
              Development
            </h1>

            <div className="space-y-4">
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xl md:text-2xl text-gray-300 font-light tracking-tight"
              >
                Tailored solutions to meet your needs
              </p>
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-lg text-gray-400 max-w-lg leading-relaxed font-light"
              >
                Techverx empowers technology innovation by delivering
                outstanding products to its customers.
              </p>
            </div>

            <Link
              to="/contact-us"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="inline-flex items-center px-6 py-3 md:px-10 md:py-5
             bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] 
              hover:from-violet-600 hover:to-[#914FFC] 
              text-gray-200 font-light text-base md:text-xl 
              rounded-full shadow-xl shadow-purple-900/40 
              transition-all duration-500 
              hover:shadow-2xl hover:shadow-purple-900/60 
              hover:-translate-y-1 active:scale-95 cursor-pointer"
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
      <section className="py-12 md:py-16 px-6 sm:px-12 lg:px-16 bg-black/50 text-left">
        <div className="max-w-7xl mx-auto">
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-20 tracking-tight"
          >
            <span className="bg-linear-to-r from-[#2B61E5] to-[#E93A8B] bg-clip-text text-transparent font-normal">
              What
            </span>{" "}
            we do?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* App Development Card */}
            <div className="rounded-[45px] p-12 bg-linear-to-br from-[#2E66E1] via-[#4A80E6] to-[#C35293] text-white flex flex-col justify-between min-h-[380px] shadow-2xl hover:shadow-[0_20px_50px_rgba(46,102,225,0.3)] transition-all duration-500 hover:translate-y-[-4px] group">
              <div className="space-y-8">
                <h3
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight"
                >
                  App Development
                </h3>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-base md:text-lg text-white/90 font-light leading-relaxed max-w-sm"
                >
                  We build user-friendly, custom apps tailored to your needs.
                  Using agile methodologies and scalable architectures, our
                  solutions adapt seamlessly to future technological
                  advancements.
                </p>
              </div>
              <div className="pt-8 text-left">
                <button
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-white border-b border-white/40 pb-1 text-sm font-medium hover:border-white transition-all group-hover:pl-2"
                >
                  Learn more
                </button>
              </div>
            </div>

            {/* Web Development Card */}
            <div className="rounded-[45px] p-12 bg-linear-to-br from-[#2E66E1] via-[#4A80E6] to-[#C35293] text-white flex flex-col justify-between min-h-[380px] shadow-2xl hover:shadow-[0_20px_50px_rgba(46,102,225,0.3)] transition-all duration-500 hover:translate-y-[-4px] group">
              <div className="space-y-8">
                <h3
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight"
                >
                  Web Development
                </h3>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-base md:text-lg text-white/90 font-light leading-relaxed max-w-sm"
                >
                  We craft custom websites with the latest technologies,
                  combining seamless functionality and captivating UI/UX design.
                  Our top-tier developers deliver solutions that engage users
                  and scale with your business.
                </p>
              </div>
              <div className="pt-8 text-left">
                <button
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-white border-b border-white/40 pb-1 text-sm font-medium hover:border-white transition-all group-hover:pl-2"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW WE DO IT */}
      <section className="py-12 md:py-16 px-6 sm:px-12 lg:px-16 border-t border-white/5 text-left">
        <div className="max-w-7xl mx-auto">
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-6xl lg:text-6xl font-extralight text-white mb-6 tracking-tight"
          >
            <span className="bg-linear-to-r from-[#2B61E5] to-[#E93A8B] bg-clip-text text-transparent font-normal">
              How
            </span>{" "}
            we do it?
          </h2>
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-lg text-gray-400 mb-16 max-w-2xl font-light"
          >
            A streamlined, collaborative process designed to deliver the right
            solution—on time and with precision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div
                key={i}
                className="p-8 rounded-[35px] border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <span
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-2xl font-light text-white mb-6 block"
                >
                  {step.id}. {step.title}
                </span>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-400 text-base leading-relaxed font-light"
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO WE DO IT FOR */}
      <section className="py-12 md:py-16 px-6 sm:px-12 lg:px-16 text-left">
        <div className="max-w-7xl mx-auto">
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-6xl lg:text-6xl font-extralight text-white mb-20 tracking-tight"
          >
            Who we do it{" "}
            <span className="bg-linear-to-r from-[#2B61E5] to-[#E93A8B] bg-clip-text text-transparent font-normal">
              for
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Startups */}
            <div className="p-10 rounded-[45px] border border-white/10 bg-white/5 flex flex-col items-start text-left space-y-6">
              <div className="w-16 h-16 rounded-2xl  flex items-center justify-center text-gray-300 mb-4">
                <Rocket size={32} />
              </div>
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-3xl font-light tracking-tight py-2 -mt-4 text-white"
              >
                Startups
              </h3>
              <ul
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-400 text-sm space-y-4 font-light text-left w-full"
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
            </div>

            {/* SMBs */}
            <div className="p-10 rounded-[45px] border border-white/10 bg-white/5 flex flex-col items-start text-left space-y-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-gray-300 mb-4">
                <Briefcase size={32} />
              </div>
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-3xl font-light tracking-tight py-2 -mt-4 text-white"
              >
                SMBs
              </h3>
              <ul
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-400 text-sm space-y-4 font-light text-left w-full"
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
            </div>

            {/* Enterprises */}
            <div className="p-10 rounded-[45px] border border-white/10 bg-white/5 flex flex-col items-start text-left space-y-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-gray-300 mb-4">
                <Building2 size={32} />
              </div>
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-3xl font-light tracking-tight py-2 -mt-4 text-white"
              >
                Enterprises
              </h3>
              <ul
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-gray-400 text-sm space-y-3 font-light text-left w-full -mt-2 md:-mt-2 lg:-mt-2"
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
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 5: WHY OUTSOURCE */}
      <section className="py-12 md:py-20 px-6 sm:px-12 lg:px-16 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[40px] p-10 md:p-16 bg-linear-to-br from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] text-white shadow-2xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <div className="relative z-10 flex flex-col space-y-10">
              <div className="space-y-6">
                <h2
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-3xl md:text-5xl font-extralight leading-tight tracking-tight [text-shadow:0_0_8px_rgba(255,255,255,0.1),0_0_0_2px_rgba(150,150,150,0.8)]"
                >
                  Why Partner with <br />
                  <span className="font-semibold">
                    Astrum AI for Development?
                  </span>
                </h2>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-lg md:text-xl text-white/90 font-light"
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
                    desc: "Easily expand or reduce your development team as project demands change—no long-term obligations required.",
                  },
                  {
                    title: "Lower Costs, Minimized Risk",
                    desc: "Eliminate infrastructure overhead and operational bottlenecks while maintaining high-quality output.",
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <h4
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-2xl font-light tracking-tight [text-shadow:0_0_8px_rgba(255,255,255,0.1),0_0_0_2px_rgba(150,150,150,0.8)]"
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-white/80 text-base leading-relaxed font-light [text-shadow:0_0_8px_rgba(255,255,255,0.1),0_0_0_2px_rgba(150,150,150,0.8)]"
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 6: YOUR TRUSTED PARTNER */}
      <section className="py-8 md:py-16 px-6 sm:px-12 lg:px-16 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Side */}
          <div className="lg:w-1/3 space-y-8 mt-24 md:mt-36 lg:mt-64">
            <h2
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white/90 text-left"
            >
              Your Trusted Partner in <br />
              <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-medium">
                Custom Software <br />
                Development
              </span>
            </h2>
            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-lg text-gray-400 font-light max-w-sm leading-relaxed text-left"
            >
              15+ years of building software that performs, scales, and delivers
              impact.
            </p>
          </div>

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
                desc: "We integrate AI where it delivers maximum impact—predictive analytics, automation, personalization, and more.",
              },
              {
                title: "Agile, Transparent, Reliable",
                desc: "Stay informed with real-time updates, iterative sprints, and clear communication throughout development.",
              },
              {
                title: "Flexible Engagement Options",
                desc: "Choose the model that works best—dedicated teams, fixed-scope projects, or staff augmentation.",
              },
              {
                title: "A Long-Term Partnership Approach",
                desc: "We don’t just deliver software; we grow with you, providing ongoing support and scaling alongside your business.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="space-y-4 border-b border-white/10 pb-8 last:border-0 hover:border-white/20 transition-colors"
              >
                <h4
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-xl md:text-2xl font-light text-gray-300 tracking-tight"
                >
                  {item.title}
                </h4>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-400 text-base leading-relaxed font-light"
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-12 md:py-20 border-t border-white/10 overflow-hidden ">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-left">
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-5xl font-extralight mb-4 text-white"
          >
            Yes, We cover your{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-normal">
              Tech Stack
            </span>
          </h2>
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-gray-400 text-lg"
          >
            Our team has expertise in almost every programming language.
          </p>
        </div>

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
                className="text-3xl md:text-5xl font-bold text-white/20 hover:text-purple-400 transition-colors cursor-default"
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
                className="text-3xl md:text-5xl font-bold text-white/20 hover:text-purple-400 transition-colors cursor-default"
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
                className="text-3xl md:text-5xl font-bold text-white/20 hover:text-purple-400 transition-colors cursor-default"
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
                className="text-3xl md:text-5xl font-bold text-white/20 hover:text-purple-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
