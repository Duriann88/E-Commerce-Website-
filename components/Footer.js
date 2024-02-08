// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons from react-icons library
import styles from './footer.css'; // Import the CSS module for styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div className={styles['contact-info']}>
          <h3>Contact Us</h3>
          <p>Email: Evolve@gmail.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
        <div className={styles['legal-links']}>
          <h3>Legal</h3>
          <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/cookies">Cookies Policy</a></li>
          </ul>
        </div>
        <div className={styles['social-media']}>
          <h3>Follow Us</h3>
          <div className={styles['social-icons']}>
            <a href="https://www.facebook.com"><FaFacebook /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://www.instagram.com"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



