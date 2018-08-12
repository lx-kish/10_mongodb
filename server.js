const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});

const Car = mongoose.model('Car', carSchema);

// const addCar = new Car({
//     brand: 'Volkswagen',
//     model: 'Golf',
//     year: 2012,
//     avail: true
// });
// addCar.save((err, doc) => {
//     if(err) return console.log(err);
//     console.log(doc);
// })

// Car.findById("5b701514fe730f37489ff7e0", (err, doc) => {
//     if(err) return console.log(err)
//     console.log(doc)
// })

// Car.findByIdAndRemove("5b7014f645a0d057e89c4f56", (err, doc) => {
//     if(err) return console.log(err)
//     console.log(doc)
// })

// Car.remove({}, (err, doc) => {
//     if(err) return console.log(err)
//     console.log(doc)
// })

// 5b701b9151e3ca18d453d9a8

// Car.update(
//     { _id: "5b701b9151e3ca18d453d9a8" },
//     { $set: { brand: "Nissan", model: "Skyline" } },
//     (err, doc) => {
//         if (err) return console.log(err)
//         console.log(doc)
//     }
// )

// Car.findByIdAndUpdate(
//     "5b701b9151e3ca18d453d9a8",
//     { $set: { brand: "Honda", model: "Accord" } },
//     { new: false },
//     (err, doc) => {
//         if (err) return console.log(err)
//         console.log(doc)
//     }
// )

Car.findById("5b701b9151e3ca18d453d9a8", (err, car) => {
    if (err) return console.log(err)
    car.set({
        brand: "Porche",
        model: "Cayene"
    });
    car.save((err, doc) => {
        if (err) return console.log(err)
        console.log(doc)    
    })
})