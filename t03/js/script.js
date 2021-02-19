class Human {
    constructor(fn, ln, gen, age, calories) {
        this.firstname = fn;
        this.lastname = ln;
        this.gender = gen;
        this.age = age;
        this.calories = calories;
        this.$fn = document.getElementById("first-name");
        this.$ln = document.getElementById("last-name");
        this.$gen = document.getElementById("gender");
        this.$age = document.getElementById("age");
        this.$calories = document.getElementById("calories");
        this.$speach = document.getElementById("speach")[0];
        this.$portrait = document.getElementsByClassName("portrait")[0];
    }
    sleepFor() {
        waiting = true;
        talk(this, `I'm sleeping now...`, 5000);
        setTimeout(() => {
            talk(this, `I'm awake now!`, 3000);
            waiting = false;
        }, 5000);
    }
    feed() {
        if (!hungry) {
            this.$speach.textContent = `I'm not hungry`;
            this.$speach.style.color = "red";
            this.$portrait.style.transform = "scale(1.05)";
            waiting = false;
            setTimeout(() => {
                this.$portrait.style.transform = "scale(1.0)";
                this.$speach.style.color = "black";
            }, 500);
            setTimeout(() => {
                this.$speach.textContent = "...";
            }, 3000);
        } else {
            clearInterval(global);
            this.$speach.textContent = `Nom nom nom`;
            this.$speach.style.color = "red";
            this.$portrait.style.transform = "scale (1.05)";
            setTimeout(() => {
                this.$speach.style.color = "red";

                this.calories += 200;
                if (this.calories >= 500) {
                    hungry = false;
                    this.$speach.textContent = `I'm not hungry now!`;
                } else {
                    this.$speach.textContent = "I`m still hungry";
                }
                this.$calories.textContent = this.calories;
                this.$calories.style.color = "red";
                setTimeout(() => {
                    this.$calories.style.color = "black";
                    this.$speach.style.color = "black";
                }, 500);
                setTimeout(() => {
                    this.$speach.textContent = "...";
                }, 3000);
                waiting = false;
                everyMinuteHunger();
            }, 10000);
        }
    }

}

class superhero extends Human {
    constructor(age, calories, gender, name, laserBeamEnergy, fightDuration) {
        super(age, calories, gender);
        this.name = name;
        this.laserBeamEnergy = laserBeamEnergy;
        this.fightDuration = fightDuration;
    }
    fly() {
        waiting = true;
        talk(this, `I'm flyint`, 10000);
        this.$
    }
    fightwithevil() {

    }
}