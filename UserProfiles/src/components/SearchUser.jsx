import React, { useState } from "react";
import axios from "axios";

const SearchUser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState(null);

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search query.");
      return;
    }

    setLoading(true);
    setSearchError("");
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?q=${searchQuery}`
      );
      setSearchResults(response.data);
      if (response.data.length === 0) {
        setSearchError("User not found or not available.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setSearchResults([]);
      setSearchError("Error fetching data. Please try again.");
    }
    setLoading(false);
  };

  const handleEditUser = (userId) => {
    setEditingUserId(userId);
    const user = searchResults.find((u) => u.id === userId);
    setEditedUser({ ...user });
  };

  const handleSaveUser = async () => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${editedUser.id}`,
        editedUser
      );
      setSearchResults((prevResults) =>
        prevResults.map((user) =>
          user.id === editedUser.id ? editedUser : user
        )
      );
      setEditingUserId(null);
      setEditedUser(null);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setSearchResults((prevResults) =>
        prevResults.filter((user) => user.id !== userId)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="w-screen bg-[#ebeeee]">
      <div className="max-w-screen-xl container mx-auto py-8">
        <h1 className="py-4 mb-10 text-4xl font-bold text-center text-[#001b5e]">
          Admin
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
            className="border border-black px-3 py-1 bg-[#3977d2] hover:bg-blue-600 hover:text-white rounded-md"
          >
            Search
          </button>
        </div>
        {loading ? (
          <p className="font-bold space-y-5 text-center items-center">
            Loading...
          </p>
        ) : searchError ? (
          <p className="font-bold text-red-600 text-center items-center">
            {searchError}
          </p>
        ) : (
          <ul>
            {searchResults.map((user) => (
              <div
                className="justify-start text-center mb-5 md:w-1/2 lg:w-1/3 px-4"
                key={user.id}
              >
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div>
                    {editingUserId === user.id ? (
                      <>
                        <input
                          type="text"
                          value={editedUser.name}
                          onChange={(e) =>
                            setEditedUser((prevUser) => ({
                              ...prevUser,
                              name: e.target.value,
                            }))
                          }
                          className="px-2 py-1 rounded-md border border-gray-300 w-full mb-2"
                        />
                        <input
                          type="text"
                          value={editedUser.username}
                          onChange={(e) =>
                            setEditedUser((prevUser) => ({
                              ...prevUser,
                              username: e.target.value,
                            }))
                          }
                          className="px-2 py-1 rounded-md border border-gray-300 w-full mb-2"
                        />
                        <input
                          type="text"
                          value={editedUser.email}
                          onChange={(e) =>
                            setEditedUser((prevUser) => ({
                              ...prevUser,
                              email: e.target.value,
                            }))
                          }
                          className="px-2 py-1 rounded-md border border-gray-300 w-full mb-2"
                        />
                        <input
                          type="text"
                          value={editedUser.phone}
                          onChange={(e) =>
                            setEditedUser((prevUser) => ({
                              ...prevUser,
                              phone: e.target.value,
                            }))
                          }
                          className="px-2 py-1 rounded-md border border-gray-300 w-full mb-2"
                        />
                        <input
                          type="text"
                          value={editedUser.website}
                          onChange={(e) =>
                            setEditedUser((prevUser) => ({
                              ...prevUser,
                              website: e.target.value,
                            }))
                          }
                          className="px-2 py-1 rounded-md border border-gray-300 w-full mb-2"
                        />
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={handleSaveUser}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2"
                          >
                            Save
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <p>
                          <strong>Name:</strong> {user.name}
                        </p>
                        <p>
                          <strong>Username:</strong> {user.username}
                        </p>
                        <p>
                          <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {user.phone}
                        </p>
                        <p>
                          <strong>Website:</strong> {user.website}
                        </p>
                        <div className="flex justify-center gap-3 mt-4">
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
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchUser;
