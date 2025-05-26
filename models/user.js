const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    age: Number,
    password:{ type: String, required: true }
});


module.exports = mongoose.model('User', userSchema);
