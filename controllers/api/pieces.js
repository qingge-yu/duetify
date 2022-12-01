const Piece = require('../../models/piece')

module.exports = {
    index,
    show
}

async function index(req, res) {
    try {
        const pieces = await Piece.find({}).sort('name').populate('name').exec()
        pieces.sort((a, b) => a.piece - b.piece)
        res.json(pieces)
    } catch (err) {
        console.log("pieces.js index: " + err)
        res.status(400).json(err)
    }
}

async function show(req, res) {
    try {
        const piece = await Piece.findById(req.params.id)
        res.json(piece)
    } catch (err) {
        console.log("pieces.js show: " + err)
        res.status(400).json(err)
    }
}
