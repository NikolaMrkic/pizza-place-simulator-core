const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoConnect = require('./util/database').mongoConnect;

const ingredientsRoutes = require('./routes/public/ingredients');
const ordersRoutes = require('./routes/public/order');
const userRouter = require('./routes/public/user')

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views')

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(ingredientsRoutes);
app.use(ordersRoutes);
app.use(userRouter);



mongoConnect(() => {
    app.listen(4000);
});


