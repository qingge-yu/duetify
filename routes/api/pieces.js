const express = require('express');
const router = express.Router();
const piecesCtrl = require('../../controllers/api/pieces');

router.get('/', piecesCtrl.index)
router.get('/:id', piecesCtrl.show)

module.exports = router