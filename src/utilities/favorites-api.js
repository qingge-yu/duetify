import sendRequest from './send-request'

const BASE_URL = '/api/favorites'

export function addPieceToFav(duetId) {
    return sendRequest(`${BASE_URL}/duets/${duetId}`, 'POST')
}