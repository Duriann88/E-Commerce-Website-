import React from 'react';
import styles from './Navbar.module.css';
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
            <Link href="/products/category1">Computers</Link>
            <Link href="/products/category2">Phones</Link>
            <Link href="/products/category3">Earbuds</Link>
            <Link href="/products/category4">All Products</Link>
          </div>
        </div>
        <Link href="/contact" className={styles.navItem}>
          Contact
        </Link>
        <Link href="../profile" className={`${styles.navItem}`}>
          Profile
        </Link>
      </div>
    </nav>
  );
}




