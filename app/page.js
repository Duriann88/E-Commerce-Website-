"use client";
import HeroBanner from '../components/HeroBanner';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';
import SocialProof from '../components/SocialProof';
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
