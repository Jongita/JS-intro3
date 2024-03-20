// 1. Užduotis
// Nuskaitykite į masyvą skaičius iš failo ir suskaičiuokite kiek iš viso šiame masyve yra lyginių ir nelyginių skaičių.Išveskite visus lyginius ir nelyginius skaičius.

// Pavyzdžiui jei faile yra šie skaičiai: 5 8 7 2 3

// Programa turi išvesti:

// Lyginiai skaičiai: 8 2
// Nelyginiai skaičiai: 5 7 3


const fs = require("fs");
const input = fs.readFileSync("pirma.csv").toString().split(" ").map(Number);

let arr1 = [];
let arr2 = [];
input.forEach((d) => {
    if (d % 2 === 0) {
        arr1.push(d);
    }
    if (d % 2 === 1) {
        arr2.push(d);
    }
})
console.log(`Lyginiai sk.: [${arr1}]`);
console.log(`Nelyginiai sk.: [${arr2}]`);