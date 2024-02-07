// components/ProductShowcase.js

import React from 'react';
import styles from './ProductShowcase.module.css'; // Import CSS module for styling
import Link from 'next/link';
const ProductShowcase = () => {
  return (
    <section className={styles['product-showcase']}>
      <div className={styles['product-title']}>
        <a href="/products">Our Products</a>
      </div>
      {/* Category Carousel */}
      <div className={`${styles['horizontal-image-movement']} ${styles['category-carousel']}`}>
        {/* Link images to product details */}
        <Link href="/AsusPage">
          <img src="/Asus computer.jpg" alt="Computer" />
        </Link>
        <a href="/iphone">
          <img src="/Iphone.jpg" alt="Iphone" />
        </a>
        <a href = "@/EarbudPage/page">
          <img src="/Evolve earbud.jpg" alt="Earbud"/>
        </a>
      </div>
    </section>
  );
};

export default ProductShowcase;










