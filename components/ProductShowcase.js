// components/ProductShowcase.js

import React from 'react';
import styles from './ProductShowcase.module.css'; // Import CSS module for styling

const ProductShowcase = () => {
  return (
    <section className={styles['product-showcase']}>
      <div className={styles['product-title']}>
        <a href="/products">Our Products</a>
      </div>
      {/* Category Carousel */}
      <div className={`${styles['horizontal-image-movement']} ${styles['category-carousel']}`}>
        {/* Link images to product details */}
        <a href="/product-details/category1">
          <img src="/Asus computer.jpg" alt="Computer" />
        </a>
        <a href="/product-details/category2">
          <img src="/Iphone.jpg" alt="Iphone" />
        </a>
        <a href = "/product-detail/category3">
          <img src="/Evolve earbud.jpg" alt="Earbud"/>
        </a>
      </div>
    </section>
  );
};

export default ProductShowcase;








