// Jeremy-Full OwnerShip

// Import React library
import React from 'react';
// Import social media icons from react-icons library
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// Import the CSS module for styling
import styles from './footer.module.css';

// Define the Footer component
const Footer = () => {
  return (
    // Footer element with a class name from the CSS module for styling
    <footer className={styles.footer}>
      {/* Container for the footer content */}
      <div className={styles['footer-content']}>
        {/* Container for contact information */}
        <div className={styles['contact-info']}>
          <h3>Contact Us</h3>
          <p>Email: Evolve@gmail.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
        {/* Container for legal links */}
        <div className={styles['legal-links']}>
          <h3>Legal</h3>
          {/* List of legal links */}
          <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/cookies">Cookies Policy</a></li>
          </ul>
        </div>
        {/* Container for social media links */}
        <div className={styles['social-media']}>
          <h3>Follow Us</h3>
          {/* Container for social media icons */}
          <div className={styles['social-icons']}>
            {/* Link to Facebook */}
            <a href="https://www.facebook.com"><FaFacebook /></a>
            {/* Link to Twitter */}
            <a href="https://twitter.com"><FaTwitter /></a>
            {/* Link to Instagram */}
            <a href="https://www.instagram.com"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Export the Footer component
export default Footer;




