var express = require("express");
var router = express.Router();

require("../models/connection");
const Trip = require("../models/trips");
const Cart = require("../models/carts");
const Booking = require("../models/bookings");

// Get all trips
router.get("/trips", function (req, res, next) {
  Trip.find().then((data) => {
    res.json({ result: true, data });
  });
});

router.post("/trips", function (req, res) {
  // console.log(req.body);
  // Filtrer les donnees recues et faire la recherche en bdd et renvoyer la donnee dans le res.json
  Trip.find({ departure: req.body.departure }).then((dbData) => {
    if (dbData) {
    }
  });
  res.json({ result: true });
});

// creer un cart a verif
router.post("/carts", function (req, res, next) {
  const newCart = new Cart();
  trips = req.body.tripsId;
  newCart.save().then((data) => {
    res.json({ result: true, data });
  });
});

// fonctionne pas
router.get("/carts", function (req, res, next) {
  Cart.find()
    .populate("trip")
    .then((data) => {
      res.json({ result: true, data });
    });
});

module.exports = router;
