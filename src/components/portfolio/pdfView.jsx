import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "./data"; // adjust path as needed

// Browser Mockup (kept same, but can adjust size if needed)
const BrowserMockup = ({ image }) => (
  <div className="relative w-full max-w-5xl mx-auto my-16 px-4 group">
    <div className="absolute -inset-8 bg-gradient-to-tr from-blue-600/10 via-cyan-400/5 to-transparent blur-3xl opacity-60 pointer-events-none" />
    <div className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl shadow-black/70 border border-white/5">
      <div className="flex items-center px-5 py-3 bg-[#141414] border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center">
          <div className="inline-block bg-black/60 px-8 py-1 text-xs text-gray-400 rounded-full border border-white/10">
            view.astrumai.io/case-study
          </div>
        </div>
        <div className="w-10" />
      </div>
      <div className="relative aspect-[16/9] bg-gradient-to-br from-blue-900/30 via-cyan-900/15 to-transparent overflow-hidden">
        <img
          src={image}
          alt="Platform screenshot"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
    </div>
  </div>
);

// Section component with reduced font sizes
const CaseSection = ({ label, headline, content }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-20 border-t border-white/8 last:border-b">
    {/* Left label – small uppercase */}
    <div className="lg:col-span-3">
      <div className="lg:sticky lg:top-24">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500/90">
          {label}
        </span>
      </div>
    </div>

    {/* Right content – smaller headline & text */}
    <div className="lg:col-span-9">
      <h2 
      style={{ fontFamily: "'Outfit', sans-serif" }} 
      className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-gray-300 mb-8">
        {headline}
      </h2>
      <div 
      style={{ fontFamily: "'Outfit', sans-serif" }} 
      className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl font-light">
        {content}
      </div>
    </div>
  </div>
);

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white p-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-300 mb-4">404</h1>
          <p className="text-lg text-gray-500">Case study not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Hero / Main Title – REDUCED SIZE */}
      <div className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            {/* Left: Small Name */}
            <div className="text-sm md:text-base font-semibold tracking-widest uppercase text-gray-400">
              {project.name}
            </div>

            {/* Right: Large Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semi-bold leading-[1.05] tracking-tight">
              Customer Success Story:
              <br />
              <span className="text-gray-400">{project.name} | AstrumAI</span>
            </h1>
          </div>

          <BrowserMockup
            image={
              project.heroImage ||
              "https://via.placeholder.com/1600x900/0a0a1f/ffffff?text=MailGenius+Screenshot"
            }
          />
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
        <CaseSection
          label="Overview"
          headline={project.overviewHeadline || "Project Overview"}
          content={project.overview}
        />

        <CaseSection
          label="The Problem"
          headline={project.problemHeadline || "The Core Challenge"}
          content={project.problem}
        />

        <CaseSection
          label="The Solution"
          headline={project.solutionHeadline || "The Proposed Solution"}
          content={project.solution}
        />

        <CaseSection
          label="The Result"
          headline={project.resultHeadline || "Business Impact"}
          content={project.result}
        />

        {/* Footer metadata */}
        <div className="py-20 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            {project.impact && (
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                  Impact
                </p>
                <p className="text-2xl md:text-3xl font-light italic bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {project.impact}
                </p>
              </div>
            )}

            {project.techStack?.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
