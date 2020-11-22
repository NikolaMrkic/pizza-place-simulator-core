const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://nikolamrkic:Dusan2016@cluster0.ftb4n.mongodb.net/pizza?retryWrites=true&w=majority'
        //naziv baze dodati
    )
        .then(client => {
            console.log('Connected!');
            _db = client.db();
            callback();
        }).catch(err => {
            console.log('err', err);
            throw err;
        });
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

