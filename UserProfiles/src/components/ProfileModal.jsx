import React from 'react';

const ProfileModal = ({ user, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
        <p className="text-gray-600 font-semibold">Username: {user.username}</p>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">Phone: {user.phone}</p>
        <p className="text-gray-600">Website: {user.website}</p>
        <p className="text-gray-600">Company: {user.company?.name}</p>
        <p className="text-gray-600">Address: {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
