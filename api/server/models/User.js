// External dependencies
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, max: 255, min: 3 },
    password: { type: String, required: true, max: 1024, min: 6 },
    birthdate: Date,
    email: { type: String, required: true, max: 255, min: 6 },
    postal_code: String,
    country: String,
    role: { type: String, required: true },
    active: { type: Boolean, required: true },
    last_connection: Date,
    date_updated: Date,
    date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
