const mongoose = require('mongoose');
const Schema = mongoose.Schema

const rickSchema = new Schema({
    image: String,
    name: String,
    price: Number,
    info: String,

})

const Rick = mongoose.model('Rick', rickSchema);


module.exports = Rick;
