import { useState, useEffect, Suspense, lazy, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import StyleSwitcher, { themeColors } from './components/StyleSwitcher';
import './App.css';

// Lazy load components that are not immediately visible
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [skinColor, setSkinColor] = useState(() => {
    const saved = localStorage.getItem('skinColor');
    return saved ? JSON.parse(saved) : themeColors[0];
  });
  const glowRef = useRef(null);

  // Handle active section scrolling / scroll spy
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    let isScrolling = false;
    
    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 200; // Offset for scroll spy accuracy
          
          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(prev => prev !== section ? section : prev);
                break;
              }
            }
          }
          isScrolling = false;
        });
        isScrolling = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle cursor glow tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update skin variables on load and change
  useEffect(() => {
    document.documentElement.style.setProperty('--skin-color', skinColor.hex);
    document.documentElement.style.setProperty('--skin-color-rgb', skinColor.rgb);
    localStorage.setItem('skinColor', JSON.stringify(skinColor));
  }, [skinColor]);

  // Update theme class on body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const changeSkinColor = (color) => {
    setSkinColor(color);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-container">
      {/* Background blobs for premium glow style */}
      <div className="background-glow-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* Mouse Follower Glow */}
      <div 
        ref={glowRef}
        className="mouse-glow-light"
        style={{
          left: '-100px',
          top: '-100px',
          background: `radial-gradient(circle, rgba(${skinColor.rgb}, 0.08) 0%, rgba(${skinColor.rgb}, 0) 70%)`
        }}
      />

      <Sidebar 
        activeSection={activeSection} 
        handleNavClick={handleNavClick} 
      />

      <div className="main-content">
        <Home handleNavClick={handleNavClick} />
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', color: 'var(--skin-color)' }}>Loading...</div>}>
          <About handleNavClick={handleNavClick} />
          <Services />
          <Portfolio />
          <Contact />
        </Suspense>
      </div>

      <StyleSwitcher 
        theme={theme} 
        toggleTheme={toggleTheme} 
        skinColor={skinColor}
        changeSkinColor={changeSkinColor} 
      />
    </div>
  );
}

export default App;
