import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 rounded-full mb-6">
              Case Studies
            </span>

            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-heading mb-6 max-w-3xl mx-auto">
              Proven results for <span className="gradient-text">healthcare clients</span>
            </h1>

            <p className="text-body text-lg md:text-xl max-w-2xl mx-auto">
              See how we've helped medical practices grow their patient base.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>

            <div className="bg-card rounded-2xl border border-border overflow-hidden">

              {/* Header */}
              <div className="gradient-primary p-8 md:p-12">
                <span className="text-primary-foreground/60 text-xs uppercase">
                  Featured Case Study
                </span>
                <h2 className="text-3xl md:text-4xl text-primary-foreground mt-2">
                  Dr Gaurav Neurospine
                </h2>
                <p className="text-primary-foreground/80">
                  Complete digital transformation
                </p>
              </div>

              <div className="p-8 md:p-12 space-y-10">

                {/* Problem */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Problem</h3>
                  <p>
                    Minimal online visibility and no structured digital presence.
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Solution</h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Website Development",
                        items: ["Professional website", "Booking system", "Mobile optimized"]
                      },
                      {
                        title: "SEO Strategy",
                        items: ["Local SEO", "Keyword targeting", "GMB setup"]
                      },
                      {
                        title: "Patient Acquisition",
                        items: ["Google Ads", "Social media", "Lead tracking"]
                      },
                    ].map((col) => (
                      <div key={col.title} className="bg-muted/50 rounded-xl p-6">
                        <h4 className="font-semibold mb-3">{col.title}</h4>
                        <ul className="space-y-2 text-sm">
                          {col.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <CheckCircle2 size={14} className="text-primary mt-1" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Results</h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { value: "+180%", label: "Patient inquiries" },
                      { value: "Top 3", label: "Google ranking" },
                      { value: "4.8★", label: "Reviews" },
                      { value: "3x", label: "Traffic" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-muted/50 p-5 text-center rounded-xl">
                        <div className="text-2xl gradient-text font-bold">{stat.value}</div>
                        <div className="text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 🔥 NEW CLIENT WEBSITE SECTION */}
               {/* Client Website */}
<div>
  <h3 className="font-heading font-semibold text-xl text-heading mb-6">
    Client Website
  </h3>

  {/* MAIN IMAGE */}
  <div className="rounded-2xl overflow-hidden shadow-xl border border-[#F3C5CB]">
    <img
      src="/dr-gaurav-site.png"
      alt="Main website preview"
      className="w-full object-cover"
    />
  </div>

  {/* BUTTON */}
  <div className="text-center mt-6">
    <a
      href="https://drgauravneurospine.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-black text-white rounded-xl hover:scale-105 transition-all shadow-lg"
    >
      Visit Website <ExternalLink size={14} />
    </a>
  </div>

  {/* CLEAN GRID (NO SCROLL) */}
  <div className="grid md:grid-cols-3 gap-6 mt-10">
    {[
      "/case1.png",
      "/case2.png",
      "/case3.png",
    ].map((img, i) => (
      <div
        key={i}
        className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
      >
        <img
          src={img}
          className="w-full h-[220px] object-cover"
        />
      </div>
    ))}
  </div>
</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔥 PREMIUM CTA */}
      <section className="section-padding">
        <div className="container-narrow">

          <div className="relative rounded-3xl p-16 text-center bg-gradient-to-br from-[#E8AEB7] to-[#F3C5CB] shadow-xl overflow-hidden">

            {/* glow */}
            <div className="absolute w-72 h-72 bg-white/20 blur-3xl rounded-full -top-10 -left-10"></div>

            <h2 className="text-4xl font-bold text-black mb-4">
              Want similar results for your practice?
            </h2>

            <p className="text-gray-700 mb-8">
              Let's grow your clinic digitally.
            </p>

            <Link
              to="/contact"
              className="px-8 py-4 bg-black text-white rounded-xl hover:scale-105 transition-all shadow-lg"
            >
              Book Consultation →
            </Link>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;