import React, { createContext, useState } from 'react';
import { login as loginService, register as registerService } from '../services/authService';

// Create the context for authentication
const AuthContext = createContext();

// Provider component that wraps your app and provides authentication state
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, user: null, isAuthenticated: false });

  const login = async (credentials) => {
    const data = await loginService(credentials);
    if (data?.token) {
      setAuth({ token: data.token, user: data.user, isAuthenticated: true });
      localStorage.setItem('authToken', data.token); // Store token in localStorage
    }
  };

  const logout = () => {
    setAuth({ token: null, user: null, isAuthenticated: false });
    localStorage.removeItem('authToken'); // Remove token on logout
  };

  const register = async (userDetails) => {
    const userData = await registerService(userDetails);
    if (userData?.token) {
      setAuth({ token: userData.token, user: userData.user, isAuthenticated: true });
      localStorage.setItem('authToken', userData.token); // Store token in localStorage
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
