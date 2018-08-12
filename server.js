const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/test';

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log('could not connect');
//     }
//     console.log('connected ;)');
//     db.close();
// })

MongoClient.connect(url, (err, db) => {

    db.collection('Cars').insertOne({
        _id:23,
        model:'Toyota',
        year:2009
    }, (err, res) => {
        if(err){
            return console.log(`Cannot insert: ${err}`)
        }
        console.log(res.ops)
    })

    db.close();
})