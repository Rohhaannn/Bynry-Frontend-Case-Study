import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, addUser as addUserAction, editUser as editUserAction, deleteUser as deleteUserAction } from '../redux/reducers/userActions';
import SearchUser from './SearchUser';

const Admin = ({ users, loading, error, fetchUsers, addUser, editUser, deleteUser }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    const updatedUsers = [...users, newUser];
    saveUsersToLocalStorage(updatedUsers);
    setNewUser({
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: ''
        }
      }
    });
  };

  const saveUsersToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  return (
    <>
      <SearchUser/>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Add New User</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                width={20}
                name="name"
                placeholder="Name"
                value={newUser.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={newUser.username}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
              />
              <input
                type="text"
                name="address.street"
                placeholder="Street"
                value={newUser.address.street}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
              />
              <input
                type="text"
                name="address.suite"
                placeholder="Suite"
                value={newUser.address.suite}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
              />
              <input
                type="text"
                name="address.city"
                placeholder="City"
                value={newUser.address.city}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
              />
              <input
                type="text"
                name="address.zipcode"
                placeholder="Zipcode"
                value={newUser.address.zipcode}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
              />
              <input
                type="text"
                name="address.geo.lat"
                placeholder="Latitude"
                value={newUser.address.geo.lat}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
              />
              <input
                type="text"
                name="address.geo.lng"
                placeholder="Longitude"
                value={newUser.address.geo.lng}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
              />
              <button
                onClick={handleAddUser}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2 w-full sm:w-auto"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = {
  fetchUsers,
  addUser: addUserAction,
  editUser: editUserAction,
  deleteUser: deleteUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);