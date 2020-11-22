const path = require('path');

const express = require('express');

const publicController = require('../controllers/public');

const router = express.Router();

router.get('/test', publicController.pizzaIngredients);


module.exports = router;
