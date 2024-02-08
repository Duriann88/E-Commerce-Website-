"use client";
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

//Assigning asus vivobook photos to img variable
const AsusPage = () => {
  const [images, setImages] = useState({
    img1: "/Asus computer.jpg",
    img2: "/asus vivobook16_2.jpg",
    img3: "/asus vivobook_3.jpg"
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
    color: '#293039',
    fontWeight: 'bold',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none'
  };

  //return the layout of the iphone's product page
  return(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
        <img src={activeImg} style={imageStyle} />

        {/* Thumbnails for switching images */}
        <div style={thumbnailContainerStyle}>
          <img src={images.img1} style={thumbnailStyle} onClick={() => setActiveImage(images.img1)} />
          <img src={images.img2} style={thumbnailStyle} onClick={() => setActiveImage(images.img2)} />
          <img src={images.img3} style={thumbnailStyle} onClick={() => setActiveImage(images.img3)} />
        </div>
      </div>
      {/* Product description */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ color: '#293039', fontWeight: 'bold' }}>Hot Sale</span>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Asus Vivobook 16X</h1>
        <p style={{ color: '#4B5563', width: "50%"}}>
          Set your imagination free with the powerful Vivobook 16X (K3605)! Whether it’s
          for creative work or gaming fun, its 13th Gen Intel® Core™ H-series processor and
          NVIDIA® GeForce RTX™ 3050 Laptop GPU give you all the multitasking power you need.
        </p>
        <h6 style={{ color: '#293039', fontWeight: 'bold', fontSize:"20px"}}>$1,107.00</h6>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}></div>
        <Button variant='dark' sm='6'>
          <a href="/products">Purchase Now!</a>
        </Button>
        <h2>Specifications</h2>
        <ul style={{ textAlign: 'left' }}>
          <li>Windows 11 Home (64-bit)</li>
          <li>Intel® Core™ i9-13900H Processor 2.6 GHz (24M Cache, up to 5.4 GHz, 14 cores: 6 P-cores and 8 E-cores)</li>
          <li>NVIDIA® GeForce RTX™ 3050</li>
          <li>16.0" WUXGA(WU) 1920X1200 Wide View</li>
          <li>8GB DDR4 + 8GB DDR4 SO-DIMM</li>
          <li>1TB M.2 NVMe™ PCIe® 3.0 SSD</li>
          <li>2 Years International Warranty</li>
        </ul>
      </div>
    </div>
  )
};

//initialise the Asus product page
export default AsusPage;
