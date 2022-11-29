const mongoose = require('mongoose')
require('./instrument')
require('./style')

const pieceSchema = require('./pieceSchema')

module.exports = mongoose.model('Piece', pieceSchema)