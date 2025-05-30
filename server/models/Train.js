const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  name: String,
  trainNumber: String,
  source: String,
  destination: String,
  departureTime: Date,
  arrivalTime: Date,
  price: Number,
  classType: String,
}, { timestamps: true });

module.exports = mongoose.model("Train", trainSchema);
