// =============================================
// VRINDAVAN SWEETS SHOP — Hero Section
// =============================================
import React, { useState } from 'react';
import './HeroSection.css';

const ANNOUNCE = Array(10).fill('✦ Get 20% Off on first purchase').join('   ');

const SWEETS = [
  { id: 1, name: 'Kaju Katli',  bg: 'linear-gradient(145deg,#c8962e,#f0d080)' },
  { id: 2, name: 'Gulab Jamun', bg: 'linear-gradient(145deg,#7a1528,#c23a55)' },
  { id: 3, name: 'Rasgulla',    bg: 'linear-gradient(145deg,#d9c4b0,#fff3ea)' },
  { id: 4, name: 'Barfi',       bg: 'linear-gradient(145deg,#c0607a,#f0aabe)' },
  { id: 5, name: 'Ladoo',       bg: 'linear-gradient(145deg,#c96a1a,#f0a050)' },
  { id: 6, name: 'Halwa',       bg: 'linear-gradient(145deg,#9a4800,#d97820)' },
  { id: 7, name: 'Peda',        bg: 'linear-gradient(145deg,#6b3820,#a06040)' },
];

const HeroSection = () => {
  const [active, setActive] = useState(2);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Fixed Announcement Bar ── */}
      <div className={`announce-bar ${scrolled ? 'announce-bar--hidden' : ''}`} aria-label="Promotion">
        <div className="announce-bar__track">
          <span>{ANNOUNCE}</span>
          <span aria-hidden="true">{ANNOUNCE}</span>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section id="hero" className="hero">

        {/* Background Video */}
        <video
          className="hero__video"
          src="/11.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay for readability */}
        <div className="hero__overlay" />

        {/* Centre content */}
        <div className="hero__body">

          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-chip">Crysp</span>
            <span className="hero__badge-text">mild sweets</span>
          </div>

          {/* Headline — NO paragraph below */}
          <h1 className="hero__title">
            Premium quality sweets<br />with best quality
          </h1>

          {/* CTA Buttons */}
          <div className="hero__cta">
            <button className="hero-btn hero-btn--solid" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
              See all collections
            </button>
            <button className="hero-btn hero-btn--ghost">
              Contact us
            </button>
          </div>
        </div>

      </section>
    </>
  );
};

export default HeroSection;
