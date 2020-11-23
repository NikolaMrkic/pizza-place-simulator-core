const Order = require('../../models/order');

exports.purchaseOrder = (req, res, next) => {
    console.log('req EVOOOOOO MEEE', req);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const phone = req.body.phone;
    const time = req.body.time;
    const price = req.body.price;
    const name = req.body.name;
    const order = new Order(firstName, lastName, address, phone, time, price, name);

    order
        .save()
        .then(orders => {
            // console.log('res kontroler', res);
            res.status(201).json(order)
            console.log('order created');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAllOrders = (req, res, next) => {
    Order.fetchAll()
        .then(orders => {
            res.status(201).json({
                orders: orders
            });
        })
        .catch(err => { console.log(err); })
}



