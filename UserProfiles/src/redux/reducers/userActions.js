import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};

export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: user,
});

export const editUser = (id, updatedUser) => ({
  type: 'EDIT_USER',
  payload: { id, updatedUser },
});

export const deleteUser = (id) => ({
  type: 'DELETE_USER',
  payload: id,
});
