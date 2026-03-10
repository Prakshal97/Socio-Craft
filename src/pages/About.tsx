import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, ArrowRight, ShieldCheck, Lightbulb, Handshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const team = [
  { name: "Bhavesh Jain", role: "Founder & Strategy Head", desc: "Leads Sociocraft's strategic direction with a deep understanding of healthcare marketing ecosystems." },
  { name: "Divya Jain", role: "Co-Founder & Operations", desc: "Oversees operations and ensures seamless execution of marketing campaigns for healthcare clients." },
  { name: "Nisha Singh", role: "Lead Developer & CTO", desc: "Architecting robust, fast-loading healthcare websites optimized for conversions." },
  { name: "Prakshal Jain", role: "Lead Developer & CTO", desc: "Driving technical innovation and building scalable digital solutions for medical practices." },
];

const approaches = [
  { icon: ShieldCheck, title: "Ethical compliance", desc: "Every strategy adheres to medical advertising guidelines and regulations." },
  { icon: Lightbulb, title: "Research-first", desc: "We begin with data analysis and competitive research before any campaign." },
  { icon: Handshake, title: "Partnership model", desc: "We work as an extension of your team, not just another vendor." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 rounded-full mb-6">
              About Us
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] mb-6 max-w-3xl mx-auto">
              We craft digital growth for <span className="gradient-text">healthcare brands</span>
            </h1>
            <p className="text-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Sociocraft was founded with a singular mission: help medical professionals build an impactful online presence through ethical, results-driven digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading mb-6">Our story</h2>
              <p className="text-body leading-relaxed mb-4">
                Born out of a frustration with generic digital marketing agencies that couldn't understand the nuances of healthcare, Sociocraft was established to fill a critical gap.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We recognized that doctors and clinics needed more than cookie-cutter marketing—they needed a partner who understood patient trust, medical ethics, and the unique challenges of healthcare marketing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we work with 50+ healthcare professionals across India, delivering measurable results through SEO, social media, paid advertising, and web development.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-6">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <Target size={28} className="text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl text-heading mb-2">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Helping doctors, clinics, and hospitals build a strong online presence and attract more patients using ethical and guideline-based digital marketing strategies.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <Eye size={28} className="text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl text-heading mb-2">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted digital marketing partner for healthcare professionals in India, setting the standard for ethical medical marketing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            label="Our Approach"
            title="Healthcare marketing, done right"
            description="We combine industry expertise with data-driven strategies to deliver results that respect both patients and practitioners."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {approaches.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-7 border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-5">
                  <item.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-heading mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <SectionHeading label="Leadership" title="Meet the team behind Sociocraft" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border text-center"
              >
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-xl">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-heading">{member.name}</h3>
                <p className="text-xs text-primary font-medium mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to work with us?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how we can grow your practice's digital presence.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm bg-primary-foreground text-primary rounded-xl hover:bg-primary-foreground/90 transition-colors shadow-lg">
              Get In Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
