import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CONTACT_ITEMS = [
  { icon: Phone,  label: "Call Us",        value: "+44 7884 051872",    sub: null },
  { icon: Mail,   label: "Email Us",       value: "info@astrumai.tech", sub: null },
  { icon: MapPin, label: "Head Office",    value: "London, United Kingdom", sub: null },
  { icon: Clock,  label: "Opening Hours",  value: "Mon – Sat  ·  9 AM – 6 PM", sub: "UK Time" },
];

const INPUT = "w-full px-4 py-3 bg-white/[0.03] border border-white/[0.07] rounded-xl text-gray-200 placeholder-gray-600 text-sm font-light focus:outline-none focus:border-[#914FFC]/40 transition-colors";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-gray-100 relative">

      {/* subtle grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage:"linear-gradient(to right,#80808020 1px,transparent 1px),linear-gradient(to bottom,#80808020 1px,transparent 1px)", backgroundSize:"40px 40px" }} />

      {/* ambient glow */}
      <motion.div
        animate={{ opacity:[0.2,0.45,0.2] }}
        transition={{ duration:9, repeat:Infinity, ease:"easeInOut" }}
        className="fixed top-0 left-1/3 w-[700px] h-[500px] pointer-events-none"
        style={{ background:"radial-gradient(ellipse, rgba(145,79,252,0.06) 0%, transparent 70%)", filter:"blur(50px)" }}
      />

      <section className="snap-section relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 md:pt-32 md:pb-28">

        {/* ── Hero heading ── */}
        <motion.div
          initial={{ opacity:0, y:28 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
          className="mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity:0, y:10 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.15, duration:0.6 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#914FFC]" />
            <span style={{ fontFamily:"'Outfit', sans-serif" }}
              className="text-xs tracking-[0.22em] uppercase text-gray-500 font-light">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.3, duration:0.75, ease:[0.22,1,0.36,1] }}
            style={{ fontFamily:"'Outfit', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.02em] leading-[1.1]"
          >
            Contact{" "}
            <span className="bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B] bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX:0, opacity:0 }}
            animate={{ scaleX:1, opacity:1 }}
            transition={{ delay:0.6, duration:0.8, ease:[0.22,1,0.36,1] }}
            className="mt-4 h-px w-16 bg-linear-to-r from-[#914FFC] to-transparent origin-left"
          />

          <motion.p
            initial={{ opacity:0, y:12 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.5, duration:0.65 }}
            style={{ fontFamily:"'Outfit', sans-serif" }}
            className="mt-5 text-sm md:text-base text-gray-500 max-w-xl font-light leading-[1.85]"
          >
            We'd love to hear from you. Reach out with any questions,
            partnership ideas, or just to say hello.
          </motion.p>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* ── Form (2/3) ── */}
          <motion.div
            initial={{ opacity:0, y:32 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.4, duration:0.75, ease:"easeOut" }}
            className="lg:col-span-2 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 lg:p-10 order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 mb-7">
              <h3 style={{ fontFamily:"'Outfit', sans-serif" }}
                className="text-lg font-light text-gray-100 tracking-tight">
                Send Us a Message
              </h3>
            </div>

            <form style={{ fontFamily:"'Outfit', sans-serif" }} className="space-y-5 text-left">

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] text-gray-600 tracking-[0.1em] uppercase font-light">First Name *</label>
                  <input type="text" placeholder="Jane" className={INPUT} required />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[11px] text-gray-600 tracking-[0.1em] uppercase font-light">Last Name *</label>
                  <input type="text" placeholder="Doe" className={INPUT} required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] text-gray-600 tracking-[0.1em] uppercase font-light">Company</label>
                  <input type="text" placeholder="Acme Corp" className={INPUT} />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[11px] text-gray-600 tracking-[0.1em] uppercase font-light">Job Title</label>
                  <input type="text" placeholder="Manager" className={INPUT} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] text-gray-600 tracking-[0.1em] uppercase font-light">Work Email *</label>
                <input type="email" placeholder="jane@company.com" className={INPUT} required />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] text-gray-600 tracking-[0.1em] uppercase font-light">Country *</label>
                <input type="text" placeholder="United Kingdom" className={INPUT} required />
              </div>

              {/* Reason */}
              <div className="space-y-3 py-1">
                <label className="block text-[11px] text-gray-600 tracking-[0.1em] uppercase font-light">Who are you trying to reach? *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {["Careers","Partnerships","Press","Support","Other"].map(opt => (
                    <label key={opt}
                      className="flex items-center gap-2.5 cursor-pointer group px-3 py-2.5 rounded-xl border border-white/[0.07] hover:border-[#914FFC]/30 hover:bg-[#914FFC]/[0.05] transition-all duration-200"
                    >
                      <input type="radio" name="reason" value={opt.toLowerCase()}
                        className="w-3.5 h-3.5 accent-[#914FFC] cursor-pointer" required />
                      <span className="text-sm text-gray-400 group-hover:text-gray-200 font-light transition-colors">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] text-gray-600 tracking-[0.1em] uppercase font-light">Message</label>
                <textarea rows={4} placeholder="How can we help?"
                  className={`${INPUT} resize-none`} />
              </div>

              {/* NDA */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox"
                  className="mt-0.5 w-4 h-4 rounded border-white/20 accent-[#914FFC] cursor-pointer shrink-0" />
                <span className="text-xs text-gray-500 group-hover:text-gray-400 font-light leading-relaxed transition-colors">
                  I want to protect my data by signing an NDA
                </span>
              </label>

              <button
                type="submit"
                style={{ fontFamily:"'Outfit', sans-serif" }}
                className="
                  w-full py-3.5
                  bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
                  hover:from-violet-600 hover:to-[#914FFC]
                  text-white font-light text-sm rounded-full
                  shadow-lg shadow-purple-900/30
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-purple-700/50
                  hover:-translate-y-0.5 active:scale-95
                "
              >
                Send Message →
              </button>
            </form>
          </motion.div>

          {/* ── Contact info (1/3) ── */}
          <motion.div
            initial={{ opacity:0, y:32 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.55, duration:0.75, ease:"easeOut" }}
            className="lg:col-span-1 space-y-4 order-1 lg:order-2"
          >
            {CONTACT_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, x:20 }}
                animate={{ opacity:1, x:0 }}
                transition={{ delay:0.55 + i*0.08, duration:0.55, ease:"easeOut" }}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#914FFC]/25 hover:bg-[#914FFC]/[0.04] transition-all duration-300"
              >
                <div className="shrink-0 p-2.5 rounded-xl bg-white/[0.04] group-hover:bg-[#914FFC]/10 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-gray-500 group-hover:text-[#914FFC] transition-colors duration-300" strokeWidth={1.4} />
                </div>
                <div>
                  <p style={{ fontFamily:"'Outfit', sans-serif" }}
                    className="text-[10px] tracking-[0.18em] uppercase text-gray-600 font-light mb-1">
                    {item.label}
                  </p>
                  <p style={{ fontFamily:"'Outfit', sans-serif" }}
                    className="text-sm text-gray-200 font-light">
                    {item.value}
                  </p>
                  {item.sub && (
                    <p style={{ fontFamily:"'Outfit', sans-serif" }}
                      className="text-xs text-gray-600 font-light mt-0.5">
                      {item.sub}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Book a call CTA */}
            <motion.div
              initial={{ opacity:0, y:12 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.9, duration:0.55 }}
            >
              <Link
                to="https://calendly.com/bilal-astrumai/30min"
                target="_blank"
                style={{ fontFamily:"'Outfit', sans-serif" }}
                className="
                  flex items-center justify-between w-full p-5 mt-2
                  rounded-2xl border border-[#914FFC]/20 bg-[#914FFC]/[0.05]
                  hover:border-[#914FFC]/40 hover:bg-[#914FFC]/[0.09]
                  transition-all duration-300 group
                "
              >
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-gray-600 font-light mb-1">Schedule a call</p>
                  <p className="text-sm text-gray-200 font-light">Book a 30-min strategy session</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#914FFC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
