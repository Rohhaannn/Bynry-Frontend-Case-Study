import React from 'react';

const ProfileModal = ({ user, onClose }) => {
  const handleViewOnMap = () => {
    const addressQuery = `${user.address?.street}, ${user.address?.suite}, ${user.address?.city}, ${user.address?.zipcode}`;
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(addressQuery)}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md">
        <h2 className="text-xl font-bold mb-2 text-center">{user.name}</h2>
        <p className="text-gray-600 font-semibold"><strong>Username:</strong> {user.username}</p>
        <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
        <p className="text-gray-600"><strong>Website:</strong> {user.website}</p>
        <p className="text-gray-600"><strong>Company:</strong> {user.company?.name}</p>
        <p className="text-gray-600"><strong>Address:</strong> {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
            Close
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleViewOnMap}>
            View address on Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
