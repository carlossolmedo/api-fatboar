// External dependencies
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    gender: String,
    username: { type: String, required: true, max: 255, min: 3 },
    password: { type: String, required: true, max: 1024, min: 8 },
    email: { type: String, required: true, max: 255, min: 6 },
    postal_code: { type: String, required: true },
    country: { type: String, required: true },
    newsletter: { type: Boolean, default: false },
    role: { type: String, required: true, default: 'customer' },
    active: { type: Boolean, required: true, default: true },
    last_connection: Date,
    date_updated: Date,
    date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema, 'users');
