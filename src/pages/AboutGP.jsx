import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, LineChart, Cpu, Presentation } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AboutGP = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 pt-40 pb-24 bg-sapforce-bg overflow-hidden relative z-10 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.03] via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 inline-block">About GP</span>
            <h1 className="text-4xl md:text-[4.5rem] font-medium tracking-tighter text-black leading-[1.1] mb-8">
              Bridging Finance and <span className="text-gray-400">Algorithmic Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
              Combining institutional-grade financial expertise with advanced AI engineering to support global capital markets.
            </p>
            <Link to="/ai-lab">
              <Button variant="primary" className="px-8 py-4">Explore Our Capabilities</Button>
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
                Our leadership is built on a strong foundation in Finance and Business Analytics, combined with extensive executive experience in scaling global operations and managing complex knowledge process outsourcing. This unique blend enables the delivery of advanced financial modeling, strategic consulting, and AI-driven innovation for institutional clients.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-black"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-black font-medium leading-relaxed">MBA in Finance & Business Analytics foundation</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-black"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-black font-medium leading-relaxed">Global operations and outsourcing leadership</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-black"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-black font-medium leading-relaxed">Expertise in financial modeling and AI strategy</span>
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
                  <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center text-[#59918F]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3v18h18" /><path d="M18 9l-5-5-6 6-4-4" /></svg>
                  </div>
                  <div className="pr-2">
                    <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Alpha Gen</div>
                    <div className="text-xl font-medium tracking-tighter text-black leading-none">+24.8%</div>
                  </div>
                </motion.div>

                {/* Main Chart Container */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
                  className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_40px_rgb(0,0,0,0.03)] border border-black/5 relative z-10"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Portfolio Growth</div>
                      <div className="text-4xl font-medium tracking-tighter text-black leading-none">$14.2M</div>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-[#59918F]/20 text-[#8aa331] text-[10px] font-bold">YTD</div>
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
                        fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                      />

                      {/* Data Dots */}
                      <circle cx="120" cy="85" r="5" fill="#59918F" stroke="#fff" strokeWidth="2" className="drop-shadow-sm" />
                      <circle cx="240" cy="65" r="5" fill="#59918F" stroke="#fff" strokeWidth="2" className="drop-shadow-sm" />
                      <circle cx="360" cy="25" r="7" fill="#111" />
                      <circle cx="360" cy="25" r="3" fill="#59918F" />
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
            style={{ background: "linear-gradient(to bottom right, #ffffff, #92d5d8, #052e23)" }}
          >
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 inline-block">The Philosophy</span>
              <h2 className="text-4xl md:text-[4rem] font-medium tracking-tighter text-black leading-[1.05] mb-8">
                Data-Driven. <br className="md:hidden" />
                <span className="text-gray-600">AI-Accelerated.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                The future of finance belongs to organizations that combine rigorous financial modeling with intelligent automation. Our philosophy is rooted in building deep analytical frameworks and developing algorithms that transform insights into scalable decision-making systems for global markets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — THE MANDATE */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center md:text-left mb-16">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">What We Deliver</span>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
              Our Mandate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Search size={22} />}
              title="Strategic Market Research"
              desc="Foundational multi-industry research supporting high-value investment decisions."
              delay={0.1}
            />
            <FeatureCard
              icon={<LineChart size={22} />}
              title="Financial Analytics"
              desc="Institutional-grade modeling, valuation, and performance diagnostics."
              delay={0.2}
            />
            <FeatureCard
              icon={<Cpu size={22} />}
              title="AI Automation Deployment"
              desc="Autonomous agents designed to streamline analytics and operational workflows."
              delay={0.3}
            />
            <FeatureCard
              icon={<Presentation size={22} />}
              title="C-Suite Decision Support"
              desc="Continuous strategic support for executives across global capital markets."
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
            style={{ background: "linear-gradient(to bottom right, #ffffff, #92d5d8, #052e23)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sapforce-accent/10 via-transparent to-transparent opacity-60"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-[3.25rem] font-medium text-black mb-6 leading-[1.1] tracking-tighter">
                Partner With Institutional-Grade Expertise
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-10">
                Leverage finance, analytics, and AI to accelerate strategic growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto">Schedule Strategic Consultation</Button>
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
      className="bg-[#F7F8F9] border border-black/[0.03] p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 hover:bg-sapforce-bg hover:-translate-y-1 shadow-sm hover:shadow-md cursor-pointer flex flex-col h-full"
    >
      <div className="mb-8 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-sapforce-accent group-hover:text-black transition-colors duration-500 border border-black/5 text-gray-500">
        {React.cloneElement(icon, { className: "transition-colors" })}
      </div>
      <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">{title}</h3>
      <p className="text-gray-500 font-medium leading-relaxed flex-grow">{desc}</p>
    </motion.div>
  );
};
