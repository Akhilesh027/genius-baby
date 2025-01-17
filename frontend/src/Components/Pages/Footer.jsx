import React, { useRef, useEffect } from 'react';
import './Footer.css';
import logo from '../Images/logo.jpeg'; // Adjust the path as necessary
import { FaGooglePlay, FaApple, FaWhatsapp, FaYelp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import gsap from 'gsap';

const Footer = () => {
  const footerRef = useRef(null);
  const footerLogoRef = useRef(null);
  const footerSectionsRef = useRef(null);
  const footerBottomRef = useRef(null);

  useEffect(() => {
    // Animate the footer logo
    gsap.fromTo(
      footerLogoRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Animate the footer sections
    gsap.fromTo(
      footerSectionsRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.3 }
    );

    // Animate the footer bottom
    gsap.fromTo(
      footerBottomRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-section" ref={footerLogoRef}>
          <img src={logo} alt="Genius Baby Logo" className="footer-logo" />
          <p className='text'>
            Explore our range of baby music products and give your little genius the gift of music. From musical mobiles and soft plush toys to baby-friendly instruments, Genius Baby has everything you need to inspire your child's musical journey.
          </p>
        </div>
        <div className="footer-section" ref={footerSectionsRef}>
          <h3>Genius Baby</h3>
          <p className="footer-link">Order now</p>
          <p className="footer-link">Cart</p>
        </div>
        <div className="footer-section">
          <p>
            At Genius Baby, your child's safety is our top priority. All our music products are made from high-quality, non-toxic materials and are rigorously tested to ensure they meet the highest safety standards.
          </p>
          <div className="store-icons">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"><FaGooglePlay size={30} /></a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><FaApple size={30} /></a>
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} /></a>
            <a href="https://www.yelp.com" target="_blank" rel="noopener noreferrer"><FaYelp size={30} /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom" ref={footerBottomRef}>
        <p>Copyright © 2024 | [Genius Baby]</p>
        <div className="footer-social-icons">
          <i className="fab fa-yelp"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
