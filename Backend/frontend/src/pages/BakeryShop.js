import React, { useContext, useState } from 'react';
import { AuthContext } from '../component/AuthContext';
import UserProfile from './userprofile';
import './BakeryShop.css';

const BakeryShop = () => {
  const { user, logout } = useContext(AuthContext);
  const [currentView, setCurrentView] = useState('home');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'profile':
        return <UserProfile />;
      case 'home':
      default:
        return renderHomeContent();
    }
  };

  const renderHomeContent = () => (
    <>
      {/* Main Content */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=200&fit=crop" className="card-img-top" alt="Cakes" style={{height: '200px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">Delicious Cakes</h5>
                <p className="card-text">Fresh baked cakes made with premium ingredients. Perfect for celebrations and special occasions.</p>
                <button className="btn btn-primary">View Cakes</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=200&fit=crop" className="card-img-top" alt="Bread" style={{height: '200px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">Fresh Bread</h5>
                <p className="card-text">Artisan breads baked daily using traditional methods and the finest quality ingredients.</p>
                <button className="btn btn-primary">View Bread</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=200&fit=crop" className="card-img-top" alt="Pastries" style={{height: '200px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">Sweet Pastries</h5>
                <p className="card-text">Delicate pastries and desserts crafted with care. From croissants to éclairs, we have it all.</p>
                <button className="btn btn-primary">View Pastries</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=200&fit=crop" className="card-img-top" alt="Cupcakes" style={{height: '200px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">Delicious Cupcakes</h5>
                <p className="card-text">Fresh baked cupcakes made with premium ingredients. Perfect for celebrations and special occasions.</p>
                <button className="btn btn-primary">View Cupcakes</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=200&fit=crop" className="card-img-top" alt="Brownies" style={{height: '200px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">Fresh Brownies</h5>
                <p className="card-text">Rich chocolate brownies baked daily using traditional methods and the finest quality ingredients.</p>
                <button className="btn btn-primary">View Brownies</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=200&fit=crop" className="card-img-top" alt="Biscuits" style={{height: '200px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">Chocolate Biscuits</h5>
                <p className="card-text">Delicate chocolate biscuits crafted with care. From classic to gourmet, we have it all.</p>
                <button className="btn btn-primary">View Biscuits</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light mt-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-3 mb-3">
              <h5>Bakery Shop</h5>
              <p className="small">Fresh baked goods daily. Quality ingredients, traditional recipes, and exceptional taste since 1990.</p>
            </div>

            <div className="col-md-3 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><button className="btn btn-link text-light text-decoration-none p-0" onClick={() => handleNavigation('home')}>Home</button></li>
                <li><button className="btn btn-link text-light text-decoration-none p-0">About Us</button></li>
                <li><button className="btn btn-link text-light text-decoration-none p-0">Menu</button></li>
                <li><button className="btn btn-link text-light text-decoration-none p-0">Contact</button></li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h5>Our Products</h5>
              <ul className="list-unstyled">
                <li><button className="btn btn-link text-light text-decoration-none p-0">Cakes</button></li>
                <li><button className="btn btn-link text-light text-decoration-none p-0">Bread</button></li>
                <li><button className="btn btn-link text-light text-decoration-none p-0">Pastries</button></li>
                <li><button className="btn btn-link text-light text-decoration-none p-0">Special Orders</button></li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h5>Contact Us</h5>
              <ul className="list-unstyled small">
                <li>📍 123 Baker Street, City</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ info@bakeryshop.com</li>
                <li>🕐 Mon-Sat: 6AM-8PM</li>
              </ul>
            </div>
          </div>

          <hr className="my-3" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 small">&copy; 2025 Bakery Shop. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <span className="text-light me-3">🔗</span>
              <span className="text-light me-3">📘</span>
              <span className="text-light me-3">📷</span>
              <span className="text-light">🐦</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Bakery Shop</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button 
                  className={`nav-link btn btn-link ${currentView === 'home' ? 'active' : ''}`} 
                  aria-current="page"
                  onClick={() => handleNavigation('home')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link">ABOUT</button>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  ITEMS
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><button className="dropdown-item btn btn-link">CAKES</button></li>
                  <li><button className="dropdown-item btn btn-link">BREAD</button></li>
                  <li><button className="dropdown-item btn btn-link">PASTRIES</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item btn btn-link">OTHER ITEMS</button></li>
                </ul>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link btn btn-link ${currentView === 'profile' ? 'active' : ''}`}
                  onClick={() => handleNavigation('profile')}
                >
                  MY PROFILE
                </button>
              </li>
              <li className="nav-item">
                <span className="nav-link">Welcome, {user?.username}</span>
              </li>
            </ul>
            <form className="d-flex me-3">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success me-2" type="submit">Search</button>
            </form>
            <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
          </div>
        </div>
      </nav>

      {/* Dynamic Content */}
      {renderCurrentView()}
    </>
  );
};

export default BakeryShop;
