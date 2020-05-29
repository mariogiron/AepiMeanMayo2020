const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    age: Number,
    active: Boolean,
    zip: Number
});

module.exports = mongoose.model('client', clientSchema);