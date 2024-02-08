import React from 'react'; // Importing React library
import { FaStar } from 'react-icons/fa'; // Importing FaStar icon from react-icons/fa

// Define the SocialProof component
const SocialProof = () => {
  return (
    // Div containing social proof section with inline styles for background color, padding, and text alignment
    <div style={{ backgroundColor: '#f9f9f9', padding: '50px 0', textAlign: 'center' }}>
      {/* Heading for the social proof section with inline styles for font size, font weight, and margin */}
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>What Our Customers Say</h2>
      
      {/* Container for customer reviews with inline styles for flex layout */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Container for individual customer review cards with inline styles for maximum width and margin */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          
          {/* First customer review with inline styles for margin */}
          <div style={{ marginBottom: '20px' }}>
            {/* Star icons for rating with inline styles for color and margin */}
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            {/* Review text with inline style for font size and margin */}
            <p style={{ fontSize: '18px', marginTop: '5px' }}>Excellent service and fast delivery!</p>
            {/* Reviewer's name with inline style for font size and color */}
            <p style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>John Doe</p>
          </div>
          
          {/* Second customer review with inline styles for margin */}
          <div style={{ marginBottom: '20px' }}>
            {/* Star icons for rating with inline styles for color and margin */}
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px', opacity: '0.5' }} />
            {/* Review text with inline style for font size and margin */}
            <p style={{ fontSize: '18px', marginTop: '5px' }}>Good product quality, but delivery took a bit longer than expected.</p>
            {/* Reviewer's name with inline style for font size and color */}
            <p style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>Jane Smith</p>
          </div>
          
          {/* Third customer review with inline styles for margin */}
          <div>
            {/* Star icons for rating with inline styles for color and margin */}
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px', opacity: '0.5' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px', opacity: '0.5' }} />
            <FaStar style={{ color: '#ffd700', marginRight: '5px', opacity: '0.5' }} />
            {/* Review text with inline style for font size and margin */}
            <p style={{ fontSize: '18px', marginTop: '5px' }}>Average experience. Product was okay.</p>
            {/* Reviewer's name with inline style for font size and color */}
            <p style={{ fontSize: '16px', color: '#666', marginTop: '10px' }}>David Brown</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the SocialProof component
export default SocialProof;

