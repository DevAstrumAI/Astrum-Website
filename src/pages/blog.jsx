import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BlogData from "../components/blog/dataBlog";
import RewiringFinance from "../assets/rewiring-finance.jpg";
import FeasibilityOfAI from "../assets/feasibility-of-ai.jpg";
import SapBenefits from "../assets/SAP-benefits.jpg";
import BiggestHurdles from "../assets/biggest-hurdles.jpg";

const techTalks = [
  {
    title: "Astrum AI's TechTalk on How AI is Rewiring Finance",
    url: "https://www.youtube.com/watch?v=mIdscZ-p9lo",
    image: RewiringFinance,
    date: "JAN 21, 2025",
    category: "TECHTALK",
  },
  {
    title: "Evaluating the Feasibility of AI Products",
    url: "https://www.youtube.com/watch?v=ghXPh0ZLb-4",
    image: FeasibilityOfAI,
    date: "JAN 15, 2025",
    category: "TECHTALK",
  },
  {
    title: "Benefits of SAP PartnerEdge for FinTech Companies",
    url: "https://www.youtube.com/watch?v=hdtjBMYAieU",
    image: SapBenefits,
    date: "JAN 10, 2025",
    category: "TECHTALK",
  },
  {
    title: "The 5 Biggest Hurdles Stopping AI From Working",
    url: "https://www.youtube.com/watch?v=fqJjeJPndJQ",
    image: BiggestHurdles,
    date: "JAN 05, 2025",
    category: "TECHTALK",
  },
];

const Blog = () => {
  const [activeTab, setActiveTab] = useState("blog");

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 sm:px-12 lg:px-16 text-left">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className="text-6xl md:text-7xl font-light tracking-tight mb-6"
        >
          Blog
        </h1>
        <p
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className="text-xl md:text-2xl text-gray-300 font-light"
        >
          Company Updates & Technology Articles
        </p>
      </motion.div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-24">
        <div className="bg-[#1a1a1e] p-1.5 rounded-full flex items-center gap-1 border border-white/5">
          <button
            onClick={() => setActiveTab("blog")}
            className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "blog"
                ? "bg-[#914FFC] text-white shadow-lg shadow-purple-900/40"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => setActiveTab("techtalks")}
            className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "techtalks"
                ? "bg-[#914FFC] text-white shadow-lg shadow-purple-900/40"
                : "text-gray-400 hover:text-white"
            }`}
          >
            TechTalks
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-32">
        {activeTab === "blog"
          ? BlogData.map((post) => (
              <div
                key={post.slug}
                className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
              >
                {/* Left: Date */}
                <div className="md:col-span-3 text-gray-500 font-medium text-lg pt-2 hidden md:block">
                  {post.date}
                </div>

                {/* Right: Content */}
                <div className="md:col-span-9 space-y-8">
                  <div className="text-gray-500 font-bold tracking-[0.2em] text-sm md:hidden mb-2">
                    {post.date}
                  </div>
                  <div className="text-gray-400 font-light tracking-[0.2em] text-sm uppercase">
                    {post.category || "PARTNERSHIPS"}
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h2
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-2xl md:text-4xl font-light leading-tight transition-colors duration-300 hover:text-purple-400"
                    >
                      {post.heroTitle}
                    </h2>
                  </Link>

                  <div className="relative rounded-3xl overflow-hidden aspect-video bg-gray-900 border border-gray-800 mt-8 md:mt-10 lg:mt-12">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.heroTitle}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      />
                    ) : null}
                  </div>

                  <p
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-gray-300 font-light leading-relaxed max-w-4xl"
                  >
                    {post.intro}
                  </p>
                  <div className="md:hidden pt-12 border-b border-gray-900 w-full" />
                </div>
              </div>
            ))
          : techTalks.map((talk, index) => (
              <div
                key={index}
                className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
              >
                {/* Left: Date */}
                <div className="md:col-span-3 text-gray-500 font-medium text-lg pt-2 hidden md:block">
                  {talk.date}
                </div>

                {/* Right: Content */}
                <div className="md:col-span-9 space-y-8">
                  <div className="text-gray-500 font-bold tracking-[0.2em] text-sm md:hidden mb-2">
                    {talk.date}
                  </div>
                  <div className="text-gray-400 font-light tracking-[0.2em] text-sm uppercase">
                    {talk.category}
                  </div>

                  <a href={talk.url} target="_blank" rel="noopener noreferrer">
                    <h2
                      style={{ fontFamily: "'Gabarito', sans-serif" }}
                      className="text-2xl md:text-4xl font-light leading-tight transition-colors duration-300 hover:text-purple-400"
                    >
                      {talk.title}
                    </h2>
                  </a>

                  <a
                    href={talk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-3xl overflow-hidden aspect-video bg-gray-900 border border-gray-800 mt-8 md:mt-10 lg:mt-12"
                  >
                    <img
                      src={talk.image}
                      alt={talk.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                  </a>

                  <div className="md:hidden pt-12 border-b border-gray-900 w-full" />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Blog;
