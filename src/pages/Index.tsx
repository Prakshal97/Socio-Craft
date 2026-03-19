import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe, Share2, Search, BarChart3, MapPin,
  ShieldCheck, Heart, TrendingUp, Database, Users,
  ArrowRight, Star, Quote
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/image copy.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const services = [
  { icon: Globe, title: "Website Designing", desc: "Professional clinic & hospital websites with appointment booking and SEO optimization." },
  { icon: Share2, title: "Social Media Marketing", desc: "Doctor branding, content creation, and patient engagement on Instagram & Facebook." },
  { icon: Search, title: "Healthcare SEO", desc: "Local SEO, Google ranking optimization, and keyword targeting for medical practices." },
  { icon: BarChart3, title: "Google & Meta Ads", desc: "Patient lead generation through Google, Facebook, and Instagram advertising." },
  { icon: MapPin, title: "GMB Optimization", desc: "Google My Business setup, local ranking, review management, and map visibility." },
];

const whyChoose = [
  { icon: Heart, title: "Healthcare expertise", desc: "Deep understanding of medical marketing regulations and patient acquisition." },
  { icon: ShieldCheck, title: "Ethical marketing", desc: "Guideline-based strategies that maintain medical professionalism." },
  { icon: TrendingUp, title: "Lead generation", desc: "Proven systems that convert online visitors into patient appointments." },
  { icon: Database, title: "Data-driven campaigns", desc: "Every decision backed by analytics, A/B testing, and performance metrics." },
  { icon: Users, title: "Dedicated team", desc: "A specialized marketing team focused exclusively on your practice's growth." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 rounded-full mb-6">
                Healthcare Digital Marketing
              </span>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] mb-6">
                Helping doctors grow their{" "}
                <span className="gradient-text">digital presence</span>
              </h1>
              <p className="text-body text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Sociocraft helps doctors, clinics, and hospitals attract patients through strategic digital marketing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm gradient-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                >
                  Get Free Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm text-muted-foreground border border-border rounded-xl hover:bg-muted transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <img src={heroImg} alt="Healthcare digital marketing illustration" className="w-full max-w-md lg:max-w-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 rounded-full mb-4">
                About Sociocraft
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading leading-tight mb-6">
                Crafting digital growth for{" "}
                <span className="gradient-text">healthcare brands</span>
              </h2>
              <p className="text-body leading-relaxed mb-4">
                We help doctors, clinics, and hospitals build a strong online presence and attract more patients using ethical and guideline-based digital marketing strategies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Founded by a team of healthcare marketing specialists and technologists, Sociocraft bridges the gap between medical expertise and digital visibility.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "50+", label: "Healthcare clients" },
                { num: "200%", label: "Avg. lead increase" },
                { num: "95%", label: "Client retention" },
                { num: "3+", label: "Years of expertise" },
              ].map((stat, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 border border-border text-center">
                  <div className="font-heading font-bold text-2xl md:text-3xl gradient-text mb-1">{stat.num}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            label="Our Services"
            title="Everything your practice needs to grow online"
            description="From website design to patient lead generation, we provide end-to-end digital marketing solutions tailored for healthcare."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mb-5">
                  <service.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-heading mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-heading">
        <div className="container-narrow">
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-end bg-primary-end/10 rounded-full mb-4">
                Why Sociocraft
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight max-w-3xl mx-auto">
                Built for healthcare, driven by results
              </h2>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-7 border border-primary-foreground/10"
              >
                <item.icon size={24} className="text-primary-end mb-4" />
                <h3 className="font-heading font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            label="Case Study"
            title="Real results for real practices"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-0 bg-card rounded-2xl border border-border overflow-hidden"
          >
            <div className="bg-muted/50 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Featured Client</span>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-heading mb-4">Dr Gaurav Neurospine</h3>
              <p className="text-body leading-relaxed mb-6">
                Sociocraft helped Dr. Gaurav Neurospine establish a strong digital presence with a professional website, optimized SEO, and lead generation strategies that improved online patient engagement.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Website", value: "Built" },
                  { label: "SEO Rank", value: "Top 3" },
                  { label: "Leads", value: "+180%" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-heading font-bold text-lg gradient-text">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://drgauravneurospine.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  Visit Website <ArrowRight size={14} />
                </a>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-muted-foreground border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="bg-muted flex items-center justify-center p-8 min-h-[300px]">
              <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-2xl border border-border bg-card">
                <div className="h-6 bg-muted flex items-center gap-1.5 px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-primary/20 rounded w-3/4" />
                  <div className="h-2 bg-muted rounded w-full" />
                  <div className="h-2 bg-muted rounded w-5/6" />
                  <div className="h-20 bg-primary/10 rounded-lg" />
                  <div className="h-2 bg-muted rounded w-2/3" />
                  <div className="h-8 gradient-primary rounded-md w-1/3" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <SectionHeading label="Testimonials" title="What our clients say" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border text-center"
          >
            <Quote size={32} className="text-primary/20 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-heading font-medium leading-relaxed mb-6">
              "Sociocraft helped us increase patient inquiries through digital marketing and SEO. Their healthcare-focused approach made all the difference."
            </p>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm font-semibold text-heading">Healthcare Professional</p>
            <p className="text-xs text-muted-foreground">Verified Client</p>
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
            transition={{ duration: 0.5 }}
            className="gradient-primary rounded-3xl p-10 md:p-16 text-center"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
              Ready to grow your clinic online?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how Sociocraft can help your practice attract more patients.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm bg-primary-foreground text-primary rounded-xl hover:bg-primary-foreground/90 transition-colors shadow-lg"
            >
              Book Consultation
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
