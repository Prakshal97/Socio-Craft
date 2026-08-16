import { useState } from "react";
import { Calculator, TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GrowthCalculator = () => {
  const [monthlyInquiries, setMonthlyInquiries] = useState<number>(30);
  const [avgPatientValue, setAvgPatientValue] = useState<number>(5000);

  // Projections
  const estimatedSurgeInquiries = Math.round(monthlyInquiries * 2.8);
  const additionalMonthlyRevenue = Math.round((estimatedSurgeInquiries - monthlyInquiries) * (avgPatientValue * 0.35));

  return (
    <div className="glass-card rounded-3xl p-8 md:p-12 border border-indigo-500/25 bg-slate-900/60 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Calculator size={14} />
            <span>Interactive ROI & Patient Growth Estimator</span>
          </div>

          <h3 className="font-heading font-extrabold text-2xl md:text-4xl text-white">
            Calculate your practice growth potential
          </h3>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            See how Sociocraft's SEO, conversion web design, and digital marketing can boost your practice inquiries and monthly revenue.
          </p>

          <div className="space-y-6 pt-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Current Monthly Patient Inquiries: <strong className="text-emerald-400">{monthlyInquiries}</strong></span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={monthlyInquiries}
                onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Avg Patient Procedure Value (₹): <strong className="text-indigo-400">₹{avgPatientValue.toLocaleString('en-IN')}</strong></span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={avgPatientValue}
                onChange={(e) => setAvgPatientValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="w-full lg:w-96 bg-slate-950/90 border border-indigo-500/30 p-7 rounded-2xl space-y-6 text-center shadow-xl">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Estimated Inquiries With Sociocraft</span>
            <div className="font-heading font-black text-4xl text-emerald-400 flex items-center justify-center gap-2">
              <TrendingUp size={28} />
              <span>{estimatedSurgeInquiries} / mo</span>
            </div>
            <span className="text-[11px] text-emerald-400/80 font-mono">+180% Avg Lead Surge</span>
          </div>

          <div className="border-t border-indigo-500/20 pt-4 space-y-1">
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Projected Additional Revenue</span>
            <div className="font-heading font-black text-3xl text-indigo-300">
              +₹{additionalMonthlyRevenue.toLocaleString('en-IN')} / mo
            </div>
          </div>

          <Link
            to="/contact"
            className="w-full btn-glow gradient-primary text-white text-xs md:text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg"
          >
            <span>Claim Your Strategy Plan</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GrowthCalculator;
