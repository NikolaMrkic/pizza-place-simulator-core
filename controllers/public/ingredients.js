const ingredients = require('../../pizzaHelper');

exports.pizzaIngredients = (req, res) => {
    console.log(ingredients);
    console.log("usao u kontroler");
    res.status(200).json({
        ingredients: ingredients
    })
};


