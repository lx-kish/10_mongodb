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

const addCar = new Car({
    brand: 'Volkswagen',
    model: 'Jetta',
    year: 2006,
    avail: true
});

addCar.save((err, doc) => {
    if(err) return console.log(err);
    console.log(doc);
})