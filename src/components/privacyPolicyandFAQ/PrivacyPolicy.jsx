import React, { useState, useRef, useEffect } from "react";
import privacyPolicyData from "./PrivacyPolicyData";

const PrivacyPolicy = () => {
  const [activeSectionId, setActiveSectionId] = useState(
    privacyPolicyData.sections[0]?.id || "",
  );

  const contentRef = useRef(null);

  // Auto-scroll to top of content area when section changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSectionId]);

  const activeSection = privacyPolicyData.sections.find(
    (s) => s.id === activeSectionId,
  );

  return (
    <div className="min-h-screen bg-black text-gray-300 py-20 px-4 md:px-8 lg:px-12 text-left">
      <div
        style={{ fontFamily: "'Gabarito', sans-serif" }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
      >
        {/* Left: Table of Contents (Sticky on desktop) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          {/* Mobile: Dropdown selector */}
          <div className="lg:hidden mb-12">
            <select
              value={activeSectionId}
              onChange={(e) => setActiveSectionId(e.target.value)}
              className="w-full bg-[#121212] border border-white/10 rounded-lg p-4 text-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              {privacyPolicyData.sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.heading}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: Clickable list */}
          <nav className="hidden lg:block">
            <ul className="space-y-4">
              {privacyPolicyData.sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSectionId(section.id)}
                    className={`
                      w-full text-left text-[15px] transition-colors duration-200 cursor-pointer
                      ${
                        activeSectionId === section.id
                          ? "text-gray-300 font-light"
                          : "text-gray-500 hover:text-gray-300"
                      }
                    `}
                  >
                    {section.heading}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Right: Active Section Content */}
        <main ref={contentRef} className="lg:col-span-8">
          <div className="mb-12">
            <h1
              style={{ fontFamily: "'Gabarito', sans-serif" }}
              className="text-[40px] md:text-[56px] font-light tracking-tight leading-[1.1] mb-8"
            >
              {privacyPolicyData.title}
            </h1>
            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-gray-400 font-light text-lg mb-12"
            >
              Last Updated: {privacyPolicyData.lastUpdated}
            </p>
          </div>

          {activeSection ? (
            <article className="space-y-12 text-left">
              <div className="space-y-8">
                <h2
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                  className="text-2xl md:text-3xl font-semi-bold text-gray-350 tracking-tight"
                >
                  {activeSection.heading}
                </h2>

                <div
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-gray-400 leading-[1.6] space-y-8 whitespace-pre-line text-lg md:text-lg font-light"
                >
                  {activeSection.content.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </article>
          ) : (
            <p className="text-gray-500">Select a section from the left.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
