import React, { useState, useEffect } from 'react';
import Card from './Card';
import ProfileModal from './ProfileModal';

const ProfileList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const openProfileModal = (user) => {
    setSelectedUser(user);
    setShowProfileModal(true);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  return (
    <>
      <div className="w-screen bg-[#ebeeee]">
        <div className="max-w-screen-xl container mx-auto py-8">
        <h1 className='py-4 mb-10 text-4xl font-bold text-center text-[#001b5e]'> All Users </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {users.map(user => (
              <div key={user.id} className="p-4 rounded-lg shadow-xl hover:scale-105">
                {/* Pass the openProfileModal function directly */}
                <Card user={user} onOpenProfile={openProfileModal} />
              </div>
            ))}
          </div>
          
          {/* Render the modal if showProfileModal is true */}
          {showProfileModal && <ProfileModal user={selectedUser} onClose={closeProfileModal} />}
        </div>
      </div>
    </>
  );
};

export default ProfileList;