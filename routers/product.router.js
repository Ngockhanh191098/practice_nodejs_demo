const express = require('express');
const getProduct = require('../controllers/getProduct');
const postProduct = require('../controllers/postProduct');
const { isAdmin } = require('../middlewares/permission');
const verifyToken = require('../middlewares/verifyToken');
const routerProduct = express.Router();

routerProduct.get('/:userId/products', verifyToken, isAdmin, getProduct);
routerProduct.post('/:userId/products', verifyToken, isAdmin, postProduct);


module.exports = routerProduct;