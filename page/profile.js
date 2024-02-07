"use client";
import HeroBanner from '../components/HeroBanner';
import ProductShowcase from '../components/ProductShowcase';
import SocialProof from '../components/SocialProof';
import Footer from '../components/Footer';
import PageLayout from '../app/layout';
const Profile = () => {
  return (
    <PageLayout>
      <HeroBanner />
      <ProductShowcase />
      <SocialProof />
      <Footer />
    </PageLayout>
  );
};

export default Profile;