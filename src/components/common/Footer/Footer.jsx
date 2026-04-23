// =============================================
// YASH SHOP — Footer Component (skeleton)
// =============================================
import React from 'react';
import './Footer.css';
import { useSmoothScroll } from '../../../hooks/useSmoothScroll';

const Footer = () => {
  const scrollTo = useSmoothScroll();

  return (
    <footer className="footer" id="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h2 className="footer__logo">Vrindavan <span>Sweets</span> Shop</h2>
          <p className="footer__tagline">Pure Sweets. Pure Joy. Every Day.</p>
        </div>

        <div className="footer__nav">
          <h4>Navigate</h4>
          <ul>
            {['shop','best-sellers','collections','styles-wear','blog'].map(id => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}>
                  {id.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <p>support@yashshop.com</p>
          <p>+91 98765 43210</p>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} YashShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
