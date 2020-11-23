const path = require('path');

const express = require('express');

const ingredientsController = require('../../controllers/public/ingredients');

const router = express.Router();

router.get('/public/ingredients', ingredientsController.pizzaIngredients);

module.exports = router;
