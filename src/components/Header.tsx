import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 md:top-5 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto">
      <div
        className={`w-full flex items-center justify-between rounded-2xl md:rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0F1D]/90 backdrop-blur-xl border border-indigo-500/25 shadow-2xl shadow-indigo-950/50 py-3 px-5 md:px-7"
            : "bg-[#0A0F1D]/75 backdrop-blur-md border border-white/10 py-3.5 px-5 md:px-7"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex flex-col text-left group">
          <span className="font-heading font-black text-xl md:text-2xl tracking-tight text-white group-hover:scale-[1.02] transition-transform">
            Socio<span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Kraft</span>
          </span>

          {/* Glowing Accent Subtitle Line */}
          <div className="hidden sm:flex items-center gap-1.5 mt-0.5">
            <div className="h-[1.5px] w-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
            <span className="text-[7.5px] tracking-[0.18em] font-mono text-slate-300 font-bold uppercase">
              Digital Growth & Engineering Agency
            </span>
            <div className="h-[1.5px] w-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded-full border border-indigo-500/20">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-indigo-600 shadow-md shadow-indigo-500/30"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="btn-glow gradient-primary text-white text-xs md:text-sm py-2.5 px-5 rounded-full shadow-lg flex items-center gap-2"
          >
            <span>Get Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white hover:text-indigo-400 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="md:hidden mt-3 rounded-2xl bg-[#0A0F1D]/95 backdrop-blur-2xl border border-indigo-500/30 p-5 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                    location.pathname === link.path
                      ? "text-white bg-indigo-600/30 border border-indigo-500/40"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center py-3.5 font-semibold text-sm gradient-primary text-white rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

