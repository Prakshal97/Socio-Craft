import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const industries = [
  "Healthcare & Medical",
  "Exhibition Stand 3D",
  "Live Booth Gamification",
  "Fintech & Stock Advisory",
  "E-Commerce & D2C",
  "Other Niche Industry"
];

const serviceOptions = [
  "Web Engineering & UX",
  "Local SEO & Ad Growth",
  "3D Stand Design & Build",
  "Interactive Booth Game",
  "Custom Enterprise Software"
];

const budgetRanges = [
  "< ₹50,000",
  "₹50,000 - ₹1,50,000",
  "₹1,50,000 - ₹5,00,000",
  "₹5,00,000+ (Enterprise)"
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "Healthcare & Medical",
    selectedServices: [] as string[],
    budget: "₹50,000 - ₹1,50,000",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const toggleService = (service: string) => {
    setForm(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const messageWithDetails = `
Industry: ${form.industry}
Selected Services: ${form.selectedServices.join(", ") || "General Inquiry"}
Budget Range: ${form.budget}

Message:
${form.message}
    `;

    emailjs
      .send(
        "service_8mxkzz9",
        "template_pip0t0c",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: messageWithDetails,
        },
        "f1MX6eRi3ZEN96rZR"
      )
      .then(() => {
        toast.success("Strategy session request sent successfully! Our team will respond within 24 hours.");
        setForm({
          name: "",
          email: "",
          phone: "",
          industry: "Healthcare & Medical",
          selectedServices: [],
          budget: "₹50,000 - ₹1,50,000",
          message: ""
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Form submission encountered an issue. Please try direct WhatsApp chat!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-ink font-sans selection:bg-bronze selection:text-white">
      <Header />

      {/* Editorial Contact Hero Section */}
      <section className="relative w-full h-screen min-h-[700px] max-h-screen overflow-hidden bg-[#F5F3EF]">
        {/* Existing abstract ivory backdrop */}
        <div className="absolute inset-0 select-none pointer-events-none">
          <img
            src="/image.png"
            alt="Editorial Contact Background"
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* Content Container: Left-aligned, ~12% from left, ~28% from top */}
        <div className="relative z-10 w-full h-full flex flex-col justify-start pl-[6%] sm:pl-[8%] lg:pl-[12%] pt-[20vh] sm:pt-[24vh] lg:pt-[28vh]">
          <div className="max-w-[540px] text-left">
            {/* Eyebrow (Fades in first) */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="block text-[14px] uppercase font-mono font-semibold tracking-[0.28em] text-[#8A7B5C] mb-4"
            >
              CONTACT US
            </motion.span>

            {/* Headline (Rises 24px with a 0.6s ease-out) */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-extrabold text-[42px] sm:text-[60px] md:text-[72px] lg:text-[80px] xl:text-[86px] leading-[0.98] sm:leading-[0.95] tracking-tight text-[#1C1B19] mb-6"
            >
              Let's Build <br />
              <span className="whitespace-nowrap">Something Exceptional</span>
            </motion.h1>

            {/* Body (Appears after 120ms) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.7] text-[#6B6560] font-normal mb-8"
            >
              Whether you're launching a digital product, creating an immersive exhibition, or automating your business with AI, our team is ready to turn your vision into reality.
            </motion.p>

            {/* CTA Group (Slides upward with subtle fade) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 flex-wrap"
            >
              {/* Primary Button */}
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center h-[52px] px-7 rounded-[999px] bg-[#1C1B19] text-[#F5F3EF] font-medium text-[15px] hover:bg-[#33302C] transition-colors"
              >
                Start Your Project
              </a>

              {/* Secondary Link */}
              <a
                href="mailto:hello@sociokraft.com"
                className="text-[15px] font-semibold text-[#8A7B5C] hover:underline transition-all"
              >
                hello@sociokraft.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section id="contact-form" className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* Left Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="glass-card rounded-3xl p-8 md:p-12 border border-line bg-card shadow-xs space-y-8">
                <div>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-ink">
                    Tell us about your project
                  </h2>
                  <p className="text-taupe text-sm mt-1">
                    Fill out the strategy details below or start a direct discussion.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-taupe uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm bg-stone-50 border border-line rounded-xl text-ink placeholder:text-taupe/50 focus:outline-none focus:border-bronze transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-taupe uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm bg-stone-50 border border-line rounded-xl text-ink placeholder:text-taupe/50 focus:outline-none focus:border-bronze transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-taupe uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm bg-stone-50 border border-line rounded-xl text-ink placeholder:text-taupe/50 focus:outline-none focus:border-bronze transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Industry Pills */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-taupe uppercase tracking-wider mb-2.5">
                      Your Industry Vertical
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {industries.map((ind) => (
                        <button
                          key={ind}
                          type="button"
                          onClick={() => setForm({ ...form, industry: ind })}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                            form.industry === ind
                              ? "bg-bronze text-white font-bold shadow-xs"
                              : "bg-stone-50 text-taupe border border-line hover:border-bronze"
                          }`}
                        >
                          {ind}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Checkboxes */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-taupe uppercase tracking-wider mb-2.5">
                      Services Needed (Select all that apply)
                    </label>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {serviceOptions.map((serv) => {
                        const isSelected = form.selectedServices.includes(serv);
                        return (
                          <button
                            key={serv}
                            type="button"
                            onClick={() => toggleService(serv)}
                            className={`p-3 rounded-xl text-xs font-semibold text-left flex items-center gap-2.5 transition-all border ${
                              isSelected
                                ? "bg-bronze/10 border-bronze text-ink"
                                : "bg-stone-50 border-line text-taupe hover:border-bronze/50"
                            }`}
                          >
                            <CheckCircle2 size={15} className={isSelected ? "text-bronze" : "text-stone-300"} />
                            <span>{serv}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-taupe uppercase tracking-wider mb-2.5">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm({ ...form, budget: b })}
                          className={`py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all border ${
                            form.budget === b
                              ? "bg-bronze text-white border-bronze shadow-xs"
                              : "bg-stone-50 text-taupe border-line hover:border-bronze/50"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-taupe uppercase tracking-wider mb-2">
                      Project Details & Specific Goals
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm bg-stone-50 border border-line rounded-xl text-ink placeholder:text-taupe/50 focus:outline-none focus:border-bronze transition-colors resize-none"
                      placeholder="Tell us about your brand, goals, timeline, and any custom requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-glow bg-bronze hover:bg-bronze/90 text-white font-semibold text-sm py-4 px-8 rounded-xl shadow-md flex items-center justify-center gap-2.5"
                  >
                    <span>{loading ? "Sending Strategy Request..." : "Schedule Free Strategy Session"}</span>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* WhatsApp Quick Chat Action Box */}
              <div className="glass-card rounded-3xl p-7 border border-line bg-card shadow-xs space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono">
                  <MessageSquare size={14} />
                  <span>Instant Quick Response</span>
                </div>

                <h3 className="font-heading font-bold text-xl text-ink">
                  Need a faster response? Chat on WhatsApp
                </h3>

                <p className="text-taupe text-xs leading-relaxed">
                  Connect directly with our strategy head on WhatsApp for instant discussions on web engineering, 3D stands, or booth gamification.
                </p>

                <a
                  href="https://wa.me/918169767685?text=Hello%20SocioKraft%2C%20I%20want%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
                >
                  <Phone size={16} />
                  <span>Chat Direct on WhatsApp</span>
                </a>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email Support",
                    value: "sociokraft@gmail.com",
                    href: "mailto:sociokraft@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Direct Phone",
                    value: "+91 8169767685",
                    href: "tel:+918169767685",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram Portfolio",
                    value: "@sociokraft_",
                    href: "https://www.instagram.com/sociokraft_?igsh=MXVhbW9pNGNtdzFuNA%3D%3D",
                  },
                  {
                    icon: MapPin,
                    label: "Agency Location",
                    value: "Udaipur, Rajasthan, India",
                    sub: "Serving clients across India & Globally",
                  }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-card rounded-2xl p-5 border border-line bg-card flex items-center gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-stone-100 border border-line flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-bronze" />
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase text-taupe font-semibold block">
                        {item.label}
                      </span>

                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-heading font-bold text-sm text-ink hover:text-bronze transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-heading font-bold text-sm text-ink">{item.value}</p>
                      )}

                      {item.sub && (
                        <span className="text-[10px] text-taupe font-mono block mt-0.5">{item.sub}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time Guarantee Box */}
              <div className="glass-card rounded-2xl p-5 border border-line bg-stone-50 text-xs text-taupe space-y-2">
                <div className="flex items-center gap-2 font-mono text-bronze font-bold">
                  <ShieldCheck size={16} />
                  <span>SocioKraft NDA & Response Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed text-taupe">
                  All discussions and project concepts are strictly protected under confidentiality. We guarantee a response within 24 hours.
                </p>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
