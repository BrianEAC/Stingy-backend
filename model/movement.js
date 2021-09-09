const mongoose = require('mongoose');

const movSchema = new mongoose.Schema({
  description: String,
  value: Number,
  type: String,
});
module.exports = mongoose.model('movement', movSchema);
