import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(()=>{
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setProfiles(data))
    } catch (error) {
        console.error('Error Fetching Data:', error)
    }
  },[])

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-4'> Profiles </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          profiles.map(profile => (
            <div key={profile.id} className='bg-white p-4 rounded-lg shadow'>
              <Link to={`/profile/${profile.id}`}>
                <h2 className='text-xl font-bold mb-2'>{profile.name}</h2>
                <img/>
                <p className="text-gray-600">{profile.company}</p>
              </Link>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default ProfileList

