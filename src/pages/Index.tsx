import { useState, useRef, useEffect } from "react";
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
  ExternalLink,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight
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
    color: "from-bronze/10 to-transparent"
  },
  {
    icon: Search,
    title: "Healthcare & Local SEO Dominance",
    desc: "Dominate local Google search rankings for clinics, hospitals & specialist doctors to drive organic inquiries.",
    tag: "Top Rankings",
    cols: "lg:col-span-4",
    color: "from-bronze/10 to-transparent"
  },
  {
    icon: Building2,
    title: "Exhibition Stand 3D Design & Build",
    desc: "Photorealistic 3D renders, spatial booth planning, construction, installation, and dismantling across major exhibition venues in India.",
    tag: "15+ Yrs Expertise",
    cols: "lg:col-span-4",
    color: "from-bronze/10 to-transparent"
  },
  {
    icon: Gamepad2,
    title: "Interactive Booth Gamification",
    desc: "Custom-branded touchscreen mini-games built for live exhibition booths to magnetize foot traffic and create brand recall.",
    tag: "Live Booth Tech",
    cols: "lg:col-span-4",
    color: "from-bronze/10 to-transparent"
  },
  {
    icon: LineChart,
    title: "Custom Software & Fintech Engineering",
    desc: "Bespoke enterprise software, stock advisory platforms, and client portals built under strict NDA confidentiality.",
    tag: "Custom Systems",
    cols: "lg:col-span-4",
    color: "from-bronze/10 to-transparent"
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

const Index = () => {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reviewIndex, setReviewIndex] = useState(0);

  const prevReview = () => {
    setReviewIndex((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setReviewIndex((prev) => (prev === clientReviews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
        }
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-ink selection:bg-bronze selection:text-white font-sans">
      <Header />

      {/* Full-Screen Video Hero Section */}
      <section className="relative w-full h-screen max-h-screen overflow-hidden bg-black flex flex-col justify-between">
        {/* Full-Screen Video */}
        <video
          ref={videoRef}
          src="/hey_can_you_create_an_introduc (1).mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle bottom shadow to anchor the floating cards */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />

        {/* Top Spacer for Fixed Nav */}
        <div className="h-16 md:h-20" />

        {/* Floating Mute/Unmute Audio Button (Top-Right) */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute top-20 right-5 md:top-24 md:right-8 z-20 bg-black/70 hover:bg-black text-white px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-xl transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX size={14} className="text-white" />
              <span>Unmute</span>
            </>
          ) : (
            <>
              <Volume2 size={14} className="text-white" />
              <span>Mute</span>
            </>
          )}
        </button>

        {/* 4 Metric Cards floating higher with comfortable bottom space */}
        <div className="w-full relative z-10 px-3 sm:px-6 lg:px-10 pb-8 md:pb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 w-full">
            {[
              { num: "WEB", label: "Scalable Platforms", sub: "React • Next.js • Node.js" },
              { num: "3D", label: "Immersive Booth Design", sub: "Exhibition & Retail Experiences" },
              { num: "AI", label: "Intelligent Software", sub: "Automation • Custom AI Tools" },
              { num: "GROWTH", label: "Digital Brand Engineering", sub: "Strategy to Execution" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-card/95 backdrop-blur-md p-3.5 sm:p-4 md:p-4.5 rounded-2xl border border-line shadow-xl text-left hover:border-bronze/40 transition-colors"
              >
                <div className="font-heading font-extrabold text-xl sm:text-2xl md:text-[25px] text-bronze mb-0.5">
                  {stat.num}
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-ink leading-tight">{stat.label}</div>
                <div className="text-[10px] text-taupe mt-0.5 font-mono">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Brand Logo Marquee */}
      <LogoMarquee />

      {/* 3. Featured Projects Section */}
      <section className="pt-16 md:pt-20 pb-12 md:pb-14">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            label="Featured Projects"
            title="Real results for industry leaders"
            description="Explore how we empower clinics, exhibition leaders, live brand activations, and stock advisory practices."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-line flex flex-col justify-between group"
              >
                <div>
                  <div className="bg-stone-50 p-3.5 border-b border-line">
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                      </div>
                      <span className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full bg-stone-200/60 text-taupe border border-line font-mono">
                        {p.badge}
                      </span>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-xs bg-stone-100 min-h-[190px] flex items-center justify-center relative border border-line">
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
                              "fallback-box w-full py-12 px-3 bg-stone-50 flex flex-col items-center justify-center text-center";
                            fallback.innerHTML = `<div className="text-xs text-taupe font-mono bg-white px-3 py-1.5 rounded-xl border border-line">Please add photo as: <strong className="text-bronze">${p.placeholderName}</strong></div>`;
                            parent.appendChild(fallback);
                          }
                        }}
                        className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-heading font-bold text-xl text-ink">
                      {p.title}
                    </h3>
                    <p className="text-taupe text-xs sm:text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  {p.isExternal ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow bg-bronze hover:bg-bronze/90 text-white text-xs py-2.5 px-4 rounded-xl flex items-center gap-1.5 font-semibold"
                    >
                      <span>{p.linkText}</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <Link
                      to={p.link}
                      className="btn-glow bg-bronze hover:bg-bronze/90 text-white text-xs py-2.5 px-4 rounded-xl flex items-center gap-1.5 font-semibold"
                    >
                      <span>{p.linkText}</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}

                  <Link
                    to="/case-studies"
                    className="text-xs font-semibold text-bronze hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <Link
              to="/case-studies"
              className="btn-glow bg-bronze text-white py-3.5 px-7 rounded-full text-sm font-semibold shadow-md inline-flex items-center gap-2"
            >
              <span>View All Projects & Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The Process: How We Do It (SocioKraft Engineered Workflow) */}
      <section className="py-14 md:py-20 bg-stone-100/50 border-y border-line overflow-hidden">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Top Header Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 md:mb-12">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-bronze uppercase block mb-2 font-semibold">
                HOW WE CRAFT RESULTS
              </span>
              <p className="text-taupe text-sm md:text-base italic max-w-lg">
                Every healthcare transformation, 3D exhibition booth build, and custom software platform follows our engineered 6-stage workflow.
              </p>
            </div>

            <div className="text-left md:text-right">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight">
                The Process: <span className="text-bronze font-mono">*</span>
              </h2>
            </div>
          </div>

          {/* 6 Steps Grid (3 Columns) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: "→ 01.",
                title: "Discovery & Technical Audit",
                desc: "Auditing healthcare patient acquisition funnels, exhibition booth space dimensions, or proprietary fintech API feeds.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              },
              {
                step: "→ 02.",
                title: "Concept & Spatial UX",
                desc: "Structuring patient booking conversion pathways, interactive booth touchscreen games, and user decision flows.",
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
              },
              {
                step: "→ 03.",
                title: "3D Renders & Visual Design",
                desc: "Photorealistic 3D exhibition stand visualizations, material specifications, lighting design, and modern UI interfaces.",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
              },
              {
                step: "→ 04.",
                title: "Custom Engineering & Gamification",
                desc: "Developing high-speed web apps, zero-install trade show booth mini-games, and automated NSE/BSE financial parsers.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              },
              {
                step: "→ 05.",
                title: "Fabrication & Deployment",
                desc: "Supervising on-site physical stall fabrication across India, cloud server deployments, and rigorous live QA testing.",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
              },
              {
                step: "→ 06.",
                title: "Performance & Ongoing Growth",
                desc: "Tracking live patient lead generation (+180%), trade visitor engagement footfall, and automated reporting.",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-card rounded-3xl p-5 sm:p-6 border border-line shadow-xs hover:shadow-md hover:border-bronze/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Category */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-bronze font-bold">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-taupe bg-stone-100 px-2.5 py-0.5 rounded-full border border-line">
                      Stage {idx + 1}
                    </span>
                  </div>

                  {/* Rounded Landscape Image Card */}
                  <div className="w-full h-[180px] sm:h-[190px] rounded-2xl overflow-hidden bg-stone-100 border border-line relative shadow-xs mb-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-ink group-hover:text-bronze transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-taupe leading-relaxed font-sans mt-2">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Google Verified Client Reviews Section */}
      <section className="section-padding bg-stone-100/60 border-y border-line overflow-hidden">
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

export default Index;
