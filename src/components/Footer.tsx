import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card text-ink pt-20 pb-10 border-t border-line">
      <div className="px-6 lg:px-12 xl:px-20 2xl:px-32">

        {/* Top Divider */}
        <div className="h-px bg-line mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col text-left group">
              <span className="font-heading font-bold text-2xl tracking-tight text-ink group-hover:scale-[1.02] transition-transform">
                Socio<span className="text-bronze">Kraft</span>
              </span>

              {/* Tagline Accent Rule */}
              <div className="flex items-center gap-1.5 mt-1 max-w-xs">
                <div className="h-[1.5px] w-4 bg-bronze/40 rounded-full" />
                <span className="text-[8px] tracking-[0.16em] font-mono text-taupe font-semibold uppercase">
                  Digital Growth & Engineering Agency
                </span>
                <div className="h-[1.5px] w-4 bg-bronze/40 rounded-full" />
              </div>
            </Link>

            <p className="text-sm text-taupe leading-relaxed max-w-xs pt-1">
              Crafting high-converting practice websites, 3D exhibition stands, interactive booth games & custom fintech platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-ink/70 mb-4">
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
                    className="text-sm text-taupe hover:text-bronze transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-ink/70 mb-4">
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
                    className="text-sm text-taupe hover:text-bronze transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-ink/70 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-taupe">
              <li>sociokraft@gmail.com</li>
              <li>+91 8169767685</li>
              <li>Udaipur, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-line pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-taupe">
            © {new Date().getFullYear()} SocioKraft. All rights reserved.
          </p>

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
                className="text-xs text-taupe hover:text-bronze transition-colors"
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