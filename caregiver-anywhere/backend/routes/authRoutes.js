const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register/user', authController.registerUser );
router.post('/login/user', authController.loginUser );
router.post('/register/professional', authController.registerProfessional);
router.post('/login/professional', authController.loginProfessional);
router.get('/professionals', authController.getProfessionals);

module.exports = router;
