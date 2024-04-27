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

  const images = [
    {
      imgUrl: "https://www.userbrain.com/static/inviteYourOwnHeader1-878b5db230ca8e78e1451814ba07a834.jpg"
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXv2ETo13yobSRY6T9JTq9s6L9Ou8B0w3QqCyxgVyF7h2w3-IxHPxoPjd4NFp_EvhcNkg"
    },
    {
      imgUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg"
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ92-QmsrGKSJOPlsZ7ywBGJQA1oVd2qajRbsIqIIa3lIdaAOL_0OHpI32O2JegHXV2d8"
    },
    {
      imgUrl: "https://i.pinimg.com/originals/e8/b2/71/e8b271169214323595f5155a649884d2.jpg"
    },
    { 
      imgUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oNqnXQP4-i-snZY1Lz2ETNq1AfGDeTHlw6DeRWw8I6OKk-7U4GRUeV0RmkVr9N8M2_s"
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooTNlmpNdAokheuaajeKm_-8GV4W-iux8CH8yS1YCUcmxEK_WVoOQmaGp9S9kb7dbAsA"
    },
    {
      imgUrl: "https://parkcitysmile.com/wp-content/uploads/bb-plugin/cache/DSC7336-scaled-square-a95c98b1d65ece482140e7542c811820-icy4l03at9df.jpg"
    },
    {
      imgUrl: "https://parkcitysmile.com/wp-content/uploads/bb-plugin/cache/image1-scaled-square-4412c6a5cf73f88ea38cb2a414c8fbf5-fb05h4zjksqn.jpeg"
    },
  ]

  return (
    <>
      <div className="w-screen bg-[#ebeeee]">
        <div className="max-w-screen-xl container mx-auto py-8">
        <h1 className='py-4 mb-10 text-4xl font-bold text-center text-[#001b5e]'> All Users </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {users.map((user, index) => (
              <div key={user.id} className="p-4 rounded-lg shadow-xl hover:scale-105">
                <Card user={user} onOpenProfile={openProfileModal} imgUrl={images[index].imgUrl} />
              </div>
            ))}
          </div>
          {showProfileModal && <ProfileModal user={selectedUser} onClose={closeProfileModal} />}
        </div>
      </div>
    </>
  );
};

export default ProfileList;