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
        toast.success("Strategy session request sent successfully! 🚀 Our team will respond within 24 hours.");
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
    <div className="min-h-screen bg-[#0A0F1D] text-white selection:bg-indigo-500/30 selection:text-white">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] aurora-glow-1 blur-[140px] rounded-full pointer-events-none" />

        <div className="container-narrow text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              Schedule Your Strategy Session
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6 max-w-4xl mx-auto tracking-tight">
              Let's craft your next digital <br className="hidden sm:block" />
              <span className="gradient-text">growth engine</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Ready to elevate your online presence, 3D exhibition booth, booth gamification, or custom software? Tell us about your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="pb-20 md:pb-28">
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
              <div className="glass-card rounded-3xl p-8 md:p-12 border border-indigo-500/25 bg-slate-900/60 shadow-2xl space-y-8">
                <div>
                  <h2 className="font-heading font-black text-2xl md:text-3xl text-white">
                    Tell us about your project
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Fill out the strategy details below or start a direct discussion.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm bg-slate-950/90 border border-indigo-500/20 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm bg-slate-950/90 border border-indigo-500/20 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm bg-slate-950/90 border border-indigo-500/20 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Industry Pills */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
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
                              ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                              : "bg-slate-950/80 text-slate-300 border border-indigo-500/20 hover:border-indigo-400"
                          }`}
                        >
                          {ind}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Checkboxes */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
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
                                ? "bg-indigo-600/30 border-indigo-400 text-white"
                                : "bg-slate-950/80 border-indigo-500/20 text-slate-300 hover:border-indigo-400/50"
                            }`}
                          >
                            <CheckCircle2 size={15} className={isSelected ? "text-emerald-400" : "text-slate-600"} />
                            <span>{serv}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
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
                              ? "bg-indigo-600 text-white border-indigo-400 shadow-md"
                              : "bg-slate-950/80 text-slate-300 border-indigo-500/20 hover:border-indigo-400/50"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Project Details & Specific Goals
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm bg-slate-950/90 border border-indigo-500/20 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
                      placeholder="Tell us about your brand, goals, timeline, and any custom requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-glow gradient-primary text-white font-semibold text-sm py-4 px-8 rounded-xl shadow-2xl flex items-center justify-center gap-2.5"
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
              <div className="glass-card rounded-3xl p-7 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-slate-900/60 to-slate-950 shadow-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <MessageSquare size={14} />
                  <span>Instant Quick Response</span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white">
                  Need a faster response? Chat on WhatsApp
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed">
                  Connect directly with our strategy head on WhatsApp for instant discussions on web engineering, 3D stands, or booth gamification.
                </p>

                <a
                  href="https://wa.me/918169767685?text=Hello%20SocioKraft%2C%20I%20want%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
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
                    className="glass-card rounded-2xl p-5 border border-indigo-500/20 bg-slate-900/40 flex items-center gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-indigo-400" />
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                        {item.label}
                      </span>

                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-heading font-bold text-sm text-white hover:text-emerald-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-heading font-bold text-sm text-white">{item.value}</p>
                      )}

                      {item.sub && (
                        <span className="text-[10px] text-slate-400 font-mono block mt-0.5">{item.sub}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time Guarantee Box */}
              <div className="glass-card rounded-2xl p-5 border border-indigo-500/15 bg-slate-900/30 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 font-mono text-emerald-400 font-bold">
                  <ShieldCheck size={16} />
                  <span>SocioKraft NDA & Response Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-400">
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
