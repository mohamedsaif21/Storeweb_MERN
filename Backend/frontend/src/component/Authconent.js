import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    let logoutTimer;

    const verifyToken = async () => {
      if (!token) return;

      try {
        const res = await axios.get("http://localhost:7000/api/auth/verify-token", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (res.data.valid) {
          setUser(res.data.user);

          const currentTime = Date.now();
          const expiryTime = res.data.user.exp * 1000;
          const timeLeft = expiryTime - currentTime;

         logoutTimer = setTimeout(() => {
            logout("⏰ Session expired. Please login again.");
          }, timeLeft);
        } else {
          logout("⛔ Invalid token. Please login again.");
        }
      } catch (err) {
        logout("⛔ Token verification failed.");
      }
    };

    verifyToken();
    return () => clearTimeout(logoutTimer);
  }, [token]);

  const login = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logout = (message) => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    console.log(message ,"message from logout"
    )
    alert( "Logged out successfully");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
