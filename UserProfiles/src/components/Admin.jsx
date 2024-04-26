import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  fetchUsers,
  addUser as addUserAction,
  editUser as editUserAction,
  deleteUser as deleteUserAction,
} from '../redux/reducers/userActions';

const Admin = ({
  users,
  loading,
  error,
  fetchUsers,
  addUser,
  editUser,
  deleteUser,
}) => {
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
    <div>
      <h1>Admin Panel</h1>
      <div>
        <h2>Add New User</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={newUser.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <div>
        <h2>{editMode ? 'Edit User' : 'Add New User'}</h2>
        {editMode && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={editedUser.username}
              onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={editedUser.email}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
            />
            <button onClick={handleEditUser}>Save Changes</button>
          </>
        )}
      </div>
      <div>
        <h2>Users</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.username} - {user.email}
                <button onClick={() => setEditMode(true)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
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
