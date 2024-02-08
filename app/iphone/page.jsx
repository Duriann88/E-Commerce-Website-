"use client";
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

//Assigning iphone photos to img variable
const IphonePage = (props) => {
  const [images, setImages] = useState({
    img1: "/Iphone.jpg",
    img2: "/iphone15_2.jpg",
    img3: "/iphone15_3.jpg",
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
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
        <img src={activeImg} style={imageStyle} />
         {/* Thumbnails for switching images */}
        <div style={thumbnailContainerStyle}>
          <img src={images.img1} style={thumbnailStyle} onClick={() => setActiveImage(images.img1)} />
          <img src={images.img2} style={thumbnailStyle} onClick={() => setActiveImage(images.img2)} />
          <img src={images.img3} style={thumbnailStyle} onClick={() => setActiveImage(images.img3)} />
        </div>
        {/* Embedding Apple's iphonne commercial video */}
        <video controls autoPlay style={{ width: '100%', marginTop: '16px' }}>
          <source src="/Introducing iPhone 15 Pro _ Apple.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Product description */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ color: '#6B46C1', fontWeight: 'bold', fontFamily: "sans-serif"}}>Brand New</span>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: "sans-serif" }}>iPhone 15</h1>
        <p style={{ color: '#4B5563', width: '80%', fontFamily: "sans-serif" }}>
          The innovative new design features back glass that has colour infused
          throughout the material. A custom dual ion-exchange process for the glass,
          and an aerospace-grade aluminium enclosure, help make iPhone 15 incredibly durable.
          Now the Main camera shoots in super-high resolution. So it’s easier than ever to take
          standout photos with amazing detail — from snapshots to stunning landscapes. 
        </p>
        <h6 style={{ color: '#6B46C1', fontWeight: 'bold', fontSize:"20px", fontFamily: "sans-serif"}}>$1,107.00</h6>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        </div>
        <Button variant='dark' sm='6'>
          <a href="/products">Purchase Now!</a>
        </Button>
        <h2>Specifications</h2>
        <ul style={{ textAlign: 'left', fontFamily: "sans-serif" }}>
          <li>A16 Bionic chip (4 nm)</li>
          <li>6.1″ inch Amoled, 60 Hz</li>
          <li>48 MP Main + 12 MP Ultra Wide</li>
          <li>3349 mAh 20 Watt Charger</li>
        </ul>
      </div>
    </div>
    </>
  );
};

//initialise the iphone product page
export default IphonePage;
