const express = require('express');
const routerUser = express.Router();
const getAllUser = require('../controllers/getAllUser');

routerUser.get('/users', getAllUser);



module.exports = routerUser;
