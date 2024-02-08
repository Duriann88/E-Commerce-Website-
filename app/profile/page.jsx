"use client";
import React, { useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaRegCalendar } from 'react-icons/fa'; // Remove unused icons
import Footer from '@/components/footer';

const Profile = () => {
  // State variables to hold the user's profile information
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [street, setStreet] = useState('123 Main St');
  const [city, setCity] = useState('Anytown');
  const [state, setState] = useState('AnyState');
  const [postalCode, setPostalCode] = useState('12345');
  const [country, setCountry] = useState('AnyCountry');
  
  // State variable to track whether the profile is in edit mode or not
  const [isEditMode, setIsEditMode] = useState(false);

  // Function to handle updating the profile information
  const handleUpdateProfile = () => {
    // Logic to send updated profile data to the backend server
    console.log('Profile updated:', { name, email, phone, street, city, state, postalCode, country });
    // Exit edit mode after updating
    setIsEditMode(false);
  };

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
            {/* Editable input fields for personal information */}
            <div style={{ color: '#293039', fontFamily: 'Arial, sans-serif' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>Name:</span> {isEditMode ? <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> : name}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>Email:</span> {isEditMode ? <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> : email}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Phone:</span> {isEditMode ? <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /> : phone}
              </div>
            </div>
          </div>
          {/* Address */}
          <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#293039', fontFamily: 'Arial, sans-serif' }}>
              <FaMapMarkerAlt style={{ marginRight: '10px' }} />
              Address
            </h2>
            {/* Editable input fields for address */}
            <div style={{ color: '#293039', fontFamily: 'Arial, sans-serif' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>Street:</span> {isEditMode ? <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} /> : street}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>City:</span> {isEditMode ? <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /> : city}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>State:</span> {isEditMode ? <input type="text" value={state} onChange={(e) => setState(e.target.value)} /> : state}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span>Postal Code:</span> {isEditMode ? <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} /> : postalCode}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Country:</span> {isEditMode ? <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} /> : country}
              </div>
            </div>
          </div>
          {/* Button to toggle edit mode and update profile */}
          <div style={{ padding: '20px', textAlign: 'center' }}>
            {isEditMode ? (
              <button style={{ padding: '10px 20px', backgroundColor: '#293039', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }} onClick={handleUpdateProfile}>
                Update Profile
              </button>
            ) : (
              <button style={{ padding: '10px 20px', backgroundColor: '#293039', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }} onClick={() => setIsEditMode(true)}>
                Edit Profile
              </button>
            )}
            {/* Button to cancel editing */}
            {isEditMode && (
              <button style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={() => setIsEditMode(false)}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;


