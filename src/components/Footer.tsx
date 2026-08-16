import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="px-6 lg:px-12 xl:px-20 2xl:px-32">

        {/* Top Divider */}
        <div className="h-px bg-white/10 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col text-left group">
              <span className="font-heading font-black text-2xl tracking-tight text-white group-hover:scale-[1.02] transition-transform">
                Socio<span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Kraft</span>
              </span>

              {/* Tagline Accent Rule */}
              <div className="flex items-center gap-1.5 mt-1 max-w-xs">
                <div className="h-[1.5px] w-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
                <span className="text-[8px] tracking-[0.16em] font-mono text-slate-300 font-bold uppercase">
                  Digital Growth & Engineering Agency
                </span>
                <div className="h-[1.5px] w-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs pt-1">
              Crafting high-converting practice websites, 3D exhibition stands, interactive booth games & custom fintech platforms.
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
              <li>sociokraft@gmail.com</li>
              <li>+91 8169767685</li>
              <li>Udaipur, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Sociocraft. All rights reserved.
          </p>

          {/* FIX: wrap this */}
          <div className="flex items-center gap-6">
            {[
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Instagram", url: "https://www.instagram.com/sociokraft_" },
              {
                name: "WhatsApp",
                url: "https://wa.me/918169767685?text=Hello%20Sociokraft%2C%20I%20want%20to%20know%20more%20about%20your%20services."
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-[#E8AEB7] transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;