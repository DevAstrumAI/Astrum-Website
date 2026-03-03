import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Bot,
  Database,
  Smartphone,
  Zap,
  Tag,
  MessageSquare,
  CreditCard,
  ShoppingBag,
  Stethoscope,
  Cpu,
  Home,
  Rocket,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────── */
const servicesData = {
  "Software Development": [
    { label: "AI Product Development", href: "/services/ai-product-development", description: "End-to-end AI application lifecycle.", icon: Bot },
    { label: "Blockchain Development", href: "/services/blockchain-product-development", description: "Secure decentralized ledger solutions.", icon: Database },
    { label: "Web & Mobile Development", href: "/services/web-mobile-development", description: "Cross-platform digital experiences.", icon: Smartphone },
  ],
  Solutions: [
    { label: "AI Automation", href: "/services/ai-automation", description: "Streamline workflows with intelligent agents.", icon: Zap },
    { label: "White Label AI", href: "/services/white-label-ai", description: "Branded AI solutions for your business.", icon: Tag },
  ],
  "Custom Solution": [
    { label: "Custom Software", href: "/services/development-service", description: "Tailored solutions to meet your needs.", icon: Rocket },
    { label: "Custom Company GPT", href: "/services/custom-company-gpt", description: "Tailored LLMs for enterprise needs.", icon: MessageSquare },
  ],
};

const industriesData = [
  { label: "All Industries", href: "/industries", description: "Explore all industry solutions.", icon: Home },
  { label: "Fintech", href: "/fintech", description: "Modern financial technology solutions.", icon: CreditCard },
  { label: "Retail", href: "/retail", description: "AI-driven commerce and retail tech.", icon: ShoppingBag },
  { label: "Healthtech", href: "/health-care", description: "Innovative healthcare and medical AI.", icon: Stethoscope },
  { label: "Information Technology", href: "/information-tech", description: "Advanced IT infrastructure and software.", icon: Cpu },
  { label: "Proptech", href: "/proptech", description: "Smart property and real estate solutions.", icon: Home },
];

/* ─── Dropdown Card ─────────────────────────────────────────────────── */
const DropdownCard = ({ href, label, description, icon: Icon }) => {
  const isInternal = href.startsWith("/");
  const Component = isInternal ? Link : "a";
  const props = isInternal ? { to: href } : { href };

  return (
    <Component
      {...props}
      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-colors duration-200"
    >
      <div className="shrink-0 mt-0.5 p-1.5 rounded-lg bg-white/[0.05] text-gray-400 group-hover:text-[#914FFC] group-hover:bg-[#914FFC]/10 transition-all duration-200">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <div
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className="text-sm font-light text-gray-200 group-hover:text-white transition-colors"
        >
          {label}
        </div>
        <p
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className="text-xs text-gray-600 mt-0.5 leading-relaxed font-light"
        >
          {description}
        </p>
      </div>
    </Component>
  );
};

/* ─── Desktop Dropdown ──────────────────────────────────────────────── */
const NavDropdown = ({ label, children, to }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Component = to ? Link : "button";
  const props = to ? { to } : {};

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Component
        {...props}
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className="relative flex items-center gap-1 px-3 py-2 text-sm font-light text-gray-400 hover:text-white transition-colors duration-200 group"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#914FFC]" : ""}`}
        />
      </Component>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-5 z-50"
          >
            <div className="bg-[#0a0a0c]/95 backdrop-blur-2xl rounded-2xl p-6 border border-white/[0.06] shadow-[0_24px_64px_rgba(0,0,0,0.6)] min-w-[260px]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Desktop Nav Item ──────────────────────────────────────────────── */
const NavItem = ({ href, children }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  const Component = isExternal ? "a" : Link;
  const props = isExternal ? { href } : { to: href };

  return (
    <Component
      {...props}
      style={{ fontFamily: "'Outfit', sans-serif" }}
      className={`relative px-3 py-2 text-sm font-light transition-colors duration-200 group
        ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
    >
      {children}
      {/* animated underline */}
      <span
        className={`absolute bottom-1 left-3 right-3 h-px bg-linear-to-r from-[#914FFC] to-[#E93A8B] rounded-full transition-all duration-300 origin-left
          ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}`}
      />
    </Component>
  );
};

/* ─── Mobile Accordion ──────────────────────────────────────────────── */
const MobileAccordion = ({ label, to, children, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06]">
      <div className="relative w-full py-4 px-2 text-center">
        <Link
          to={to}
          onClick={onNavigate}
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className="inline-block text-sm font-light tracking-wide text-gray-300 hover:text-white transition-colors"
        >
          {label}
        </Link>
        <button
          type="button"
          aria-label={`Toggle ${label} menu`}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-600 hover:text-[#914FFC] transition-colors"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#914FFC]" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-2 pb-5 pt-1 space-y-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Mobile Nav Item ───────────────────────────────────────────────── */
const MobileNavItem = ({ href, children, onClick }) => (
  <Link
    to={href}
    onClick={onClick}
    style={{ fontFamily: "'Outfit', sans-serif" }}
    className="block w-full px-2 py-4 text-sm font-light text-gray-400 hover:text-white transition-colors border-b border-white/[0.06] last:border-0"
  >
    {children}
  </Link>
);

/* ─── Navbar ────────────────────────────────────────────────────────── */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-4 inset-x-0 mx-auto z-50 w-[92%] max-w-6xl">

      {/* ── Main bar ── */}
      <div
        className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500
          ${scrolled
            ? "bg-black/60 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            : "bg-black/30 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
          }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/logo.jpg"
            alt="AstrumAI"
            className="h-9 md:h-10 w-auto object-cover rounded-xl"
          />
          <span
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="text-lg md:text-xl font-light text-white tracking-tight"
          >
            AstrumAI
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden xl:flex items-center gap-0.5">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>

          <NavDropdown
            to="/services"
            label={<span style={{ fontFamily: "'Outfit', sans-serif" }} className="text-sm font-light">Services</span>}
          >
            <div className="flex gap-8 w-[720px] text-left">
              {Object.entries(servicesData).map(([category, items]) => (
                <div key={category} className="flex-1">
                  <h3
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-[10px] font-light text-gray-600 uppercase tracking-[0.2em] mb-4"
                  >
                    {category}
                  </h3>
                  <div className="space-y-1">
                    {items.map((item) => (
                      <DropdownCard key={item.label} {...item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </NavDropdown>

          <NavDropdown
            to="/industries"
            label={<span style={{ fontFamily: "'Outfit', sans-serif" }} className="text-sm font-light">Industries</span>}
          >
            <div className="flex flex-col space-y-1 min-w-[260px] text-left">
              {industriesData.map((industry) => (
                <DropdownCard key={industry.label} {...industry} />
              ))}
            </div>
          </NavDropdown>

          <NavItem href="/portfolio">Portfolio</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/careers">Careers</NavItem>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact-us"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="
              hidden sm:inline-flex items-center gap-1.5
              px-4 py-1.5 md:px-5 md:py-2
              bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
              hover:from-violet-600 hover:to-[#914FFC]
              text-white font-light text-xs md:text-sm
              rounded-full shadow-lg shadow-purple-900/30
              transition-all duration-300
              hover:shadow-xl hover:shadow-purple-700/40
              hover:-translate-y-px active:scale-95
              whitespace-nowrap
            "
          >
            Contact Us
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="xl:hidden mt-2 rounded-2xl bg-[#08080a]/95 backdrop-blur-2xl border border-white/[0.05] shadow-[0_24px_64px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6">

              {/* Mobile links */}
              <MobileNavItem href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavItem>
              <MobileNavItem href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavItem>

              <MobileAccordion
                label="Services"
                to="/services"
                onNavigate={() => setIsMenuOpen(false)}
              >
                {Object.entries(servicesData).map(([category, items]) => (
                  <div key={category}>
                    <h3
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-[10px] text-gray-600 font-light tracking-[0.2em] uppercase mb-3"
                    >
                      {category}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                          className="flex items-center gap-2.5 px-2 py-2.5 rounded-xl hover:bg-white/[0.04] text-gray-400 hover:text-white text-sm font-light transition-colors"
                        >
                          <item.icon className="h-3.5 w-3.5 text-gray-600" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </MobileAccordion>

              <MobileAccordion
                label="Industries"
                to="/industries"
                onNavigate={() => setIsMenuOpen(false)}
              >
                <div className="flex flex-col gap-1">
                  {industriesData.map((industry) => (
                    <Link
                      key={industry.label}
                      to={industry.href}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="flex items-center gap-2.5 px-2 py-2.5 rounded-xl hover:bg-white/[0.04] text-gray-400 hover:text-white text-sm font-light transition-colors"
                    >
                      <industry.icon className="h-3.5 w-3.5 text-gray-600" />
                      {industry.label}
                    </Link>
                  ))}
                </div>
              </MobileAccordion>

              <MobileNavItem href="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</MobileNavItem>
              <MobileNavItem href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</MobileNavItem>
              <MobileNavItem href="/careers" onClick={() => setIsMenuOpen(false)}>Careers</MobileNavItem>

              {/* Mobile CTA */}
              <div className="pt-5">
                <Link
                  to="/contact-us"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="
                    flex items-center justify-center gap-2 w-full py-3
                    bg-linear-to-r from-[#2B61E5] via-[#7B59D0] to-[#E93A8B]
                    text-white font-light text-sm rounded-full
                    shadow-lg shadow-purple-900/30
                    transition-all duration-300 active:scale-95
                  "
                >
                  Contact Us <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
