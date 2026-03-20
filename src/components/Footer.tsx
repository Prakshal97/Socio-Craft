import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="px-6 lg:px-12 xl:px-20 2xl:px-32">

        {/* Top Divider */}
        <div className="h-px bg-white/10 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-4">
  Socio<span className="text-[#E8AEB7]">craft</span>
</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Crafting digital growth for healthcare brands. Ethical, guideline-based digital marketing for doctors, clinics, and hospitals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#E8AEB7] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Website Design",
                "Social Media Marketing",
                "Healthcare SEO",
                "Google & Meta Ads",
                "GMB Optimization"
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-[#E8AEB7] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>hello@sociocraft.in</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Sociocraft. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {["LinkedIn", "Instagram", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-gray-500 hover:text-[#E8AEB7] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;