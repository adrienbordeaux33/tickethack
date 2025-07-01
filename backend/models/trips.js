const mongoose = require("mongoose");


const tripschema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
})

const Trip = mongoose.model('trips', tripschema);
module.exports = Trip;