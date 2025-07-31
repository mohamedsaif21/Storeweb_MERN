# 🍰 Bakery Shop - MERN Stack Application

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for a bakery shop with complete authentication system and user profile management.

## 🚀 Features

### 🔐 Authentication System
- **User Registration** with profile picture upload
- **Secure Login** with JWT tokens
- **Password Reset** via email OTP
- **Token-based Authentication** with auto-logout on expiration
- **Protected Routes** for authenticated users

### 🏪 Bakery Shop Interface
- **Product Showcase** with 6 bakery categories (Cakes, Bread, Pastries, Cupcakes, Brownies, Biscuits)
- **Responsive Design** with Bootstrap framework
- **Interactive Navigation** with search functionality
- **User Welcome** message with personalized greeting

### 👤 User Profile Management
- **Profile Details** with editable information
- **Order History** with status tracking (Delivered, Processing, Pending)
- **Shopping Cart** with quantity controls
- **Profile Avatar** auto-generated based on user info
- **Tabbed Interface** for easy navigation

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - Object modeling for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload middleware
- **Nodemailer** - Email service for OTP
- **CORS** - Cross-origin resource sharing

### Frontend
- **React.js** - Frontend library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Bootstrap 5** - CSS framework
- **Context API** - State management

## 📁 Project Structure

```
ProjectMERN/
├── Backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── upload.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authroutes.js
│   ├── frontend/
│   │   ├── public/
│   │   └── src/
│   │       ├── component/
│   │       │   └── AuthContext.js
│   │       ├── pages/
│   │       │   ├── Register.js
│   │       │   ├── login.js
│   │       │   ├── BakeryShop.js
│   │       │   ├── userprofile.js
│   │       │   ├── forgotpassword.js
│   │       │   └── verifyOTP.js
│   │       └── App.js
│   ├── uploads/
│   ├── .env
│   ├── index.js
│   └── package.json
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/mohamedsaif21/Storeweb_MERN.git
cd Storeweb_MERN
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

### 3. Environment Variables
Create a `.env` file in the Backend directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
PORT=7000
```

### 4. Frontend Setup
```bash
cd Backend/frontend
npm install
```

### 5. Run the Application

#### Start Backend Server
```bash
cd Backend
node index.js
```
Server runs on: `http://localhost:7000`

#### Start Frontend Server
```bash
cd Backend/frontend
npm start
```
Application runs on: `http://localhost:3000`

## 📱 Usage

### 1. Registration Flow
1. Visit `http://localhost:3000`
2. Register with email, username, password
3. Optional: Upload profile picture
4. Automatic redirect to login page

### 2. Login & Main Interface
1. Login with registered credentials
2. Redirected to Bakery Shop main page
3. Browse products and use search functionality

### 3. Profile Management
1. Click "MY PROFILE" in navigation
2. **Profile Details**: Edit personal information
3. **Order History**: View past orders with status
4. **Shopping Cart**: Manage cart items

### 4. Navigation
- **Home**: Return to main bakery shop view
- **MY PROFILE**: Access user profile tabs
- **Logout**: Secure logout with token cleanup

## 🎨 Screenshots

### Registration Page
- Clean form with file upload for profile picture
- Input validation and error handling

### Login Page
- Secure authentication with JWT
- Password reset functionality

### Bakery Shop Main Page
- Product cards with images and descriptions
- Navigation with user welcome message
- Search functionality

### User Profile
- Tabbed interface for different sections
- Editable profile information
- Order history with status badges
- Shopping cart with quantity controls

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify-token` - Token verification
- `POST /api/auth/forgot-password` - Password reset
- `POST /api/auth/verify-otp` - OTP verification
- `DELETE /api/auth/delete-account` - Account deletion

## 🌟 Key Features Implemented

### Security
- ✅ JWT token authentication
- ✅ Password hashing with bcrypt
- ✅ Protected routes
- ✅ Token expiration handling
- ✅ Secure file upload

### User Experience
- ✅ Responsive design
- ✅ Interactive navigation
- ✅ Real-time form validation
- ✅ Error handling with user feedback
- ✅ Loading states and transitions

### Data Management
- ✅ MongoDB integration
- ✅ User profile management
- ✅ File upload handling
- ✅ Email service integration

## 🚧 Future Enhancements

- [ ] Payment integration
- [ ] Real product management
- [ ] Order processing system
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Email notifications
- [ ] Social media login

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohamed Saif**
- GitHub: [@mohamedsaif21](https://github.com/mohamedsaif21)
- Email: mohamedsaifb24@gmail.com

## 🙏 Acknowledgments

- Bootstrap for the responsive UI components
- Unsplash for the product images
- MongoDB Atlas for cloud database hosting
- React community for excellent documentation

---

### 🎯 Project Status: ✅ Complete & Functional

This is a fully functional MERN stack application ready for deployment and further development.
