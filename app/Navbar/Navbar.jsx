import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/Evolve logo.png" alt="Company Logo" className={styles.logo} />
        <span className={styles.companyName}>Evolve</span>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navItem}>
          Home
        </Link>
        <div className={styles.dropdown}>
          <span className={styles.navItem}>Products</span>
          <div className={styles.dropdownContent}>
            <Link href="/asus">Computers</Link>
            <Link href="/iphone">Phones</Link>
            <Link href="/earbud">Earbuds</Link>
            <a href="/products">All Products</a>
          </div>
        </div>
        <Link href="/contactAndHelp" className={styles.navItem}>
          Contact
        </Link>
        <Link href="/stores" className={styles.navItem}>
            Store Locations
        </Link>
        <Link href="/profile" className={`${styles.navItem}`}>
            Profile
        </Link>
      </div>
    </nav>
  );
}
