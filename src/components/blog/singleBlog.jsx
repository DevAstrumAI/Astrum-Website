import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BlogData from "./dataBlog";
import ReactMarkdown from "react-markdown";
import { Share2 } from "lucide-react";

const SingleBlog = () => {
  const { slug } = useParams();
  const blog = BlogData.find((b) => b.slug === slug);

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
                <h2
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-2xl md:text-3xl font-light text-white tracking-tight"
                >
                  {section.heading}
                </h2>

                {/* Content with bold sub-headings & bullets support */}
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
