const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: "Trip" },
  itemType: { type: String, enum: ["hotel", "flight", "train"] },
  itemId: { type: mongoose.Schema.Types.ObjectId },
  amount: Number,
  paymentStatus: { type: String, enum: ["pending", "paid"], default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
