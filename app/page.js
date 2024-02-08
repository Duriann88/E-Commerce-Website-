"use client"; // Declares usage of client-side code
// Importing necessary components
import HeroBanner from '../components/heroBanner'; 
import ProductShowcase from '../components/productShowCase'; 
import Footer from '../components/footer'; 
import SocialProof from '../components/socialProof'; 

// Home component declaration
const Home = () => {
  return (
    <div>
      <HeroBanner /> {/* Rendering HeroBanner component */}
      <ProductShowcase /> {/* Rendering ProductShowcase component */}
      <SocialProof /> {/* Rendering SocialProof component */}
      <Footer /> {/* Rendering Footer component */}
    </div>
  );
};

export default Home; // Exporting Home component as default

