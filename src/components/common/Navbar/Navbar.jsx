// =============================================
// VRINDAVAN SWEETS SHOP — Navbar Component
// =============================================
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useSmoothScroll } from '../../../hooks/useSmoothScroll';

const NAV_LINKS = [
  { label: 'Home',        id: 'hero' },
  { label: 'About',       id: 'footer' },
  { label: 'Shop',        id: 'shop' },
  // { label: 'Blog',        id: 'blog' },
  { label: 'Contact',     id: 'footer' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--hero'}`}>
      <div className="navbar__container container">
        {/* Logo */}
        <a href="/" className="navbar__logo">
          VRINDAVAN <span>SWEETS</span> SHOP
        </a>

        {/* Desktop links */}
        <ul className="navbar__links hide-phone">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <button onClick={() => scrollTo(link.id)} className="navbar__link">
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar__actions">
          <button className="navbar__icon" aria-label="Search"></button>
          <button className="navbar__shop-btn hide-phone" onClick={() => scrollTo('shop')}>
            Shop all items
          </button>
          {/* Hamburger */}
          <button
            className="navbar__hamburger hide-tablet-up"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
              className="navbar__mobile-link"
            >
              {link.label}
            </button>
          ))}
          <button 
            className="navbar__shop-btn" 
            style={{ marginTop: '1rem', width: '100%' }}
            onClick={() => { scrollTo('shop'); setMenuOpen(false); }}
          >
            Shop all items
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
