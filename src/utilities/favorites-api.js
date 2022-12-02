import sendRequest from './send-request'

const BASE_URL = '/api/favorites'

export function getFav() {
    return sendRequest(`${BASE_URL}`)
}

export function addPieceToFav(duetId) {
    return sendRequest(`${BASE_URL}/duets/${duetId}`, 'POST')
}