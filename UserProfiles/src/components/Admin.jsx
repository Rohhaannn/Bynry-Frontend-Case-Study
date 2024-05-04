import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, addUser as addUserAction, editUser as editUserAction, deleteUser as deleteUserAction } from '../redux/reducers/userActions';
import SearchUser from './SearchUser';

const Admin = ({ users, loading, error, fetchUsers, addUser, editUser, deleteUser }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const [newUser, setNewUser] = useState({ name: '', username: '', email: '' });
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    addUser(newUser);
    setNewUser({ name: '', username: '', email: '' });
  };

  const handleEditUser = () => {
    editUser(editedUser.id, editedUser);
    setEditMode(false);
    setEditedUser({});
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId);
  };

  return (
    <>
      <SearchUser/>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Admin Panel</h1> */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Add New User</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
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
              <button
                onClick={handleAddUser}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2 w-full sm:w-auto"
              >
                Add User
              </button>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{editMode ? 'Edit User' : 'Add New User'}</h2>
            {editMode && (
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Edit user form */}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            {loading ? (
              <p className="text-gray-600">Loading...</p>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : users && users.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                  <li key={user.id} className="bg-white shadow-md rounded-lg p-4">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-gray-600">{user.username}</p>
                    <p className="text-gray-600">{user.email}</p>
                    <div className="flex mt-2">
                      <button
                        onClick={() => setEditMode(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2 mr-2"
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
                ))}
              </ul>
            ) : (
              <p>No users found</p>
            )}
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
