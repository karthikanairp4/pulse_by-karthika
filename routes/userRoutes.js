const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.get('/signin', userController.getSignInPage);
router.post('/signin', userController.postSignIn);
router.get('/signup', userController.getSignUp);
router.post('/signup', userController.postSignUp);
router.get('/logout', userController.logout);

module.exports = router;
