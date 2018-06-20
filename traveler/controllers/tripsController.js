const db = require("../models");
const sheltersController = require("./sheltersController");
const activitiesController = require("./activitiesController");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Trip.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Trip.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Trip.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Trip.findOneAndUpdate({ _id: req.params.tripId }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Trip.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    db.Trip.find({ tripUser: req.params.userId })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addShelter: function(req, res) {
    if (db.Shelter.find({ hotelId: req.body.hotelId })) {
      db.Trip.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    } else {
      db.Shelter.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  },
  addActivity: function(req, res) {
    if (db.Activity.find({ activityId: req.body.activityId })) {
      db.Trip.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    } else {
      db.Activity.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      db.Trip.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  }
};
