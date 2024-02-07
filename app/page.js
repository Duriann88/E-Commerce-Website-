"use client";
import HeroBanner from '../components/HeroBanner';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';
import PageLayout from './layout';



const Home = () => {
  return (
    <PageLayout>
      <HeroBanner />
      <ProductShowcase />
      <Footer />
    </PageLayout>
  );
};

export default Home;
