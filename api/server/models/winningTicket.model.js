import mongoose from 'mongoose';

const winningTicketSchema = new mongoose.Schema({
    ticket_number: { type: Number, required: true },
    type: { type: String, required: true },
    validated: { type: Boolean, required: true, default: false },
    date_created: { type: Date, default: Date.now },
});

module.exports = mongoose.model(
    'WinningTicketModel',
    winningTicketSchema,
    'winning_tickets'
);
