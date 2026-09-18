import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CastilloSection from './sections/CastilloSection';
import ExperienceSection from './sections/ExperienceSection';
import DynamicSection from './sections/DynamicSection';
import ScheduleSection from './sections/ScheduleSection';
import MentorsSection from './sections/MentorsSection';
import RegisterSection from './sections/RegisterSection';
import FAQSection from './sections/FAQSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('mollethon_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mollethon_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-root" data-theme={theme}>
      {/* Dynamic Fluid Water Cursor (desktop only, reduced-motion aware) */}
      <CustomCursor />

      {/* Sticky Blurred Marine Navbar with Theme Switcher */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <CastilloSection />
        <ExperienceSection />
        <DynamicSection />
        <ScheduleSection />
        <MentorsSection />
        <RegisterSection />
        <FAQSection />
      </main>

      {/* Final Sunset CTA & Footer */}
      <FooterSection />
    </div>
  );
}
