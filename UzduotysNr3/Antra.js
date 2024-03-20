// 2. Užduotis
// Duomenų faile pateikiamas dvimačio masyvo 4, 4 duomenys.Pavyzdžiui:
// 1 2 2 5
// 5 1 4 2
// 2 2 1 3
// 2 8 9 6

// Parašykite programą kuri įstrižainėse padarytų skaičius 0 ir išvestų tokį masyvą:
// 0 2 2 0
// 5 0 0 2
// 2 0 0 3
// 0 8 9 0
const fs = require("fs");
const input = fs.readFileSync("antra.csv").toString().split("\r\n");


let mas = [];
input.forEach((element) => {
    mas.push(element.split(" "));
})

// mas[0][0] = 0; y === i
// mas[0][3] = 0; y + i === 3
// mas[1][1] = 0; y === i
// mas[1][2] = 0; y + i === 3
// mas[2][1] = 0; y + i === 3
// mas[2][2] = 0; y === i
// mas[3][0] = 0; y + i === 3
// mas[3][3] = 0; y === i


for (let i = 0; i < 4; i++) {
    let s = " ";
    for (let y = 0; y < 4; y++) {
        s += `${mas[i][y]} `;
    }
    console.log(s);
};

console.log('-----------------------');

for (let i = 0; i < 4; i++) {
    let s = " ";
    for (let y = 0; y < 4; y++) {
        if (y === i || y + i === 3) {
            mas[y][i] = 0;
            s += `${mas[y][i]} `;
        } else {
            s += `${mas[y][i]} `;
        }
    }
    console.log(s);
};

