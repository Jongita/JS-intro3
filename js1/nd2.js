const fs = require("fs");
const input = fs.readFileSync("d.csv").toString().split(" ");
// 2 3 5 6 1 1 5 4 6 8 2 5
// const mas = Array(10).fill(0);

// input.forEach((x) => {
//     mas[x]++;
// })
// console.log(mas);
// // [
// //     0, 2, 2, 1, 1,
// //     3, 2, 0, 1, 0
// // ]

// 0 --> 0
// 1 --> 2
// 2 --> 2

const mas = Array(10).fill(0);

input.forEach((x) => mas[x]++);
mas.forEach((d, i) => console.log(`[${i}]=>${d}`));

// x indeksas elemento
// d masyvo duomenys