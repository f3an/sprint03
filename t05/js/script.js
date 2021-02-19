let name1 = { name: 'Oleg' }
let name2 = { name: 'Ivan' }
let name3 = { name: 'Ihor' }
let name4 = { name: 'Kirill' }
let name5 = { name: 'Chipubelli' }

let guestlist = new WeakMap();
guestlist
    .set(name1, "invated")
    .set(name2, "invated")
    .set(name3, "invated")
    .set(name4, "invated")
    .set(name5, "invated");

console.log(guestlist.has(name2));
console.log(guestlist.set(name1, "dead"));
console.log(guestlist.delete(name5));