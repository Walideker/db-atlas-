const express = require('express');
const app = express();

app.use(express.json());

const { connectToDb, getDb } = require('./db');
const { ObjectId } = require('mongodb');

let db;

connectToDb((err) => {
    if (!err) {
        db = getDb();
        app.listen(3000);
    }
});

app.get('/', (req, res) => {
    res.send('It\'s working');
});

app.get('/employe/', (req, res) => {
    db.collection('employe')
        .find({})
        .toArray()
        .then(result => {
            res.json(result);
        })
});

app.post('/employe', (req, res) => {
    const employe = req.body;
    db.collection('employe')
        .insertOne(employe)
        .then(result => {
            res.json(result);
        })
});

