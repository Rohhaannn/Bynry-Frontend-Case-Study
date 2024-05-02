import axios from 'axios';

export const AddUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
    dispatch({ type: 'ADD_USER', payload: response.data });
  } catch (error) {
    dispatch({ type: 'USER_OPERATION_FAILURE', payload: error.message });
  }
};

export default AddUser