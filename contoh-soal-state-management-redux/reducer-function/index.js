/**
 * Lengkapi fungsi tracksReducer() dengan ketentuan:
 *  - Fungsi ini menerima 2 parameter:
 *    - tracks: array of object yang berisi data lagu
 *    - action: object dengan 2 properti:
 *      - type: string dengan nilai 'REMOVE_TRACK_BY_GENRE'.
 *      - payload: object dengan 1 properti:
 *        - genre: string
 * 
 *  - Jika nilai dari properti type pada action adalah 'REMOVE_TRACK_BY_GENRE',
 *    maka fungsi ini harus mengembalikan array baru yang merupakan hasil
 *    filter dari tracks. Filter ini harus menghapus lagu yang memiliki
 *    genre yang sama dengan nilai dari properti genre pada action.payload.
 * 
 * Objek action untuk menghapus lagu tampak seperti ini:
 * {
 *   type: 'REMOVE_TRACK_BY_GENRE',
 *   payload: {
 *     genre: 'Jazz'
 *   }
 * }
 *      
 */

function tracksReducer(tracks = [], action = {}) {
    if (action.type === 'REMOVE_TRACK_BY_GENRE') {
        const { genre } = action.payload;
        return tracks.filter(track => track.genre !== genre);
    }

    return tracks;
}

module.exports = { tracksReducer };