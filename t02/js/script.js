class Human {
    constructor(firstName, lastName, gender, age, calories, sleep) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
        this.sleep = sleep;
    }
}

const person = new Human(
    "Peter",
    "Parker",
    "male",
    16,
    0,
    true
);

document.getElementById("firstname").innerHTML = "First name: " + person.firstName;
document.getElementById("lastname").innerHTML = "Last name: " + person.lastName;
document.getElementById("age").innerHTML = "Age: " + person.age;
document.getElementById("gender").innerHTML = "Gender: " + person.gender;

class Superhero extends Human {
    constructor(alias, web, age, calories) {
        super(age, calories, gender);
        this.alias = alias;
        this.web = web;
    }
}

const hero = new Superhero(
    "Spider-Man",
    100,
    person.age,
    person.gender,
);
document.getElementById("alias").innerHTML = "Name: " + hero.alias;

document.getElementById("ages").innerHTML = "Age: " + person.age;

document.getElementById("genders").innerHTML = "Gender: " + person.gender;

function feed() {
    document.getElementById("calories").innerHTML = "Calories: " + person.calories;
    this.calories = person.calories;
    if (this.calories < 500) {
        setTimeout(() => {
            document.getElementById("message-here").innerHTML = "Nom nom nom";
        }, 100);

        setTimeout(() => {
            document.getElementById("message-here").innerHTML = "...";
        }, 10000);
        return person.calories += 200;
    } else if (this.calories >= 500) {
        document.getElementById("message-here").innerHTML = "I'm not hungry";
        setTimeout(() => {
            document.getElementById("message-here").innerHTML = "...";
        }, 4000);
        person.calories = 600;
    }
}


function sleepFor() {
    this.sleep = person.sleep;
    if (this.sleep) {
        setTimeout(() => {
            document.getElementById("message-here").innerHTML = "I'm sleeping now";
        }, 100);

        setTimeout(() => {
            document.getElementById("message-here").innerHTML = "I'm awake up";
        }, 4000);

        setTimeout(() => {
            document.getElementById("message-here").innerHTML = "...";
        }, 5000);
    } else {
        setTimeout(() => {
            document.getElementById("message-here").innerHTML = "I don`t want sleep";
        }, 1000);
        setTimeout(() => {
            document.getElementById("message-here").innerHTML = "...";
        }, 4000);
    }
    return person.sleep = false;
}

function TurnIntoSuperhero() {
    if (person.calories < 500 && person.sleep != false) {
        document.getElementById("message-here").innerHTML = "I'm hungry and I want sleep";
    } else if (person.calories >= 500 && person.sleep != false) {
        document.getElementById("message-here").innerHTML = "I want sleep";
    } else if (person.calories < 500 && person.sleep == false) {
        document.getElementById("message-here").innerHTML = "I'm hungry";
    } else {
        alert("I'm Spider-man");
        setTimeout(() => {
            document.getElementById('stylesheet').href = './css/superstyle.css';
        }, 1000);
    }
}

function fly() {
    alert("whoa! I'm flying!!");

    setTimeout(() => {
        document.getElementById('image').src = './assets/images/flying.jpg';
    }, 100);

    setTimeout(() => {
        document.getElementById('image').src = './assets/images/Spider-Man.jpg';
    }, 5000);

}

function shooting() {
    document.getElementById("web").innerHTML = "Web: " + hero.web;
    this.web = hero.web;
    if (this.web == 0) {
        hero.web = 0;
        document.getElementById("web").innerHTML = "Web: " + hero.web;
        alert("No Ammo");
    } else if (this.web <= 100) {
        alert("Pew Pew Pew");
        setTimeout(() => {
            document.getElementById('image').src = './assets/images/shooting-web.jpg';
        }, 100);
        setTimeout(() => {
            document.getElementById('image').src = './assets/images/Spider-Man.jpg';
        }, 10000);
        return hero.web -= 20;
    }
}

function fightWithEvil() {
    x = prompt("Fight with Evil");
    x *= 1000;
    alert("Khhhh-chh... Bang-g-g-g... Evil is defeated");

    setTimeout(() => {
        document.getElementById('image').src = './assets/images/fightning.jpg';
    }, 100);

    setTimeout(() => {
        document.getElementById('image').src = './assets/images/Spider-Man.jpg';
    }, x);
}