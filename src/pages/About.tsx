import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  Handshake,
  Cpu,
  Layers,
  Sparkles,
  Building2,
  Gamepad2,
  Stethoscope,
  LineChart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const founders = [
  {
    name: "Bhavesh Jain",
    role: "Founder & Strategy Head",
    desc: "Spearheading agency growth, client partnerships, and cross-industry digital marketing strategies.",
    image: "/team/bhavesh.jpg"
  },
  {
    name: "Divya Jain",
    role: "Co-Founder & Operations",
    desc: "Managing agency operations, campaign execution, and multi-disciplinary team coordination.",
    image: "/team/divya.png"
  }
];

const ctos = [
  {
    name: "Nisha Singh",
    role: "Lead Developer & CTO",
    desc: "Architecting high-converting web applications, spatial 3D experiences, and conversion engines.",
    image: "/team/nisha.png"
  },
  {
    name: "Prakshal Jain",
    role: "Lead Developer & CTO",
    desc: "Driving technical innovation, full-stack software development, and proprietary fintech platforms.",
    image: "/team/prakshal.png"
  }
];

const approaches = [
  {
    icon: Cpu,
    title: "Technology-First Execution",
    desc: "We build custom 3D spatial renders, interactive touchscreen games, and full-stack software engines when brands need to stand out."
  },
  {
    icon: Lightbulb,
    title: "Data & ROI Centric",
    desc: "Every marketing strategy, search engine optimization campaign, and web funnel is driven by measurable revenue & lead growth metrics."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise NDA Security",
    desc: "Trusted by stock advisory practices and enterprise leaders under strict Non-Disclosure Agreements (NDAs)."
  },
];

const industryPillars = [
  {
    icon: Stethoscope,
    title: "Healthcare & Medical Transformation",
    desc: "Ethical doctor branding, practice websites, and organic patient lead surge."
  },
  {
    icon: Building2,
    title: "Exhibition 3D Spatial Design",
    desc: "3D booth renders, structural architecture, construction, and venue dismantling."
  },
  {
    icon: Gamepad2,
    title: "Interactive Booth Gamification",
    desc: "Touchscreen mini-games designed for live exhibition booths to pull massive foot traffic."
  },
  {
    icon: LineChart,
    title: "Custom Software & Fintech Platforms",
    desc: "Bespoke stock advisory engines, portal software, and enterprise systems."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1D] text-white selection:bg-indigo-500/30 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] aurora-glow-1 blur-[140px] rounded-full pointer-events-none" />

        <div className="container-narrow text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
              About SocioKraft
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6 max-w-4xl mx-auto">
              Engineering digital growth across <br className="hidden sm:block" />
              <span className="gradient-text">every industry & technical niche</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              SocioKraft is a multi-disciplinary Digital Growth & Engineering Agency. We bridge performance marketing, 3D spatial exhibition builds, live booth gamification, and custom software engineering for market leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Core Capabilities */}
      <section className="section-padding bg-slate-950/60 border-y border-indigo-500/15">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Our Origin & Vision</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-6">
                Built to transcend traditional agency boundaries
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                SocioKraft was founded on a simple principle: modern brands need far more than basic static websites. They require high-converting digital funnels, immersive 3D spatial environments, interactive live booth experiences, and secure software engines.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                From scaling medical practice inquiries by +180% to managing 15+ years of exhibition stand design across India, building live touchscreen games, and engineering confidential fintech engines, our multi-domain expertise sets us apart.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                {["Healthcare", "3D Exhibition Stands", "Booth Gamification", "Fintech Software", "Local SEO"].map((tag) => (
                  <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-6">
              <div className="glass-card glass-card-hover rounded-3xl p-8 border border-indigo-500/20 bg-slate-900/60">
                <Target size={30} className="text-indigo-400 mb-4" />
                <h3 className="font-heading font-bold text-xl text-white mb-2">Mission</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To empower businesses across all industries with high-converting digital ecosystems, photorealistic 3D spatial designs, interactive booth activations, and custom software systems that generate undeniable ROI.
                </p>
              </div>

              <div className="glass-card glass-card-hover rounded-3xl p-8 border border-indigo-500/20 bg-slate-900/60">
                <Eye size={30} className="text-emerald-400 mb-4" />
                <h3 className="font-heading font-bold text-xl text-white mb-2">Vision</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To be India's premier digital growth & engineering agency — setting the gold standard for multi-niche technical execution, spatial innovation, and client growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-Industry Pillars Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            label="Industry Domain Expertise"
            title="Specialized solutions for every vertical"
            description="We deploy targeted strategy and technical architecture tailored to your specific industry requirements."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {industryPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-3xl p-7 border border-indigo-500/20 bg-slate-900/40"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-indigo-400" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-slate-950/80 border-y border-indigo-500/15">
        <div className="container-narrow">
          <SectionHeading
            label="Our Philosophy"
            title="The SocioKraft Growth Standard"
            description="How we ensure every project delivers tangible business results."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {approaches.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card glass-card-hover rounded-3xl p-8 border border-indigo-500/20 text-center bg-slate-900/50"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
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

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading label="Agency Leadership" title="Meet the minds behind SocioKraft" />

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 mb-8">
            {founders.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border border-indigo-500/25 text-center bg-slate-900/50 flex flex-col items-center justify-between"
              >
                <div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-emerald-400/50 shadow-xl mb-4"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                  <h3 className="font-heading font-bold text-xl text-white">{member.name}</h3>
                  <span className="text-xs font-mono text-emerald-400 font-semibold mb-3 block">{member.role}</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTOs */}
          <div className="grid md:grid-cols-2 gap-8">
            {ctos.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border border-indigo-500/25 text-center bg-slate-900/50 flex flex-col items-center justify-between"
              >
                <div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-indigo-400/50 shadow-xl mb-4"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                  <h3 className="font-heading font-bold text-xl text-white">{member.name}</h3>
                  <span className="text-xs font-mono text-indigo-300 font-semibold mb-3 block">{member.role}</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default About;
