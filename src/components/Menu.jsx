import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const iceCreams = [
    {
      id: 1,
      name: "Velvet Symphony",
      category: "classic",
      description: "Rich chocolate with caramel swirls",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Berry Melody",
      category: "fruity",
      description: "Mixed berries with vanilla base",
      price: "$5.49",
      image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Tropical Harmony",
      category: "exotic",
      description: "Mango and passion fruit fusion",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Caramel Sonata",
      category: "classic",
      description: "Salted caramel with chocolate chips",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Mint Concerto",
      category: "exotic",
      description: "Refreshing mint with chocolate chunks",
      price: "$5.49",
      image: "https://images.unsplash.com/photo-1530559221489-0f4c1007b095?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Citrus Rhapsody",
      category: "fruity",
      description: "Lemon and orange zest delight",
      price: "$5.49",
      image: "https://images.unsplash.com/photo-1461530568947-7fe2c47e7266?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const categories = ['all', 'classic', 'fruity', 'exotic'];

  const filteredIceCreams = activeCategory === 'all' 
    ? iceCreams 
    : iceCreams.filter(item => item.category === activeCategory);

  return (
    <section className="menu" id="menu">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Melodies
        </motion.h2>

        <div className="category-filter">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredIceCreams.map((item, index) => (
            <motion.div 
              key={item.id}
              className="menu-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 182, 193, 0.3)"
              }}
            >
              <div className="menu-card-image">
                <img src={item.image} alt={item.name} />
                <div className="menu-card-overlay">
                  <button className="order-btn">Add to Cart</button>
                </div>
              </div>
              <div className="menu-card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-card-footer">
                  <span className="price">{item.price}</span>
                  <span className="category-tag">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;