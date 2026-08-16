import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  BarChart3,
  Building2,
  Gamepad2,
  LineChart,
  ArrowRight,
  Star,
  Quote,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  TrendingUp,
  Layers,
  Award,
  Lock,
  ExternalLink
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import LogoMarquee from "@/components/LogoMarquee";
import GrowthCalculator from "@/components/GrowthCalculator";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const bentoServices = [
  {
    icon: Globe,
    title: "Website Engineering & Conversion UX",
    desc: "Custom high-converting websites built with modern frameworks, online appointment engines, and lightning-fast performance.",
    tag: "High Conversion",
    cols: "lg:col-span-8",
    color: "from-indigo-500/20 to-purple-500/10"
  },
  {
    icon: Search,
    title: "Healthcare & Local SEO Dominance",
    desc: "Dominate local Google search rankings for clinics, hospitals & specialist doctors to drive organic inquiries.",
    tag: "Top Rankings",
    cols: "lg:col-span-4",
    color: "from-blue-500/20 to-cyan-500/10"
  },
  {
    icon: Building2,
    title: "Exhibition Stand 3D Design & Build",
    desc: "Photorealistic 3D renders, spatial booth planning, construction, installation, and dismantling across major exhibition venues in India.",
    tag: "15+ Yrs Expertise",
    cols: "lg:col-span-4",
    color: "from-emerald-500/20 to-teal-500/10"
  },
  {
    icon: Gamepad2,
    title: "Interactive Booth Gamification",
    desc: "Custom-branded touchscreen mini-games built for live exhibition booths to magnetize foot traffic and create brand recall.",
    tag: "Live Booth Tech",
    cols: "lg:col-span-4",
    color: "from-violet-500/20 to-indigo-500/10"
  },
  {
    icon: LineChart,
    title: "Custom Software & Fintech Engineering",
    desc: "Bespoke enterprise software, stock advisory platforms, and client portals built under strict NDA confidentiality.",
    tag: "Custom Systems",
    cols: "lg:col-span-4",
    color: "from-amber-500/20 to-orange-500/10"
  }
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Multi-Industry Masterclass",
    desc: "Proven track record spanning healthcare digital marketing, 3D exhibition architecture, live booth tech, and financial software."
  },
  {
    icon: Zap,
    title: "Beyond Static Websites",
    desc: "We build interactive booth mini-games, 3D spatial renders, and full-stack software when a brand needs to truly stand out."
  },
  {
    icon: TrendingUp,
    title: "Data-Driven ROI & Patient Surge",
    desc: "Every marketing campaign and digital system is engineered to maximize conversion rates, lead flow, and patient appointments."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise NDA & Confidentiality",
    desc: "Trusted by leading advisory firms and brands with strict non-disclosure agreements and secure software architecture."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1D] text-white selection:bg-indigo-500/30 selection:text-white">
      <Header />

      <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] aurora-glow-1 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-5 w-[600px] h-[450px] aurora-glow-2 blur-[150px] rounded-full pointer-events-none" />

        <div className="container-narrow relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 text-xs md:text-sm font-medium text-white mb-6 shadow-xl shadow-indigo-950/50">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="gradient-emerald font-bold">Digital Growth & Engineering Agency</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-300 font-mono">Healthcare • Exhibition • Software</span>
              </div>

              <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6 text-white">
                Transforming brands with <br className="hidden sm:block" />
                <span className="gradient-text">websites, 3D booths & software</span>
              </h1>

              <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                We help clinics, exhibition leaders, and enterprises scale online through high-converting websites, 3D stand designs, interactive booth games, and custom fintech platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="btn-glow gradient-primary text-white text-base py-4 px-9 rounded-full shadow-2xl flex items-center gap-2.5 font-semibold"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/case-studies"
                className="px-8 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 transition-colors text-sm font-semibold text-white border border-indigo-500/25 backdrop-blur-md"
              >
                Explore Portfolio & Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto"
            >
              {[
                { num: "+180%", label: "Patient Lead Surge", sub: "Dr Gaurav Neurospine" },
                { num: "15+ Yrs", label: "Exhibition 3D Builds", sub: "Elite Eventures" },
                { num: "Live Tech", label: "Interactive Gamification", sub: "DR-RASHEL Booth" },
                { num: "NDA Protected", label: "Confidential Fintech Software", sub: "Wealthmine Advisory" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-5 rounded-2xl border border-indigo-500/20 bg-slate-900/50"
                >
                  <div className="font-heading font-extrabold text-2xl md:text-3xl gradient-text mb-1">
                    {stat.num}
                  </div>
                  <div className="text-xs font-semibold text-white">{stat.label}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-mono">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            label="What We Build & Deliver"
            title="End-to-end digital solutions for modern brands"
            description="From high-converting practice websites to 3D exhibition booth designs, live booth mini-games, and custom fintech platforms."
          />

          <div className="grid lg:grid-cols-12 gap-6 mt-12">
            {bentoServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`${service.cols} glass-card glass-card-hover rounded-3xl p-8 border border-indigo-500/20 relative overflow-hidden flex flex-col justify-between group`}
                >
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} blur-3xl rounded-full pointer-events-none`} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 backdrop-blur-md flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
                        <Icon size={22} className="text-indigo-400" />
                      </div>
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-800/80 border border-indigo-500/20 text-indigo-300 font-mono">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-6 relative z-10 flex items-center gap-2 text-xs font-semibold text-emerald-400 group-hover:gap-3 transition-all">
                    <span>Explore capability</span>
                    <ArrowRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-emerald-400 transition-colors"
            >
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950/60 border-y border-indigo-500/15">
        <div className="container-narrow">
          <SectionHeading
            label="Why Partner With Sociocraft"
            title="Engineered for measurable impact"
            description="We bridge the gap between technical excellence, spatial design, and patient/client acquisition."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="glass-card glass-card-hover p-7 rounded-3xl border border-indigo-500/20 bg-slate-900/40"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-emerald-400" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-narrow py-6">
        <GrowthCalculator />
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            label="Featured Projects"
            title="Real results for industry leaders"
            description="Explore how we empower clinics, exhibition leaders, live brand activations, and stock advisory practices."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                id: "dr-gaurav",
                title: "Dr Gaurav Neurospine",
                category: "Healthcare Digital Transformation",
                desc: "Complete digital marketing overhaul & website for a leading neurospine clinic, resulting in +180% patient lead surge.",
                badge: "Healthcare",
                image: "/dr-gaurav-site.png",
                placeholderName: "public/dr-gaurav-site.png",
                link: "https://drgauravneurospine.com/",
                linkText: "Visit Website",
                isExternal: true
              },
              {
                id: "elite-eventures",
                title: "Elite Eventures",
                category: "Exhibition Stand 3D Design",
                desc: "Top-notch exhibition stand design company in India (15+ yrs) overseeing concept development, 3D design, construction & dismantling.",
                badge: "Exhibition Stand Design",
                image: "/elite-eventures.png",
                placeholderName: "public/elite-eventures.png",
                link: "https://www.eliteeventure.com/",
                linkText: "Visit Website",
                isExternal: true
              },
              {
                id: "dr-rashel",
                title: "DR-RASHEL Hydration Game",
                category: "Interactive Brand Activation",
                desc: "Custom-branded interactive mini-game built for live exhibition booths to pull massive foot traffic and create a memorable brand moment.",
                badge: "Live Booth Gamification",
                image: "/dr-rashel-game.png",
                placeholderName: "public/dr-rashel-game.png",
                link: "http://dr-rashel-game.vercel.app",
                linkText: "Play Live Game Demo",
                isExternal: true
              },
              {
                id: "wealthmine",
                title: "Wealthmine Advisory Firm",
                category: "NSE & BSE Automation Platform",
                desc: "AI & Keyword-based stock intelligence platform that automatically fetches NSE/BSE corporate announcements, classifies corporate actions, extracts key data, and populates Excel models for Wealthmine Advisory Firm.",
                badge: "NSE & BSE Automation",
                image: "/wealthmine-advisory.png",
                placeholderName: "public/wealthmine-advisory.png",
                link: "/case-studies",
                linkText: "View Case Study",
                isExternal: false
              }
            ].map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-indigo-500/20 flex flex-col justify-between group"
              >
                <div>
                  <div className="bg-slate-950 p-4 border-b border-indigo-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
                        {p.badge}
                      </span>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-2xl bg-black min-h-[220px] flex items-center justify-center relative border border-white/10">
                      <img
                        src={p.image}
                        alt={p.title}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector(".fallback-box")) {
                            const fallback = document.createElement("div");
                            fallback.className =
                              "fallback-box w-full py-14 px-4 bg-gradient-to-br from-[#0A0F1D] to-[#0F172A] flex flex-col items-center justify-center text-center";
                            fallback.innerHTML = `<div className="text-xs text-slate-300 font-mono bg-slate-900/90 px-3.5 py-2 rounded-xl border border-indigo-500/30">Please add photo as: <strong className="text-emerald-400">${p.placeholderName}</strong></div>`;
                            parent.appendChild(fallback);
                          }
                        }}
                        className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="p-7 space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-white">
                      {p.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0 flex items-center justify-between gap-3">
                  {p.isExternal ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow bg-indigo-600/30 hover:bg-indigo-600/50 text-white text-xs md:text-sm py-2.5 px-5 rounded-xl flex items-center gap-2 border border-indigo-500/30"
                    >
                      <span>{p.linkText}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link
                      to={p.link}
                      className="btn-glow bg-indigo-600/30 hover:bg-indigo-600/50 text-white text-xs md:text-sm py-2.5 px-5 rounded-xl flex items-center gap-2 border border-indigo-500/30"
                    >
                      <span>{p.linkText}</span>
                      <ArrowRight size={14} />
                    </Link>
                  )}

                  <Link
                    to="/case-studies"
                    className="text-xs font-semibold text-emerald-400 hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="btn-glow gradient-primary text-white py-4 px-8 rounded-full text-sm font-semibold shadow-xl inline-flex items-center gap-2"
            >
              <span>View All Projects & Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950/80 border-y border-indigo-500/15">
        <div className="container-narrow">
          <SectionHeading label="Client Trust & Performance" title="What our partners say" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-indigo-500/25 text-center relative bg-slate-900/60"
          >
            <Quote size={40} className="text-indigo-400/30 mx-auto mb-6" />
            <p className="text-lg md:text-2xl text-white font-medium leading-relaxed mb-6">
              "Sociocraft delivered results beyond expectations — from healthcare patient lead acquisition to interactive booth experiences, their digital execution is outstanding."
            </p>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-base font-bold text-white">Verified Client</p>
            <p className="text-xs text-slate-400 font-mono">Healthcare & Enterprise Partner</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
