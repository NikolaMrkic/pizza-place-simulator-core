
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mongoConnect = require('./util/database').mongoConnect;

const ingredientsRoutes = require('./routes/public/ingredients');
const orderRoutes = require('./routes/public/order');
const ingredients = require('./pizzaHelper')

const cors = require('cors')

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views')


app.use((req, res, next) => {
    next();
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.use(ingredientsRoutes);
app.use(orderRoutes);

mongoConnect(client => {
    app.listen(3001);
})


