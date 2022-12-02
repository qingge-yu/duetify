const Favorite = require('../../models/favorite')

module.exports = {
    addToFavList
}

async function addToFavList(req, res) {
    const favorite = await Favorite.findOne({ user: req.user._id })
    if (favorite) {
        if (favorite.favPieces.includes(req.params.duetName)) {
            return favorite.favPieces
        } else {
            favorite.favPieces.push(req.params.duetName)
        }
        await favorite.save()
        res.json(favorite)
    } else {
        const newFavorite = await Favorite.create({ user: req.user._id })
        newFavorite.favPieces.push(req.params.duetName)
        await newFavorite.save()
        res.json(newFavorite)
    }
}
