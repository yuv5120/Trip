const Trip = require("../models/Trip");

const createTrip = async (req, res) => {
  try {
    const trip = new Trip({ ...req.body, userId: req.user });
    await trip.save();
    res.status(201).json(trip);
  } catch (err) {
    res.status(500).json({ msg: "Error creating trip", error: err.message });
  }
};

const getUserTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.user });
    res.json(trips);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching trips", error: err.message });
  }
};

const updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      { _id: req.params.id, userId: req.user },
      req.body,
      { new: true }
    );
    if (!trip) return res.status(404).json({ msg: "Trip not found" });
    res.json(trip);
  } catch (err) {
    res.status(500).json({ msg: "Error updating trip", error: err.message });
  }
};

const deleteTrip = async (req, res) => {
  try {
    const result = await Trip.findOneAndDelete({ _id: req.params.id, userId: req.user });
    if (!result) return res.status(404).json({ msg: "Trip not found" });
    res.json({ msg: "Trip deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting trip", error: err.message });
  }
};

module.exports = { createTrip, getUserTrips, updateTrip, deleteTrip };
