import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, LineChart, Cpu, Presentation } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AboutGP = () => {
  return (
    <div className="w-full overflow-hidden bg-blue-50/20">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 pt-40 pb-24 bg-blue-50/20 overflow-hidden relative z-10 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.03] via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 inline-block">About GP</span>
            <h1 className="text-4xl md:text-[4.5rem] font-medium tracking-tighter text-black leading-[1.1] mb-8">
              Where Financial Mastery Meets <span className="text-gray-400">Algorithmic Precision</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
             GyanSarathi sits at the intersection of institutional financial analysis and advanced algorithmic engineering. It’s not just a consulting firm. It’s a human-led thinking machine.
            </p>
            <Link to="/ai-lab">
              <Button variant="primary" className="px-8 py-4">See What We Deliver</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — EXECUTIVE OVERVIEW */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none mb-8">
                Executive Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
               GP combines an MBA in Finance and Business Analytics with executive experience in scaling global operations and managing complex KPOs. This blend of financial expertise and operational depth enables GyanSarathi to build custom AI systems not generic reports tailored to how your institution thinks.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-black"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-black font-medium leading-relaxed">MBA in Finance and Business Analytics from a globally recognized institution</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-black"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-black font-medium leading-relaxed">Executive track record in scaling international operations and knowledge-intensive business units</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-black"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-black font-medium leading-relaxed">Deep practitioner expertise spanning financial modeling, quantitative analysis, and AI systems architecture</span>
                </li>
              </ul>
            </motion.div>

            {/* Visual Abstract Chart */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full min-h-[400px] lg:min-h-[600px] w-full rounded-[2.5rem] border border-black/5 relative overflow-hidden bg-gradient-to-br from-[#FAFAFA] to-[#F1F3F5] shadow-inner flex items-center justify-center p-6 md:p-12">
              {/* Background subtle grid */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* The Abstract Chart Group */}
              <div className="w-full max-w-[420px] relative z-10 flex flex-col gap-6">
                {/* Top floating stats card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
                  className="hidden md:flex self-end bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 items-center gap-4 absolute -right-8 -top-8 z-20"
                >
                  <div className="w-12 h-12 rounded-full bg-sapforce-dark flex items-center justify-center text-sapforce-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3v18h18" /><path d="M18 9l-5-5-6 6-4-4" /></svg>
                  </div>
                  <div className="pr-2">
                    <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Alpha Generated</div>
                    <div className="text-lg font-medium tracking-tighter text-black leading-none whitespace-nowrap">+24.8% Above Benchmark</div>
                  </div>
                </motion.div>

                {/* Main Chart Container */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
                  className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_40px_rgb(0,0,0,0.03)] border border-black/5 relative z-10"
                >
                  <div className="flex justify-between items-start mb-8 gap-4">
                    <div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Portfolio Growth</div>
                      <div className="text-4xl font-medium tracking-tighter text-black leading-none">$14.2M</div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-sapforce-accent/20 text-sapforce-accent text-[10px] font-bold whitespace-nowrap">Year to Date</div>
                  </div>

                  {/* Bar & Line SVG Combination */}
                  <div className="w-full h-[160px] md:h-[200px] relative mt-4">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 400 180" preserveAspectRatio="none">
                      {/* Bars */}
                      {[40, 55, 45, 80, 70, 110, 95, 130, 120, 160, 140, 175].map((h, i) => (
                        <rect key={`bar-${i}`} x={i * 32.5 + 5} y={180 - h} width="16" height={h} rx="4" fill="#F4F5F7" className="transition-all duration-500 hover:fill-[#E2E8F0]" />
                      ))}

                      {/* Gradient under line */}
                      <path
                        d="M0,140 C40,90 80,150 120,85 C160,20 200,95 240,65 C280,35 320,85 360,25 C380,5 400,10 400,10 L400,180 L0,180 Z"
                        fill="url(#fade)" opacity="0.1"
                      />
                      <defs>
                        <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#111" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>

                      {/* Curved Line */}
                      <path
                        d="M0,140 C40,90 80,150 120,85 C160,20 200,95 240,65 C280,35 320,85 360,25 C380,5 400,10 400,10"
                        fill="none" stroke="#0a1a1f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                      />

                      {/* Data Dots */}
                      <circle cx="120" cy="85" r="5" fill="#5fa8d3" stroke="#fff" strokeWidth="2" className="drop-shadow-sm" />
                      <circle cx="240" cy="65" r="5" fill="#5fa8d3" stroke="#fff" strokeWidth="2" className="drop-shadow-sm" />
                      <circle cx="360" cy="25" r="7" fill="#0a1a1f" />
                      <circle cx="360" cy="25" r="3" fill="#5fa8d3" />
                    </svg>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE PHILOSOPHY */}
      <section className="py-24 md:py-32 bg-sapforce-bg relative z-10 flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-xl flex flex-col items-center justify-center mx-auto"
            style={{ background: "linear-gradient(to bottom right, #ffffff, #92d5d8, #4db9dc)" }}
          >
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 inline-block">Our Philosophy</span>
              <h2 className="text-4xl md:text-[4rem] font-medium tracking-tighter text-black leading-[1.05] mb-8">
                Data-Driven by Design. <br  />
                <span className="text-gray-600">AI-Accelerated by Choice.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
               The future of finance belongs not to those with the most data, but to those who turn it into decisions fastest. At GyanSarathi, we merge financial modeling with autonomous AI, making every insight both accurate and executable. You’re not hiring analysts or developers you’re activating an institutional intelligence system.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — THE MANDATE */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center md:text-left mb-16">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">Our Commitment to Every Client</span>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
              What You Can <br/> Always Expect From Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Search size={22} />}
              title="Strategic Market Research"
              desc="Every engagement begins with deep research that maps industry dynamics, uncovers opportunities and builds the intelligence behind high-value decisions."
              delay={0.1}
            />
            <FeatureCard
              icon={<LineChart size={22} />}
              title="Institutional Financial Analytics"
              desc="Our modeling includes DCF, LBO frameworks, comparable valuations, and portfolio diagnostics.IT built to institutional standards and delivered with boardroom clarity."
              delay={0.2}
            />
            <FeatureCard
              icon={<Cpu size={22} />}
              title="AI Automation and Agent Deployment"
              desc="We build autonomous AI agents that eliminate bottlenecks in analytical workflows, automating data extraction, document parsing, and reporting with precision and speed."
              delay={0.3}
            />
            <FeatureCard
              icon={<Presentation size={22} />}
              title="24/7 C-Suite Strategic Support"
              desc="Capital markets never sleep, and neither do we. We provide continuous advisory, model upkeep and intelligence updates to keep your leadership always informed."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA SECTION */}
      <section className="pb-24 md:pb-32 bg-white relative z-10 flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden backdrop-blur-3xl shadow-xl"
            style={{ background: "linear-gradient(to bottom right, #ffffff, #92d5d8, #4db9dc)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sapforce-accent/10 via-transparent to-transparent opacity-60"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-[3.25rem] font-medium text-black mb-6 leading-[1.1] tracking-tighter">
                Ready to Work With an Analyst <span className="text-gray-600">
                  Who Also Builds the AI?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-10">
                Book a 30-minute strategy call to discuss your current mandate, whether it is a valuation project, an AI deployment, or a full-scale proprietary model build.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto">Book Your Strategy Call</Button>
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
      className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc]  p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-md hover:shadow-xl cursor-pointer flex flex-col h-full"
    >
      <div className="mb-8 w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-sm group-hover:scale-110 transition-colors duration-500 border border-white/10 text-white">
        {React.cloneElement(icon, { className: "transition-colors" })}
      </div>
      <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">{title}</h3>
      <p className="text-black/70 font-medium leading-relaxed flex-grow">{desc}</p>
    </motion.div>
  );
};
