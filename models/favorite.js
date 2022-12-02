const mongoose = require('mongoose')
const Schema = mongoose.Schema


const favoriteSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    favPieces: []
}, { timestamps: true })

favoriteSchema.methods.addPieceToFav = async function (duetName) {
    const list = this
    const piece = await mongoose.model('Piece').find({ name: duetName })
    list.favPieces.push({ piece })
}

module.exports = mongoose.model('Favorite', favoriteSchema)