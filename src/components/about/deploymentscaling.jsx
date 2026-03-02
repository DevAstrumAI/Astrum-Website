import React from "react";
import { RiCustomSize } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { BsDatabaseCheck } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";
import { SiCssdesignawards } from "react-icons/si";
import { TbTransformFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Bespoke Software Engineering",
    description:
      "High-performance, scalable applications architected to align perfectly with your business objectives.",
    icon: RiCustomSize,
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Seamless web and mobile experiences designed for speed, usability, and consistent performance across devices.",
    icon: MdDeveloperMode,
  },
  {
    title: "AI & Advanced Data Solutions",
    description:
      "Transform data into actionable intelligence with machine learning, predictive analytics, and automation.",
    icon: BsDatabaseCheck,
  },
  {
    title: "Cloud Architecture & DevOps Excellence",
    description:
      "Resilient, scalable cloud ecosystems with streamlined CI/CD pipelines for faster and safer deployments.",
    icon: CiCloudOn,
  },
  {
    title: "Experience-Driven UI/UX Design",
    description:
      "Human-centered digital interfaces crafted to maximize engagement, usability, and brand impact.",
    icon: SiCssdesignawards,
  },
  {
    title: "Strategic Digital Innovation",
    description:
      "Technology consulting and transformation strategies that accelerate growth and operational excellence.",
    icon: TbTransformFilled,
  },
];

export default function DeploymentScaling() {
  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-20 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(145,79,252,0.12)_0%,transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl lg:max-w-7xl mx-auto mb-12 md:mb-16 text-left"
        >
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-gray-300 leading-tight"
          >
            Complete{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-semibold">
              Software Development
            </span>{" "}
            Lifecycle
            <br className="sm:hidden" /> From Concept to{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent font-semibold">
              Scalable Deployment
            </span>
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              className="flex items-start gap-4 md:gap-5 group"
            >
              <div className="shrink-0 pt-1">
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-gray-400 transition-all duration-500 group-hover:text-[#914FFC] group-hover:drop-shadow-[0_0_10px_rgba(145,79,252,0.6)]" />
              </div>
              <div className="flex flex-col items-start text-left">
                <h3
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-base md:text-lg font-light text-gray-200 tracking-tight leading-tight group-hover:text-white transition-colors duration-300"
                >
                  {service.title}
                </h3>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-500 text-sm md:text-sm leading-relaxed font-light mt-2"
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            to="/contact-us"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="
              inline-flex items-center px-8 py-3 md:px-10 md:py-4
              bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
              hover:from-violet-600 hover:to-[#914FFC]
              text-white font-light text-base md:text-lg
              rounded-full shadow-xl shadow-purple-900/40
              transition-all duration-500
              hover:shadow-2xl hover:shadow-purple-700/60
              hover:-translate-y-1 active:scale-95
            "
          >
            Get free consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
