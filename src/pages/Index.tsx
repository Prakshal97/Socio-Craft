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
<section className="w-full py-24 bg-gradient-to-b from-[#F5EFE7] via-white to-[#FDECEF]">
  <div className="px-6 lg:px-12 xl:px-20 2xl:px-32">

    {/* Heading */}
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#E8AEB7] bg-[#F3C5CB]/30 rounded-full mb-4">
          Why Sociocraft
        </span>

        <h2 className="font-heading font-bold text-4xl md:text-5xl text-black leading-tight">
          Built for healthcare,
          <span className="block bg-gradient-to-r from-[#E8AEB7] to-[#F3C5CB] bg-clip-text text-transparent">
            driven by results
          </span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We help doctors and clinics grow with strategies that are ethical, data-driven, and focused on real patient acquisition.
        </p>
      </motion.div>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {whyChoose.map((item, i) => (
        <motion.div
          key={item.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-white/80 backdrop-blur-md border border-[#F3C5CB] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FDECEF] mb-5">
            <item.icon size={22} className="text-[#E8AEB7]" />
          </div>

          {/* Title */}
          <h3 className="font-heading font-semibold text-lg text-black mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.desc}
          </p>
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
           className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white shadow-lg border border-[#F3C5CB]"
          >
           <div className="p-10 md:p-14 flex flex-col justify-center bg-gradient-to-br from-[#F5EFE7] to-white">
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
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-[#E8AEB7] to-[#F3C5CB] text-black rounded-xl shadow-md hover:scale-105 transition-all"
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
           <div className="flex items-center justify-center p-8">
  <div className="w-full  rounded-2xl overflow-hidden shadow-2xl border border-[#F3C5CB] bg-white hover:scale-105 transition-transform duration-300">
    
    {/* Browser top bar */}
    <div className="h-6 bg-[#FDECEF] flex items-center gap-2 px-3">
      <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
    </div>

    {/* Screenshot */}
    <img
      src="/dr-gaurav-site.png"   // put your screenshot in public folder
      alt="Dr Gaurav Neurospine website"
      className="w-full object-cover"
    />
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

          <div className="relative rounded-3xl p-16 text-center bg-gradient-to-br from-[#E8AEB7] to-[#F3C5CB] shadow-xl overflow-hidden">

            {/* glow */}
            <div className="absolute w-72 h-72 bg-white/20 blur-3xl rounded-full -top-10 -left-10"></div>

            <h2 className="text-4xl font-bold text-black mb-4">
             Ready to grow your clinic online?
            </h2>

            <p className="text-gray-700 mb-8">
             Let's discuss how Sociocraft can help your practice attract more patients.
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

export default Index;
