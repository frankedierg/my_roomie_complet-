const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  price: Number,
  billsIncluded: Boolean,
  propertyType: String,
  available: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
   image: String  // <-- nuevo campo
});



module.exports = mongoose.model('Room', roomSchema);
