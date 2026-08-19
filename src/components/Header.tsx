import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
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
            ? "bg-[#F5F3EF]/90 backdrop-blur-xl border border-line shadow-md py-3 px-5 md:px-7"
            : "bg-[#F5F3EF]/80 backdrop-blur-md border border-line py-3.5 px-5 md:px-7"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex flex-col text-left group">
          <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-ink group-hover:scale-[1.02] transition-transform">
            Socio<span className="text-ink">Kraft</span>
          </span>

          {/* Subtitle Line */}
          <div className="hidden sm:flex items-center gap-1.5 mt-0.5">
            <div className="h-[1.5px] w-3 bg-ink/30 rounded-full" />
            <span className="text-[7.5px] tracking-[0.18em] font-mono text-taupe font-semibold uppercase">
              Digital Growth & Engineering Agency
            </span>
            <div className="h-[1.5px] w-3 bg-ink/30 rounded-full" />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-card p-1.5 rounded-full border border-line shadow-xs">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-ink shadow-xs"
                    : "text-taupe hover:text-ink hover:bg-stone-50"
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
            className="bg-ink hover:bg-black text-white text-xs md:text-sm py-2.5 px-5 rounded-full shadow-sm hover:shadow transition-all flex items-center gap-2 font-semibold"
          >
            <span>Get Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-ink hover:text-black transition-colors"
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
            className="md:hidden mt-3 rounded-2xl bg-card/95 backdrop-blur-2xl border border-line p-5 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                    location.pathname === link.path
                      ? "text-white bg-ink"
                      : "text-taupe hover:text-ink hover:bg-stone-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center py-3.5 font-semibold text-sm bg-ink hover:bg-black text-white rounded-xl shadow-md flex items-center justify-center gap-2"
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
