
const getDb = require('../util/database').getDb;

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    save() {
        const db = getDb();
        return db.collection("users")
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
            .collection("users")
            .find()
            .toArray()
            .then(users => {
                console.log('users', users);
                return users;
            }).catch(err => {
                console.log(err);
            });
    }


    static checkEmail(email) {
        console.log('mail koji trazim', email);
        const db = getDb();
        return db.collection('users')
            .findOne(email)
            .then((email) => {
                console.log('then mail', email);

                return email;
            })
            .catch(err => console.log("err", err));
    }




}



module.exports = User;