const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  rating: Number,
  pricePerNight: Number,
  amenities: [String],
  images: [String],
}, { timestamps: true });

module.exports = mongoose.model("Hotel", hotelSchema);
