const mongoose = require("mongoose");

var Employee = mongoose.model("Employee", {
  name: { type: String },
  position: { type: String },
  promotion: { type: String },
  rating: { type: Number },
});

module.exports = { Employee };
