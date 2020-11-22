const { getDb } = require("../util/database")

const getDb = require('../util/database').getDb;

class User {
    constructor(firstName, lastName, address, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}



module.exports = User;