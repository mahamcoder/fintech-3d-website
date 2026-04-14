import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { AboutGP } from './pages/AboutGP';
import { AnalyticsDesk } from './pages/AnalyticsDesk';
import { AILab } from './pages/AILab';
import { ProprietaryAlpha } from './pages/ProprietaryAlpha';
import { Research } from './pages/Research';
import { Contact } from './pages/Contact';

const ScrollLayout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [pathname]);

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <ScrollLayout>
        <div className="min-h-screen flex flex-col relative font-sans text-black bg-blue-100">
          <Navbar />
          <main className="flex pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutGP />} />
              <Route path="/analytics" element={<AnalyticsDesk />} />
              <Route path="/ai-lab" element={<AILab />} />
              <Route path="/alpha" element={<ProprietaryAlpha />} />
              <Route path="/research" element={<Research />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ScrollLayout>
    </Router>
  );
}

export default App;
