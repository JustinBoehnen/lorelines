const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const characterSchema = new Schema({
    fullName: { type: String, required: true },
    age: { type: String, required: false },
    race: { type: String, required: false },
    bio: { type: String, required: false },
    relatives: { type: Array, required: false }
}, {
    timestamps: true,
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;