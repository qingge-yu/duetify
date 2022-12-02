const Favorite = require('../../models/favorite')

module.exports = {
    favList,
    addToFavList
}

async function favList(req, res) {
    const list = await Favorite.getFav(req.user._id)
    res.json(list)
}

async function addToFavList(req, res) {
    const favorite = await Favorite.findOne({ user: req.user._id })
    if (favorite) {
        favorite.favPieces.push(req.params.duetName)
        await favorite.save()
        console.log('favorite', favorite)
        res.json(favorite)

    } else {
        const newFavorite = await Favorite.create({ user: req.user._id })
        newFavorite.favPieces.push(req.params.duetName)
        await newFavorite.save()
        console.log('newFavorite', newFavorite)
        res.json(newFavorite)
    }

}