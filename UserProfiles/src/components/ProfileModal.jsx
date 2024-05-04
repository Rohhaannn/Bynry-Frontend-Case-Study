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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <button className="text-gray-600 hover:text-gray-900" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center mb-4">
          <img
            className="w-24 h-24 rounded-full object-cover mr-4" 
            src={user.imgUrl} 
            alt={user.name}
          />
          <div>
            <p className="text-gray-600 font-semibold">{user.username}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex flex-col space-y-2">
          <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
          <p className="text-gray-600"><strong>Website:</strong> {user.website}</p>
          <p className="text-gray-600"><strong>Company:</strong> {user.company?.name}</p>
          <p className="text-gray-600">
            <strong>Address:</strong> {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}
          </p>
        </div>
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleViewOnMap}>
            View Address on Map
          </button>
          {/* <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={onClose}>
            Close
          </button> */}
        </div>
        
        <div className="mt-8 border-t pt-4">
          <h3 className="text-lg font-bold mb-2">About Me</h3>
          <p className="text-gray-600">{user.company?.name}</p>
          <p className="text-gray-600">{user.company?.catchPhrase}</p>
          <p className="text-gray-600">{user.company?.bs}</p>
          <p className="text-gray-600"> <strong>Latitude :</strong> {user.address?.geo.lat}</p>
          <p className="text-gray-600"> <strong>Longtitude :</strong> {user.address?.geo.lng}</p>
          

          <h3 className="text-lg font-bold mt-4 mb-2">Interests</h3>
          <ul className="list-disc list-inside text-gray-600">
            {user.interests?.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
