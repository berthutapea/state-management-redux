/**
 * Buatlah sebuah fungsi rootReducer untuk menggabungkan tracksReducer dan albumsReducer.
 */

function tracksReducer(tracks = [], action = {}) {
    if (action.type === 'ADD_TRACK') {
        return [...tracks, action.payload];
    }

    return tracks;
}

function albumsReducer(albums = [], action = {}) {
    if (action.type === 'ADD_ALBUM') {
        return [...albums, action.payload];
    }

    return albums;
}

function rootReducer(state = {}, action = {}) {
    // Tulis kode Anda di sini
    return {
        tracks: tracksReducer(state.tracks, action),
        albums: albumsReducer(state.albums, action)
    };
}

module.exports = { rootReducer };