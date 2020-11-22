
const express = require('express');

const mongoConnect = require('./util/database').mongoConnect;

const ingredients = require('./pizzaHelper')

const app = express();

const publicRoutes = require('./routes/public');

// app.use((req, res, next) => {
//     next();
// })

// app.use((req, res, next) => {
//     console.log(ingredients);
//     console.log("usao u kontroler");
//     res.status(200).json({
//         ingredients: ingredients
//     })
// });

app.use(publicRoutes);

mongoConnect(client => {
    app.listen(3000);
})


