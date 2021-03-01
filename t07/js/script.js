let houseMixin = {
    wordReplace(minus, plus) {
        this.description = this.description.replace(minus, plus);
    },
    wordInsertAfter(after, word) {
        this.description = this.description.replace(after, after + " " + word);
    },
    wordDelete(minus) {
        this.description = this.description.replace(minus, "");
    },
    wordEncrypt() {
        key = "asd";
        this.description = CryptoJS.AES.encrypt(this.description, key);
    },
    wordDecryption() {
        key = "asd";
        this.description = CryptoJS.AES.decrypt(this.description, key);
    },
};


Object.assign(house, houseMixin);

console.log(house.getDaysToBuild());
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.

house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.

house.wordInsertAfter("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

house.wordEncrypt();
console.log(house.description.ciphertext.toString());
// 89b22ab230263a12505e107d349668827ea7a47b0836d13ab6bfbdb0eaa965b286c7d88f319508abaa717aed7c7e6e74c385e18023880dfeac61a8a1e0a87901232f6d93120f45a73151b7183df92852

house.wordDecryption();
console.log(house.description.toString(CryptoJS.enc.Utf8));
// Spacious house with marble tile flooring, 2-car garage, and a back patio.