//start of weekmap
let guest1 = { name: "Ivan" }
let guest2 = { name: "Ihor" }
let guest3 = { name: "Ylii" }
let guest4 = { name: "Maxim" }

let guestList = new WeakMap();
guestList
    .set(guest1, "invited")
    .set(guest2, "invited")
    .set(guest3, "invited")
    .set(guest4, "invited")

console.log(guestList.has(guest1));
console.log(guestList.size);
/*console.log(guestList.clear()); not working */
console.log("end of weakmap");
console.log(" ");

let menu = new Set();

let dish1 = { name: "Vareniki", price: 100 };
let dish2 = { name: "Pizza", price: 150 };
let dish3 = { name: "Hlebets", price: 200 };
let dish4 = { name: "Sup", price: 250 };

menu
    .add(dish1)
    .add(dish2)
    .add(dish3)
    .add(dish2)
    .add(dish1)
    .add(dish4);

console.log(menu.size);

//iterate all elenetns

menu.forEach((dish) => {
    console.log(dish.name + " - " + dish.price + " usd");
});

console.log("end of set");
console.log(" ");

const vault1 = { pass: "gass" };
const vault2 = { pass: "1234" };
const vault3 = { pass: "qwer" };
const vault4 = { pass: "dsa" };

let bankVault = new WeakMap([
    [vault1, { login: "ssag" }],
    [vault2, { login: "4321" }],
    [vault3, { login: "rewq" }],
    [vault4, { login: "asd" }]
]);

console.log(bankVault.get(vault1));
console.log(bankVault.get(vault2));
console.log(bankVault.get(vault3));
console.log(bankVault.get(vault4));



let coinCollection = new WeakSet();

let coin = { value: 1 };
let doggycoin = { value: 2 };
let bitcoin = { value: "bitcoin" };
let eth = { value: 4 };

coinCollection
    .add(coin)
    .add(doggycoin)
    .add(bitcoin)
    .add(eth);

console.log(coinCollection); //all unique

console.log("end of task");