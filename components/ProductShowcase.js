import React from 'react';
import styles from './ProductShowcase.module.css'; // Import CSS module for styling
import Link from 'next/link';

const ProductShowcase = () => {
  return (
    <section className={styles['product-showcase']}>
      <div className={styles['product-title']}>
        <Link href="/products">
          <a>Our Products</a>
        </Link>
      </div>
      {/* Category Carousel */}
      <div className={`${styles['horizontal-image-movement']} ${styles['category-carousel']}`}>
        {/* Link images to product details */}
        <Link href="/product-details/category1">
          <a>
            <img src="/Asus computer.jpg" alt="Computer" />
          </a>
        </Link>
        <Link href="/product-details/category2">
          <a>
            <img src="/Iphone.jpg" alt="Iphone" />
          </a>
        </Link>
        <Link href="/product-detail/category3">
          <a>
            <img src="/Evolve earbud.jpg" alt="Earbud" />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ProductShowcase;








