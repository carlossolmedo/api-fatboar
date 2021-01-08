import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    user_id: String,
    number_ticket: Number,
    amount: String,
    date_created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ticket', ticketSchema);
