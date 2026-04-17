import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Bell, User } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About GP', path: '/about' },
    { label: 'Analytics Desk', path: '/analytics' },
    { label: 'AI Lab', path: '/ai-lab' },
    { label: 'Proprietary Alpha', path: '/alpha' },
    { label: 'Research and Insights', path: '/research' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative">
          {/* THE SUPER PILL */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`w-full transition-all duration-500 rounded-full px-4 h-16 md:h-20 flex items-center justify-between border ${
              isScrolled 
                ? "bg-white border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" 
                : "bg-white/20 backdrop-blur-xl border-white/30 shadow-[0_10px_50px_rgba(0,0,0,0.05)]"
            }`}
          >
            {/* Left Section: Logo */}
            <div className="flex items-center gap-8">
              <Link to="/" className="group flex items-center ml-2">
                <img
                  src="/logo.png"
                  alt="GyanSarathi"
                  className="h-10 md:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                />
              </Link>
            </div>

            {/* Middle Section: First 6 Links */}
            <nav className="hidden lg:flex items-center gap-x-6 xl:gap-x-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-[10px] font-black font-sans uppercase tracking-[0.2em] transition-colors whitespace-nowrap ${
                      isActive ? 'text-black' : 'text-gray-400 hover:text-black'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Section: Contact Button */}
            <div className="flex items-center gap-4 mr-4">
              <Link to="/contact">
                <button className="hidden sm:flex px-8 py-4 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all duration-500 shadow-xl shadow-black/10">
                  Contact Us
                </button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-black"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden fixed inset-x-4 top-32 bg-white/95 backdrop-blur-2xl z-40 rounded-[2.5rem] p-8 shadow-2xl border border-black/5"
          >
            <div className="flex flex-col gap-4">
              {[...navLinks, { label: 'Contact', path: '/contact' }].map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl font-black py-4 flex items-center justify-between border-b border-black/5 last:border-0 ${
                      isActive ? 'text-sapforce-accent' : 'text-black hover:text-sapforce-accent'
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={20} className={isActive ? 'text-sapforce-accent' : 'text-gray-300'} />
                  </Link>
                );
              })}
              <div className="pt-8 w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full py-5 rounded-2xl bg-black text-white text-lg font-black uppercase tracking-widest">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
