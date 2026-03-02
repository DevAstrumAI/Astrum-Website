import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { title: "AI Product Development", slug: "ai-product-development",
    description: "We design, build, and deploy custom AI-powered products tailored to your business needs." },
  { title: "Blockchain Development", slug: "blockchain-product-development",
    description: "Harness the power of blockchain with our end-to-end development services." },
  { title: "Web & Mobile Development", slug: "web-mobile-development",
    description: "High-performance web and mobile applications using modern, scalable architectures." },
  { title: "AI Automation", slug: "ai-automation",
    description: "Streamline your operations and boost productivity with intelligent automation." },
  { title: "White Label AI", slug: "white-label-ai",
    description: "Quickly launch your own branded AI-powered products with our white label solutions." },
  { title: "Custom Software", slug: "development-service",
    description: "User-friendly apps tailored to your needs using agile methodologies and scalable architecture." },
  { title: "Custom Company GPT", slug: "custom-company-gpt",
    description: "Deploy a conversational AI model trained specifically on your company's data, processes, and tone." },
];

const OurServices = () => {
  return (
    <section className="bg-black py-16 md:py-20 px-6 sm:px-12 relative overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.02em] text-gray-100 max-w-3xl text-left"
          >
            Custom-Built{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              Solutions
            </span>{" "}
            for Your{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
          <div className="mt-4 h-px w-16 bg-linear-to-r from-[#914FFC] to-transparent" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 text-left">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: "easeOut" }}
            >
              <Link to={`/services/${item.slug}`} className="block h-full group">
                <div className="relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#914FFC]/20 transition-all duration-350 min-h-[200px] flex flex-col justify-between h-full">

                  {/* Index number */}
                  <span
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-[10px] text-gray-700 font-light tracking-[0.2em] uppercase mb-4 block"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1">
                    <h3
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-lg font-light text-gray-100 mb-2.5 leading-tight tracking-tight group-hover:text-white transition-colors duration-300"
                    >
                      {item.title}
                    </h3>
                    <div className="w-5 h-px bg-[#914FFC]/30 mb-3 group-hover:w-10 group-hover:bg-[#914FFC]/70 transition-all duration-500" />
                    <p
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-gray-500 text-sm leading-[1.8] font-light"
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    <ArrowUpRight className="text-[#914FFC] w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* CTA slot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center min-h-[200px]"
          >
            <Link
              to="/contact-us"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="
                inline-flex items-center gap-2 px-7 py-3
                bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
                hover:from-violet-600 hover:to-[#914FFC]
                text-white font-light text-sm
                rounded-full shadow-lg shadow-purple-900/30
                transition-all duration-300
                hover:shadow-xl hover:shadow-purple-700/50
                hover:-translate-y-0.5 active:scale-95
              "
            >
              Hire us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
