import axios from 'axios';

export const EditUser = (id, updatedUser) => async (dispatch) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser);
    dispatch({ type: 'EDIT_USER', payload: { id, updatedUser: response.data } });
  } catch (error) {
    dispatch({ type: 'USER_OPERATION_FAILURE', payload: error.message });
  }
};

export default EditUser