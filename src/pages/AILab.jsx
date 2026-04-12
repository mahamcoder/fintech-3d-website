import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Activity, Network, Database, Cpu, 
  ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AILab = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 pt-40 pb-24 bg-sapforce-bg overflow-hidden relative z-10 border-b border-black/5">
        {/* Subtle Neural Network / Data Streams Vis Placeholder */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.04] via-transparent to-transparent pointer-events-none"></div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,20 50,50 T100,50 Q75,80 50,50 T0,50" fill="none" stroke="black" strokeWidth="0.2"/>
          <path d="M0,60 Q35,10 50,60 T100,30 Q65,100 50,60 T0,60" fill="none" stroke="black" strokeWidth="0.1"/>
        </svg>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 inline-block">The AI Lab</span>
            <h1 className="text-4xl md:text-[4.5rem] font-medium tracking-tighter text-black leading-[1.05] mb-8">
              Engineering Intelligent Systems <br className="hidden md:block"/>
              <span className="text-gray-400">for Financial Markets.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
              Proprietary AI agents, automation systems, and financial infrastructure designed to transform raw data into actionable investment intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="#products">
                 <Button variant="primary" className="w-full sm:w-auto px-8 py-4">Explore Products</Button>
              </Link>
              <Link to="/contact">
                 <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-black border-black/10 hover:border-black">Request Integration</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CORE IDEA SECTION (INTRO BLOCK) */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none mb-8">
              From Analysis to Autonomy
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-10">
              We do not just use AI tools—we build them. This laboratory builds autonomous bridges between raw financial data and intelligent capital allocation. Our systems are designed to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
               <div className="flex items-center gap-3 bg-[#F7F8F9] p-4 rounded-xl border border-black/5">
                 <CheckCircle2 size={18} className="text-sapforce-accent shrink-0" />
                 <span className="font-semibold text-gray-800">Ingest financial data automatically</span>
               </div>
               <div className="flex items-center gap-3 bg-[#F7F8F9] p-4 rounded-xl border border-black/5">
                 <CheckCircle2 size={18} className="text-sapforce-accent shrink-0" />
                 <span className="font-semibold text-gray-800">Analyze markets in real time</span>
               </div>
               <div className="flex items-center gap-3 bg-[#F7F8F9] p-4 rounded-xl border border-black/5">
                 <CheckCircle2 size={18} className="text-sapforce-accent shrink-0" />
                 <span className="font-semibold text-gray-800">Generate deterministic valuation outputs</span>
               </div>
               <div className="flex items-center gap-3 bg-[#F7F8F9] p-4 rounded-xl border border-black/5">
                 <CheckCircle2 size={18} className="text-sapforce-accent shrink-0" />
                 <span className="font-semibold text-gray-800">Reduce human dependency in execution</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — MAIN PRODUCTS GRID */}
      <section id="products" className="py-24 bg-[#F7F8F9] relative z-10 scroll-mt-20 border-y border-black/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center md:text-left mb-16">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">Product Engine</span>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
              Proprietary Offerings
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white border border-black/[0.03] p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-[#f4f5f7] flex items-center justify-center text-gray-600 group-hover:bg-[#111] group-hover:text-[#59918F] transition-colors duration-500">
                <Brain size={22} className="transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">Agentic Stock Analysis Engine</h3>
              <p className="text-gray-500 font-medium leading-relaxed flex-grow mb-6 text-sm">
                Autonomous AI agents that analyze SEC filings, earnings calls, macroeconomic data, and market sentiment to generate real-time intrinsic valuations.
              </p>
              <div className="space-y-2 relative z-10 w-full mb-4">
                 <div className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Key Abilities</div>
                 <div className="text-[13px] font-semibold text-gray-700 pb-1 border-b border-black/5">Fundamental analysis automation</div>
                 <div className="text-[13px] font-semibold text-gray-700 pb-1 border-b border-black/5">Earnings transcript parsing</div>
                 <div className="text-[13px] font-semibold text-gray-700">Macro indicator synthesis</div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white border border-black/[0.03] p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-[#f4f5f7] flex items-center justify-center text-gray-600 group-hover:bg-[#111] group-hover:text-[#59918F] transition-colors duration-500">
                <Activity size={22} className="transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">Technical Market Agents</h3>
              <p className="text-gray-500 font-medium leading-relaxed flex-grow mb-6 text-sm">
                Quant-driven AI systems for pattern recognition, momentum tracking, and automated technical chart interpretation.
              </p>
              <div className="space-y-2 relative z-10 w-full mb-4">
                 <div className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Key Abilities</div>
                 <div className="text-[13px] font-semibold text-gray-700 pb-1 border-b border-black/5">Trend detection</div>
                 <div className="text-[13px] font-semibold text-gray-700 pb-1 border-b border-black/5">Signal generation</div>
                 <div className="text-[13px] font-semibold text-gray-700">Market structure mapping</div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white border border-black/[0.03] p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-[#f4f5f7] flex items-center justify-center text-gray-600 group-hover:bg-[#111] group-hover:text-[#59918F] transition-colors duration-500">
                <Network size={22} className="transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">AI Automation Workflows</h3>
              <p className="text-gray-500 font-medium leading-relaxed flex-grow mb-6 text-sm">
                End-to-end autonomous workflows that handle data extraction, financial structuring, and preliminary diagnostics.
              </p>
              <div className="space-y-2 relative z-10 w-full mb-4">
                 <div className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Key Abilities</div>
                 <div className="text-[13px] font-semibold text-gray-700 pb-1 border-b border-black/5">Document parsing automation</div>
                 <div className="text-[13px] font-semibold text-gray-700 pb-1 border-b border-black/5">Data normalization</div>
                 <div className="text-[13px] font-semibold text-gray-700">Financial report generation</div>
              </div>
            </motion.div>
            
            {/* Row 2 - Centered / Expanded Items */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white border border-black/[0.03] p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col lg:col-span-1 lg:col-start-1 h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-[#f4f5f7] flex items-center justify-center text-gray-600 group-hover:bg-[#111] group-hover:text-[#59918F] transition-colors duration-500">
                <Database size={22} className="transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">Financial API Infrastructure</h3>
              <p className="text-gray-500 font-medium leading-relaxed flex-grow mb-6 text-sm">
                Enterprise-grade APIs enabling clients to integrate proprietary valuation and risk models directly into their systems.
              </p>
              <div className="space-y-2 relative z-10 w-full mb-4">
                 <div className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Key Abilities</div>
                 <div className="text-[13px] font-semibold text-gray-700 pb-1 border-b border-black/5">Secure API endpoints</div>
                 <div className="text-[13px] font-semibold text-gray-700 pb-1 border-b border-black/5">Scalable model access</div>
                 <div className="text-[13px] font-semibold text-gray-700">Integration-ready architecture</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="bg-white border border-black/[0.03] p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col lg:col-span-2 h-full">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                 <div className="flex-1">
                    <div className="mb-8 w-14 h-14 rounded-full bg-[#f4f5f7] flex items-center justify-center text-gray-600 group-hover:bg-[#111] group-hover:text-[#59918F] transition-colors duration-500">
                      <Cpu size={22} className="transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">Bespoke LLM Solutions</h3>
                    <p className="text-gray-500 font-medium leading-relaxed flex-grow mb-6 text-sm">
                      Custom-trained language models optimized for finance, legal documents, underwriting, and investment research. We lock down knowledge silos.
                    </p>
                 </div>
                 <div className="flex-1 flex flex-col justify-end">
                    <div className="space-y-2 relative z-10 w-full mb-4 bg-[#F7F8F9] p-6 rounded-2xl border border-black/5 inner-shadow">
                       <div className="text-[11px] font-bold tracking-widest text-black/40 uppercase mb-3">Core Pillars</div>
                       <div className="flex items-center gap-3 pb-2 border-b border-black/5"><CheckCircle2 size={16} className="text-sapforce-accent"/><span className="text-[13px] font-semibold text-gray-700">Private model training</span></div>
                       <div className="flex items-center gap-3 pb-2 border-b border-black/5 mt-2"><CheckCircle2 size={16} className="text-sapforce-accent"/><span className="text-[13px] font-semibold text-gray-700">Domain-specific tuning</span></div>
                       <div className="flex items-center gap-3 mt-2"><CheckCircle2 size={16} className="text-sapforce-accent"/><span className="text-[13px] font-semibold text-gray-700">Secure knowledge isolation</span></div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS SECTION (PROCESS FLOW) */}
      <section className="py-24 md:py-32 bg-white relative z-10 border-b border-black/5">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
             <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">Process</span>
             <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
               How the AI Lab Operates
             </h2>
          </motion.div>

          <div className="w-full bg-[#FAFAFA] border border-black/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-inner">
            <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4 items-center md:items-start max-w-5xl mx-auto">
               {[
                 { num: "01", title: "Data Ingestion" },
                 { num: "02", title: "Model Processing" },
                 { num: "03", title: "AI Analysis Layer" },
                 { num: "04", title: "Optimization Engine" },
                 { num: "05", title: "Output Delivery" }
               ].map((step, idx) => (
                 <div key={idx} className="flex flex-col items-center text-center relative group w-full">
                    {/* Connecting line for desktop */}
                    {idx !== 4 && (
                      <div className="hidden md:block absolute top-6 left-[60%] w-full h-[1px] bg-black/5 transition-colors group-hover:bg-sapforce-accent"></div>
                    )}
                    
                    <div className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center text-sm font-black text-black relative z-10 mb-6 group-hover:border-sapforce-accent group-hover:scale-110 group-hover:bg-sapforce-accent transition-all shadow-sm">
                      {step.num}
                    </div>
                    
                    <h4 className="text-black font-semibold text-sm tracking-tight px-2 leading-tight">
                      {step.title}
                    </h4>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DIFFERENTIATION SECTION */}
      <section className="py-24 bg-[#F7F8F9] relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">The Advantage</span>
              <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none mb-12">
                Why This AI Lab Is Different
              </h2>
              
              <div className="space-y-4">
                {[
                  "Built specifically for financial markets (not generic AI tools)",
                  "Designed for institutional-scale decision-making",
                  "Focused on automation of high-value workflows",
                  "Integrated with proprietary financial frameworks",
                  "Enterprise-grade security and scalability"
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-black/5 rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-[#111] flex flex-shrink-0 items-center justify-center">
                      <ShieldCheck size={18} className="text-[#59918F]" />
                    </div>
                    <span className="text-black font-semibold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full min-h-[400px] w-full rounded-[2.5rem] bg-white border border-black/5 relative overflow-hidden shadow-xl p-12 flex flex-col justify-center items-center text-center">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sapforce-accent/10 to-transparent"></div>
               <div className="w-24 h-24 rounded-full bg-[#111] flex items-center justify-center text-[#59918F] shadow-[0_10px_40px_rgba(89, 145, 143,0.2)] mix-blend-multiply relative z-10 mb-8 border border-white/10">
                 <Cpu size={36} />
               </div>
               <h3 className="text-2xl font-bold tracking-tighter text-black mb-4 relative z-10">Institutional Autonomy</h3>
               <p className="text-gray-500 font-medium relative z-10 max-w-sm">
                 We merge deep capital market understanding with state-of-the-art algorithmic precision.
               </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA SECTION */}
      <section className="py-24 md:py-32 bg-white relative z-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>
        
        {/* Abstract subtle data mesh */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] border border-black/5 p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
            style={{ background: "linear-gradient(to bottom right, #ffffff, #92d5d8, #052e23)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-[3.5rem] font-medium text-black mb-6 leading-[1.1] tracking-tighter">
                Build Intelligence Into <br className="hidden md:block"/><span className="text-gray-400">Your Financial Systems</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                Integrate proprietary AI systems that transform how your organization analyzes, evaluates, and executes investment decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto px-8 py-4">Book Technical Demo</Button>
                </Link>
                <Link to="#portal">
                  <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-black border-black/10 hover:border-black">Access Developer Portal</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
