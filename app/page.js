"use client";
import HeroBanner from '../components/heroBanner';
import ProductShowcase from '../components/productShowCase';
import Footer from '../components/footer';
import SocialProof from '../components/socialProof';



const Home = () => {
  return (
    <div>
      <HeroBanner />
      <ProductShowcase />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default Home;
