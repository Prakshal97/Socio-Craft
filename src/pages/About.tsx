import { useState } from "react";
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
  LineChart,
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import LogoMarquee from "@/components/LogoMarquee";

const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const clientReviews = [
  {
    id: 1,
    name: "Dr Gaurav Neurospine",
    initials: "DG",
    avatarBg: "bg-emerald-700",
    category: "Healthcare Digital Growth",
    time: "Verified Client",
    stars: 5,
    text: "Outstanding digital transformation for our neurospine clinic. SocioKraft built a high-converting patient appointment website and dominated local search SEO, boosting our patient inquiries by +180%."
  },
  {
    id: 2,
    name: "Elite Eventures",
    initials: "EE",
    avatarBg: "bg-stone-800",
    category: "3D Exhibition Stands",
    time: "Verified Client",
    stars: 5,
    text: "Sincere appreciation to SocioKraft for outstanding support during our nationwide exhibition stand setups. Highly dependable across concept planning, 3D architectural renders, and trade booth execution."
  },
  {
    id: 3,
    name: "DR-RASHEL",
    initials: "DR",
    avatarBg: "bg-indigo-700",
    category: "Interactive Brand Activation",
    time: "Verified Client",
    stars: 5,
    text: "The custom hydration touchscreen game SocioKraft built for our exhibition booth was an absolute visitor magnet. Brought our product story to life and drove immense foot traffic throughout the event."
  },
  {
    id: 4,
    name: "Wealthmine Advisory Firm",
    initials: "WA",
    avatarBg: "bg-blue-800",
    category: "Custom Fintech Software",
    time: "Verified Client",
    stars: 5,
    text: "SocioKraft engineered an automated corporate action tracking platform directly connected to live NSE & BSE feeds. Saved our research team hundreds of hours each month with extreme data accuracy."
  }
];

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
  const [reviewIndex, setReviewIndex] = useState(0);

  const prevReview = () => {
    setReviewIndex((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setReviewIndex((prev) => (prev === clientReviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-ink font-sans selection:bg-bronze selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[700px] max-h-screen overflow-hidden bg-[#F5F3EF]">
        {/* Existing beige abstract backdrop */}
        <div className="absolute inset-0 select-none pointer-events-none">
          <img
            src="/image.png"
            alt="Editorial Background"
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* Content Container positioned ~12% from left and ~28% from top */}
        <div className="relative z-10 w-full h-full flex flex-col justify-start pl-[6%] sm:pl-[8%] lg:pl-[12%] pt-[20vh] sm:pt-[24vh] lg:pt-[28vh]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[700px] text-left"
          >
            {/* Eyebrow */}
            <span className="block text-[14px] uppercase font-mono font-semibold tracking-[0.28em] text-[#8A7B5C] mb-4">
              ABOUT SOCIOKRAFT
            </span>

            {/* Headline (Exactly 2 Lines) */}
            <h1 className="font-heading font-extrabold text-[42px] sm:text-[58px] md:text-[68px] lg:text-[76px] xl:text-[80px] leading-[1.08] tracking-tight text-[#1C1B19] mb-6">
              We Design <br />
              <span className="whitespace-nowrap">Digital Experiences</span>
            </h1>

            {/* Body */}
            <p className="max-w-[520px] text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.7] text-[#6B6560] font-normal mb-8">
              We blend strategy, creativity, and engineering to build meaningful digital products, immersive exhibition experiences, and scalable software solutions.
            </p>

            {/* CTA */}
            <a
              href="#story"
              className="inline-flex items-center justify-center h-[52px] px-8 rounded-[999px] bg-[#1C1B19] text-[#F5F3EF] font-medium text-[15px] hover:bg-[#33302C] transition-colors"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </section>

      {/* Story & Core Philosophy (Awwwards-Quality Editorial Section) */}
      <section id="story" className="pt-16 pb-12 lg:pt-20 lg:pb-16 bg-[#F5F3EF] border-t border-line relative overflow-hidden">
        {/* Subtle architectural curved accent entering from bottom-right */}
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-40 select-none overflow-hidden">
          <svg width="480" height="380" viewBox="0 0 480 380" fill="none">
            <path
              d="M480 380C320 380 180 260 140 100C120 20 160 -40 220 -80"
              stroke="#8A7B5C"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            <path
              d="M480 300C360 300 240 200 200 60"
              stroke="#8A7B5C"
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column (58% / 7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Editorial Headline (Strictly 2 Lines) */}
              <h2 className="font-heading font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] leading-[1.2] tracking-tight text-[#1C1B19]">
                We design meaningful digital products <br />
                <span className="whitespace-nowrap">& immersive brand experiences.</span>
              </h2>

              {/* Large Rounded Image (drrashelgame.png with optimal framing) */}
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2"
              >
                <div className="rounded-[24px] overflow-hidden border border-[#8A7B5C]/25 shadow-[0_8px_30px_rgba(28,27,25,0.06)] bg-[#171614] h-[320px] sm:h-[380px] md:h-[420px] w-full relative group flex items-center justify-center p-3">
                  <img
                    src="/drrashelgame.png"
                    alt="SocioKraft Interactive Gamification Experience"
                    className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-700 rounded-xl"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = "/dr-rashel-game.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent pointer-events-none transition-colors duration-500 rounded-[24px]" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column (42% / 5 cols) - Floating Ivory Paper Panel */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="bg-[#F8F6F2] border border-[#8A7B5C]/20 rounded-[28px] p-8 sm:p-10 shadow-[0_6px_28px_rgba(28,27,25,0.04)] relative">
                {/* Top-Right Bronze Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8A7B5C] font-semibold">
                    Core Philosophy
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-[#8A7B5C] bg-[#8A7B5C]/10 border border-[#8A7B5C]/20 px-3 py-1 rounded-full">
                    EST. 2026
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#1C1B19] mb-6 tracking-tight">
                  Our Philosophy
                </h3>

                {/* 3 Short Paragraphs with Generous Spacing */}
                <div className="space-y-5 text-sm sm:text-[15px] text-[#6B6560] leading-relaxed">
                  <p>
                    SocioKraft was founded on a singular conviction: modern market leaders require more than conventional agency services. They demand multi-disciplinary craft across digital platforms, spatial environments, and bespoke software.
                  </p>
                  <p>
                    Over the years, we have built a reputation for flawless technical execution combined with creative excellence — taking projects from concept blueprints to live, high-converting reality.
                  </p>
                  <p>
                    Every clinic transformation, interactive exhibition booth, and automated financial platform is engineered to deliver measurable impact and enduring value.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section (Apple x Clay Global Luxury Minimalist) */}
      <section className="pt-10 pb-16 lg:pt-14 lg:pb-20 bg-[#F5F3EF] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Faint topographic contour lines */}
          <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topoLines" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M 0 50 Q 50 100 100 50 T 200 50" fill="none" stroke="#8A7B5C" strokeWidth="0.5" strokeOpacity="0.15" />
                <path d="M 0 150 Q 50 100 100 150 T 200 150" fill="none" stroke="#8A7B5C" strokeWidth="0.5" strokeOpacity="0.15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topoLines)" />
          </svg>

          {/* Bronze curved line entering from bottom-left */}
          <svg className="absolute left-0 bottom-0 opacity-45" width="460" height="340" viewBox="0 0 460 340" fill="none">
            <path
              d="M0 340C160 340 300 240 340 100C360 30 320 -30 260 -60"
              stroke="#8A7B5C"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            <path
              d="M0 260C120 260 220 180 260 60"
              stroke="#8A7B5C"
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>

          {/* 4x4 Dotted Bronze Grid in Opposite Corners */}
          <div className="absolute top-12 left-12 grid grid-cols-4 gap-2 opacity-35">
            {[...Array(16)].map((_, i) => (
              <div key={`dot-tl-${i}`} className="w-1 h-1 rounded-full bg-[#8A7B5C]" />
            ))}
          </div>
          <div className="absolute bottom-12 right-12 grid grid-cols-4 gap-2 opacity-35">
            {[...Array(16)].map((_, i) => (
              <div key={`dot-br-${i}`} className="w-1 h-1 rounded-full bg-[#8A7B5C]" />
            ))}
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* 1. Statistics Pill (Top) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/55 backdrop-blur-sm border border-[rgba(138,123,92,0.22)] rounded-[999px] min-h-[105px] py-4 px-6 sm:px-12 md:px-16 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto shadow-[0_4px_24px_rgba(28,27,25,0.03)] mb-12 lg:mb-14 gap-6 md:gap-0"
          >
            {/* Stat 1 */}
            <div className="flex-1 text-center group cursor-default">
              <div className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#8A7B5C] group-hover:scale-105 transition-transform duration-300 font-heading leading-none">
                5+
              </div>
              <div className="text-xs sm:text-[15px] text-[#6B6560] font-mono mt-1">
                Projects Delivered
              </div>
            </div>

            {/* Divider 1 */}
            <div className="hidden md:block h-12 w-[1px] bg-[#8A7B5C]/20 group-hover:bg-[#8A7B5C]/50 transition-colors" />

            {/* Stat 2 */}
            <div className="flex-1 text-center group cursor-default">
              <div className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#8A7B5C] group-hover:scale-105 transition-transform duration-300 font-heading leading-none">
                100%
              </div>
              <div className="text-xs sm:text-[15px] text-[#6B6560] font-mono mt-1">
                Client Satisfaction
              </div>
            </div>

            {/* Divider 2 */}
            <div className="hidden md:block h-12 w-[1px] bg-[#8A7B5C]/20 group-hover:bg-[#8A7B5C]/50 transition-colors" />

            {/* Stat 3 */}
            <div className="flex-1 text-center group cursor-default">
              <div className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#8A7B5C] group-hover:scale-105 transition-transform duration-300 font-heading leading-none">
                3+
              </div>
              <div className="text-xs sm:text-[15px] text-[#6B6560] font-mono mt-1">
                Industries Served
              </div>
            </div>
          </motion.div>

          {/* 2. Three-Column Grid (Vision | 3D Visual | Mission) */}
          <div className="grid lg:grid-cols-[1fr_1.15fr_1fr] gap-8 lg:gap-9 items-stretch">
            {/* Left Card — Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F8F6F2] rounded-[28px] border border-[rgba(138,123,92,0.18)] p-8 sm:p-9 shadow-[0_6px_28px_rgba(28,27,25,0.03)] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-semibold tracking-[0.25em] text-[#8A7B5C] uppercase mb-4 block">
                  VISION
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-[#1C1B19] leading-snug mb-4">
                  Creating the benchmark for exceptional digital and spatial experiences.
                </h3>
                <p className="text-sm sm:text-[15px] text-[#6B6560] leading-relaxed">
                  To be India's premier digital growth and spatial engineering agency, setting the standard for multi-disciplinary excellence where physical architecture seamlessly converges with high-performance code.
                </p>
              </div>

              {/* Bottom Thin Bronze Line */}
              <div className="h-[1px] bg-[#8A7B5C]/25 w-full mt-8" />
            </motion.div>

            {/* Center — Hero 3D Spatial Visual (Focal Point) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[32px] bg-gradient-to-b from-[#F7F4EF] to-[#ECE6DB] p-6 sm:p-7 shadow-[0_12px_40px_rgba(28,27,25,0.08)] border border-[#8A7B5C]/25 relative overflow-hidden flex flex-col justify-between items-center group"
            >
              {/* Subtle Radial Bronze Glow Behind Booth (8% opacity) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(138,123,92,0.08)_0%,_transparent_70%)] pointer-events-none" />

              {/* Top Meta Tag */}
              <div className="w-full flex items-center justify-between relative z-10 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#8A7B5C] font-semibold">
                  Spatial Innovation
                </span>
                <span className="text-[11px] font-mono text-[#6B6560]">
                  3D Architecture
                </span>
              </div>

              {/* 3D Exhibition Booth Visual with Hover Rotation */}
              <div className="w-full rounded-[22px] overflow-hidden border border-[#8A7B5C]/20 shadow-md bg-stone-100 relative group-hover:rotate-[3deg] group-hover:shadow-xl transition-all duration-500">
                <img
                  src="/elite-eventures.png"
                  alt="3D Spatial Exhibition Booth Render"
                  className="w-full h-[220px] sm:h-[260px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = "/case2.png";
                  }}
                />
              </div>

              {/* Caption */}
              <div className="w-full pt-4 text-center relative z-10">
                <span className="text-xs font-mono text-[#6B6560]">
                  Exhibition Booth 3D Architecture & Spatial Execution
                </span>
              </div>
            </motion.div>

            {/* Right Card — Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F8F6F2] rounded-[28px] border border-[rgba(138,123,92,0.18)] p-8 sm:p-9 shadow-[0_6px_28px_rgba(28,27,25,0.03)] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-semibold tracking-[0.25em] text-[#8A7B5C] uppercase mb-4 block">
                  MISSION
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-[#1C1B19] leading-snug mb-4">
                  Designing immersive brands through strategy, engineering, and innovation.
                </h3>
                <p className="text-sm sm:text-[15px] text-[#6B6560] leading-relaxed">
                  Empowering ambitious market leaders with high-converting web funnels, photorealistic 3D spatial builds, interactive exhibition gamification, and bespoke fintech engines that generate undeniable ROI.
                </p>
              </div>

              {/* Bronze Outlined Pill */}
              <div className="pt-8">
                <span className="inline-block text-xs font-mono font-semibold text-[#8A7B5C] border border-[#8A7B5C]/40 px-4 py-1.5 rounded-full">
                  Driven by Purpose
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Logo Marquee Section */}
      <LogoMarquee />

      {/* Leadership Team */}
      <section className="pt-16 pb-8 md:pt-20 md:pb-10">
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
                className="glass-card glass-card-hover rounded-3xl p-8 border border-line text-center bg-card flex flex-col items-center justify-between"
              >
                <div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-bronze/50 shadow-md mb-4"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                  <h3 className="font-heading font-bold text-xl text-ink">{member.name}</h3>
                  <span className="text-xs font-mono text-bronze font-semibold mb-3 block">{member.role}</span>
                  <p className="text-sm text-taupe leading-relaxed">{member.desc}</p>
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
                className="glass-card glass-card-hover rounded-3xl p-8 border border-line text-center bg-card flex flex-col items-center justify-between"
              >
                <div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-bronze/50 shadow-md mb-4"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                  <h3 className="font-heading font-bold text-xl text-ink">{member.name}</h3>
                  <span className="text-xs font-mono text-bronze font-semibold mb-3 block">{member.role}</span>
                  <p className="text-sm text-taupe leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Verified Client Reviews Section */}
      <section className="py-12 md:py-16 bg-stone-100/60 border-y border-line overflow-hidden">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-line text-xs font-semibold text-ink mb-3 shadow-xs">
                <GoogleIcon />
                <span>4.9 / 5.0 Rating on Google Reviews</span>
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-ink">
                What our partners say
              </h2>
              <p className="text-taupe text-sm md:text-base mt-2">
                Real feedback from healthcare directors, exhibition leaders, brand managers, and financial executives.
              </p>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className="w-11 h-11 rounded-full bg-card hover:bg-white border border-line shadow-xs flex items-center justify-center text-ink hover:text-bronze transition-all cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className="w-11 h-11 rounded-full bg-card hover:bg-white border border-line shadow-xs flex items-center justify-center text-ink hover:text-bronze transition-all cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clientReviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-3xl p-6 border border-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  {/* Review Card Header */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="relative shrink-0">
                        <div
                          className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-xs`}
                        >
                          {review.initials}
                        </div>
                        {/* Little Google star indicator */}
                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[8px] border border-white font-bold">
                          ★
                        </div>
                      </div>

                      <div>
                        <h4 className="font-heading font-bold text-xs sm:text-sm text-ink leading-snug">
                          {review.name}
                        </h4>
                        <span className="text-[10px] text-taupe block font-mono">
                          {review.category}
                        </span>
                      </div>
                    </div>

                    <GoogleIcon />
                  </div>

                  {/* Rating Stars & Blue Verified Checkmark */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.stars)].map((_, s) => (
                        <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <CheckCircle2 size={13} className="text-blue-500 fill-blue-50" />
                    <span className="text-[9.5px] font-mono text-taupe font-semibold">Verified</span>
                  </div>

                  {/* Review Content */}
                  <p className="text-taupe text-xs leading-relaxed">
                    "{review.text}"
                  </p>
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
