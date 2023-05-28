/**
 * Buatlah action creator untuk membuat action dengan tipe ADD_USER
 * dan payload berupa user yang diterima dari parameter
 * 
 * struktur objek user:
 *  {
 *   id: string,
 *   name: string,
 *   email: string,
 *  }
 */


function addUserActionCreator(id, name, email) {
    // code here
    const user = {
        id: id,
        name: name,
        email: email,
    };
    return {
        type: 'ADD_USER',
        payload: user,
    };
}


module.exports = { addUserActionCreator };