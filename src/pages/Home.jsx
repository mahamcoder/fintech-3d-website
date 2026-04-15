import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BarChart3, TrendingUp, Users, Database,
  Cpu, Activity, Globe, Box, Network, Quote, Star
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HeroScene } from '../components/3d/HeroScene';
import Ai from '../assets/image.png';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import hero from '../assets/hero.gif'

export const Home = () => {
  const tickerItems = [
    "Serving Institutional Clients Across USA",
    "Europe",
    "Middle East",
    "Australia"
  ];

  // ── Animation Variants ────────────────────────────────────────────────────
  const floatAnim = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.02, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const bounceAnim = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="w-full overflow-hidden">

      {/* 🚀 REDESIGNED HERO SECTION (MATCHING "SHARE" REFERENCE) */}
      <section className="relative w-full flex flex-col pt-12 pb-12 container mx-auto px-6 lg:px-12 max-w-[1500px] overflow-visible min-h-[90vh]">

        {/* MASSIVE BACKGROUND TEXT LAYER */}
        <div className="absolute inset-0 flex items-start justify-center pt-8 md:pt-5 pointer-events-none select-none overflow-hidden h-[400px] md:h-[600px] w-full">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="text-7xl md:text-[15vw] font-black tracking-tighter leading-none uppercase whitespace-nowrap 
               bg-gradient-to-b from-[#2f3e8f] via-[#5fa8d3] to-[#bde0fe] 
               bg-clip-text text-transparent 
               drop-shadow-[0_0_30px_rgba(100,150,255,0.25)]"
          >
            GyanSarathi
          </motion.h1>
        </div>

        {/* CENTERED AREA: BLOB & FLOATING TAGS */}
        <div className="relative w-full flex-1 flex flex-col items-center justify-center pt-12 md:pt-20">

          {/* THE HERO IMAGE (WITH FLOATING LABELS) */}
          <div className="relative z-20 w-full h-[350px] md:h-[550px] flex items-center justify-center">

            {/* Asset Container */}
            <div className="relative -mt-10 pointer-events-none">
              <img src={hero} alt="Hero Asset" className="h-[300px] md:h-[500px] w-auto object-contain transform scale-150 md:scale-170" />
              {/* <TransparentImage

                src={hero}
                alt="Hero Asset"
                className="h-[300px] md:h-[500px] w-auto object-contain transform scale-125 md:scale-150"
                tolerance={230}
              /> */}

              {/* FLOATING TAG 1: CollaborationTool */}
              <motion.div
                {...bounceAnim}
                className="absolute top-1/4 -right-10 md:right-3 bg-white shadow-2xl rounded-xl p-2 px-4 flex items-center gap-3 border border-gray-100/50 backdrop-blur-md pointer-events-auto"
              >
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <span className="text-[10px] md:text-xs font-bold text-gray-800">CollaborationTool</span>
              </motion.div>

              {/* FLOATING TAG 2: CloudStorageHub */}
              <motion.div
                {...floatAnim}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-1/4 -left-10 md:left-13 bg-white shadow-2xl rounded-xl p-2 px-4 flex items-center gap-3 border border-gray-100/50 backdrop-blur-md pointer-events-auto"
              >
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                <span className="text-[10px] md:text-xs font-bold text-gray-800">CloudStorageHub</span>
              </motion.div>

              {/* FLOATING TAG 3: 65 Downloads (Larger) */}
              <motion.div
                {...bounceAnim}
                transition={{ delay: 0.5, duration: 3, repeat: Infinity }}
                className="absolute bottom-[20%] right-[-5%] md:right-[5%] bg-white shadow-2xl rounded-2xl p-2 px-4 flex flex-col gap-1 border border-gray-100/50 backdrop-blur-md pointer-events-auto min-w-[150px]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm md:text-sm font-bold text-gray-800">65 Downloads</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                </div>

              </motion.div>
            </div>
          </div>

          {/* BOTTOM LEFT: DESCRIPTION & PILL BUTTONS */}
          <div className="relative md:absolute  md:left-0 z-30 mt-8 md:mt-0 flex flex-col gap-8">

            {/* Description Text */}
            <div className="max-w-[320px] md:mt-16">
              <p className="text-base md:text-sm text-gray-700 font-medium leading-relaxed">
                A platform where you can seamlessly share financial analytics, risk models, and connect with global capital markets across the digital landscape.
              </p>
            </div>

            {/* Pill Buttons */}
            <div className="flex items-center gap-4">
              <Link to="/contact">
                <button className="bg-[#171717] text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-8 py-4 rounded-full hover:bg-black transition-all shadow-lg hover:shadow-black/20 transform hover:-translate-y-0.5">
                  Get Started
                </button>
              </Link>
              <Link to="/ai-lab">
                <button className="bg-transparent border border-black/10 text-black text-[10px] md:text-xs font-black uppercase tracking-widest px-8 py-4 rounded-full hover:bg-black/5 transition-all transform hover:-translate-y-0.5">
                  More
                </button>
              </Link>
            </div>

            {/* Social Proof (Avatar Group) */}
            <div className="md:flex flex-col gap-3  md:mt-36 hidden ">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" alt="user" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="user" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="user" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" />
                </div>
                <span className="text-lg font-black text-black">245K+</span>
              </div>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                People joined us and <br /> chose simplicity
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: VERTICAL TAGS */}
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-12 z-30 opacity-40 hover:opacity-100 transition-opacity duration-700">
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs font-black text-black uppercase tracking-wider text-right">Web3<br />Storage</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs font-black text-black uppercase tracking-wider text-right">Next-gen<br />Applications</span>
            </div>
          </div>

          {/* BOTTOM RIGHT: INFO BOX */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="hidden md:flex absolute bottom-5 right-0 z-30 bg-white/30 backdrop-blur-md border border-black/5 p-6 px-10 rounded-[2rem] flex-col gap-3 max-w-[280px] group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <Star className="text-black group-hover:rotate-45 transition-transform" size={24} />
              <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                <Activity className="text-white" size={12} />
              </div>
            </div>
            <p className="text-[10px] font-black uppercase text-black tracking-widest leading-relaxed">
              Find out more about <br /> the possibilities
            </p>
          </motion.div>

        </div>

        {/* BOTTOM ZONE: 3 DATA CARDS (As Sketched) */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:pt-5 pt-20">

          {/* Card 1: Trending */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-white/40 backdrop-blur-xl border border-black/3 p-8 rounded-4xl flex items-center gap-6 shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-sapforce-accent flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform">
              <TrendingUp size={24} className="text-white" />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Market Cap</p>
              <p className="text-lg font-black text-black tracking-tight leading-none">$4.2B Institutional</p>
            </div>
          </motion.div>

          {/* Card 2: AI Lab Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-white/40 backdrop-blur-xl border border-black/3 p-8 rounded-4xl flex items-center gap-6 shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-sapforce-accent flex items-center justify-center shadow-lg shadow-lime-500/10 group-hover:scale-110 transition-transform">
              <BarChart3 size={24} className="text-black" />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">AI Performance</p>
              <p className="text-lg font-black text-black tracking-tight leading-none">99.8% Reliability</p>
            </div>
          </motion.div>

          {/* Card 3: Global Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white/40 backdrop-blur-xl border border-black/3 p-8 rounded-4xl flex items-center gap-6 shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center shadow-lg shadow-black/10 group-hover:scale-110 transition-transform">
              <Users size={24} className="text-sapforce-accent" />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Community</p>
              <p className="text-lg font-black text-black tracking-tight leading-none">Global Expansion</p>
            </div>
          </motion.div>

        </div>

      </section>

      {/* === LIGHT MODE SECTIONS BELOW === */}



      {/* SECTION 2: MISSION & 3-CARD STATS */}
      <section className="py-20 md:py-32 bg-gray-100 relative z-10 flex justify-center">
        <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#052e23] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 w-full max-w-[1150px] mx-6 shadow-xl shadow-black/5 ">

          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div>
              <span className="text-[10px] font-black text-sapforce-accent bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Core Values</span>
              <h2 className="text-4xl md:text-[2.75rem] font-medium text-gray-400 leading-[1.1] tracking-tight">The strategic</h2>
              <h2 className="text-4xl md:text-[2.75rem] font-bold text-black leading-[1.1] tracking-tighter mt-1">Advantage</h2>
            </div>
            <div className="md:max-w-[280px] pb-2">
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Institutional-grade analytics and Agentic AI designed to accelerate high-stakes decisions.
              </p>
            </div>
          </div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Column 1: Partners & ROI */}
            <div className="flex flex-col gap-6">
              {/* Card 1a: Partners */}
              <div className="bg-[#F9FAFB] border border-black/5 rounded-[1.5rem] p-5.5 px-6 flex items-center justify-between min-h-[80px]">
                <div className="flex -space-x-3 items-center">
                  <img src="https://i.pravatar.cc/100?img=33" alt="user" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://i.pravatar.cc/100?img=47" alt="user" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://i.pravatar.cc/100?img=12" alt="user" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm relative z-10" />
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-[#F1F1F1] flex items-center justify-center text-[11px] font-bold text-gray-700 relative z-20 shadow-sm">+</div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Partners</span>
              </div>

              {/* Card 1b: ROI */}
              <div className="bg-[#F9FAFB] border border-black/5 rounded-[2rem] p-8 flex flex-col justify-between flex-grow min-h-[220px]">
                <div>
                  <h3 className="text-lg font-bold text-black mb-1.5">Multi-Industry Analytics</h3>
                  <p className="text-sm text-gray-600 font-medium max-w-[220px] leading-relaxed">Valuation, diligence, and asset management across energy, infrastructure, real estate, and banking sectors.</p>
                </div>
                <div className="mt-8">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-6xl font-medium tracking-tighter text-black">90</span>
                    <span className="text-3xl font-medium text-gray-400 -translate-y-1">%</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-2 font-medium uppercase tracking-wider">Data accuracy & robustness</p>
                </div>
              </div>
            </div>

            {/* Column 2: Revenue */}
            <div className="flex flex-col gap-6">
              {/* Card 2a: Revenue Gen */}
              <div className="bg-[#F9FAFB] border border-black/5 rounded-[2rem] p-8 flex flex-col justify-between flex-grow min-h-[220px]">
                <div>
                  <h3 className="text-lg font-bold text-black mb-1.5">Agentic AI & Product</h3>
                  <p className="text-sm text-gray-600 font-medium max-w-[220px] leading-relaxed">Custom LLMs, intelligent automations, and enterprise-grade API infrastructure for financial workflows.</p>
                </div>
                <div className="mt-8 mb-2">
                  <div className="flex items-baseline gap-0">
                    <span className="text-6xl font-medium tracking-tighter text-black">$2.5</span>
                    <span className="text-4xl font-medium text-gray-400 -translate-y-2 ml-1">B+</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-2 font-medium uppercase tracking-wider">Capital Optimized</p>
                </div>
              </div>

              {/* Card 2b: Available badge */}
              <div className="bg-[#F9FAFB] border border-black/5 rounded-[1.25rem] p-4 px-5 flex items-center justify-start gap-4 min-h-[64px] shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.6)] ml-1"></div>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.14em]">Enterprise Grade AI</span>
              </div>
            </div>

            {/* Column 3: Dark Card */}
            <div className="bg-[#1A1A1A] rounded-[2rem] p-8 flex flex-col justify-between text-white relative overflow-hidden min-h-[300px] shadow-xl">
              {/* Background Arrow SVG Overlay */}
              <svg width="240" height="240" viewBox="0 0 200 200" className="absolute bottom-4 -right-2 opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 160 Q 50 160 100 100 T 170 30" stroke="white" strokeWidth="20" fill="none" strokeLinecap="round" />
                <path d="M 110 30 L 170 30 L 170 90" stroke="white" strokeWidth="20" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="relative z-10 w-full">
                <h3 className="text-lg font-bold text-white mb-2">Sovereign Wealth Models</h3>
                <p className="text-sm text-[#CCCCCC] font-medium md:max-w-[90%] leading-[1.6]">
                  Train proprietary AI using unique investment theses to maximize ROI and accelerate decision-making.
                </p>
              </div>

              <div className="mt-10 flex items-end justify-between relative z-10 w-full mb-1">
                <div className="flex flex-col">
                  <div className="flex items-baseline mb-1">
                    <span className="text-[3.5rem] md:text-[4rem] leading-[0.8] font-medium tracking-tighter text-white">4.8</span>
                    <span className="text-2xl font-medium text-[#777777] ml-1">/5</span>
                  </div>
                </div>
                <div className="flex flex-col items-start pb-1">
                  <div className="flex gap-[3px] mb-2.5">
                    {[1, 2, 3, 4, 5].map(i => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="#F5C518" stroke="#F5C518" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    ))}
                  </div>
                  <span className="text-[8px] font-bold text-[#888888] uppercase tracking-[0.2em] leading-[1.6]">Globally<br />Recognized AI</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* SECTION 1: TICKER BANNER (REFINED) */}
      <section className="bg-white overflow-hidden py-10 cursor-pointer group mb-5">
        <Link to="/contact" className="block w-full">
          <div className="flex items-center">
            <div className="flex whitespace-nowrap animate-ticker flex-1">
              {[...Array(6)].map((_, i) =>
                tickerItems.map((text, idx) => (
                  <div
                    key={`${i}-${idx}`}
                    className="flex items-center gap-8 px-8 text-black font-black text-2xl md:text-5xl tracking-tighter uppercase transition-all"
                  >
                    <span>{text}</span>
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-sapforce-accent flex items-center justify-center text-white group-hover:bg-black transition-colors duration-500">
                      <ArrowRight className="-rotate-45" size={24} strokeWidth={3} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </Link>
      </section>

      {/* SECTION 3: STRATEGIC ADVANTAGE (REDESIGNED CARD) */}
      <section className="py-20 animate-fade-in">
        <div className="container mx-auto px-6 max-w-7xl">
          <div
            className="rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-black/10 transition-all duration-700 hover:shadow-sapforce-accent/20"
            style={{
              background: "linear-gradient(135deg, #052e23 0%, #59918F 50%, #92d5d8 100%)"
            }}
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[10px] font-black text-white bg-white/10 px-4 py-2 rounded-full uppercase tracking-[0.3em] mb-8 inline-block">The ROI Architect</span>
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
                    The Strategic Advantage
                  </h3>
                  <p className="text-lg md:text-xl text-white/70 font-sans font-light max-w-2xl mx-auto leading-relaxed">
                    Deep financial analytics fused with custom AI models to accelerate high-stakes decisions.
                  </p>
                </motion.div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-0 mt-12">
                <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-white/10 z-0"></div>

                <ProcessNode step="1" title="Data Acquisition" desc="Collect multi-industry financial and macroeconomic data." delay={0.1} icon={<Database size={22} />} isDark={true} />
                <ProcessNode step="2" title="Advanced Analytics" desc="Run valuation models and risk diagnostics." delay={0.2} icon={<Activity size={22} />} isDark={true} />
                <ProcessNode step="3" title="Custom AI Processing" desc="Apply bespoke LLMs and automation agents." delay={0.3} icon={<Network size={22} />} isDark={true} />
                <ProcessNode step="4" title="Strategic Output" desc="Deliver actionable insights and optimized investment decisions." delay={0.4} icon={<Box size={22} />} isDark={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: service details sections  */}
      <section className="py-24 md:py-32 bg-white relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px]">
          {/* Header with Mixed Overlapping & Scattered Typography */}
          <div className="max-w-7xl mx-auto text-center mb-24 cursor-default">
            <h4 className="text-3xl md:text-[4.5rem] font-medium tracking-tight text-black leading-[1.1] flex flex-wrap items-center justify-center gap-y-4 md:gap-y-6">
              <span className="relative z-20">Multi-Industry Analytics</span>
              <span className="relative z-10 -mx-6 md:-mx-12 w-24 h-12 md:w-40 md:h-20 rounded-full overflow-hidden inline-flex items-center justify-center bg-gray-100 border border-black/5 scale-110 shadow-lg -translate-x-10 md:-translate-x-16">
                <video src={video2} autoPlay loop muted className="w-full h-full object-cover  hover:opacity-100 transition-opacity duration-700" alt="" />
              </span>

              <span className="relative z-20 italic font-light font-display">Agentic AI & Product Dev</span>

              <span className="relative z-10 -mx-6 md:-mx-12 w-24 h-12 md:w-36 md:h-18 rounded-full overflow-hidden inline-flex items-center justify-center bg-sapforce-accent/20 border border-sapforce-accent/10 rotate-[-8deg] shadow-lg -translate-x-12 md:-translate-x-96">
                <img src={Ai} className="w-full h-full object-cover mix-blend-overlay opacity-60 hover:opacity-100 transition-opacity" alt="" />
              </span>

              <span className="relative z-20 italic font-light px-4">Sovereign Wealth Models</span>

              <span className="relative z-10 -mx-6 md:-mx-12 w-24 h-12 md:w-36 md:h-18 rounded-full overflow-hidden inline-flex items-center justify-center bg-sapforce-accent/20 border border-sapforce-accent/10 rotate-[-8deg] shadow-lg -translate-x-12 md:translate-x-4">
                <video src={video1} autoPlay loop muted className="w-full h-full object-cover  hover:opacity-100 transition-opacity" alt="" />
              </span>



            </h4>

            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mt-10 leading-relaxed font-sans font-light">
              Collaborating with global pioneers to build financial architectures and AI-driven products that redefine the boundaries of what's possible in capital markets.
            </p>


          </div>
        </div>
      </section>
      {/* section6: client reviews (Horizontal Ticker Rows) */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 relative z-10 overflow-hidden flex flex-col items-center">
        {/* Modern Mesh Gradient Background (Darker/Cinematic) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-sapforce-accent/10 rounded-full blur-[150px]"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 60, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] right-[0%] w-[900px] h-[900px] bg-[#92d5d8]/5 rounded-full blur-[180px]"
          ></motion.div>

          {/* Subtle Noise/Grain Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grain-y.com/images/grain-dark.png')] pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-6 text-center mb-20 relative z-30">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase"
          >
            What our clients said
          </motion.h2>
        </div>

        <div className="w-full flex flex-col gap-10 md:gap-14 overflow-hidden relative">
          {/* Row 1: Left */}
          <TickerRow items={CLIENT_BUBBLES.slice(0, 4)} direction="left" speed={90} />

          {/* Row 2: Right */}
          <TickerRow items={CLIENT_BUBBLES.slice(4, 8)} direction="right" speed={100} />

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-50/50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-50/50 to-transparent z-20 pointer-events-none"></div>
        </div>
      </section>


      {/* SECTION 5: CTA SECTION */}
      <section className="py-24 md:py-32 bg-sapforce-bg relative z-10 flex items-center justify-center">
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
              <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight tracking-tighter">
                Architect Your Competitive Edge
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-10">
                Leverage institutional-grade analytics and AI-driven automation for global capital markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto">Schedule Strategic Consultation</Button>
                </Link>
                <Link to="/ai-lab">
                  <Button variant="secondary" className="w-full sm:w-auto text-black border-black/10 hover:border-black">Explore AI Capabilities</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const CLIENT_BUBBLES = [
  {
    name: "Alexander Vance",
    role: "Portfolio Manager, Apex Capital",
    text: "The institutional-grade analytics provided a level of clarity we simply couldn't find elsewhere. Their AI models are transformative.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Sarah Chen",
    role: "Head of AI, Global Tech Solutions",
    text: "Implementing their Agentic AI workflows reduced our operational overhead by 40%. The reliability is unmatched in the industry.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=33"
  },
  {
    name: "Marcus Thorne",
    role: "Lead Analyst, Sovereign Wealth Fund",
    text: "A precision-engineered approach to financial data. The custom LLMs they built for our proprietary strategies are game-changing.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Research, Arca Group",
    text: "The depth of their multi-industry analysis is impressive. They don't just provide data; they provide actionable strategic wisdom.",
    rating: 4,
    img: "https://i.pravatar.cc/150?img=47"
  },
  {
    name: "Julian Kross",
    role: "CEO, QuantEdge Financial",
    text: "Their architecture for capital markets is the future. Seamless integration and high-performance output across the board.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=59"
  },
  {
    name: "Dr. Amara Okoro",
    role: "Chief Strategy Officer, InvestCore",
    text: "High-stakes decisions require high-fidelity insights. This team delivers exactly that, fused with cutting-edge AI automation.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=44"
  },
  {
    name: "Thomas Wright",
    role: "Investment Partner, BridgePoint",
    text: "Exceptional consultation and after-sales service. Their attention to detail in financial engineering is world-class.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Sophia Liang",
    role: "Founder, Fintech Innovators",
    text: "The ROI we've seen since adopting their Sovereign Wealth models has been significant. Highly intuitive and powerful platforms.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=15"
  }
];

const TickerRow = ({ items, direction = "left", speed = 60 }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items]; // Quadruple to ensure fill

  return (
    <div className="flex w-full whitespace-nowrap">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="flex gap-8 px-4"
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="w-[280px] sm:w-[400px] md:w-[550px] p-6 sm:p-8 rounded-3xl sm:rounded-4xl flex flex-col gap-4 sm:gap-6 relative group transition-all duration-500 cursor-pointer shadow-2xl shadow-black/10"
            style={{
              background: "linear-gradient(135deg, #052e23 0%, #59918F 50%, #92d5d8 100%)"
            }}
          >
            {/* Top Quote Icon */}
            <Quote className="absolute top-6 left-6 text-white/20 rotate-180" size={32} />

            <div className="flex flex-col gap-4 mt-6">
              {/* Star Rating */}
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < item.rating ? "fill-yellow-500 text-yellow-500" : "text-white/20"}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/90 text-center italic font-light leading-relaxed whitespace-normal px-4">
                "{item.text}"
              </p>

              {/* Client Info */}
              <div className="flex flex-col items-center mt-2">
                <span className="text-white font-black text-lg tracking-tight">
                  {item.name}
                </span>
                <span className="text-white/50 text-[10px] uppercase tracking-widest font-black mt-1">
                  {item.role}
                </span>
              </div>
            </div>

            {/* Bottom Quote Icon */}
            <Quote className="absolute bottom-6 right-6 text-white/20" size={32} />

            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-4xl pointer-events-none"></div>
          </div>
        ))}
      </motion.div>
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
      className="bg-white/40 backdrop-blur-xl border border-black/5 p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 hover:bg-white/80 hover:-translate-y-1 shadow-sm cursor-pointer"
    >
      <div className="mb-8 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-sapforce-accent transition-colors duration-500 border border-black/5 text-black">
        {React.cloneElement(icon, { className: "text-black transition-colors" })}
      </div>
      <h3 className="text-2xl font-black text-black mb-4 tracking-tighter">{title}</h3>
      <p className="text-gray-500 font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
};

const ProcessNode = ({ step, title, desc, delay, icon, isDark = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative z-10 flex flex-col items-center text-center max-w-[240px] w-full"
  >
    <div className={`w-16 h-16 rounded-[1.5rem] ${isDark ? 'bg-white/10 border-white/20' : 'bg-[#59918F] border-black/5'} flex items-center justify-center mb-6 text-sapforce-accent shadow-sm relative group hover:scale-105 transition-all duration-500 cursor-pointer`}>
      {React.cloneElement(icon, { className: isDark ? "text-white" : "text-white" })}
      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${isDark ? 'bg-white text-black' : 'bg-white text-sapforce-accent'} border-[1px] text-[10px] font-black flex items-center justify-center shadow-sm`}>{step}</div>
    </div>
    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'} mb-3`}>{title}</h4>
    <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'} leading-relaxed`}>{desc}</p>
  </motion.div>
);
