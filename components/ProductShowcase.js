import styles from './productShowCase.module.css'; // Import CSS module for styling
// Define the ProductShowcase component
const ProductShowcase = () => {
  return (
    // Section containing the product showcase with a class name from the CSS module
    <section className={styles['product-showcase']}>
      {/* Container for the product title */}
      <div className={styles['product-title']}>
        {/* Link to the products page */}
        <a href="/products">Our Products</a>
      </div>
      
      {/* Category Carousel */}
      <div className={`${styles['category-carousel']}`}>
        {/* Link images to product details */}

        <a href="/asus">
          {/* Image for Asus product */}
          <img src="/Asus computer.jpg" alt="Computer" />
        </a>
        
        {/* Image for iPhone product */}
        <a href="/iphone">
          <img src="/Iphone.jpg" alt="Iphone" />
        </a>
        
        {/* Image for Earbud product */}
        <a href="earbud">
          <img src="/Evolve earbud.jpg" alt="Earbud"/>
        </a>
      </div>
    </section>
  );
};

// Export the ProductShowcase component
export default ProductShowcase;











