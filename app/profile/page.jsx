import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegCalendar, FaShoppingBag, FaLock, FaUserShield } from 'react-icons/fa';

const Profile = () => {
  return (
    <div style={{ display: 'flex', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', backgroundColor: '#f0f2f5', padding: '20px', marginRight: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#293039', cursor: 'pointer' }}>
            <a href="/login-security" style={{ textDecoration: 'none', color: '#293039' }}>
              <FaLock style={{ marginRight: '10px' }} />
              Login & Security
            </a>
          </h2>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#293039', cursor: 'pointer' }}>
            <a href="/profile" style={{ textDecoration: 'none', color: '#293039' }}>
              <FaUser style={{ marginRight: '10px' }} />
              Your Profile
            </a>
          </h2>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#293039', cursor: 'pointer' }}>
            <a href="/privacy-settings" style={{ textDecoration: 'none', color: '#293039' }}>
              <FaUserShield style={{ marginRight: '10px' }} />
              Privacy Settings
            </a>
          </h2>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#293039', cursor: 'pointer' }}>
            <a href="/purchasing-history" style={{ textDecoration: 'none', color: '#293039' }}>
              <FaShoppingBag style={{ marginRight: '10px' }} />
              Purchasing History
            </a>
          </h2>
        </div>
      </div>
      {/* Profile Content */}
      <div style={{ flex: '1', padding: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
          <FaRegCalendar style={{ marginRight: '10px' }} />
          Your Profile
        </h1>
        <div style={{ background: '#fff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
          {/* Personal Information */}
          <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#293039' }}>
              <FaUser style={{ marginRight: '10px' }} />
              Personal Information
            </h2>
            <div style={{ color: '#293039' }}>
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
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#293039' }}>
              <FaMapMarkerAlt style={{ marginRight: '10px' }} />
              Address
            </h2>
            <div style={{ color: '#293039' }}>
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
                <span>Country:</span> AnyCountry
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


