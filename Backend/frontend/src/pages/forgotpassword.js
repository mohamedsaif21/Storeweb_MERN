// pages/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSendOTP = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/api/auth/send-otp', { email });
      setMessage("OTP sent to your email.");
      localStorage.setItem('resetEmail', email);
      navigate('/verify-otp');
    } catch (err) {
      setMessage(err.response?.data?.error || "Failed to send OTP");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSendOTP}>
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send OTP</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default ForgotPassword;
