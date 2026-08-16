import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Building2,
  Gamepad2,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const categories = [
  { id: "all", label: "All Services" },
  { id: "web-seo", label: "Web Engineering & SEO" },
  { id: "3d-exhibition", label: "3D Exhibition Stands" },
  { id: "gamification", label: "Booth Gamification" },
  { id: "custom-software", label: "Custom Software & NDA" },
];

const servicesList = [
  {
    id: "web-engineering",
    category: "web-seo",
    icon: Globe,
    title: "Website Engineering & Conversion UX",
    desc: "Custom high-converting web applications, clinic booking engines, and corporate websites built with modern web frameworks, lightning speed, and mobile responsiveness.",
    badge: "High Conversion",
    benefits: [
      "Custom React / Next.js web application architecture",
      "Online appointment booking & instant CRM lead integration",
      "Core Web Vitals optimization for fast loading",
      "Responsive design tailored for patient & client conversion"
    ],
    process: [
      "UX wireframing & conversion strategy",
      "Custom responsive interface design",
      "Full-stack development & testing",
      "Deployment & continuous performance tuning"
    ]
  },
  {
    id: "performance-seo",
    category: "web-seo",
    icon: Search,
    title: "Performance Marketing & Local SEO Dominance",
    desc: "Data-driven organic search optimization and targeted Google & Meta advertising campaigns engineered to drive real qualified leads and local market dominance.",
    badge: "Organic Lead Surge",
    benefits: [
      "Local GMB optimization & Google Maps ranking dominance",
      "Targeted Google Ads & Meta advertising campaigns",
      "Content strategy & medical/enterprise keyword targeting",
      "Conversion tracking & monthly ROI performance analytics"
    ],
    process: [
      "In-depth technical SEO audit & keyword research",
      "On-page & GMB profile optimization",
      "Targeted ad creation & campaign launch",
      "A/B testing & weekly scaling optimization"
    ]
  },
  {
    id: "3d-exhibition-stands",
    category: "3d-exhibition",
    icon: Building2,
    title: "Exhibition Stand 3D Design & Spatial Build",
    desc: "Photorealistic 3D renders, spatial booth planning, structural construction, installation, and venue dismantling across major exhibition centers in India.",
    badge: "15+ Yrs Industry Expertise",
    benefits: [
      "3D photorealistic booth rendering & spatial layout design",
      "Turnkey construction, fabrication & venue installation",
      "On-site venue logistics management across major Indian venues",
      "Complete post-event dismantling & structural storage"
    ],
    process: [
      "Brand requirements & booth space planning",
      "Photorealistic 3D design & client revision review",
      "Structural fabrication & pre-event assembly",
      "Venue installation, live support & post-event teardown"
    ]
  },
  {
    id: "booth-gamification",
    category: "gamification",
    icon: Gamepad2,
    title: "Interactive Booth Gamification & Touchscreen Tech",
    desc: "Custom-branded touchscreen mini-games built for live exhibition booths to pull massive foot traffic, engage visitors, and create an unforgettable brand moment.",
    badge: "Live Exhibition Tech",
    benefits: [
      "Custom interactive touchscreen games & quiz experiences",
      "Branded mini-game UI tailored to your product launch",
      "Instant lead capture & leaderboard integration for booth visitors",
      "Proven crowd-magnet activation for trade shows"
    ],
    process: [
      "Game concept & brand activation design",
      "Interactive mechanics development & branding",
      "Touchscreen hardware setup & testing",
      "Live booth deployment & instant lead analytics"
    ]
  },
  {
    id: "custom-software-nda",
    category: "custom-software",
    icon: LineChart,
    title: "Custom Software & Fintech Platforms (NDA Protected)",
    desc: "Bespoke enterprise software, stock advisory platforms, client management systems, and proprietary algorithms engineered under strict confidentiality.",
    badge: "Confidential (NDA)",
    benefits: [
      "Proprietary stock advisory software & client portals",
      "Secure database architecture & data encryption",
      "Custom dashboard reporting & automated client alerts",
      "Full Non-Disclosure Agreement (NDA) IP protection"
    ],
    process: [
      "Confidential NDA signing & requirement analysis",
      "System architecture & database design",
      "Agile full-stack software development",
      "Security auditing & private client deployment"
    ]
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices = activeTab === "all"
    ? servicesList
    : servicesList.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0A0F1D] text-white selection:bg-indigo-500/30 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] aurora-glow-1 blur-[140px] rounded-full pointer-events-none" />

        <div className="container-narrow text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6">
              Our Multi-Disciplinary Services
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6 max-w-4xl mx-auto">
              End-to-end digital growth & <br className="hidden sm:block" />
              <span className="gradient-text">engineering capabilities</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              From web engineering and SEO dominance to 3D exhibition stand builds, live booth touchscreen gamification, and confidential software systems.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 border border-indigo-400/40"
                    : "bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-indigo-500/15"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards List */}
      <section className="section-padding pt-6">
        <div className="container-narrow space-y-12">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 md:p-12 border border-indigo-500/25 bg-slate-900/50 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

                <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: Details & Benefits */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                        <Icon size={26} className="text-indigo-400" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800/80 border border-indigo-500/30 text-emerald-400">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="font-heading font-black text-2xl md:text-3xl text-white">
                      {service.title}
                    </h2>

                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Key Deliverables & Benefits</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.benefits.map((b) => (
                          <div key={b} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-200">
                            <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Process Timeline Card */}
                  <div className="lg:col-span-5">
                    <div className="bg-slate-950/80 rounded-2xl p-6 border border-indigo-500/20 space-y-5">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-semibold flex items-center gap-2">
                        <Cpu size={14} />
                        <span>Execution Roadmap</span>
                      </h4>

                      <div className="space-y-4">
                        {service.process.map((step, i) => (
                          <div key={step} className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center shrink-0">
                              <span className="text-xs font-bold font-mono text-white">{i + 1}</span>
                            </div>
                            <p className="text-xs text-slate-300 font-medium pt-1">{step}</p>
                          </div>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="w-full btn-glow gradient-primary text-white text-xs py-3 px-5 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg mt-4"
                      >
                        <span>Book Strategy Session</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Services;
