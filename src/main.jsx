import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Prevent browser zoom (Ctrl + wheel, Ctrl +/-, Ctrl 0)
if (typeof window !== 'undefined') {
  // Prevent Ctrl + Mouse Wheel zoom
  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
    }
  }, { passive: false });

  // Prevent Keyboard shortcuts (Ctrl/Cmd + Plus, Minus, Zero)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && 
        (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
      e.preventDefault();
    }
  });

  // Prevent multi-touch gesture zoom on some mobile browsers
  window.addEventListener('gesturestart', (e) => e.preventDefault());
  window.addEventListener('gesturechange', (e) => e.preventDefault());
  window.addEventListener('gestureend', (e) => e.preventDefault());
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
