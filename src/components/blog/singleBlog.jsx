import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BlogData from "./dataBlog";
import ReactMarkdown from "react-markdown";
import {
  Share2,
  Check,
  Search,
  Hammer,
  Link2 as Link2Icon,
  BarChart3,
  Scale,
  Factory,
  ShoppingCart,
  MessageSquare,
  Hospital,
  TrendingUp,
} from "lucide-react";

const SingleBlog = () => {
  const { slug } = useParams();
  const blog = BlogData.find((b) => b.slug === slug);
  const cardIconMap = {
    legal: Scale,
    manufacturing: Factory,
    retail: ShoppingCart,
    customerService: MessageSquare,
    healthcare: Hospital,
    marketing: TrendingUp,
    workflowDiscovery: Search,
    customAgentDevelopment: Hammer,
    systemIntegration: Link2Icon,
    scaleOptimise: BarChart3,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog not found</h1>
          <Link to="/blog" className="text-purple-400 hover:text-purple-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 sm:px-12 lg:px-16 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Breadcrumbs */}
        <div className="flex items-center justify-center space-x-2 text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-16">
          <Link
            to="/blog"
            className="hover:text-white transition-colors flex items-center"
          >
            <span className="mr-2">←</span> Blog
          </Link>
          <span className="text-gray-800 text-xs">|</span>
          <span className="text-gray-400">{blog.category}</span>
        </div>

        {/* Hero Title */}
        <h1
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-center leading-[1.2] mb-12 tracking-tight"
        >
          {blog.heroTitle}
        </h1>

        {/* Author */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-base md:text-lg">
            by{" "}
            <span className="text-white font-medium">
              {blog.author || "The Astrum Team"}
            </span>
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900 border border-gray-800/50 mb-16">
          {blog.image ? (
            <img
              src={blog.image}
              alt={blog.heroTitle}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>

        {/* Metadata Section */}
        <div className="flex flex-wrap items-end justify-between border-b border-gray-900/50 pb-8 mb-20 gap-6">
          <div className="flex space-x-12">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
                Published
              </p>
              <p className="text-sm font-medium text-gray-300">{blog.date}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
                Reading Time
              </p>
              <p className="text-sm font-medium text-gray-300">
                {Math.ceil(blog.intro.length / 500) + 2} min read
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard!");
            }}
            className="text-gray-500 hover:text-white text-[11px] font-bold tracking-widest uppercase pb-1 transition-colors"
          >
            Copy Link
          </button>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto space-y-16 text-left">
          {/* Intro */}
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-lg md:text-xl text-gray-300 leading-[1.8] font-light"
          >
            {blog.intro}
          </p>

          {/* Full Description Sections */}
          {blog.fullDescription &&
            blog.fullDescription.map((section, idx) => (
              <div key={idx} className="space-y-10 md:space-y-12">
                {/* Main section heading */}
                {section.heading ? (
                  <h2
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-2xl md:text-3xl font-light text-white tracking-tight"
                  >
                    {section.heading}
                  </h2>
                ) : null}

                {/* Content with bold sub-headings & bullets support */}
                {section.para ? (
                  <div
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-lg text-gray-400 leading-[1.8] font-light space-y-6"
                  >
                    {section.para.split("\n").map((line, pIdx) => {
                      const trimmed = line.trim();
                      if (!trimmed) return null;

                      // Detect bold sub-heading (**text**)
                      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                        const headingText = trimmed.slice(2, -2).trim();
                        return (
                          <h3
                            key={pIdx}
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                            className="text-lg md:text-xl font-light text-white mt-12 mb-6"
                          >
                            {headingText}
                          </h3>
                        );
                      }

                      // Detect bullet lines starting with •
                      if (trimmed.startsWith("•") || trimmed.startsWith("*")) {
                        const bulletText = trimmed.startsWith("•")
                          ? trimmed.slice(1).trim()
                          : trimmed.slice(1).trim();
                        return (
                          <div key={pIdx} className="flex items-start gap-3 my-2">
                            <span className="text-gray-400 text-2xl mt-1">•</span>
                            <p className="flex-1">{bulletText}</p>
                          </div>
                        );
                      }

                      // Normal paragraph
                      return (
                        <p key={pIdx} className="whitespace-pre-line mb-4">
                          {trimmed}
                        </p>
                      );
                    })}
                  </div>
                ) : null}

                {section.cards?.length ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {section.cards.map((card, cardIdx) => (
                      <div
                        key={cardIdx}
                        className="rounded-2xl border border-purple-500/30 bg-white/5 p-6"
                      >
                        {card.icon ? (
                          (() => {
                            const IconComponent = cardIconMap[card.icon];
                            return IconComponent ? (
                              <IconComponent
                                size={24}
                                strokeWidth={1.75}
                                className="text-gray-300 mb-4"
                              />
                            ) : null;
                          })()
                        ) : null}
                        <h3 className="text-xl text-white font-medium mb-3">
                          {card.title}
                        </h3>
                        <p className="text-base text-gray-300 leading-7 mb-5">
                          {card.description}
                        </p>
                        <div className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium">
                          {card.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.statsCards?.length ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    {section.statsCards.map((card, cardIdx) => (
                      <div
                        key={cardIdx}
                        className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 md:last:border-r-0 text-center"
                      >
                        <p className="text-5xl md:text-6xl font-semibold text-purple-400 mb-4">
                          {card.value}
                        </p>
                        <p className="text-base md:text-lg text-gray-300 leading-8">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.afterCardsPara ? (
                  <div
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-lg text-gray-400 leading-[1.8] font-light space-y-6"
                  >
                    {section.afterCardsPara.split("\n").map((line, pIdx) => {
                      const trimmed = line.trim();
                      if (!trimmed) return null;
                      return (
                        <p key={pIdx} className="whitespace-pre-line mb-4">
                          {trimmed}
                        </p>
                      );
                    })}
                  </div>
                ) : null}

                {section.quoteCard ? (
                  <blockquote className="rounded-2xl border-l-4 border-purple-500 bg-white/5 px-6 py-5">
                    <p
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-xl md:text-2xl italic font-medium text-white leading-[1.5]"
                    >
                      "{section.quoteCard}"
                    </p>
                    {section.quoteAttribution ? (
                      <p className="mt-4 text-base text-gray-400 not-italic">
                        {section.quoteAttribution}
                      </p>
                    ) : null}
                  </blockquote>
                ) : null}

                {section.frameworkTable ? (
                  <div className="rounded-2xl overflow-hidden border border-purple-300/40 bg-[#f2eefc]">
                    <div className="bg-gradient-to-r from-blue-700 to-fuchsia-500 px-6 py-4">
                      <p className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white">
                        {section.frameworkTable.title}
                      </p>
                    </div>
                    {section.frameworkTable.rows.map((row, rowIdx) => (
                      <div
                        key={rowIdx}
                        className="grid grid-cols-1 md:grid-cols-12 border-t border-purple-200/80"
                      >
                        <div className="md:col-span-3 px-6 py-6 bg-[#ece7f8]">
                          <p className="text-lg md:text-xl text-purple-700 font-semibold leading-tight">
                            {row.label}
                          </p>
                        </div>
                        <div className="md:col-span-9 px-6 py-6">
                          <p className="text-gray-800 text-sm md:text-base leading-[1.7]">
                            {row.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.useCaseTable ? (
                  <div className="rounded-2xl overflow-hidden border border-purple-200/60 bg-[#f2eefc]">
                    <div className="grid grid-cols-12 border-b border-purple-200/80 px-6 py-5 text-purple-700 uppercase tracking-[0.15em] text-sm font-bold">
                      <p className="col-span-6 md:col-span-5">Use Case</p>
                      <p className="col-span-3 md:col-span-3">Agent-Ready?</p>
                      <p className="col-span-3 md:col-span-4">Time to Value</p>
                    </div>
                    {section.useCaseTable.rows.map((row, rowIdx) => (
                      <div
                        key={rowIdx}
                        className="grid grid-cols-12 items-center gap-3 border-b border-purple-200/80 last:border-b-0 px-6 py-5"
                      >
                        <p className="col-span-6 md:col-span-5 text-gray-800 text-lg leading-[1.5]">
                          {row.useCase}
                        </p>
                        <div className="col-span-3 md:col-span-3">
                          <span
                            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                              row.fitTone === "high"
                                ? "bg-purple-100 text-purple-700"
                                : row.fitTone === "medium"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {row.fit}
                          </span>
                        </div>
                        <div className="col-span-3 md:col-span-4">
                          <span
                            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                              row.timeTone === "fast"
                                ? "bg-purple-100 text-purple-700"
                                : row.timeTone === "medium"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {row.timeToValue}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.checklist?.length ? (
                  <div className="space-y-0 border-t border-b border-white/10">
                    {section.checklist.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-start gap-4 py-6 border-b border-white/10 last:border-b-0"
                      >
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-500 flex items-center justify-center flex-shrink-0 mt-1">
                          <Check size={18} className="text-white" strokeWidth={3} />
                        </div>
                        <p className="text-lg text-gray-200 leading-[1.55]">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.tipCard ? (
                  <div className="rounded-2xl border-l-4 border-purple-500 bg-[#f2eefc] px-6 py-6">
                    <p className="text-purple-700 uppercase tracking-[0.2em] text-sm font-bold mb-4">
                      {section.tipCard.label}
                    </p>
                    <p className="text-gray-800 text-lg leading-[1.7]">
                      {section.tipCard.text}
                    </p>
                  </div>
                ) : null}

                {section.helpPanel ? (
                  <div className="rounded-3xl overflow-hidden bg-[#090a16] border border-purple-400/30 p-8 md:p-10">
                    <p className="text-blue-400 uppercase tracking-[0.2em] text-sm font-semibold mb-7">
                      {section.helpPanel.eyebrow}
                    </p>
                    <h3
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-2xl md:text-3xl text-white font-medium mb-8 leading-tight"
                    >
                      {section.helpPanel.title}
                    </h3>
                    {section.helpPanel.paragraphs?.map((text, textIdx) => (
                      <p
                        key={textIdx}
                        className="text-gray-300 text-base md:text-lg leading-[1.65] mb-6 last:mb-10"
                      >
                        {text}
                      </p>
                    ))}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                      {section.helpPanel.features?.map((feature, featureIdx) => {
                        const FeatureIcon = cardIconMap[feature.icon];
                        return (
                          <div
                            key={featureIdx}
                            className="rounded-2xl bg-[#18142d] border border-purple-400/20 p-6"
                          >
                            {FeatureIcon ? (
                              <FeatureIcon
                                size={22}
                                strokeWidth={2}
                                className="text-purple-300 mb-4"
                              />
                            ) : null}
                            <h4 className="text-white text-lg md:text-xl font-semibold mb-3">
                              {feature.title}
                            </h4>
                            <p className="text-gray-300 text-sm md:text-base leading-[1.55]">
                              {feature.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    {section.helpPanel.cta ? (
                      <a
                        href={section.helpPanel.cta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full px-8 py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-700 to-fuchsia-500 hover:opacity-95 transition-opacity"
                      >
                        {section.helpPanel.cta.label}
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
        </div>

        {/* Share Section */}
        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-white/8 flex flex-col items-center justify-center text-center border border-white/5">
          <h3
            style={{ fontFamily: "'Gabarito', sans-serif" }}
            className="text-2xl md:text-3xl font-light mb-8 text-white"
          >
            Share this article
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.heroTitle)}`,
                  "_blank",
                )
              }
              className="flex items-center gap-3 px-8 py-3 rounded-full bg-[#1DA1F2] text-white hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              <Share2 size={18} strokeWidth={2.5} />
              <span className="font-bold text-sm tracking-wide">Twitter</span>
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
              className="flex items-center gap-3 px-8 py-3 rounded-full bg-[#0077B5] text-white hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              <Share2 size={18} strokeWidth={2.5} />
              <span className="font-bold text-sm tracking-wide">LinkedIn</span>
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
              className="flex items-center gap-3 px-8 py-3 rounded-full bg-[#4267B2] text-white hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              <Share2 size={18} strokeWidth={2.5} />
              <span className="font-bold text-sm tracking-wide">Facebook</span>
            </button>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-32 pt-16 border-t border-gray-900/50 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-500 hover:text-white transition-colors font-bold tracking-[0.2em] uppercase text-[11px]"
          >
            <span className="mr-3">←</span> Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
