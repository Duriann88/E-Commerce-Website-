import React from 'react';
import { FaStar } from 'react-icons/fa';

const SocialProof = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '50px 0', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>What Our Customers Say</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <p style={{ fontSize: '18px', marginTop: '5px' }}>Excellent service and fast delivery!</p>
            <p style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>John Doe</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px', opacity: '0.5' }} />
            <p style={{ fontSize: '18px', marginTop: '5px' }}>Good product quality, but delivery took a bit longer than expected.</p>
            <p style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>Jane Smith</p>
          </div>
          <div>
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px', opacity: '0.5' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px', opacity: '0.5' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px', opacity: '0.5' }} />
            <p style={{ fontSize: '18px', marginTop: '5px' }}>Average experience. Product was okay.</p>
            <p style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>David Brown</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
