import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function setupSideDecorationParallax() {
  const left = document.querySelector('.side-decoration-left');
  const right = document.querySelector('.side-decoration-right');
  if (!left || !right) return;

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        left.style.transform = `translateY(${scrollY * 0.15}px)`;
        right.style.transform = `translateY(${scrollY * 0.25}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const cleanup = setupSideDecorationParallax();
    if (import.meta && import.meta.hot) {
      import.meta.hot.dispose(() => {
        if (cleanup) cleanup();
      });
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
