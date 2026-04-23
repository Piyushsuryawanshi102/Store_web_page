// =============================================
// VRINDAVAN SWEETS SHOP — Location Section
// =============================================
import React from 'react';
import './LocationSection.css';

const LocationSection = () => {
  return (
    <section id="location" className="location-section">
      <div className="container">
        <div className="location__grid">
          
          {/* Text Content */}
          <div className="location__content">
            <p className="section-tag">Visit Us</p>
            <h2 className="location__title">Location of Shop</h2>
            <p className="location__desc">
              Experience the authentic taste of premium sweets right at our store. 
              Our shop is located in front of the Agrawal Petrol Pump, Betul Road, Multai.
            </p>
            
            <div className="location__details">
              <div className="location__detail-item">
                <span className="location__icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>In front of Agrawal Petrol Pump,<br/>Betul Road, Multai</p>
                </div>
              </div>
              <div className="location__detail-item">
                <span className="location__icon">⏰</span>
                <div>
                  <h4>Opening Hours</h4>
                  <p>Mon-Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
            
            <button className="btn btn-primary location__btn">Get Directions</button>
          </div>

          {/* Videos */}
          <div className="location__media">
            <div className="location__video-wrapper location__video-wrapper--1">
              <video
                className="location__video"
                src="/8.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="location__video-wrapper location__video-wrapper--2">
              <video
                className="location__video"
                src="/10.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
