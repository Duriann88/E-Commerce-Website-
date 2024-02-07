"use client";
import HeroBanner from '../components/HeroBanner';
import ProductShowcase from '../components/ProductShowcase';
import SocialProof from '../components/SocialProof.js';
import Footer from '../components/Footer';
import PageLayout from './layout';



const Home = () => {
  return (
    <PageLayout>
      <HeroBanner />
      <ProductShowcase />
      <SocialProof />
      <Footer />
    </PageLayout>
  );
};

export default Home;
