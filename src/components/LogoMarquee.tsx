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
    <div className="w-full bg-slate-950 py-8 border-y border-indigo-500/20 overflow-hidden backdrop-blur-xl">
      <div className="container-narrow mb-4 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-300 bg-indigo-500/10 px-3.5 py-1 rounded-full border border-indigo-500/20">
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
              className="flex items-center gap-4 bg-slate-900/90 border border-indigo-500/30 px-6 py-3.5 rounded-2xl hover:border-emerald-400/60 hover:bg-slate-900 transition-all duration-300 shadow-xl group"
            >
              {/* Dark Logo Container for high contrast with white/light logo art */}
              <div className="h-12 px-4 py-1.5 bg-slate-950 rounded-xl border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <img
                  src={client.logo}
                  alt={client.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<span className="font-heading font-extrabold text-sm text-white">${client.name}</span>`;
                    }
                  }}
                  className="max-h-9 max-w-[140px] object-contain filter contrast-125"
                />
              </div>

              <div className="flex flex-col text-left">
                <span className="font-heading font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                  {client.name}
                </span>
                <span className="text-xs text-emerald-400/90 font-medium">
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
