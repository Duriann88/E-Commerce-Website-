//Name: New Brandon
//Student No.: S10258236F
"use client";
import React, { useState } from 'react';
import CartModal from '@/components/CartModal';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

//Assigning earbuf photos to img variable
const EarbudPage = () => {
  const [images, setImages] = useState({
    img1: "/EarBud_2.png",
    img2: "/EarBud_1.png",
    img3: "/Earbud_3.png"
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);

  //styling for images in the gallery
  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  //styling the container for the thumbnail
  const thumbnailContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    gap: '8px', // Add gap between thumbnails
  };

  //styling the thumbnail
  const thumbnailStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    cursor: 'pointer'
  };

  //styling the "add to cart" button
  const buttonStyle = {
    backgroundColor: '#E5E7EB',
    color: '293039',
    fontWeight: 'bold',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
  };

  //return the layout of the iphone's product page
  return (
    <>
    <CartModal></CartModal>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
        <img src={activeImg} style={imageStyle} />
         {/* Thumbnails for switching images */}
        <div style={thumbnailContainerStyle}>
          <img src={images.img1} style={thumbnailStyle} onClick={() => setActiveImage(images.img1)} />{/* When image is clicked in the gallery, thumbnail would change to that image */}
          <img src={images.img2} style={thumbnailStyle} onClick={() => setActiveImage(images.img2)} />
          <img src={images.img3} style={thumbnailStyle} onClick={() => setActiveImage(images.img3)} />
        </div>
      </div>
      {/* Product description */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ color: '#6B46C1', fontWeight: 'bold', }}>Clearance Sale</span>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Evolve </h1>
        <p style={{ color: '#293039', width: '80%' }}>
        Every note sounds like the real thing because clear audio starts at the source with your favourite devices.
        The updated <strong>Evolve</strong> Seamless Codec encodes the full 24-bit audio to decode on the Evolve Advanced Buds2 Pro, maintaining that same
        24-bit high-quality sound Active Noise Cancelling (ANC) is better than ever. With 3 high SNR (Signal-to-Noise Ratio) microphones
        the Advanced Buds2 Pro tracks and eliminates more outside sound — even soft sounds like wind
        </p>
        <h6 style={{ color: '#293039', fontWeight: 'bold', fontSize:"20px" }}>$190.00</h6>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        </div>
        <Button variant='dark' sm='6'>
          <a href="/products">Purchase Now!</a>
        </Button>
        <h2>Specifications</h2>
        <ul style={{ textAlign: 'left' }}>
          <li>24-bit Hi-Fi</li>
          <li>SSC Hi-Fi* , AAC , SBC</li>
          <li>Direct Multi channel (5.1ch/7.1ch/Dolby Atmos)</li>
          <li>coaxial 2-way speaker – woofer and tweeter</li>
          <li>360 dio support Deep Neural Network + Personalized Beamforming</li>
          <li>Auto Switching</li>
        </ul>
      </div>
    </div>
    </>
    
  );
};

//initialise the iphone product page
export default EarbudPage;
