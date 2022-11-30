const Duet = require('../../models/instrument')

module.exports = {
    cart,
    addToCart,
}

async function cart(req, res) {
    const cart = await Duet.getCart(req.user._id)
    res.json(cart)
}

async function addToCart(req, res) {
    const cart = await Duet.getCart(req.user_id)
    await cart.addItemToCart(req.params.id)
    res.json(cart)
}