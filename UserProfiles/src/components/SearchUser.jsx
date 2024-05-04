import React, { useState } from 'react';
import axios from 'axios';

const SearchUser = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState('');

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      alert('Please enter a search query.');
      return;
    }

    setLoading(true);
    setSearchError('');
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?q=${searchQuery}`
      );
      setSearchResults(response.data);
      if (response.data.length === 0) {
        setSearchError('User not found or not available.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearchResults([]);
      setSearchError('Error fetching data. Please try again.');
    }
    setLoading(false);
  };

  const handleEditUser = (userId) => {
    alert(`Editing user with ID: ${userId}`);
    // Implement your edit logic here
  };

  const handleDeleteUser = (userId) => {
    alert(`Deleting user with ID: ${userId}`);
    // Implement your delete logic here
  };

  return (
    <>
      <div className="w-screen bg-[#ebeeee]">
        <div className="max-w-screen-xl container mx-auto py-8">
          <h1 className="py-4 mb-10 text-4xl font-bold text-center text-[#001b5e]">
            {" "}
            Admin{" "}
          </h1>
          <div className="rounded-md py-5 items-center flex px-3 gap-3">
            <input
              type="text"
              placeholder="Search by username or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-2 rounded-md font-medium text-xl"
            />
            <button 
              onClick={handleSearch}
              className="border border-black px-3 py-1 bg-[#3977d2] hover:bg-blue-600 hover:text-white rounded-md "
            >Search</button>
          </div>
        </div>
        {loading ? (
          <p className='font-bold space-y-5 text-center items-center'>Loading...</p>
        ) : searchError ? (
          <p className='font-bold text-red-600 text-center items-center'>
            {searchError}
          </p>
        ) : (
          <ul>
            {searchResults.map((user) => (
              <div className='justify-start text-center mb-5' key={user.id}>
                <p className='font-bold'>Result</p>
                <li>
                  <div className='px-3 py-3'> 
                    <strong>Name:</strong> {user.name}
                  </div>
                  <div className='px-3 py-3'>
                    <strong>Username:</strong> {user.username}
                  </div>
                  <div className='px-3 py-3'>
                    <strong>Email:</strong> {user.email}
                  </div>
                  <div className='px-3 py-3'>
                    <strong>Phone:</strong> {user.phone}
                  </div>
                  <div className='px-3 py-3'>
                    <strong>Website:</strong> {user.website}
                  </div>
                  <div className='px-3 py-3 flex justify-center gap-3'>
                    <button 
                      onClick={() => handleEditUser(user.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md px-4 py-2"
                    >
                      Delete
                    </button>
                  </div>
                  
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchUser;
