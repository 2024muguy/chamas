// src/redux/actions/authActions.js
import { LOGIN, LOGOUT } from '../actionTypes';

// Login Action
export const login = (credentials) => {
  return {
    type: LOGIN,
    payload: credentials, // You can customize this with user data if needed
  };
};

// Logout Action
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
