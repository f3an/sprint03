let validator = {
    set: (obj, prop, value) => {
        if (prop === "age") {
            if (!Number.isInteger(value)) {
                throw new TypeError("The age is not an integer");
            } else if (Number(value) > 200) {
                throw new TypeError("The age is invalid");
            } else {
                console.log(`Setting value '${value}' to '${prop}'`);
                obj[prop] = value;
                return obj[prop];
            }
        }
        console.log(`Setting value '${value}' to '${prop}}'`);
        obj[prop] = value;
        return obj[prop];
    },
    get: (obj, prop) => {
        console.log(`Trying to access the property '${prop}'`);
        if (prop in obj) {
            return obj[prop];
        } else {
            return false;
        }

    }
}

let person = new Proxy({}, validator);

// person.age = 100;
// // Setting value'100'to'age'
// console.log(person.age);
// // Trying to access the property'age'
// //100
// person.gender = "male";
// //Setting value 'male' to 'gender'

// console.log(person.gender);

// person.age = 'young';
// //uncaught TypeError: The age is not an integer
// person.age = 300;

console.log(person.hate);