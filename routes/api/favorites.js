const express = require('express')
const router = express.Router()
const favoritesCtrl = require('../../controllers/api/favorites')

router.get('/', favoritesCtrl.favList)
router.post('/duets/:duetName', favoritesCtrl.addToFavList)

module.exports = router