import sendRequest from './send-request'

const BASE_URL = '/api/duets'

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`)
}

export function addItemToCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/${itemId}`, 'POST')
}