import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment: "The best ice cream I've ever tasted! Each flavor is like a sweet melody.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      comment: "Absolutely magical experience! The Tropical Harmony is my favorite.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      id: 3,
      name: "Emma Davis",
      comment: "Melodious World makes my weekends special. Can't get enough!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 4,
      name: "David Wilson",
      comment: "Premium quality with amazing service. Worth every penny!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/82.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Sweet Reviews
        </motion.h2>

        <div className="testimonials-container">
          <FaQuoteLeft className="quote-icon" />
          
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100 
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <p>{testimonial.comment}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <span>Regular Customer</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;