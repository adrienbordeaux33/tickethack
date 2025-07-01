var express = require('express');
var router = express.Router();
require('../models/connection');
const Trip = require('../models/trips');
const Cart = require('../models/carts');
const Booking = require('../models/bookings');

// Get all trips
router.get('/trips', function(req, res, next) {
  Trip.find().then(data => {res.json({result: true, data})})
});


// creer un cart a verif
router.post('/carts', function(req, res, next) {
  const newCart = new Cart
  trips = req.body.tripsId
  newCart.save().then(data => {res.json({result: true, data})});
});

// fonctionne pas 
router.get('/carts', function(req, res, next) {
  Cart.find().populate('trip')
    .then(data => {
      res.json({ result: true, data });
    })
});


module.exports = router;
