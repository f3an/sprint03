let y = 1;

function* gen(x = 5) {
    let alert1;
    for (let i = 0; i < x; i++) {
        alert1 = prompt("Previous result: " + y + ". Enter a new number:");
        if (Number(alert1) > 10000) {
            y = 1;
        } else if (Number.isNaN(Number(alert1))) {
            console.error("Invalid number!");
        } else {
            y += Number(alert1);
        }
    }
    alert("Result is: " + y);
}

for (let gen1 of gen()) {}