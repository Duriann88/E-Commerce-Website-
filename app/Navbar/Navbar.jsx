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
        <Link href="/">
          <a className={styles.navItem}>Home</a>
        </Link>
        <div className={styles.dropdown}>
          <span className={styles.navItem}>Products</span>
          <div className={styles.dropdownContent}>
            <Link href="/products/category1">
              <a>Computers</a>
            </Link>
            <Link href="/products/category2">
              <a>Phones</a>
            </Link>
            <Link href="/products/category3">
              <a>Earbuds</a>
            </Link>
            <Link href="/products/category4">
              <a>All Products</a>
            </Link>
          </div>
        </div>
        <Link href="/contactandHelp">
          <a className={styles.navItem}>Contact</a>
        </Link>
        <Link href="/profile">
          <a className={styles.navItem}>Profile</a>
        </Link>
      </div>
    </nav>
  );
}








