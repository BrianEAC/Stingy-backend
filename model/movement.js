const mongoose = require('mongoose')
const movSchema = new mongoose.Schema({
    title: String,
    type: String,
    amount: Number,
})
module.exports = mongoose.model('movement', movSchema)