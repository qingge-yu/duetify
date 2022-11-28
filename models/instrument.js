const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instrumentSchema = new Schema({
    name: { type: String, required: true },
    sortInst: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Instrument', instrumentSchema);