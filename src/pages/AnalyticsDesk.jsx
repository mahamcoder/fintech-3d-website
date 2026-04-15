import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PieChart, Search, Building, LineChart,
  ArrowRight, ChevronRight, CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AnalyticsDesk = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 pt-40 pb-24 bg-blue-100 overflow-hidden relative z-10 border-b border-black/5">
        {/* Subtle Background Mesh / Abstract Grids */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.04] via-transparent to-transparent pointer-events-none"></div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="black" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 inline-block">The Analytics Desk</span>
            <h1 className="text-4xl md:text-[4.5rem] font-medium tracking-tighter text-black leading-[1.05] mb-8">
              Institutional Intelligence. <br className="hidden md:block" />
              <span className="text-gray-400">Precision Financial Execution.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
              Multi-industry financial consulting powered by advanced analytics, AI-assisted modeling, and institutional research frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="#services">
                <Button variant="primary" className="w-full sm:w-auto px-8 py-4">Explore Services</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-black border-black/10 hover:border-black">Request Consultation</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CORE SERVICES GRID */}
      <section id="services" className="py-24 md:py-32 bg-white relative z-10 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center md:text-left mb-16">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">Our Core Engines</span>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
              Core Analytics Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc]  p-10 md:p-12 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-xl cursor-pointer flex flex-col h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-sm group-hover:scale-110 transition-colors duration-500 border border-white/10 text-white">
                <PieChart size={22} className="transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-black leading-tight">Valuation Support</h3>
              <p className="text-black/70 font-medium leading-relaxed flex-grow mb-8 text-lg">
                Advanced DCF modeling, LBO analysis, comparable company valuation, intrinsic value modeling.
              </p>
              <div className="flex items-center text-sm font-bold text-black gap-2 group-hover:gap-3 transition-all relative z-10 w-fit">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc]  p-10 md:p-12 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-xl cursor-pointer flex flex-col h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-sm group-hover:scale-110 transition-colors duration-500 border border-white/10 text-white">
                <Search size={22} className="transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-black leading-tight">Due Diligence & Risk Analysis</h3>
              <p className="text-black/70 font-medium leading-relaxed flex-grow mb-8 text-lg">
                M&A diagnostics, financial health checks, investment risk frameworks, structured evaluation systems.
              </p>
              <div className="flex items-center text-sm font-bold text-black gap-2 group-hover:gap-3 transition-all relative z-10 w-fit">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc]  p-10 md:p-12 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-xl cursor-pointer flex flex-col h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-500 border border-white/10 text-white">
                <Building size={22} className="transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-black leading-tight">Asset Mgmt & Investor Relations</h3>
              <p className="text-black/70 font-medium leading-relaxed flex-grow mb-8 text-lg">
                Portfolio optimization, yield tracking, reporting dashboards, institutional investor communication systems.
              </p>
              <div className="flex items-center text-sm font-bold text-black gap-2 group-hover:gap-3 transition-all relative z-10 w-fit">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-10 md:p-12 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-xl cursor-pointer flex flex-col h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-500 border border-white/10 text-white">
                <LineChart size={22} className="transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-black leading-tight">Reporting & Market Research</h3>
              <p className="text-black/70 font-medium leading-relaxed flex-grow mb-8 text-lg">
                C-suite reporting dashboards, KPI frameworks, macro + micro market intelligence.
              </p>
              <div className="flex items-center text-sm font-bold text-black gap-2 group-hover:gap-3 transition-all relative z-10 w-fit">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SECTOR FOCUS SECTION */}
      <section className="py-32 bg-gray-50 relative z-10 border-y border-black/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/[0.02] to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl text-center md:text-left relative z-10">
          <div className="mb-16">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">Sectors</span>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-[1.05] max-w-3xl">
              Multi-Industry Expertise Across Global Capital Markets
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-5 justify-center md:justify-start">
            {[
              "Energy, Oil & Gas",
              "Infrastructure & Utilities",
              "Investment Banking (RE & Infra)",
              "REITs & Public Real Estate Markets",
              "Hospitality & Property Management",
              "Banking & Mortgage Services",
              "Real Estate Financial Analytics"
            ].map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc]  rounded-full px-6 py-4 shadow-sm flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-sapforce-accent shadow-sm"></div>
                <span className="text-black font-semibold tracking-tight">{sector}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — SPECIALIZED DEEP CAPABILITY BLOCK & STRATEGIC FLOW */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Deep Capability Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
            <motion.div className="lg:col-span-5" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">Deep Capability</span>
              <h2 className="text-3xl md:text-[3rem] font-medium tracking-tighter text-black leading-[1.05] mb-8">
                Real Estate Financial Intelligence Suite
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                Our bespoke methodologies process vast property data into structured valuations. We serve as a secret weapon for institutional real estate groups, structuring complex deals with flawless quantitative rigor.
              </p>

              <ul className="space-y-4">
                {[
                  "Acquisition modeling",
                  "Ground-up development analysis",
                  "Cash flow structuring",
                  "LP/GP waterfall structures",
                  "Asset-level underwriting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 size={20} className="text-gray-400" />
                    <span className="text-black font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Diagram / Visual side */}
            <motion.div className="lg:col-span-7 h-full min-h-[400px] w-full rounded-[2.5rem] bg-[#FAFAFA] border border-black/5 relative overflow-hidden shadow-inner flex flex-col justify-center items-center p-8 md:p-16" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="innerGrid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="black" strokeWidth="1" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#innerGrid)" />
              </svg>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center relative w-full h-full max-w-xl text-center">
                <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm flex-1 w-full relative z-10 hover:-translate-y-1 transition-transform">
                  <div className="text-[10px] font-black tracking-widest text-gray-400 mb-2">PHASE 1</div>
                  <div className="text-lg font-bold text-black">Capital</div>
                </div>
                <ChevronRight size={24} className="text-gray-300 hidden md:block" />

                <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm flex-1 w-full relative z-10 hover:-translate-y-1 transition-transform">
                  <div className="text-[10px] font-black tracking-widest text-gray-400 mb-2">PHASE 2</div>
                  <div className="text-lg font-bold text-black">Modeling</div>
                </div>
                <ChevronRight size={24} className="text-gray-300 hidden md:block" />

                <div className="bg-sapforce-dark border border-white/10 rounded-2xl p-6 shadow-sm flex-1 w-full relative z-10 transform md:scale-110 hover:-translate-y-1 transition-transform">
                  <div className="text-[10px] font-black tracking-widest text-sapforce-accent mb-2">PHASE 3</div>
                  <div className="text-lg font-bold text-white">AI Analysis</div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-sapforce-accent blur-xl opacity-20 rounded-full"></div>
                </div>
                <ChevronRight size={24} className="text-gray-300 hidden md:block" />

                <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm flex-1 w-full relative z-10 hover:-translate-y-1 transition-transform">
                  <div className="text-[10px] font-black tracking-widest text-gray-400 mb-2">PHASE 4</div>
                  <div className="text-lg font-bold text-black leading-tight">Investment Output</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Strategic Flow Section (Horizontal Process) */}
          <div className="w-full bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left text-white shadow-xl mt-12">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none blur-3xl"></div>

            <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-4 items-center md:items-start max-w-5xl mx-auto">
              {[
                { num: "01", title: "Data Ingestion" },
                { num: "02", title: "Financial Modeling" },
                { num: "03", title: "AI-Assisted Analysis" },
                { num: "04", title: "Risk Optimization" },
                { num: "05", title: "Investment Output" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative group w-full">
                  {/* Connecting line for desktop */}
                  {idx !== 4 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-full h-[1px] bg-black transition-colors group-hover:scale-110"></div>
                  )}

                  <div className="w-12 h-12 rounded-full border border-white/20 bg-[#1a1a1a] flex items-center justify-center text-sm font-black text-white relative z-10 mb-6 group-hover:border-white/60 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] shadow-white/0">
                    {step.num}
                    {/* Inner glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                  </div>

                  <h4 className="text-white font-semibold text-lg tracking-tight px-4 leading-tight">
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — FINAL CTA SECTION */}
      <section className="pb-24 md:pb-32 bg-white relative z-10 flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem]  p-10 md:p-20 text-center relative overflow-hidden shadow-xl"
            style={{ background: "linear-gradient(to bottom right, #ffffff, #92d5d8, #4db9dc)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sapforce-accent/10 via-transparent to-transparent opacity-60"></div>

            <svg className="absolute inset-x-0 bottom-0 w-full h-[150px] opacity-[0.03] pointer-events-none" viewBox="0 0 1440 150" preserveAspectRatio="none">
              <path d="M0,50 C300,150 600,0 1440,100 L1440,150 L0,150 Z" fill="black" />
            </svg>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-[3.5rem] font-medium text-black mb-6 leading-[1.1] tracking-tighter">
                Turn Complexity into <br className="hidden md:block" /><span className="text-gray-400">Capital Clarity</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                Engage institutional-grade consulting powered by AI systems built for scale, precision, and global markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto px-8 py-4">Schedule Strategic Call</Button>
                </Link>
                <Link to="#portal">
                  <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-black border-black/10 hover:border-black bg-white/50 backdrop-blur-md">Access Client Portal</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
