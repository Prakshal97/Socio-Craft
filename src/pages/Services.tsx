import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe, Share2, Search, BarChart3, MapPin,
  ArrowRight, CheckCircle2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Website Design for Clinics",
    desc: "Professional, fast-loading websites designed specifically for healthcare practices.",
    benefits: ["Clinic & hospital website design", "Appointment booking integration", "Fast, SEO-optimized architecture", "Mobile responsive design"],
    process: ["Discovery & research", "Wireframing & design", "Development & testing", "Launch & optimization"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build your brand and engage patients across Instagram, Facebook, and LinkedIn.",
    benefits: ["Doctor branding & positioning", "Instagram & Facebook management", "Healthcare content creation", "Patient engagement campaigns"],
    process: ["Audience analysis", "Content strategy", "Creation & scheduling", "Performance tracking"],
  },
  {
    icon: Search,
    title: "Healthcare SEO",
    desc: "Rank higher on Google and attract more patients searching for your services.",
    benefits: ["Local SEO for clinics", "Google ranking optimization", "On-page & technical SEO", "Keyword targeting for medical practices"],
    process: ["SEO audit", "Keyword research", "On-page optimization", "Link building & monitoring"],
  },
  {
    icon: BarChart3,
    title: "Google & Meta Ads",
    desc: "Generate patient leads through targeted advertising on Google, Facebook, and Instagram.",
    benefits: ["Patient lead generation", "Google Ads for doctors", "Facebook & Instagram Ads", "Campaign optimization & reporting"],
    process: ["Goal setting", "Ad creation & targeting", "A/B testing", "Optimization & scaling"],
  },
  {
    icon: MapPin,
    title: "Google My Business Optimization",
    desc: "Improve your local visibility and attract nearby patients through Google Maps.",
    benefits: ["GMB profile setup & optimization", "Local ranking improvement", "Review management", "Map visibility & citations"],
    process: ["Profile audit", "Information optimization", "Review strategy", "Ongoing management"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 rounded-full mb-6">
              Our Services
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] mb-6 max-w-3xl mx-auto">
              Digital marketing solutions for <span className="gradient-text">healthcare</span>
            </h1>
            <p className="text-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              End-to-end services designed to help medical practices attract patients and grow their online presence.
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, idx) => (
        <section key={service.title} className={`section-padding ${idx % 2 === 0 ? "bg-muted/50" : ""}`}>
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                  <service.icon size={22} className="text-primary-foreground" />
                </div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-heading mb-4">{service.title}</h2>
                <p className="text-body leading-relaxed mb-6">{service.desc}</p>
                <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Benefits</h4>
                <ul className="space-y-2.5 mb-8">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-body">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-6">Our Process</h4>
                  <div className="space-y-6">
                    {service.process.map((step, i) => (
                      <div key={step} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                          <span className="text-primary-foreground text-xs font-bold">{i + 1}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-heading">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow">

          <div className="relative rounded-3xl p-16 text-center bg-gradient-to-br from-[#E8AEB7] to-[#F3C5CB] shadow-xl overflow-hidden">

            {/* glow */}
            <div className="absolute w-72 h-72 bg-white/20 blur-3xl rounded-full -top-10 -left-10"></div>

            <h2 className="text-4xl font-bold text-black mb-4">
             Need a custom marketing plan?
            </h2>

            <p className="text-gray-700 mb-8">
             Every practice is unique. Let's create a strategy tailored to your goals.
            </p>

            <Link
              to="/contact"
              className="px-8 py-4 bg-black text-white rounded-xl hover:scale-105 transition-all shadow-lg"
            >
              Get Free Consultation →
            </Link>

          </div>

        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Services;
