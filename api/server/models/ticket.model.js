import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    user_id: String,
    ticket_number: Number,
    received: { type: Boolean, default: false },
    date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TicketModel', ticketSchema, 'tickets');
