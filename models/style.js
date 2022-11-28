const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const styleSchema = new Schema({
    name: { type: String, required: true },
    index: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Style', styleSchema);