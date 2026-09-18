import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import DynamicSection from './sections/DynamicSection';
import ScheduleSection from './sections/ScheduleSection';
import MentorsSection from './sections/MentorsSection';
import RegisterSection from './sections/RegisterSection';
import FAQSection from './sections/FAQSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  return (
    <div className="app-root">
      {/* Dynamic Fluid Water Cursor (desktop only, reduced-motion aware) */}
      <CustomCursor />

      {/* Sticky Blurred Marine Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
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
