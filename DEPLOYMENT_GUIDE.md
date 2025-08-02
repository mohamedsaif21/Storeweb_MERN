# MERN Stack Deployment Guide

## 🚀 Full Deployment Guide for Netlify + Render

### **Phase 1: Backend Deployment (Render)**

1. **Create Render Account**: Go to https://render.com and sign up
2. **Connect GitHub**: Link your GitHub account
3. **Create Web Service**:
   - Click "New +" → "Web Service"
   - Connect your repository: `mohamedsaif21/Storeweb_MERN`
   - Configure:
     - **Name**: `bakery-shop-backend`
     - **Root Directory**: `Backend`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `node index.js`

4. **Environment Variables on Render**:
   ```
   MONGODB_CONNECTION_STRING=mongodb+srv://mohamedsaifb24:Dvz6XTfDpXOR8uPi@cluster0.pwrbpmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your_super_secret_key
   JWT_EXPIRES_IN=10m
   UPLOAD_FOLDER=uploads
   MAIL_USER=mohamedsaifb24@gmail.com
   MAIL_PASS=ceft ltci crym lwci
   PORT=7000
   ```

5. **Deploy**: Click "Create Web Service"
6. **Get Backend URL**: After deployment, copy the URL (e.g., `https://bakery-shop-backend.onrender.com`)

---

### **Phase 2: Frontend Deployment (Netlify)**

#### **Method 1: Netlify CLI (Recommended)**

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Build and Deploy**:
   ```bash
   cd d:\ProjectMERN\Backend\frontend
   npm run build
   netlify deploy --prod --dir=build
   ```

#### **Method 2: GitHub Integration**

1. **Push Code to GitHub** (already done)
2. **Netlify Dashboard**:
   - Go to https://netlify.com
   - Click "Add new site" → "Import from Git"
   - Choose GitHub → Select `Storeweb_MERN`
   - Configure:
     - **Base directory**: `Backend/frontend`
     - **Build command**: `npm run build`
     - **Publish directory**: `Backend/frontend/build`

3. **Environment Variables on Netlify**:
   ```
   REACT_APP_API_URL=https://your-render-backend-url.onrender.com
   ```

---

### **Phase 3: Update Configuration**

1. **Update Backend CORS** (add to index.js):
   ```javascript
   app.use(cors({
     origin: ['http://localhost:3000', 'http://localhost:3001', 'https://your-netlify-url.netlify.app'],
     credentials: true
   }));
   ```

2. **Update Netlify Environment**:
   - Replace `https://your-backend-url.onrender.com` with actual Render URL

---

### **Quick Commands for Local Testing**
```bash
# Backend
cd d:\ProjectMERN\Backend
npm start

# Frontend  
cd d:\ProjectMERN\Backend\frontend
npm start
```

---

### **Deployment Checklist**
- [ ] Backend deployed to Render
- [ ] Environment variables set on Render
- [ ] Frontend built successfully
- [ ] Frontend deployed to Netlify
- [ ] Environment variables set on Netlify
- [ ] CORS updated with frontend URL
- [ ] Test registration/login flow
- [ ] Test file upload functionality
- [ ] Test all page navigation

---

### **Troubleshooting**
- **CORS Error**: Add frontend URL to backend CORS origins
- **API Error**: Check REACT_APP_API_URL environment variable
- **Build Error**: Ensure all dependencies are in package.json
- **MongoDB Error**: Verify connection string and IP whitelist

Ready to deploy! 🎉
