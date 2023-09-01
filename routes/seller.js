const express = require('express');
const router = express.Router();
const SellerController = require('../controllers/seller-controller')


router.post('/create', SellerController.create);


module.exports = router