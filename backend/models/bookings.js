const mongoose = require("mongoose");


const bookingschema = mongoose.Schema({
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
})

const Booking = mongoose.model('boukings', bookingschema);
module.exports = Booking;