import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact-us" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "FAQ", path: "/faq" },
  ];

  const socialIcons = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative mt-16 bg-black border-t border-white/[0.06] overflow-hidden">
      <div className="relative w-full px-6 md:px-10 lg:px-14 py-10 md:py-12">
        <div className="w-full border-y border-white/[0.08] bg-white/[0.02] backdrop-blur-xl py-7 md:py-9">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-10 lg:gap-8 items-center">
            <div className="space-y-3 text-left">
              <h2
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl md:text-3xl font-extralight tracking-[-0.02em] text-white"
              >
                AstrumAI
              </h2>
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-sm text-gray-500 font-light leading-[1.8] max-w-xs"
              >
                Building reliable AI products for modern businesses worldwide.
              </p>
            </div>

            <nav
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="flex flex-wrap justify-center items-center lg:flex-nowrap lg:justify-center lg:items-center gap-x-6 gap-y-3 lg:gap-x-8 text-sm font-light text-gray-300 lg:w-full mx-auto"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="group inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </nav>

            <div className="flex flex-col items-start lg:items-end gap-4">
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-[11px] uppercase tracking-[0.18em] text-gray-600"
              >
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/[0.1] bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 inline-flex items-center justify-center"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-xs text-gray-600 font-light"
            >
              © 2026 AstrumAI. All rights reserved.
            </p>
            <p
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-xs text-gray-700 font-light"
            >
              Crafted with AI-first precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
