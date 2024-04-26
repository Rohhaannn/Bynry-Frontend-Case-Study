import { createStore, applyMiddleware } from 'react-redux';
import thunk from 'react-redux';
import rootReducer from '../reducers/userReducer';

const initialState = {
  users: {
    users: [],
    loading: false,
    error: null,
  },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
