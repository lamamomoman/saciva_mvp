// AuthContext.js

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    // Handle the login click event
    console.log('Login button clicked');
    // Add your logic here, such as opening a window or showing a modal

    // Update the login state
    setLoggedIn(!isLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLoginClick }}>
      {children}
    </AuthContext.Provider>
  );
};
