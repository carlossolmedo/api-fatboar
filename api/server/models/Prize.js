import mongoose from 'mongoose';

const prizeSchema = new mongoose.Schema({
    tickets: Array,
    type: String,
    date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prize', prizeSchema);
