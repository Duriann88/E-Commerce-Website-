"use client";
import React, { useState } from 'react';


const EarbudPage = () => {
  const [images, setImages] = useState({
    img1: "/EarBud_2.png",
    img2: "/EarBud_1.png",
    img3: "/Earbud_3.png"
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
        <span style={{ color: '#6B46C1', fontWeight: 'bold', }}>Clearance Sale</span>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Asus Vivobook 16X</h1>
        <p style={{ color: '#293039', width: '80%' }}>
        Every note sounds like the real thing because clear audio starts at the source with your favourite devices.
        The updated <strong>Evolve</strong> Seamless Codec encodes the full 24-bit audio to decode on the Evolve Advanced Buds2 Pro, maintaining that same
        24-bit high-quality sound Active Noise Cancelling (ANC) is better than ever. With 3 high SNR (Signal-to-Noise Ratio) microphones
        the Advanced Buds2 Pro tracks and eliminates more outside sound — even soft sounds like wind
        </p>
        <h6 style={{ color: '#293039', fontWeight: 'bold', fontSize:"20px" }}>$190.00</h6>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={buttonStyle} onClick={() => setAmount((prev) => prev - 1)}>-</button>
          <span style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: '#E5E7EB', fontWeight: 'bold' }}>{amount}</span>
          <button style={buttonStyle} onClick={() => setAmount((prev) => prev + 1)}>+</button>
        </div>
        <button style={{ ...buttonStyle, marginTop: '16px', marginBottom: '50px',}}>Add To Cart</button>
        <h2>Specifications</h2>
        <ul style={{ textAlign: 'center' }}>
          <li>24-bit Hi-Fi</li>
          <li>SSC Hi-Fi* , AAC , SBC</li>
          <li>Direct Multi channel (5.1ch/7.1ch/Dolby Atmos)</li>
          <li>coaxial 2-way speaker – woofer and tweeter</li>
          <li>360 dio support Deep Neural Network + Personalized Beamforming</li>
          <li>Auto Switching</li>
        </ul>
      </div>
    </div>
  );
};

export default EarbudPage;

