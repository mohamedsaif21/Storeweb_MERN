import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSendOTP = async e => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/send-otp`, { email });
      setMsg("OTP sent to your email!");
      localStorage.setItem('resetEmail', email);
      navigate('/verify-otp');
    } catch (err) {
      setMsg(err.response?.data?.error || "Failed to send OTP");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSendOTP}>
        <h2>Reset Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send OTP</button>
        <p>{msg}</p>
      </form>
    </div>
  );
};

export default ForgotPassword;
