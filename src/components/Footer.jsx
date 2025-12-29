import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaYoutube />, url: '#' }
  ];

  const quickLinks = ['Home', 'Menu', 'About', 'Gallery', 'Testimonials', 'Contact'];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-logo">Melodious World</h3>
            <p>Creating sweet memories one scoop at a time since 2010.</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url}
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4>Contact Info</h4>
            <div className="contact-info">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FaMapMarkerAlt />
                <span>123 Sweet Street, Flavor Town, FT 12345</span>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <FaPhone />
                <span>(123) 456-7890</span>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <FaEnvelope />
                <span>hello@melodiousworld.com</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>&copy; {currentYear} Melodious World Ice Cream Shop. All rights reserved.</p>
          <p>Made with ❤️ for ice cream lovers everywhere</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;