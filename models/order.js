const getDb = require('../util/database').getDb;

class Order {
    constructor(firstName, lastName, address, phone, price, time, name) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.price = price;
        this.time = time;
        this.name = name;
    }

    save() {
        const db = getDb();
        return db.collection("orders")
            .insertOne(this)
            .then(result => {
                console.log("save modell", result);
            })
            .catch(err => {
                console.log(err);
            })
    }


    static fetchAll() {
        const db = getDb();
        return db
            .collection("orders")
            .find()
            .toArray()
            .then(orders => {
                console.log('orders', orders);
                return orders;
            }).catch(err => {
                console.log(err);
            });
    }
}



module.exports = Order;