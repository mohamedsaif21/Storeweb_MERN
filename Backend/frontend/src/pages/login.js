import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../component/AuthContext';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Add this line for CSS
import { Link }from 'react-router-dom';
const Login = () => {
  const { login } = useContext(AuthContext);
  const [input, setInput] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log('Attempting login with:', { email: input.email });
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, input);
      console.log('Login successful:', res.data);
      login(res.data.token);
      alert('Login successful! Redirecting to Bakery Shop...');
      navigate('/bakery-shop');
    } catch (err) {
      console.log('Login error:', err);
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
 <p className="register-text">
  Don’t have an account?{" "}
  <Link to="/register" className="register-link">
    Register
  </Link>
</p>

<p className="forgot-text">
  Forgot your password?{" "}
  <Link to="/forgot-password" className="forgot-link">
    Reset Here
  </Link>
</p>
      </form>
    </div>
  );
};

export default Login;
