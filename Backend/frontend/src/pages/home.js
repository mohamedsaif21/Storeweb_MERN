import React, { useContext } from 'react';
import { AuthContext } from '../component/AuthContext';
import './home.css';
import axios from 'axios';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete("http://localhost:7000/api/auth/delete-account", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert("Account deleted successfully.");
      logout(); // Clear context and localStorage
    } catch (err) {
      console.error("Delete failed", err);
      alert("Error deleting account");
    }
  };

  return (
    <div className="home-container">
      <h2 className="welcome-text">Welcome, {user?.username}</h2>

      {user?.profilePic && (
        <img
          className="profile-pic"
          src={`http://localhost:7000${user?.profilePic?.url}`}
          alt="Profile"
        />
      )}

      <button className="logout-btn" onClick={logout}>Logout</button>
      <button className="delete-btn" onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default Home;

