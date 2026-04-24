// =============================================
// VRINDAVAN SWEETS SHOP — Sweets Strip Section
// =============================================
import React, { useState } from 'react';
import './SweetsStrip.css';

// Utility to generate a few product variants for each category
const generateProducts = (categoryName, basePrice) => {
  const variations = [
    { prefix: 'Premium', priceMult: 1.5, badge: 'New', colors: ['#555', '#222'] },
    { prefix: 'Classic', priceMult: 1.0, badge: 'Bestseller', colors: ['#888', '#444'] },
    { prefix: 'Sugar-Free', priceMult: 1.8, badge: '', colors: ['#aaa', '#666'] },
    { prefix: 'Mini', priceMult: 0.8, badge: '', colors: ['#bbb', '#999'] },
    { prefix: 'Festive Pack', priceMult: 2.0, badge: 'Limited', colors: ['#d4af37', '#aa8a22'] },
  ];
  return variations.map((v, i) => ({
    id: i,
    name: `${v.prefix} ${categoryName}`,
    price: `₹${Math.round(basePrice * v.priceMult)}`,
    oldPrice: `₹${Math.round(basePrice * v.priceMult * 1.2)}`,
    badge: v.badge,
    colors: v.colors
  }));
};

const SWEETS = [
  { 
    id: 1, name: 'Sweets', image: '/catogeries/sweets-removebg-preview.png', bg: 'linear-gradient(145deg,#c8962e,#f0d080)', tag: 'Bestseller',
    products: [
      { id: 101, name: 'Kaju Katli', image: '/sweets/KajuKatli.jpg', price: '₹950', oldPrice: '₹1100', badge: 'New', colors: ['#eee', '#ddd'] },
      { id: 102, name: 'Gulab Jamun', image: '/sweets/images.jpg', price: '₹450', oldPrice: '₹550', badge: 'Bestseller', colors: ['#7a1528', '#c23a55'] },
      { id: 103, name: 'Milk Cake', image: '/sweets/milk cake.webp', price: '₹850', oldPrice: '₹1000', badge: '', colors: ['#fff3ea', '#c9b8aa'] },
      { id: 104, name: 'Special Peda', image: '/sweets/peda.avif', price: '₹600', oldPrice: '₹750', badge: 'Limited', colors: ['#f0d080', '#c8962e'] },
    ]
  },
  { 
    id: 2, name: 'Namkeen', image: '/catogeries/namkeen-removebg-preview (1).png', bg: 'linear-gradient(145deg,#7a1528,#c23a55)', tag: 'Classic',
    products: generateProducts('Namkeen', 300)
  },
  { 
    id: 3, name: 'Soft Drinks', image: '/catogeries/soft_drink-removebg-preview.png', bg: 'linear-gradient(145deg,#c9b8aa,#fff3ea)', tag: 'Light',
    products: [
      { id: 301, name: 'Coca Cola', image: '/soft drink/coco cola.webp', price: '₹40', oldPrice: '₹45', badge: 'Popular', colors: ['#e41e2b', '#ffffff'] },
      { id: 302, name: 'Pepsi', image: '/soft drink/pepsi.jpg', price: '₹40', oldPrice: '₹45', badge: 'Bestseller', colors: ['#005cb4', '#ffffff'] },
      { id: 303, name: 'Sprite', image: '/soft drink/sprit.jpg', price: '₹40', oldPrice: '₹45', badge: '', colors: ['#008b45', '#ffffff'] },
      { id: 304, name: 'Fanta', image: '/soft drink/fanta.jpg', price: '₹40', oldPrice: '₹45', badge: '', colors: ['#ff8200', '#ffffff'] },
      { id: 305, name: 'Diet Coke', image: '/soft drink/deit coke.jpg', price: '₹45', oldPrice: '₹50', badge: 'Zero Sugar', colors: ['#bbbcbc', '#000000'] },
      { id: 306, name: 'Coca Cola Can', image: '/soft drink/coco cola can.jpeg', price: '₹35', oldPrice: '₹40', badge: '', colors: ['#e41e2b', '#ffffff'] },
      { id: 307, name: 'Pepsi 2L', image: '/soft drink/pepsi 2l.webp', price: '₹95', oldPrice: '₹105', badge: 'Party Pack', colors: ['#005cb4', '#ffffff'] },
      { id: 308, name: 'Maaza 2L', image: '/soft drink/maza 2 liter.webp', price: '₹99', oldPrice: '₹110', badge: 'Value', colors: ['#ffb11b', '#41ad49'] },
      { id: 309, name: 'Paper Boat Litchi', image: '/soft drink/paper boat lichi.webp', price: '₹35', oldPrice: '₹40', badge: 'Organic', colors: ['#f8bbd0', '#ffffff'] },
      { id: 310, name: 'Appy Fizz', image: '/soft drink/appy 20.webp', price: '₹20', oldPrice: '₹25', badge: '', colors: ['#000000', '#ffffff'] },
      { id: 311, name: 'Frooti', image: '/soft drink/frooti 10 rupee.webp', price: '₹10', oldPrice: '₹12', badge: '', colors: ['#ffeb3b', '#4caf50'] },
      { id: 312, name: 'Sprite Can', image: '/soft drink/sprit can.jpg', price: '₹35', oldPrice: '₹40', badge: '', colors: ['#008b45', '#ffffff'] },
      { id: 313, name: 'Paper Boat Mango', image: '/soft drink/paper boat mango.jpg', price: '₹35', oldPrice: '₹40', badge: '', colors: ['#ffc107', '#ffffff'] },
      { id: 314, name: 'Paper Boat Pomegranate', image: '/soft drink/paper boat pomo granet.jpg', price: '₹35', oldPrice: '₹40', badge: '', colors: ['#d32f2f', '#ffffff'] },
      { id: 315, name: 'Fanta 2L', image: '/soft drink/fanta 2 liter.webp', price: '₹95', oldPrice: '₹105', badge: '', colors: ['#ff8200', '#ffffff'] },
      { id: 316, name: 'Maaza Small', image: '/soft drink/maza 10 rupee.webp', price: '₹10', oldPrice: '₹12', badge: '', colors: ['#ffb11b', '#41ad49'] },
      { id: 317, name: 'Pepsi Small', image: '/soft drink/pepsi 20ruppe.jpg', price: '₹20', oldPrice: '₹25', badge: '', colors: ['#005cb4', '#ffffff'] },
      { id: 318, name: 'Sprite Small', image: '/soft drink/sprite small.webp', price: '₹20', oldPrice: '₹25', badge: '', colors: ['#008b45', '#ffffff'] },
      { id: 319, name: 'Paper Boat Guava', image: '/soft drink/paper boat guava.avif', price: '₹35', oldPrice: '₹40', badge: '', colors: ['#8bc34a', '#ffffff'] },
      { id: 320, name: 'Fanta Can', image: '/soft drink/fanta can.jpeg', price: '₹35', oldPrice: '₹40', badge: '', colors: ['#ff8200', '#ffffff'] },
      { id: 321, name: 'Appy Small', image: '/soft drink/appy 10.avif', price: '₹10', oldPrice: '₹12', badge: '', colors: ['#000000', '#ffffff'] },
    ]
  },
  { 
    id: 4, name: 'Biscuit', image: '/catogeries/biscuit-removebg-preview.png', bg: 'linear-gradient(145deg,#c0607a,#f0aabe)', tag: 'Popular',
    products: generateProducts('Biscuit', 500)
  },
  { 
    id: 5, name: 'Ice Cream', image: '/catogeries/ice_cream-removebg-preview.png', bg: 'linear-gradient(145deg,#c96a1a,#f0a050)', tag: 'Festival',
    products: generateProducts('Ice Cream', 400)
  },
  { 
    id: 6, name: 'Choclate', image: '/catogeries/chocklate-removebg-preview.png', bg: 'linear-gradient(145deg,#9a4800,#d97820)', tag: 'Seasonal',
    products: generateProducts('choclate', 450)
  },
  { 
    id: 7, name: 'Dairy Products', image: '/catogeries/dairy-removebg-preview.png', bg: 'linear-gradient(145deg,#6b3820,#a06040)', tag: 'Traditional',
    products: generateProducts('Dairy Products', 600)
  },
  { 
    id: 8, name: 'Snackers', image: '/catogeries/maggi-removebg-preview.png', bg: 'linear-gradient(145deg,#b85000,#ff8c00)', tag: 'Crispy',
    products: generateProducts('Snackers', 200)
  },
];

const SweetsStrip = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="shop" className="sweets-strip-section">
      <div className="container">
        {/* Heading */}
        <div className="sweets-strip__header">
          <p className="section-tag">Our Collection</p>
          <h2 className="sweets-strip__title">Explore Our Categories</h2>
          <p className="sweets-strip__sub">Handcrafted daily with pure ingredients &amp; love</p>
        </div>

        {/* Card Row (Horizontal Scroll) */}
        <div className="sweets-strip__row">
          {SWEETS.map((s, i) => (
            <button
              key={s.id}
              className={`sweet-card ${active === i ? 'sweet-card--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={s.name}
            >
              {/* Colour swatch with Image */}
              <div className="sweet-card__swatch" style={{ background: s.bg }}>
                <span className="sweet-card__tag">{s.tag}</span>
                <img src={s.image} alt={s.name} className="sweet-card__img" />
              </div>
              {/* Info */}
              <div className="sweet-card__info">
                <span className="sweet-card__name">{s.name}</span>
                <span className="sweet-card__arrow">→</span>
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Product Grid Area */}
        <div className="sweets-strip__list-container">
          <div className="product-grid">
            {SWEETS[active].products.map((product) => (
              <div key={product.id} className="product-card">
                {/* Image Placeholder */}
                <div className="product-card__img-wrap">
                  {product.badge && (
                    <span className="product-card__badge">
                      ✦ {product.badge}
                    </span>
                  )}
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="product-card__img" />
                  ) : (
                    <div className="product-card__placeholder" style={{ background: SWEETS[active].bg }}>
                      {SWEETS[active].name[0]}
                    </div>
                  )}
                </div>
                
                {/* Product Info */}
                <div className="product-card__info">
                  <div className="product-card__details">
                    <h3 className="product-card__title">{product.name}</h3>
                    <div className="product-card__price-wrap">
                      <span className="product-card__price">{product.price}</span>
                      <span className="product-card__old-price">{product.oldPrice}</span>
                    </div>
                  </div>
                  
                  {/* Color/Variant Swatches */}
                  <div className="product-card__swatches">
                    {product.colors.map((color, idx) => (
                      <div key={idx} className="product-card__swatch-outer">
                        <div className="product-card__swatch-inner" style={{ backgroundColor: color }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="sweets-strip__cta">
          <button className="btn btn-primary">View All Sweets</button>
        </div>
      </div>
    </section>
  );
};

export default SweetsStrip;
