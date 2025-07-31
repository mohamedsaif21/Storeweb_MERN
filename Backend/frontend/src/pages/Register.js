import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Add this line
import { Link, useNavigate }from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
 const navigate=useNavigate()
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('email', formData.email);
    data.append('username', formData.username);
    data.append('password', formData.password);
    if (image) {
      data.append('profilePic', image);
    }

    try {
      const response = await axios.post('http://localhost:7000/api/auth/register', data);
      console.log('Registration successful:', response.data);
      alert('Registered successfully! Redirecting to login...');
      navigate("/login");
    } catch (err) {
      console.log('Registration error:', err);
      alert('Error: ' + (err.response?.data?.message || 'Registration failed'));
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Register</h2>
        <input name="email" onChange={handleChange} placeholder="Email" required />
        <input name="username" onChange={handleChange} placeholder="Username" required />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
       
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <img src={preview} alt="Preview" className="preview-image" />}

        <button type="submit">Register</button>

      <p className="register-text">
  Already have an account?{" "}
  <Link to="/login" className="register-link">
    Login
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
}

export default Register;

