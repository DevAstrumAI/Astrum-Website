import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";

export default function ApplyNow() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "General Application";
  const location = searchParams.get("location") || "Flexible";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link
            to="/careers#open-positions"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-10"
        >
          <p
            className="text-[11px] uppercase tracking-[0.22em] text-gray-600 mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Careers Application
          </p>
          <h1
            className="text-3xl md:text-5xl font-extralight tracking-[-0.02em] leading-[1.15] mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Apply for{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              {role}
            </span>
          </h1>
          <p
            className="text-gray-500 text-sm md:text-base font-light leading-[1.85] mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Complete the application below and our hiring team will review your
            profile. Location preference: {location}.
          </p>

          {submitted ? (
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-5">
              <p
                className="text-emerald-300 font-light"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Application submitted successfully. Our team will contact you
                soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-[0.12em] text-gray-600">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-gray-200 placeholder-gray-600 text-sm font-light focus:outline-none focus:border-[#914FFC]/40"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-[0.12em] text-gray-600">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-gray-200 placeholder-gray-600 text-sm font-light focus:outline-none focus:border-[#914FFC]/40"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-[0.12em] text-gray-600">
                    Role
                  </label>
                  <input
                    type="text"
                    value={role}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-gray-400 text-sm font-light"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-[0.12em] text-gray-600">
                    Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-gray-400 text-sm font-light"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] uppercase tracking-[0.12em] text-gray-600">
                  LinkedIn or Portfolio URL
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-gray-200 placeholder-gray-600 text-sm font-light focus:outline-none focus:border-[#914FFC]/40"
                  placeholder="https://"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] uppercase tracking-[0.12em] text-gray-600">
                  Resume Upload *
                </label>
                <input
                  required
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-gray-300 file:mr-4 file:rounded-full file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-xs file:font-light file:text-gray-200 hover:file:bg-white/20 text-sm font-light focus:outline-none focus:border-[#914FFC]/40"
                />
                <p className="text-xs text-gray-600 font-light">
                  Accepted formats: PDF, DOC, DOCX
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] uppercase tracking-[0.12em] text-gray-600">
                  Why should we hire you?
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-gray-200 placeholder-gray-600 text-sm font-light focus:outline-none focus:border-[#914FFC]/40 resize-none"
                  placeholder="Share your experience, impact, and motivation."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] hover:from-violet-600 hover:to-[#914FFC] text-white font-light text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-md"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Submit Application
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
