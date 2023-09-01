const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product-controller')

router.post('/create', ProductController.create)


module.exports = router