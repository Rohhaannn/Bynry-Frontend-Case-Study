import { createStore, applyMiddleware } from 'redux'; 
import { thunk } from 'redux-thunk'; 
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
