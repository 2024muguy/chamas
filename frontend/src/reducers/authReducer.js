// src/redux/reducers/authReducer.js
import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: null, // You can store user info like name, email, etc.
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload, // Store user data from the payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
