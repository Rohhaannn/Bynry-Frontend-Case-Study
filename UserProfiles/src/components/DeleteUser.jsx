import axios from 'axios';

export const DeleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: 'DELETE_USER', payload: id });
  } catch (error) {
    dispatch({ type: 'USER_OPERATION_FAILURE', payload: error.message });
  }
};

export default DeleteUser