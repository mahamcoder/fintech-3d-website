import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Lock, BrainCircuit, Workflow, Zap, ShieldCheck, 
  Settings2, Activity, Database, Server, Terminal,
  TrendingUp, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ProprietaryAlpha = () => {
  return (
    <div className="w-full overflow-hidden bg-blue-50/20">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 pt-40 pb-24 bg-blue-50/20 overflow-hidden relative z-10 border-b border-black/5">
        {/* Subtle Encrypted Data / Neural Net Placeholder */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.05] via-transparent to-transparent pointer-events-none"></div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M 0 20 C 30 20 50 80 100 80" stroke="black" strokeWidth="0.2" fill="none" />
           <path d="M 0 40 C 40 40 60 90 100 90" stroke="black" strokeWidth="0.1" fill="none" />
           <path d="M 0 60 C 20 60 80 10 100 10" stroke="#4db9dc" strokeWidth="0.3" fill="none" />
        </svg>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 inline-block">PROPRIETARY ALPHA: CUSTOM AI MODELS</span>
            <h1 className="text-4xl md:text-[3.5rem] font-medium tracking-tighter text-black leading-[1.05] mb-8">
              Your Investment Strategy.  <br className="hidden md:block"/>
              <span className="text-gray-400"> Encoded Into a Sovereign AI That Thinks Like You Do.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
             A secure, isolated AI environment that transforms your historical trades, valuation frameworks, and risk parameters into a custom model built on your institutional logic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                 <Button variant="primary" className="w-full sm:w-auto px-8 py-4">Request a Private Demonstration</Button>
              </Link>
              <Link to="#features">
                 <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-black border-black/10 hover:border-black">Speak Directly With an AI Architect</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CORE CONCEPT SECTION */}
      <section className="py-24 md:py-32 bg-white relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Visual Architecture abstraction */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full min-h-[500px] w-full rounded-[2.5rem] bg-gradient-to-br from-white via-[var(--color-sapforce-accent)] to-[#4db9dc]  relative overflow-hidden flex items-center justify-center p-8 shadow-xl">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
               
               <div className="relative z-10 w-full max-w-[320px] flex flex-col gap-4">
                  <div className="bg-white backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-sm text-center">
                     <span className="text-[10px] font-black uppercase text-black/50 tracking-widest block mb-1">Secure Client Data Upload</span>
                     <div className="flex justify-center gap-2 mt-2">
                        <div className="px-3 py-1 bg-black rounded-md text-xs font-semibold text-white">Trades</div>
                        <div className="px-3 py-1 bg-black rounded-md text-xs font-semibold text-white">Models</div>
                        <div className="px-3 py-1 bg-black rounded-md text-xs font-semibold text-white">Research</div>
                     </div>
                  </div>
                  
                  <div className="flex justify-center my-1 text-white/30"><ChevronRight size={20} className="rotate-90"/></div>
                  
                  <div className="bg-sapforce-dark p-6 rounded-3xl shadow-[0_10px_40px_rgba(255,255,255,0.05)] text-center relative overflow-hidden border border-white/10">
                     <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-sapforce-accent to-transparent opacity-50"></div>
                     <BrainCircuit size={32} className="text-sapforce-accent mx-auto mb-3" />
                     <span className="text-[11px] font-black uppercase text-sapforce-accent tracking-widest block mb-1">Isolated AI Training Environment</span>
                     <span className="text-sm font-semibold text-white block">Behavioral Pattern & Logic Synthesis</span>
                  </div>
                  
                  <div className="flex justify-center my-1 text-white"><ChevronRight size={20} className="rotate-90"/></div>
                  
                  <div className="bg-white backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-sm text-center relative">
                     <div className="absolute inset-0 bg-white rounded-2xl"></div>
                     <span className="text-[10px] font-black uppercase text-black tracking-widest block mb-1 relative z-10">Sovereign Intelligence Output</span>
                     <span className="text-sm font-bold text-black relative z-10">Your Model, Your Rules</span>
                  </div>
               </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">The Concept</span>
              <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none mb-8">
                Your Competitive Edge, Encoded and Scaled
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
              Your decision history becomes your edge. We train a private AI on your trades, valuation models, and risk rules to create a sovereign system that scales your analytical logic across assets without exposing your methodology.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-[#F7F8F9] p-4 rounded-xl border border-black/5">
                  <Lock size={20} className="text-sapforce-accent shrink-0" />
                  <span className="text-black font-semibold">Private, sovereign AI model trained on your proprietary data</span>
                </li>
                <li className="flex items-center gap-4 bg-[#F7F8F9] p-4 rounded-xl border border-black/5">
                  <Activity size={20} className="text-sapforce-accent shrink-0" />
                  <span className="text-black font-semibold">Learns behavioral patterns from your historical investment decisions</span>
                </li>
                <li className="flex items-center gap-4 bg-[#F7F8F9] p-4 rounded-xl border border-black/5">
                  <Zap size={20} className="text-sapforce-accent shrink-0" />
                  <span className="text-black font-semibold">Scales your firm's decision-making logic across thousands of assets</span>
                </li>
                <li className="flex items-center gap-4 bg-[#F7F8F9] p-4 rounded-xl border border-black/5">
                  <ShieldCheck size={20} className="text-sapforce-accent shrink-0" />
                  <span className="text-black font-semibold">Fully isolated environment with zero cross-client data exposure</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS SECTION (VERY IMPORTANT) */}
      <section className="py-24  relative z-10  overflow-hidden">
        {/* Subtle grid on dark bg */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-100 blur-[120px] rounded-full pointer-events-none "></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-24">
             <span className="text-[10px] font-black text-sapforce-accent uppercase tracking-[0.3em] mb-4 inline-block">The Process</span>
             <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
               From Your Data to Your Sovereign AI<br/>
               <span className="text-gray-400"> How Proprietary Alpha Works</span>
             </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between relative gap-12 md:gap-4 items-center md:items-start max-w-5xl mx-auto">
             {[
               { num: "01", icon: <Database/>, title: "Secure Data Submission", desc: "Upload trades, models, and risk frameworks via our encrypted portal." },
               { num: "02", icon: <Lock/>, title: "Isolated Environment Setup", desc: "A fully private AI training instance where your data remains exclusively yours." },
               { num: "03", icon: <BrainCircuit/>, title: "Behavioral Model Training", desc: "Our architects train a bespoke AI on your data, learning your firm's exact evaluation patterns." },
               { num: "04", icon: <Terminal/>, title: "Sovereign AI Deployment", desc: "Your private engine is deployed, ready to scale your analytical capacity." }
             ].map((step, idx) => (
               <div key={idx} className="flex flex-col items-center text-center relative group w-full">
                  {/* Connecting line for desktop */}
                  {idx !== 3 && (
                    <div className="hidden md:block absolute top-[40px] left-[65%] w-[80%] h-[1px] bg-black transition-colors group-hover:bg-sapforce-accent/50"></div>
                  )}
                  
                  <div className="w-20 h-20 rounded-full border border-white/10 bg-sapforce-dark flex flex-col items-center justify-center text-white relative z-10 mb-6 group-hover:border-sapforce-accent/50 group-hover:scale-110 transition-all shadow-2xl">
                    {React.cloneElement(step.icon, { size: 24, className: "group-hover:text-sapforce-accent transition-colors" })}
                  </div>
                  
                  <h4 className="text-black font-semibold text-lg tracking-tight px-2 leading-tight mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-medium">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — KEY FEATURES SECTION */}
      <section id="features" className="py-24 md:py-32 bg-[#F7F8F9] relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center md:text-left mb-16">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">Differentiators</span>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
              Six Reasons Proprietary <br/>
              <span className="text-gray-400">Alpha Outperforms Generic AI Tools</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<ShieldCheck size={22} />} 
              title="Complete Data Isolation by Architecture" 
              desc="Every client model lives in its own secured compute environment. There is no shared infrastructure, no co-mingled data, and no risk of your analytical frameworks being exposed."
              delay={0.1}
            />
            <FeatureCard 
              icon={<BrainCircuit size={22} />} 
              title="Deep Behavioral Pattern Learning" 
              desc="The model learns how your firm thinks, internalizing the subtle weightings and thresholds embedded in your investment decisions."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Workflow size={22} />} 
              title="Institutional Knowledge at Computational Scale" 
              desc="The subjective expertise of your senior analysts is translated into reproducible intelligence that scales across thousands of opportunities without dilution."
              delay={0.3}
            />
            <FeatureCard 
              icon={<Zap size={22} />} 
              title="Sub-Second Asset Screening at Massive Scale" 
              desc="Apply your firm's exact investment criteria to thousands of assets simultaneously. Analyze in seconds what used to take weeks."
              delay={0.4}
            />
            <FeatureCard 
              icon={<Server size={22} />} 
              title="Full Sovereign Ownership of Your Model" 
              desc="You own your trained intelligence system outright. We architect it, but the model, outputs, and intellectual property belong entirely to you."
              delay={0.5}
            />
            <FeatureCard 
              icon={<Settings2 size={22} />} 
              title="Continuous Model Learning and Improvement" 
              desc="As you make new decisions, the model is retrained to incorporate them, ensuring your sovereign AI evolves alongside your methodology."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — ROI ENGINE AND USE CASES */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
            
            {/* ROI Engine */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col h-full bg-gradient-to-br from-white via-[var(--color-sapforce-accent)] to-[#4db9dc] rounded-[3rem] p-12  shadow-xl relative overflow-hidden">
               <div className="absolute -top-10 -right-10 text-white/5">
                  <TrendingUp size={200} strokeWidth={1} />
               </div>
               <div className="relative z-10">
                 <h2 className="text-3xl md:text-[2.75rem] font-medium tracking-tighter text-black leading-none mb-6">
                   The ROI Engine
                 </h2>
                 <p className="text-xl text-black/80 font-semibold mb-8">
                   When your institutional knowledge becomes computational capital, the return on intelligence is transformational.
                 </p>
                 <div className="space-y-4">
                   <div className="flex items-start gap-4">
                     <CheckCircle2 size={24} className="text-black shrink-0" />
                     <span className="text-black font-semibold text-lg">Faster asset screening algorithms</span>
                   </div>
                   <div className="flex items-start gap-4">
                     <CheckCircle2 size={24} className="text-black shrink-0" />
                     <span className="text-black font-semibold text-lg">Improved decision accuracy over time</span>
                   </div>
                   <div className="flex items-start gap-4">
                     <CheckCircle2 size={24} className="text-black shrink-0" />
                     <span className="text-black font-semibold text-lg">Absolute elimination of repetitive research tasks</span>
                   </div>
                   <div className="flex items-start gap-4">
                     <CheckCircle2 size={24} className="text-black shrink-0" />
                     <span className="text-black font-semibold text-lg">Scalable application of institutional knowledge</span>
                   </div>
                 </div>
               </div>
            </motion.div>

            {/* USE CASES */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col h-full justify-center lg:py-10">
               <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">Deployments</span>
               <h2 className="text-3xl md:text-[2.75rem] font-medium tracking-tighter text-black leading-none mb-10">
                 Who Uses Proprietary Alpha
               </h2>
               <div className="flex flex-wrap gap-4">
                 {[
                   "Hedge Funds", 
                   "Private Equity Firms", 
                   "Family Offices", 
                   "Institutional Investors", 
                   "Asset Managers"
                 ].map((useCase, idx) => (
                   <div key={idx} className="bg-white border border-black/5 rounded-full px-8 py-4 shadow-sm flex items-center gap-3 w-fit hover:border-black/10 transition-colors cursor-default">
                     <div className="w-1.5 h-1.5 rounded-full bg-sapforce-accent shadow-sm"></div>
                     <span className="text-black font-bold tracking-tight text-lg">{useCase}</span>
                   </div>
                 ))}
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA SECTION */}
      <section className="py-24 md:py-32 bg-[#F7F8F9] relative z-10 flex items-center justify-center overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F8F9] to-blue-50/40"></div>
        
        {/* Encrypted subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem]  p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
            style={{ background: "linear-gradient(to bottom right, #ffffff, var(--color-sapforce-accent), #4db9dc)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-[3.5rem] font-medium text-black mb-6 leading-[1.1] tracking-tighter">
                Your Investment Philosophy <br className="hidden md:block"/><span className="text-gray-600">Deserves More Than Spreadsheets</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                Join a select group answering the AI imperative by encoding their competitive edge into a private, sovereign AI model. Onboarding is confidential and led by our AI architects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto px-8 py-4">Begin Private Onboarding</Button>
                </Link>
                <Link to="#portal">
                  <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-black border-black/10 hover:border-black">Request an Architecture Consultation</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

const FeatureCard = ({ icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-white via-[var(--color-sapforce-accent)] to-[#4db9dc]  p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl cursor-pointer flex flex-col h-full"
    >
      <div className="mb-6 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-colors duration-500 ">
        {React.cloneElement(icon, { className: "transition-colors" })}
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight text-black leading-tight">{title}</h3>
      <p className="text-black/70 font-medium leading-relaxed flex-grow">{desc}</p>
    </motion.div>
  );
};
