import React, { useState, useRef, useEffect } from "react";
import { faqData } from "./faqData";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);

  const contentRef = useRef(null);
 
  // Auto-scroll to top of content when category changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeCategory]);

  const active = faqData.find((cat) => cat.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-gray-300 py-20 px-4 md:px-8 lg:px-12 text-left">
      <div
        style={{ fontFamily: "'Gabarito', sans-serif" }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
      >
        {/* Left: Categories (Sticky on desktop) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start py-28">
          {/* Mobile: Dropdown */}
          <div className="lg:hidden mb-12">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full bg-[#121212] border border-white/10 rounded-lg p-4 text-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              {faqData.map((cat) => (
                <option key={cat.category} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: Clean list */}
          <nav className="hidden lg:block">
            <ul className="space-y-4">
              {faqData.map((cat) => (
                <li key={cat.category}>
                  <button
                    onClick={() => setActiveCategory(cat.category)}
                    className={`
                      w-full text-left text-[15px] transition-colors duration-200 cursor-pointer
                      ${
                        activeCategory === cat.category
                          ? "text-gray-300 font-light"
                          : "text-gray-500 hover:text-gray-300"
                      }
                    `}
                  >
                    {cat.category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Right: Active Category Content */}
        <main ref={contentRef} className="lg:col-span-8">
          <div className="mb-12">
            <h1
              style={{ fontFamily: "'Gabarito', sans-serif" }}
              className="text-[40px] md:text-[56px] font-light tracking-tight leading-[1.1] mb-8"
            >
              FAQ
            </h1>
            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-gray-400 font-light text-lg mb-12"
            >
              Find answers to common questions about our services and processes.
            </p>
          </div>

          {active ? (
            <article className="space-y-12 text-left">
              <div className="space-y-12">
                <h2
                  style={{ fontFamily: "'Gabarito', sans-serif" }}
                  className="text-2xl md:text-3xl font-semi-bold text-gray-350 tracking-tight"
                >
                  {active.category}
                </h2>

                <div className="space-y-10">
                  {active.questions.map((q, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3
                        style={{ fontFamily: "'Gabarito', sans-serif" }}
                        className="text-xl md:text-2xl font-light text-gray-200"
                      >
                        {q.question}
                      </h3>
                      <p
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                        className="text-gray-400 leading-relaxed text-base md:text-lg font-light"
                      >
                        {q.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ) : (
            <p className="text-gray-500">Select a category from the left.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default FAQ;
