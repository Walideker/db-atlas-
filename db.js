const { MongoClient } = require('mongodb')


let dbConnection;
const uri = 'mongodb+srv://walidadr95:frejok2000@walideker.vbpo2ev.mongodb.net/?retryWrites=true&w=majority'
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch((err) => {
                console.log(err);
                return cb(err)
            })
    },
    getDb: () => dbConnection
}