// =============================================
// VRINDAVAN SWEETS SHOP — Namkeen Section
// =============================================
import React from 'react';
import './NamkeenSection.css';
import { useSmoothScroll } from '../../../hooks/useSmoothScroll';

const NAMKEENS = [
  { id: 1, name: 'Aloo Bhujia',   image: '/haldiram namkeen/aloo_bhujiya-removebg-preview.png', bg: 'linear-gradient(135deg, #f2cc8f, #e07a5f)' },
  { id: 2, name: 'Moong Dal',     image: '/haldiram namkeen/Moong_dal-removebg-preview.png', bg: 'linear-gradient(135deg, #81b29a, #3d405b)' },
  { id: 3, name: 'Khatta Meetha', image: '/haldiram namkeen/Khatat_mitha-removebg-preview.png', bg: 'linear-gradient(135deg, #f4a261, #e76f51)' },
  { id: 4, name: 'Navrattan',     image: '/haldiram namkeen/navrarttan-removebg-preview.png', bg: 'linear-gradient(135deg, #e63946, #1d3557)' },
  { id: 5, name: 'Bhujia Sev',    image: '/haldiram namkeen/bhjiya_sev-removebg-preview.png', bg: 'linear-gradient(135deg, #ffb703, #fb8500)' },
  { id: 6, name: 'Tasty Nuts',    image: '/haldiram namkeen/tasty_nuts-removebg-preview.png', bg: 'linear-gradient(135deg, #023047, #219ebc)' },
  { id: 7, name: 'All In One',    image: '/haldiram namkeen/all_in_one-removebg-preview.png', bg: 'linear-gradient(135deg, #606c38, #283618)' },
];

const NamkeenSection = () => {
  const scrollTo = useSmoothScroll();

  return (
    <section className="namkeen-section">
      <div className="container">
        {/* Header Text */}
        <div className="namkeen__header">
          <div className="namkeen__badge">
            <span className="namkeen__badge-icon">🥨</span> Crunchy Delights
          </div>
          
          <h2 className="namkeen__title">
            Authentic Haldiram<br />Namkeen Collection
          </h2>
          
          <p className="namkeen__desc">
            Discover our wide range of crispy, spicy, and savory traditional snacks. 
            Perfect for tea time, parties, or just a daily dose of crunch!
          </p>
          
          <div className="namkeen__cta">
            <button className="btn btn-primary namkeen__btn-dark" onClick={() => scrollTo('shop')}>See collections</button>
            <button className="btn btn-outline namkeen__btn-light" onClick={() => scrollTo('footer')}>Contact us</button>
          </div>
        </div>
      </div>

      {/* 3D Gallery / Carousel */}
      <div className="namkeen__gallery-wrapper">
        <div className="namkeen__gallery">
          {NAMKEENS.map((item) => (
            <div key={item.id} className="namkeen__card" style={{ background: item.bg }}>
              <div className="namkeen__card-brand">Haldiram's</div>
              <div className="namkeen__card-img-container">
                <img src={item.image} alt={item.name} className="namkeen__card-img" />
              </div>
              <h3 className="namkeen__card-name">{item.name}</h3>
              <div className="namkeen__card-type">Namkeen</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NamkeenSection;
