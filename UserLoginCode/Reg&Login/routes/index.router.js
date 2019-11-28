const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/UserAccounts.controller');

router.post('/register', ctrlUser.register);

module.exports = router;