const mongoose = require("mongoose");


const cartschema = mongoose.Schema({
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
})

const Cart = mongoose.model('carts', cartschema);
module.exports = Cart;