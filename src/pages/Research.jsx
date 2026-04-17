import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DownloadCloud, LineChart, FileText, BrainCircuit, 
  ArrowUpRight, Globe2, LayoutTemplate, Layers, ChevronRight, Activity, Cpu
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Research = () => {
  return (
    <div className="w-full overflow-hidden bg-blue-50/20">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 pt-40 pb-24 bg-blue-50/20 overflow-hidden relative z-10 border-b border-black/5">
        {/* Subtle Data Grids / Charts */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.04] via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-[60%] opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(0deg, black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: 'center bottom' }}></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 inline-block">Research & Insights</span>
            <h1 className="text-4xl md:text-[4rem] font-medium tracking-tighter text-black leading-[1.05] mb-8">
              Where Institutional Research <br className="hidden md:block"/>
              <span className="text-gray-400">Becomes Strategic Advantage.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
             Not a general blog structured frameworks, macro deep dives and intelligence reports for institutional decision-makers, designed to inform decisions, protect positions and identify opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="#insights">
                 <Button variant="primary" className="w-full sm:w-auto px-8 py-4">Browse the Research Vault</Button>
              </Link>
              <Link to="#vault">
                 <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-black border-black/10 hover:border-black">Download Institutional Frameworks</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CORE VALUE INTRO SECTION */}
      <section className="py-24 bg-white relative z-10 ">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none mb-8">
              This Is Not a Newsletter. This Is an Intelligence System.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-10">
              Our Research Vault is a structured intelligence system built for capital allocators and senior decision-makers. Every report and analysis here uses the same methodologies deployed in active client mandates. We don't publish for reach—we publish for relevance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
               <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl text-sm font-semibold text-gray-800">Structured Financial Research</div>
               <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl text-sm font-semibold text-gray-800">Decision Frameworks</div>
               <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl text-sm font-semibold text-gray-800">Macro Market Intelligence</div>
               <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl text-sm font-semibold text-gray-800">Institutional Insights</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — INDUSTRY FRAMEWORKS VAULT */}
      <section id="vault" className="py-24 md:py-32 bg-[#F7F8F9] relative z-10 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
               <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">Standardized Access</span>
               <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
                 Proprietary Frameworks Deployed in Global Mandates
               </h2>
            </div>
            <p className="text-gray-500 font-medium md:mb-2 border-l-2 border-black/10 pl-4 max-w-xs text-sm">
              Proprietary structural templates deployed in active global mandates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <VaultCard 
               title="Capital Structure Optimization Framework" 
               desc="XLSX-based model for WACC forecasting, capital stack analysis, and optimal debt-to-equity structuring."
               icon={<LayoutTemplate size={20} />}
             />
             <VaultCard 
               title="Due Diligence Standardization Framework" 
               desc="A complete 40-point diagnostic checklist to standardize M&A, equity placement, and due diligence."
               icon={<Layers size={20} />}
             />
             <VaultCard 
               title="Energy and Infrastructure Valuation Templates" 
               desc="Valuation templates for long-duration energy assets and infrastructure, including phased waterfall distribution models."
               icon={<Globe2 size={20} />}
             />
             <VaultCard 
               title="Asset Management KPI System" 
               desc="Executive reporting framework with pre-built KPI dashboards and yield tracking modules for asset management teams."
               icon={<Activity size={20} />}
             />
             <VaultCard 
               title="Risk Assessment Framework Architecture" 
               desc="Probabilistic mapping protocols and scenario modeling tools to stress-test portfolios and quantify downside risk."
               icon={<FileText size={20} />}
             />
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5 — MACRO REPORTS & AI INSIGHTS SPLIT */}
      <section id="insights" className="py-24 md:py-32 bg-white relative z-10 border-y border-black/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-24">
            
            {/* Left Box - Macro Market Reports */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
               <div className="mb-10">
                 <div className="w-12 h-12 rounded-full bg-sapforce-dark flex items-center justify-center text-sapforce-accent mb-6 shadow-md"><LineChart size={20}/></div>
                 <h2 className="text-2xl md:text-[2.25rem] font-medium tracking-tighter text-black leading-none mb-4">Macro Market Intelligence</h2>
                 <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-md">Depth equivalent to a dedicated Wall Street research desk, structured specifically for capital allocators.</p>
               </div>
               
               <div className="space-y-4">
                  {[
                    { tag: "Global Economics", title: "Global Capital Flow Analysis: Structural Shifts in Q1 2026", date: "Q1 2026" },
                    { tag: "Fixed Income", title: "Fixed Income Outlook: Navigating Yield Compression in Sustained High-Rate Environments", date: "DEC 2025" },
                    { tag: "Monetary Policy", title: "Monetary Policy Impact on Real Estate Cap Rates & Valuations", date: "NOV 2025" },
                    { tag: "Equity Strategy", title: "Behavioral Patterns in Defensive Sector Rotation", date: "OCT 2025" },
                    { tag: "LP Movement", title: "LP Capital Flows: Institutional Allocation Shifts Across Markets", date: "SEP 2025" }
                  ].map((report, idx) => (
                    <div key={idx} className="group bg-white border border-black/5 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md hover:border-black/10 transition-all cursor-pointer">
                       <div>
                          <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">{report.tag}</div>
                          <h4 className="text-lg font-bold text-black tracking-tight">{report.title}</h4>
                       </div>
                       <div className="flex items-center gap-4 shrink-0 mt-2 sm:mt-0">
                          <span className="text-xs font-semibold text-gray-500">{report.date}</span>
                          <div className="w-8 h-8 rounded-full bg-sapforce-bg flex items-center justify-center text-gray-400 group-hover:bg-[#111] group-hover:text-white transition-colors">
                            <ArrowUpRight size={14}/>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>

            {/* Right Box - The Crossroads of AI & Finance */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full">
               <div className="h-full bg-sapforce-dark rounded-[3rem] p-10 md:p-14 relative overflow-hidden text-white shadow-2xl flex flex-col justify-between border border-white/5">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#92d5d8] blur-[100px] opacity-20 pointer-events-none"></div>
                  
                  <div className="relative z-10 mb-12">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 border border-white/5"><BrainCircuit size={20}/></div>
                    <h2 className="text-2xl md:text-[2.25rem] font-medium tracking-tighter text-white leading-none mb-4">At the Crossroads of <br/>AI & Finance</h2>
                    <p className="text-white/60 font-medium text-lg leading-relaxed max-w-sm">Forward-looking thought leadership exploring the bleeding edge of intellectual automation.</p>
                  </div>
                  
                  <div className="space-y-1 relative z-10">
                     {[
                       "How Generative AI Is Reshaping Investment Banking",
                       "Deterministic Automation in M&A Due Diligence",
                       "Algorithmic Research Acceleration & Financial Analysis",
                       "Large Language Models in Practical Financial Modeling",
                       "The Future Belongs to AI-Augmented Analysts"
                     ].map((insight, idx) => (
                       <div key={idx} className="flex gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group border-b border-white/5 last:border-0">
                          <Cpu size={18} className="text-sapforce-accent shrink-0 mt-1 opacity-80" />
                          <span className="font-semibold text-gray-200 text-lg group-hover:text-white leading-tight">{insight}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — FEATURED INSIGHTS GRID */}
      <section className="py-24 md:py-32 bg-sapforce-bg relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">Latest Intelligence</span>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
              Featured Insights
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InsightCard 
              tag="AI Strategy" 
              title="From Descriptive Dashboards to Autonomous Decision Engines"
              desc="While standard dashboards report what happened, sovereign AI agents dictate what to do. Examining the shift toward autonomous financial intelligence."
            />
            <InsightCard 
              tag="Macro Economics" 
              title="Capital Constraints & Financing Gaps in European Real Estate"
              desc="Maps widening structural financing gaps across European property markets and identifies strategies best positioned to capitalize on this dislocation."
            />
            <InsightCard 
              tag="Fintech" 
              title="API Architecture for High-Speed Trading & Zero-Trust Streams"
              desc="As trading velocity increases, institutional API architecture is undergoing a structural shift toward zero-trust streaming to secure massive surfaces."
            />
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA SECTION */}
      <section className="py-24 md:py-32 bg-white relative z-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>
        
        {/* Soft Faint Chart Line background */}
        <svg className="absolute inset-x-0 bottom-0 w-full h-[50%] opacity-[0.02] pointer-events-none" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path d="M0,300 L0,200 Q200,150 400,250 T800,100 L1000,50 L1000,300 Z" fill="black"/>
        </svg>

        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem]  p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
            style={{ background: "linear-gradient(to bottom right, #ffffff, #92d5d8, #4db9dc)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-[3.5rem] font-medium text-black mb-6 leading-[1.1] tracking-tighter">
                Stay at the Frontier of <br className="hidden md:block"/><span className="text-gray-600">Institutional Intelligence</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                Subscribe to receive fresh frameworks, macro reports, and AI insights. Designed exclusively for institutional decision-makers and capital allocators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="#subscribe">
                  <Button variant="primary" className="w-full sm:w-auto px-8 py-4">Subscribe to Research Updates</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-black border-black/10 hover:border-black">Request Full Research Access</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

const VaultCard = ({ title, desc, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc]  p-8 rounded-3xl group relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-md"
  >
    <div className="flex items-start justify-between mb-6">
       <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-colors border border-white/10">
         {icon}
       </div>
       <div className="px-3 py-1 bg-black backdrop-blur-md rounded-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">Frame</div>
    </div>
    <h3 className="text-xl font-bold mb-3 tracking-tight text-black leading-tight flex-grow">{title}</h3>
    <p className="text-black/70 font-medium text-sm mb-6">{desc}</p>
    
    <div className="flex items-center text-xs font-bold text-black gap-2 group-hover:gap-3 transition-all relative z-10 w-fit">
      <DownloadCloud size={14} className="text-black/60 group-hover:text-black" /> Download Framework
    </div>
  </motion.div>
);

const InsightCard = ({ tag, title, desc }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc]  p-10 rounded-[2.5rem] group relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-md"
  >
    <div className="text-[10px] font-black uppercase text-black/50 tracking-widest mb-4">{tag}</div>
    <h3 className="text-2xl font-bold mb-4 tracking-tight text-black leading-tight flex-grow">{title}</h3>
    <p className="text-black/70 font-medium leading-relaxed mb-8">{desc}</p>
    
    <div className="flex items-center text-sm font-bold text-white gap-2 group-hover:gap-3 transition-all relative z-10 w-fit border-b-2 border-transparent group-hover:border-white pb-1">
      Read Insight <ChevronRight size={16} />
    </div>
  </motion.div>
);
