const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('./instrument')
require('./style')
require('./user')

const pieceSchema = new Schema({
    name: { type: String, required: true },
    instrument1: { type: Schema.Types.String, ref: 'Instrument' },
    instrument2: { type: Schema.Types.String, ref: 'Instrument' },
    style: { type: Schema.Types.String, ref: 'Style' },
    link: { type: String, required: true },
    user: { type: Schema.Types.Array, ref: 'User' },
    index: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Piece', pieceSchema)