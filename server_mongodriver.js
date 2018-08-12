const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/test';

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log('could not connect');
//     }
//     console.log('connected ;)');
//     db.close();
// })

// MongoClient.connect(url, (err, db) => {

//     const cars = [
//         {model:"Ferrari",year:"2002"},
//         {model:"Volkswagen",year:"2009"}
//     ];

//     db.collection('Cars').insertMany(cars, (err, res) => {
//         if(err){
//             return console.log(`Cannot insert: ${err}`)
//         }
//         console.log(res.ops)
//     })

//     db.close();
// })

// MongoClient.connect(url, (err, db) => {
//     db.collection('Cars').find()
//     .skip(1)
//     .limit(1)
//     .sort({"_id":-1})
//     .toArray().then(data => {
//         console.log(data)
//     });
//     db.close();
// })

// MongoClient.connect(url, (err, db) => {
//     db.collection('Cars').find({year:'2009'})
//     .toArray().then(data => {
//         console.log(data)
//     });
//     db.close();
// })

// MongoClient.connect(url, (err, db) => {
//     db.collection('Cars').findOne({year:'2009'}, {model:0, year:0}, (err, doc) => {
//         console.log(doc)
//     });
//     db.close();
// })

// MongoClient.connect(url, (err, db) => {
//     db.collection('Cars').deleteMany({year:'2009'}, (err, doc) => {
//         console.log(doc)
//     });
//     db.close();
// })

// MongoClient.connect(url, (err, db) => {
//     db.collection('Cars').deleteOne({model:'Ferrari'}, (err, doc) => {
//         console.log(doc)
//     });
//     db.close();
// })

// MongoClient.connect(url, (err, db) => {
//     db.collection('Cars').findOneAndDelete({model:'Renault'}, (err, doc) => {
//         console.log(doc)
//     });
//     db.close();
// })

MongoClient.connect(url, (err, db) => {
    db.collection('Cars').findOneAndUpdate(
        {
            name:"Alex"
        },
        {
            $set:{
                lastname:"Skywalker"
            },
            $inc:{
                age:+2
            }
        },
        {
            upsert:true,
            returnOriginal:true
        },
        (err, doc) => {
            console.log(doc)
        }
    );

    db.close();
})