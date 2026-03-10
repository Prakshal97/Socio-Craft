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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 rounded-full mb-6">
              Case Studies
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] mb-6 max-w-3xl mx-auto">
              Proven results for <span className="gradient-text">healthcare clients</span>
            </h1>
            <p className="text-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              See how we've helped medical practices grow their patient base through strategic digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dr Gaurav Case Study */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              {/* Header */}
              <div className="gradient-primary p-8 md:p-12">
                <span className="text-primary-foreground/60 text-xs font-semibold uppercase tracking-wider">Featured Case Study</span>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mt-2 mb-2">Dr Gaurav Neurospine</h2>
                <p className="text-primary-foreground/80 text-lg">Complete digital transformation for a neurosurgery practice</p>
              </div>

              <div className="p-8 md:p-12 space-y-10">
                {/* Problem */}
                <div>
                  <h3 className="font-heading font-semibold text-xl text-heading mb-3">The Problem</h3>
                  <p className="text-body leading-relaxed">
                    Dr. Gaurav's neurosurgery practice had minimal online visibility. Patients couldn't find the practice through Google searches, there was no professional website, and the clinic was missing out on a significant number of potential patient inquiries from digital channels.
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="font-heading font-semibold text-xl text-heading mb-3">Our Solution</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "Website Development", items: ["Professional medical website", "Appointment booking system", "Mobile-optimized design", "Fast page load speeds"] },
                      { title: "SEO Strategy", items: ["Local SEO optimization", "Medical keyword targeting", "Google My Business setup", "Content marketing plan"] },
                      { title: "Patient Acquisition", items: ["Google Ads campaigns", "Social media presence", "Review management system", "Lead tracking & analytics"] },
                    ].map((col) => (
                      <div key={col.title} className="bg-muted/50 rounded-xl p-6">
                        <h4 className="font-heading font-semibold text-heading mb-3">{col.title}</h4>
                        <ul className="space-y-2">
                          {col.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
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
                  <h3 className="font-heading font-semibold text-xl text-heading mb-4">Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { value: "+180%", label: "Patient inquiries" },
                      { value: "Top 3", label: "Google ranking" },
                      { value: "4.8★", label: "Google reviews" },
                      { value: "3x", label: "Website traffic" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-muted/50 rounded-xl p-5 text-center">
                        <div className="font-heading font-bold text-2xl gradient-text mb-1">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Website Preview */}
                <div>
                  <h3 className="font-heading font-semibold text-xl text-heading mb-4">Client Website</h3>
                  <div className="bg-muted rounded-2xl p-6 md:p-8">
                    <div className="max-w-lg mx-auto rounded-xl overflow-hidden shadow-2xl border border-border bg-card">
                      <div className="h-7 bg-muted flex items-center gap-1.5 px-3 border-b border-border">
                        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                        <span className="ml-2 text-[10px] text-muted-foreground">drgauravneurospine.com</span>
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="h-4 bg-primary/20 rounded w-2/3" />
                        <div className="h-2.5 bg-muted rounded w-full" />
                        <div className="h-2.5 bg-muted rounded w-4/5" />
                        <div className="h-24 bg-primary/10 rounded-lg" />
                        <div className="flex gap-2">
                          <div className="h-8 gradient-primary rounded-md w-1/4" />
                          <div className="h-8 bg-muted rounded-md w-1/4" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-6">
                      <a
                        href="https://drgauravneurospine.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold gradient-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity"
                      >
                        Visit Website <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-primary rounded-3xl p-10 md:p-16 text-center"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Want similar results for your practice?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how we can help your clinic grow its digital presence.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm bg-primary-foreground text-primary rounded-xl hover:bg-primary-foreground/90 transition-colors shadow-lg">
              Book Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
