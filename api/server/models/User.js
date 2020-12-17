// External dependencies
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    birthdate: Date,
    email: String,
    postal_code: String,
    country: String,
    role: String,
    active: Boolean,
    last_connection: Date,
    date_created: { type: Date, default: Date.now },
    date_updated: Date
});

module.exports = mongoose.model('User', userSchema);
