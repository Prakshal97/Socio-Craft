import { motion } from "framer-motion";

const clientLogos = [
  {
    name: "Dr Gaurav Neurospine",
    logo: "/drgauravlogo.png",
    category: "Healthcare Leader"
  },
  {
    name: "Elite Eventures",
    logo: "/eliteeventureslogo.png",
    category: "Exhibition Stand 3D Builds"
  },
  {
    name: "DR-RASHEL",
    logo: "/drrashellogo.png",
    category: "Interactive Gamification"
  },
  {
    name: "Wealthmine Advisory",
    logo: "/wealthmineadvisorylogo.png",
    category: "NSE & BSE Automation"
  }
];

const LogoMarquee = () => {
  return (
    <div className="w-full bg-stone-100/60 py-8 border-y border-line overflow-hidden">
      <div className="container-narrow mb-4 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-taupe bg-white px-3.5 py-1 rounded-full border border-line">
          Trusted Industry Leaders & Client Partners
        </span>
      </div>

      <div className="flex overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          className="flex items-center gap-6 md:gap-10 flex-none pr-6 md:pr-10"
        >
          {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-card border border-line px-6 py-3.5 rounded-2xl hover:border-bronze/50 transition-all duration-300 shadow-xs group"
            >
              <div
                className={`h-12 px-4 py-1.5 rounded-xl border border-line flex items-center justify-center group-hover:scale-105 transition-transform ${
                  client.name === "Elite Eventures" ? "bg-[#141311]" : "bg-stone-50"
                }`}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<span className="font-heading font-bold text-sm text-ink">${client.name}</span>`;
                    }
                  }}
                  className="max-h-9 max-w-[140px] object-contain"
                />
              </div>

              <div className="flex flex-col text-left">
                <span className="font-heading font-bold text-sm text-ink group-hover:text-bronze transition-colors">
                  {client.name}
                </span>
                <span className="text-xs text-taupe font-medium">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoMarquee;
