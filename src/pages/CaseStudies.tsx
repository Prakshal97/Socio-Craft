import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Lock,
  Gamepad2,
  Building2,
  Stethoscope,
  LineChart,
  MessageSquare,
  Image as ImageIcon
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Healthcare" | "Exhibition" | "Interactive" | "Software";
  categoryLabel: string;
  icon: typeof Stethoscope;
  description: string;
  problem?: string;
  solution?: string;
  highlights: string[];
  stats: { value: string; label: string }[];
  image: string;
  imageAlt: string;
  placeholderName: string;
  visitUrl?: string;
  visitText?: string;
  isConfidential?: boolean;
  confidentialNotice?: string;
}

const projects: Project[] = [
  {
    id: "dr-gaurav",
    title: "Dr Gaurav Neurospine",
    subtitle: "Healthcare Digital Transformation & Patient Acquisition",
    category: "Healthcare",
    categoryLabel: "Healthcare Digital Marketing",
    icon: Stethoscope,
    description:
      "Complete online presence overhaul for a leading neurospine clinic. Built a professional, high-converting patient website with integrated booking and launched local SEO strategies to dominate search rankings.",
    problem: "Minimal online visibility and no structured digital presence for patient inquiries.",
    solution: "Custom medical practice website, Google My Business local SEO, and multi-channel patient acquisition campaigns.",
    highlights: [
      "Custom medical website with online appointment booking",
      "Local SEO & Google My Business optimization",
      "Google Ads lead generation campaigns"
    ],
    stats: [
      { value: "+180%", label: "Patient Inquiries" },
      { value: "Top 3", label: "Google Ranking" },
      { value: "4.8★", label: "Patient Reviews" },
      { value: "3x", label: "Website Traffic" }
    ],
    image: "/dr-gaurav-site.png",
    imageAlt: "Dr Gaurav Neurospine Website Preview",
    placeholderName: "public/dr-gaurav-site.png",
    visitUrl: "https://drgauravneurospine.com/",
    visitText: "Visit Website"
  },
  {
    id: "elite-eventures",
    title: "Elite Eventures",
    subtitle: "Exhibition Stand Design & Spatial Branding",
    category: "Exhibition",
    categoryLabel: "Exhibition Stand Design",
    icon: Building2,
    description:
      "Elite Eventure is a top-notch exhibition stand design company in India with over 15+ years of industry expertise. We oversee end-to-end concept development, 3D design, construction, installation, and dismantling across major exhibition venues nationwide.",
    problem: "Needed an online platform that matches their 15+ years of architectural excellence and showcases large-scale exhibition booth builds.",
    solution: "High-impact portfolio showcase reflecting 3D design capabilities, venue coverage, and end-to-end trade show execution.",
    highlights: [
      "Concept development & photorealistic 3D stand renders",
      "Full construction, installation & post-event dismantling",
      "Projects in major exhibition venues across India"
    ],
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "3D", label: "Spatial Renders" },
      { value: "Pan-India", label: "Venues Covered" },
      { value: "End-to-End", label: "Booth Execution" }
    ],
    image: "/elite-eventures.png",
    imageAlt: "Elite Eventures Website & Stand Portfolio Preview",
    placeholderName: "public/elite-eventures.png",
    visitUrl: "https://www.eliteeventure.com/",
    visitText: "Visit Website"
  },
  {
    id: "dr-rashel-game",
    title: "DR-RASHEL Hydration Game",
    subtitle: "Interactive Brand Activation & Live Booth Gamification",
    category: "Interactive",
    categoryLabel: "Interactive Brand Activation",
    icon: Gamepad2,
    description:
      "A custom-branded, interactive mini-game built for a live exhibition booth. Specially designed to pull massive foot traffic and deliver a memorable brand moment — proving we build far beyond static websites when a brand needs to stand out.",
    problem: "Standing out in a crowded exhibition hall and keeping booth visitors engaged.",
    solution: "Interactive hydration-themed mini-game with custom game mechanics, leaderboard, and instant brand engagement.",
    highlights: [
      "Custom web-based mini-game (zero app download required)",
      "Designed for high foot-traffic live exhibition booths",
      "Memorable brand story & product highlighting"
    ],
    stats: [
      { value: "High", label: "Booth Traffic Magnet" },
      { value: "Live", label: "Exhibition Activation" },
      { value: "100%", label: "Custom Gamification" },
      { value: "Web", label: "Zero Download Tech" }
    ],
    image: "/dr-rashel-game.png",
    imageAlt: "DR-RASHEL Hydration Game Interactive Preview",
    placeholderName: "public/dr-rashel-game.png",
    visitUrl: "http://dr-rashel-game.vercel.app",
    visitText: "Play Live Game Demo"
  },
  {
    id: "wealthmine",
    title: "Wealthmine Advisory Firm",
    subtitle: "NSE & BSE Corporate Action Automation Platform",
    category: "Software",
    categoryLabel: "Custom Fintech Software",
    icon: LineChart,
    description:
      "An automated intelligence platform engineered for Wealthmine Advisory Firm. The platform automatically fetches real-time corporate announcements directly from NSE (National Stock Exchange) and BSE (Bombay Stock Exchange), classifies them using keyword filtering and AI into distinct corporate action categories, extracts all key financial and event details from filings, and automatically populates structured Excel files — eliminating tedious manual research and exponentially boosting operational efficiency.",
    highlights: [
      "Automated real-time feed fetching directly from NSE & BSE stock exchanges",
      "Keyword filtering & AI classification into structured Corporate Action categories",
      "Automated key detail extraction & instant Excel data model filling",
      "Eliminates manual research data entry and drastically increases firm efficiency"
    ],
    stats: [
      { value: "NSE & BSE", label: "Live Exchange Feeds" },
      { value: "AI + Filter", label: "Corporate Action Classifier" },
      { value: "Auto-Excel", label: "Automated Data Filling" },
      { value: "10x Speed", label: "Research Efficiency Boost" }
    ],
    image: "/wealthmine-advisory.png",
    imageAlt: "Wealthmine Advisory Platform Preview",
    placeholderName: "public/wealthmine-advisory.png",
    visitUrl: "/contact",
    visitText: "Inquire About Advisory Systems"
  }
];

const ProjectImage = ({
  src,
  alt,
  placeholderName
}: {
  src: string;
  alt: string;
  placeholderName: string;
}) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full py-16 px-4 bg-gradient-to-br from-[#0A0F1D] to-[#0F172A] flex flex-col items-center justify-center text-center rounded-2xl border border-indigo-500/20">
        <div className="w-12 h-12 rounded-xl bg-slate-900 shadow-md flex items-center justify-center mb-3 border border-indigo-500/30">
          <ImageIcon className="text-emerald-400" size={24} />
        </div>
        <p className="font-heading font-semibold text-white text-sm mb-1">{alt}</p>
        <div className="text-xs text-slate-300 font-mono bg-slate-900/90 px-3.5 py-2 rounded-xl border border-indigo-500/30 mt-2">
          Please add photo as: <strong className="text-emerald-400">{placeholderName}</strong>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="w-full h-[260px] md:h-[320px] object-cover rounded-2xl shadow-2xl border border-indigo-500/20"
    />
  );
};

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Healthcare", "Exhibition", "Interactive", "Software"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A0F1D] text-white selection:bg-indigo-500/30 selection:text-white">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 md:pt-44 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] aurora-glow-1 blur-[120px] rounded-full pointer-events-none" />
        <div className="container-narrow text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              Our Work & Case Studies
            </span>

            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 max-w-4xl mx-auto tracking-tight leading-[1.1]">
              Websites, 3D booths, games & <br className="hidden sm:block" />
              <span className="gradient-text">custom software engines</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore how SocioKraft delivers proven growth across healthcare, 3D spatial design, live exhibition gamification, and confidential fintech.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
              {categories.map((cat) => {
                const labelMap: Record<string, string> = {
                  All: "All Projects",
                  Healthcare: "Healthcare Transformation",
                  Exhibition: "3D Exhibition Stands",
                  Interactive: "Booth Gamification",
                  Software: "Custom Fintech Software"
                };
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2.5 text-xs md:text-sm font-semibold rounded-full transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 border border-indigo-400/40 scale-105"
                        : "bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-indigo-500/15"
                    }`}
                  >
                    {labelMap[cat]}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="pb-20 pt-6">
        <div className="container-narrow space-y-16">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-3xl border border-indigo-500/25 overflow-hidden shadow-2xl bg-slate-900/50"
                >
                  {/* Card Header */}
                  <div className="bg-slate-950 p-7 md:p-9 border-b border-indigo-500/20 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                        <Icon size={16} />
                        <span>{project.categoryLabel}</span>
                      </div>
                      <h2 className="text-2xl md:text-4xl text-white font-black">
                        {project.title}
                      </h2>
                      <p className="text-slate-300 text-sm md:text-base mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {project.isConfidential && (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        <Lock size={13} className="text-amber-400" />
                        Confidential (NDA Protected)
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-8 md:p-12 space-y-10">

                    {/* Overview & Image Grid */}
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-white">Project Overview</h3>
                          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                            {project.description}
                          </p>
                        </div>

                        {project.isConfidential && project.confidentialNotice && (
                          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 text-amber-200 text-xs md:text-sm leading-relaxed flex gap-3">
                            <Lock size={20} className="text-amber-400 shrink-0 mt-0.5" />
                            <div>
                              <strong className="font-semibold block mb-1 text-white">Confidential Enterprise Project</strong>
                              {project.confidentialNotice}
                            </div>
                          </div>
                        )}

                        {/* Highlights */}
                        <div>
                          <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-3 font-semibold">
                            Key Deliverables & Highlights
                          </h4>
                          <ul className="space-y-2.5">
                            {project.highlights.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-200">
                                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                <span className="font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Image Preview with Browser Header Frame */}
                      <div className="lg:col-span-5">
                        <div className="bg-slate-950 p-3 rounded-3xl border border-indigo-500/20 shadow-xl">
                          <div className="h-6 bg-slate-900 rounded-t-xl flex items-center justify-between px-3 mb-2 border-b border-indigo-500/20">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">{project.id}</span>
                          </div>
                          <ProjectImage
                            src={project.image}
                            alt={project.imageAlt}
                            placeholderName={project.placeholderName}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div>
                      <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-4 font-semibold">
                        Impact & Performance Metrics
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="bg-slate-950/80 p-5 text-center rounded-2xl border border-indigo-500/20">
                            <div className="text-2xl md:text-3xl gradient-text font-black">{stat.value}</div>
                            <div className="text-xs text-slate-300 mt-1 font-semibold">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-6 border-t border-indigo-500/20 flex flex-wrap items-center justify-between gap-4">
                      {project.isConfidential ? (
                        <div className="flex flex-wrap items-center gap-4 w-full justify-between">
                          <p className="text-xs text-slate-300 font-mono">
                            Interested in custom confidential software engineering for your firm?
                          </p>
                          <Link
                            to="/contact"
                            className="btn-glow gradient-primary text-white text-xs md:text-sm py-3 px-6 rounded-xl flex items-center gap-2 font-semibold shadow-lg"
                          >
                            <MessageSquare size={14} />
                            <span>Schedule Private Discussion</span>
                          </Link>
                        </div>
                      ) : (
                        project.visitUrl && (
                          <a
                            href={project.visitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glow bg-indigo-600/30 hover:bg-indigo-600/50 text-white text-xs md:text-sm py-3 px-6 rounded-xl flex items-center gap-2 border border-indigo-500/30 font-semibold"
                          >
                            <span>{project.visitText || "Visit Website"}</span>
                            <ExternalLink size={14} />
                          </a>
                        )
                      )}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default CaseStudies;