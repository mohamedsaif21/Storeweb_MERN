require("dotenv").config({ path: __dirname + '/.env' });
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authroutes");


const cors=require("cors")
const app = express();

// Middlewares
app.use(express.json());
app.use(cors())
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);


// Connect DB and Start Server

connectDB().then(() => {
  app.listen(7000, () => {
    console.log("🚀 Server running on http://localhost:7000");
  });
});
