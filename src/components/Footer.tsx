import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-heading text-primary-foreground">
      <div className="container-narrow py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-bold text-xl text-primary-foreground mb-4">
              Socio<span className="text-primary-end">craft</span>
            </h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Crafting digital growth for healthcare brands. Ethical, guideline-based digital marketing for doctors, clinics, and hospitals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-primary-foreground/40 mb-4">
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
                  <Link to={link.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-primary-foreground/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {["Website Design", "Social Media Marketing", "Healthcare SEO", "Google & Meta Ads", "GMB Optimization"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-primary-foreground/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li>hello@sociocraft.in</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Sociocraft. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "Instagram", "Twitter"].map((social) => (
              <a key={social} href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
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
