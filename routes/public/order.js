const path = require('path');

const express = require('express');

const orderController = require('../../controllers/public/order');

const router = express.Router();

router.post('/create-order', orderController.purchaseOrder);

router.get('/orders', orderController.getAllOrders);

module.exports = router;
