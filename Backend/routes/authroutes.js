const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const authController = require("../controllers/authController");

router.post("/register", upload.single("profilePic"), authController.registerUser);
router.post("/login", authController.loginUser);
router.get('/verify-token', authController.verifyToken);
router.delete('/delete-account', authController.deleteUser);
router.post("/send-otp", authController.sendOtp);
router.post("/reset-password", authController.resetPassword);



module.exports = router;
