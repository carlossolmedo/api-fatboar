// External dependencies
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    birthday: Date,
    email: String,
    postalCode: String,
    country: String
});

module.exports = mongoose.model('User', userSchema);