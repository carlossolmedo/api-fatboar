import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ticket_number: Number,
    type: { type: String, required: true },
    received: { type: Boolean, default: false },
    date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TicketModel', ticketSchema, 'tickets');
