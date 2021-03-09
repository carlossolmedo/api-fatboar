import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    game_count: Number,
    date_created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Game', gameSchema);
