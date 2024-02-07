import React, { useState } from 'react';

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: "/iphone 15_1.jpg",
    img2: "/iphone15_2.jpg",
    img3: "/iphone15_3.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const thumbnailContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    gap: '8px', // Add gap between thumbnails
  };

  const thumbnailStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    cursor: 'pointer'
  };

  const buttonStyle = {
    backgroundColor: '#E5E7EB',
    color: '293039',
    fontWeight: 'bold',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
        <img src={activeImg} style={imageStyle} />
        <div style={thumbnailContainerStyle}>
          <img src={images.img1} style={thumbnailStyle} onClick={() => setActiveImage(images.img1)} />
          <img src={images.img2} style={thumbnailStyle} onClick={() => setActiveImage(images.img2)} />
          <img src={images.img3} style={thumbnailStyle} onClick={() => setActiveImage(images.img3)} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ color: '#6B46C1', fontWeight: 'bold' }}>Brand New</span>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Asus Vivobook 16X</h1>
        <p style={{ color: '#4B5563', width: '80%' }}>
          The innovative new design features back glass that has colour infused
          throughout the material. A custom dual ion-exchange process for the glass,
          and an aerospace-grade aluminium enclosure, help make iPhone 15 incredibly durable.
          Now the Main camera shoots in super-high resolution. So it’s easier than ever to take
          standout photos with amazing detail — from snapshots to stunning landscapes. 
        </p>
        <h6 style={{ color: '#6B46C1', fontWeight: 'bold' }}>$1,107.00</h6>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={buttonStyle} onClick={() => setAmount((prev) => prev - 1)}>-</button>
          <span style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: '#E5E7EB', fontWeight: 'bold' }}>{amount}</span>
          <button style={buttonStyle} onClick={() => setAmount((prev) => prev + 1)}>+</button>
        </div>
        <button style={{ ...buttonStyle, marginTop: '16px' }}>Add To Cart</button>
        <h2>Specifications</h2>
        <ul style={{ textAlign: 'left' }}>
          <li>A16 Bionic chip (4 nm)</li>
          <li>6.1″ inch Amoled, 60 Hz</li>
          <li>48 MP Main + 12 MP Ultra Wide</li>
          <li>3349 mAh 20 Watt Charger</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
