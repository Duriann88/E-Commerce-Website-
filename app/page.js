"use client";
import HeroBanner from '../components/heroBanner';
import ProductShowcase from '../components/productShowCase';
import Footer from '../components/footer';
import SocialProof from '../components/socialProof';
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
