import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'

const ProfileList = () => {
  const [users, setUsers] = useState([]);

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

  return (
    <div className="max-w-screen-xl container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-4 text-center items-center">Users</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {users.map(user => (
        <div key={user.id} className="bg-white p-4 rounded-lg shadow">
          <Link to={`/profile/${user.id}`}>
            <Card user={user}/>
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ProfileList

