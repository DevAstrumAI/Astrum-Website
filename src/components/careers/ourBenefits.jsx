import React from "react";
import { motion } from "framer-motion";
import healthImg    from "../../assets/Health-&-Wellbeing.jpeg";
import growthImg    from "../../assets/Personal-&-Career-Growth.jpeg";
import communityImg from "../../assets/Building-Scale-Community.jpeg";
import parentalImg  from "../../assets/Parental-Support.jpeg";

const benefits = [
  { title: "Wellness & Total Care",              image: healthImg,
    description: "We prioritize your overall wellbeing with comprehensive health coverage, mental wellness support, flexible time-off policies, and work-life balance initiatives — designed to help you recharge, thrive, and perform at your best." },
  { title: "Continuous Learning & Advancement",  image: growthImg,
    description: "Accelerate your growth with dedicated learning budgets, leadership programs, mentorship opportunities, training sessions, and knowledge-sharing events that empower both personal and professional development." },
  { title: "Vibrant Community & Culture",        image: communityImg,
    description: "Be part of an inclusive, people-first culture with team events, interest groups, social gatherings, and family-friendly activities that foster meaningful connections beyond work." },
  { title: "Family-First Policies",              image: parentalImg,
    description: "We support every stage of life with flexible parental leave, family-friendly policies, and a workplace culture that respects and promotes healthy work-life integration." },
];

export default function OurBenefits() {
  return (
    <section className="py-16 md:py-24 bg-black border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2
            style={{ fontFamily:"'Outfit', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[-0.02em] text-gray-100"
          >
            Supporting You To{" "}
            <br className="hidden md:block" />
            Do Your{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              Best Work
            </span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-linear-to-r from-transparent via-[#914FFC] to-transparent" />
          <motion.p
            initial={{ opacity:0, y:12 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay:0.2, duration:0.6 }}
            style={{ fontFamily:"'Outfit', sans-serif" }}
            className="mt-5 text-sm md:text-base text-gray-500 max-w-xl mx-auto font-light leading-[1.8]"
          >
            At AstrumAI, we believe your talent and achievements deserve to be
            met with a supportive community and flexible environment.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 md:gap-y-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity:0, y:32 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6, delay:(index%2)*0.1, ease:"easeOut" }}
              className="flex flex-col group"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-2xl border border-white/[0.05]">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              {/* Text */}
              <h3
                style={{ fontFamily:"'Outfit', sans-serif" }}
                className="text-xl md:text-2xl font-extralight text-gray-100 tracking-tight mb-2 group-hover:text-white transition-colors duration-300"
              >
                {benefit.title}
              </h3>
              <div className="w-6 h-px bg-[#914FFC]/35 mb-3 group-hover:w-12 group-hover:bg-[#914FFC]/70 transition-all duration-500" />
              <p
                style={{ fontFamily:"'Outfit', sans-serif" }}
                className="text-gray-500 text-sm leading-[1.85] font-light"
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
