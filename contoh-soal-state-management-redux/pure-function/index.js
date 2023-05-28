/**
 * Lengkapi fungsi double() di bawah ini
 * 
 * Ketentuan.
 * - Fungsi ini menerima 1 parameter berupa array of number
 * - Fungsi ini harus mengembalikan array baru yang merupakan hasil kali dua
 *   dari setiap elemen array yang ada
 * - Fungsi ini tidak boleh mengubah array yang diterima sebagai parameter
 * 
 */

/**
 * Contoh penggunaan:
 *  double([1, 2, 3]) -> [2, 4, 6]
 *  double([2, 4, 6]) -> [4, 8, 12]
 */

function double(numbers) {
    // code here
    // Buat array baru untuk menyimpan hasil
    let doubledNumbers = [];

    // Lakukan iterasi pada setiap elemen array numbers
    for (let i = 0; i < numbers.length; i++) {
        // Kali dua setiap elemen dan tambahkan ke array baru
        doubledNumbers.push(numbers[i] * 2);
    }

    // Kembalikan array baru yang berisi hasil kali dua dari setiap elemen
    return doubledNumbers;
}

console.log(double([1, 2, 3])); // Output: [2, 4, 6]
console.log(double([2, 4, 6])); // Output: [4, 8, 12]

module.exports = { double };