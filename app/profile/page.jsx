import React from 'react';
import { FaUser, FaMapMarkerAlt, FaRegCalendar } from 'react-icons/fa'; // Remove unused icons
import Footer from '@/components/footer';

const Profile = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Profile Content */}
      <div style={{ flex: '1', padding: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>
          <FaRegCalendar style={{ marginRight: '10px' }} />
          Your Profile
        </h1>
        <div style={{ background: '#fff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
          {/* Personal Information */}
          <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#293039', fontFamily: 'Arial, sans-serif' }}>
              <FaUser style={{ marginRight: '10px' }} />
              Personal Information
            </h2>
            <div style={{ color: '#293039', fontFamily: 'Arial, sans-serif' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>Name:</span> John Doe
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>Email:</span> john.doe@example.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Phone:</span> +1234567890
              </div>
            </div>
          </div>
          {/* Address */}
          <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#293039', fontFamily: 'Arial, sans-serif' }}>
              <FaMapMarkerAlt style={{ marginRight: '10px' }} />
              Address
            </h2>
            <div style={{ color: '#293039', fontFamily: 'Arial, sans-serif' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>Street:</span> 123 Main St
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>City:</span> Anytown
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>State:</span> AnyState
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>Postal Code:</span> 12345
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Country:</span> AnyCountry
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
