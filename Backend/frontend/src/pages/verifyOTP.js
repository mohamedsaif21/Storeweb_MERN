// pages/VerifyOTP.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [msg, setMsg] = useState('');
  const email = localStorage.getItem('resetEmail');

  const handleResetPassword = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/api/auth/reset-password', {
        email,
        otp,
        newPassword,
      });
      setMsg("Password reset successful!");
      localStorage.removeItem('resetEmail');
      navigate('/login');
    } catch (err) {
      setMsg(err.response?.data?.error || "Failed to reset password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleResetPassword}>
        <h2>Verify OTP & Reset</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={e => setOTP(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
        <p>{msg}</p>
      </form>
    </div>
  );
};

export default VerifyOTP;
