import axios from 'axios';

// Set base URL for axios
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Auth services
export const login = async (credentials) => {
  const { data } = await axios.post('/api/auth/login', credentials);
  return data;
};

export const register = async (userDetails) => {
  const { data } = await axios.post('/api/auth/register', userDetails);
  // Only return non-sensitive data (e.g., username, profile photo, role)
  return {
    username: data.username,
    profilePhoto: data.profilePhoto,
    role: data.role,
  };
};










// import axios from 'axios';

// // Set base URL for axios
// axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// // Auth services

// // Login function: Sends login credentials and returns token and user data
// export const login = async (credentials) => {
//   try {
//     const { data } = await axios.post('/api/auth/login', credentials);
//     return data; // Should return token and user data (e.g., username, profilePhoto, role, etc.)
//   } catch (error) {
//     console.error('Login error:', error);
//     throw new Error('Failed to login');
//   }
// };

// // Register function: Sends user details and returns non-sensitive user data
// export const register = async (userDetails) => {
//   try {
//     const { data } = await axios.post('/api/auth/register', userDetails);
//     // Only return non-sensitive data (e.g., username, profile photo, role)
//     return {
//       username: data.username,
//       profilePhoto: data.profilePhoto,
//       role: data.role,
//       token: data.token, // Assuming the token is returned here (can be adjusted based on API response)
//     };
//   } catch (error) {
//     console.error('Registration error:', error);
//     throw new Error('Failed to register');
//   }
// };

// // Optional: Logout function for clearing the session or token
// export const logout = () => {
//   // Clear token from storage or perform any necessary cleanup
//   localStorage.removeItem('authToken');
// };