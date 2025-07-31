import React, { useState, useContext } from 'react';
import { AuthContext } from '../component/AuthContext';
import './userprofile.css';

const UserProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  // Mock data for orders and cart
  const [orders] = useState([
    {
      id: 1,
      date: '2025-01-15',
      status: 'Delivered',
      total: 45.99,
      items: [
        { name: 'Chocolate Cake', quantity: 1, price: 25.99 },
        { name: 'Croissants', quantity: 4, price: 20.00 }
      ]
    },
    {
      id: 2,
      date: '2025-01-20',
      status: 'Processing',
      total: 32.50,
      items: [
        { name: 'Fresh Bread', quantity: 2, price: 12.50 },
        { name: 'Cupcakes', quantity: 6, price: 20.00 }
      ]
    },
    {
      id: 3,
      date: '2025-01-25',
      status: 'Pending',
      total: 67.25,
      items: [
        { name: 'Wedding Cake', quantity: 1, price: 55.00 },
        { name: 'Brownies', quantity: 4, price: 12.25 }
      ]
    }
  ]);

  const [cartItems] = useState([
    { id: 1, name: 'Chocolate Eclairs', quantity: 3, price: 15.99, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=100&h=100&fit=crop' },
    { id: 2, name: 'Vanilla Cupcakes', quantity: 6, price: 24.00, image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=100&h=100&fit=crop' },
    { id: 3, name: 'Artisan Bread', quantity: 1, price: 8.50, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=100&h=100&fit=crop' }
  ]);

  const handleInputChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveProfile = () => {
    updateUser(editForm);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditForm({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || ''
    });
    setIsEditing(false);
  };

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'badge bg-success';
      case 'processing': return 'badge bg-warning';
      case 'pending': return 'badge bg-secondary';
      default: return 'badge bg-primary';
    }
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">My Profile</h3>
            </div>
            <div className="card-body">
              {/* Navigation Tabs */}
              <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                  >
                    Profile Details
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
                    onClick={() => setActiveTab('orders')}
                  >
                    Order History
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'cart' ? 'active' : ''}`}
                    onClick={() => setActiveTab('cart')}
                  >
                    Shopping Cart
                  </button>
                </li>
              </ul>

              {/* Profile Details Tab */}
              {activeTab === 'profile' && (
                <div className="tab-content">
                  <div className="row">
                    <div className="col-md-8">
                      {!isEditing ? (
                        <div>
                          <div className="mb-3">
                            <label className="form-label fw-bold">Full Name</label>
                            <p className="form-control-plaintext">{user?.name || 'Not provided'}</p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label fw-bold">Username</label>
                            <p className="form-control-plaintext">{user?.username}</p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label fw-bold">Email</label>
                            <p className="form-control-plaintext">{user?.email || 'Not provided'}</p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label fw-bold">Phone Number</label>
                            <p className="form-control-plaintext">{user?.phone || 'Not provided'}</p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label fw-bold">Address</label>
                            <p className="form-control-plaintext">{user?.address || 'Not provided'}</p>
                          </div>
                          <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                            Edit Profile
                          </button>
                        </div>
                      ) : (
                        <div>
                          <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={editForm.name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={editForm.email}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input
                              type="tel"
                              className="form-control"
                              name="phone"
                              value={editForm.phone}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Address</label>
                            <textarea
                              className="form-control"
                              name="address"
                              rows="3"
                              value={editForm.address}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="d-flex gap-2">
                            <button className="btn btn-success" onClick={handleSaveProfile}>
                              Save Changes
                            </button>
                            <button className="btn btn-secondary" onClick={handleCancelEdit}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <div className="profile-avatar mb-3">
                          <img
                            src={`https://ui-avatars.com/api/?name=${user?.name || user?.username}&size=150&background=0d6efd&color=fff`}
                            alt="Profile Avatar"
                            className="rounded-circle"
                            width="150"
                            height="150"
                          />
                        </div>
                        <h5>{user?.name || user?.username}</h5>
                        <p className="text-muted">Bakery Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Order History Tab */}
              {activeTab === 'orders' && (
                <div className="tab-content">
                  <h4 className="mb-3">Order History</h4>
                  {orders.length === 0 ? (
                    <div className="text-center py-4">
                      <p className="text-muted">No orders found</p>
                    </div>
                  ) : (
                    <div className="row">
                      {orders.map(order => (
                        <div key={order.id} className="col-12 mb-3">
                          <div className="card">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6 className="mb-0">Order #{order.id}</h6>
                                <span className={getStatusBadgeClass(order.status)}>
                                  {order.status}
                                </span>
                              </div>
                              <p className="text-muted mb-2">Date: {order.date}</p>
                              <div className="mb-2">
                                <strong>Items:</strong>
                                <ul className="list-unstyled ms-3 mb-0">
                                  {order.items.map((item, index) => (
                                    <li key={index}>
                                      {item.name} x{item.quantity} - ${item.price.toFixed(2)}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <strong>Total: ${order.total.toFixed(2)}</strong>
                                <button className="btn btn-sm btn-outline-primary">
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Shopping Cart Tab */}
              {activeTab === 'cart' && (
                <div className="tab-content">
                  <h4 className="mb-3">Shopping Cart</h4>
                  {cartItems.length === 0 ? (
                    <div className="text-center py-4">
                      <p className="text-muted">Your cart is empty</p>
                      <button className="btn btn-primary">Continue Shopping</button>
                    </div>
                  ) : (
                    <div>
                      {cartItems.map(item => (
                        <div key={item.id} className="card mb-3">
                          <div className="card-body">
                            <div className="row align-items-center">
                              <div className="col-md-2">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="img-fluid rounded"
                                  style={{ height: '80px', width: '80px', objectFit: 'cover' }}
                                />
                              </div>
                              <div className="col-md-4">
                                <h6 className="mb-0">{item.name}</h6>
                              </div>
                              <div className="col-md-2">
                                <div className="d-flex align-items-center">
                                  <button className="btn btn-sm btn-outline-secondary me-2">-</button>
                                  <span>{item.quantity}</span>
                                  <button className="btn btn-sm btn-outline-secondary ms-2">+</button>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <strong>${item.price.toFixed(2)}</strong>
                              </div>
                              <div className="col-md-2">
                                <button className="btn btn-sm btn-outline-danger">Remove</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <div className="card bg-light">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Total: ${cartTotal.toFixed(2)}</h5>
                            <div>
                              <button className="btn btn-outline-secondary me-2">Clear Cart</button>
                              <button className="btn btn-success">Proceed to Checkout</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;