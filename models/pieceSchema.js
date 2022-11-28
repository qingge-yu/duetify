const Schema = require('mongoose').Schema;

const pieceSchema = new Schema({
    name: { type: String, required: true },
    instrument1: { type: Schema.Types.ObjectId, ref: 'Instrument' },
    instrument2: { type: Schema.Types.ObjectId, ref: 'Instrument' },
    style: { type: Schema.Types.ObjectId, ref: 'Style' },
    link: { type: String, required: true },
    index: Number
}, {
    timestamps: true
});

module.exports = pieceSchema;