var express = require("express");
var router = express.Router();

require("../models/connection");
const Trip = require("../models/trips");
const Cart = require("../models/carts");
const Booking = require("../models/bookings");

// Get all trips
router.get('/trips', function(req, res) {
  Trip.find().then(data => {res.json({result: true, data})})
});


router.post('/carts', function(req, res) {
  console.log(req.body)
  const newCart = new Cart({
    trip : req.body.tripsId
  })
  newCart.save().then(data => {res.json({result: true})});
});

// recupp a mettre dans le front
router.get('/carts', function(req, res) {
  Cart.find().populate('trip')
    .then(data => {
      res.json({ result: true, data });
    });
});

// Delete all carts
router.delete('/carts', function(req,res){
  Cart.deleteMany({}).then(()=>res.json({result: true}))
})

// Delete un cart
router.delete('/carts/:id', function(req, res) {
  const id = req.params.id;
  Cart.findByIdAndDelete(id)
    .then(() => res.json({ result: true }))
    .catch(err => res.status(500).json({ result: false, error: err.message }));
});


// Creer un booking
router.post('/bookings', function(req,res){
  const dataPurchase = req.body.dataPurchase;
  console.log(dataPurchase)
  const promise = dataPurchase.map((item) => {
    const newBooking = new Booking({
      trip: item,
    })
    newBooking.save()
  });
  Promise.all(promise)
    .then(() => {
      res.json({ result: true });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ result: false, error: 'Server error' });
    });
})
// recuperer bookings
router.get('/bookings', function(req,res){
  Booking.find().populate('trip')
      .then(data => {
      res.json({ result: true, data });
    })
})




module.exports = router;
