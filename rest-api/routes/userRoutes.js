const express = require('express');
const userController = require('../controllers/userController');  // Import the controller

const router = express.Router();

router.post('/submit-business', userController.submitBusinessInfo);

router.post('/submit-owner', userController.submitOwnerInfo);

router.post('/send-otp', userController.sendOtp);

module.exports = router;
