import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/login';
import BakeryShop from './pages/BakeryShop';
import { useAuth } from './component/AuthContext';
import ForgotPassword from './pages/forgotpassword';
import VerifyOTP from './pages/verifyOTP';

const App = () => {
  const PrivateRoute = ({ children }) => {
    const { token } = useAuth();
    return token ? children : <Navigate to="/login" />;
  };


  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route
        path="/bakery-shop"
        element={<PrivateRoute><BakeryShop /></PrivateRoute>}
      />
      {/* Redirect any legacy /home routes to /bakery-shop */}
      <Route path="/home" element={<Navigate to="/bakery-shop" />} />
    </Routes>
  );
};

export default App;
