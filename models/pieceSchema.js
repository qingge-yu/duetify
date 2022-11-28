const Schema = require('mongoose').Schema;

const pieceSchema = new Schema({
    name: { type: String, required: true },
    instrument: { type: Schema.Types.ObjectId, ref: 'Instrument' },
    style: { type: Schema.Types.ObjectId, ref: 'Style' },
}, {
    timestamps: true
});

module.exports = pieceSchema;