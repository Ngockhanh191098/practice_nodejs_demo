const express = require('express');
const routerAuth = express.Router();
const db = require('../models/db.model');
const { veryfiSignin, veryfiSignup } = require('../middlewares/auth');
const { signup, signin } = require('../controllers/auth.controller');

routerAuth.post('/signup',veryfiSignup, signup);
routerAuth.post('/signin', veryfiSignin, signin);

module.exports = routerAuth;