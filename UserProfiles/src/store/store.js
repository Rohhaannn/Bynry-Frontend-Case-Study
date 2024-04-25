import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  users: {
    users: [], // Initialize as an empty array
    loading: false,
    error: null,
  },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
