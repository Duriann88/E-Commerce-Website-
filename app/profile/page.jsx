import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegCalendar, FaShoppingBag } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Your Profile</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          {/* Personal Information */}
          <div className="flex items-center mb-6">
            <FaUser className="text-gray-600 w-6 h-6 mr-3" />
            <span className="text-lg font-semibold text-293039">Personal Information</span>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FaUser className="text-gray-600 w-6 h-6 mr-3"/>
              <span className="font-semibold text-293039">Name:</span> John Doe
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-gray-600 w-6 h-6 mr-3"/>
              <span className="font-semibold text-293039">Email:</span> john.doe@example.com
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="text-gray-600 w-6 h-6 mr-3"/>
              <span className="font-semibold text-293039">Phone:</span> +1234567890
            </div>
          </div>
          {/* Address */}
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-gray-600 w-6 h-6 mr-3"/>
            <span className="text-lg font-semibold text-293039">Address</span>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-gray-600 w-6 h-6 mr-3"/>
              <span className="font-semibold text-293039">Street:</span> 123 Main St
            </div>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-gray-600 w-6 h-6 mr-3"/>
              <span className="font-semibold text-293039">City:</span> Anytown
            </div>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-gray-600 w-6 h-6 mr-3"/>
              <span className="font-semibold text-293039">State:</span> AnyState
            </div>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-gray-600 w-6 h-6 mr-3"/>
              <span className="font-semibold text-293039">Country:</span> AnyCountry
            </div>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-gray-600 w-6 h-6 mr-3"/>
              <span className="font-semibold text-293039">Zip:</span> 12345
            </div>
          </div>
          {/* Additional Information */}
          <div className="flex items-center mb-6">
            <FaRegCalendar className="text-gray-600 w-6 h-6 mr-3"/>
            <span className="text-lg font-semibold text-293039">Additional Information</span>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <FaRegCalendar className="text-gray-600 w-6 h-6 mr-3"/>
              <span className="font-semibold text-293039">Member Since:</span> January 1, 2022
            </div>
            <div className="flex items-center mb-2">
              <FaShoppingBag className="text-gray-600 w-6 h-6 mr-3"/>
              <span className="font-semibold text-293039">Last Purchase:</span> February 1, 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

