const express = require('express');
const UserController = require('../Controller/UserController');
const router = express.Router();


router.get('/', UserController.getAllUsers)
router.post('/', UserController.createUser)
router.post('/login', UserController.loginUser)

module.exports = router;