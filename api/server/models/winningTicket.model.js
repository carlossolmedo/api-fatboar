import mongoose from 'mongoose';

const winningTicketSchema = new mongoose.Schema({
    ticket_number: Number,
    type: String,
    date_created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('WinningTicketModel', winningTicketSchema);
