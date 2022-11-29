const Piece = require('../../models/piece')

module.exports = {
    index,
    show
}

async function index(req, res) {
    const pieces = await Piece.find({}).sort('name').populate('name').exec()
    pieces.sort((a, b) => a.piece - b.piece)
    res.json(pieces)
}

async function show(req, res) {
    const piece = await Piece.findById(req.params.id)
    res.json(piece)
}