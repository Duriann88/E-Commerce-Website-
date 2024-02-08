import React from 'react';
import styles from './navbar.module.css'; // Importing CSS module for styles
import Link from 'next/link'; // Importing Link component from Next.js for client-side routing

// Navbar functional component
export default function Navbar() {
  return (
    <nav className={styles.navbar}> {/* Navbar container with styles from CSS module */}
      <div className={styles.logoContainer}> {/* Logo container */}
        <img src="/Evolve logo.png" alt="Company Logo" className={styles.logo} /> {/* Company logo */}
        <span className={styles.companyName}>Evolve</span> {/* Company name */}
      </div>
      <div className={styles.navLinks}> {/* Navigation links container */}
        <Link href="/" className={styles.navItem}> {/* Link to Home page */}
          Home
        </Link>
        <div className={styles.dropdown}> {/* Dropdown menu for Products */}
          <span className={styles.navItem}>Products</span> {/* Dropdown trigger */}
          <div className={styles.dropdownContent}> {/* Dropdown content */}
            <Link href="/asus">Computers</Link> {/* Link to Computers page */}
            <Link href="/iphone">Phones</Link> {/* Link to Phones page */}
            <Link href="/earbud">Earbuds</Link> {/* Link to Earbuds page */}
            <a href="/products">All Products</a> {/* Link to All Products page */}
          </div>
        </div>
        <Link href="/contactAndHelp" className={styles.navItem}> {/* Link to Contact page */}
          Contact
        </Link>
        <Link href="/stores" className={styles.navItem}> {/* Link to Stores page */}
            Store Locations
        </Link>
        <Link href="/profile" className={`${styles.navItem}`}> {/* Link to Profile page */}
            Profile
        </Link>
      </div>
    </nav>
  );
}

