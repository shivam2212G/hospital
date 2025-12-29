import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaAward } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Natural Ingredients",
      description: "Made with 100% natural ingredients from local farms"
    },
    {
      icon: <FaHeart />,
      title: "Made with Love",
      description: "Each scoop is crafted with passion and care"
    },
    {
      icon: <FaAward />,
      title: "Award Winning",
      description: "Recognized as the best ice cream shop in the city"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Sweet Story
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Our Ice Cream Shop"
            />
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>A Symphony of Flavors</h3>
            <p>
              Since 2010, Melodious World has been crafting magical ice cream experiences. 
              Our journey began with a simple dream: to create ice cream that not only tastes 
              amazing but also brings joy to every soul.
            </p>
            <p>
              Each flavor is carefully composed like a beautiful melody, blending the finest 
              ingredients to create harmonious taste sensations that linger like sweet memories.
            </p>

            <div className="features">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;