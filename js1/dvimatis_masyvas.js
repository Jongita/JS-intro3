
// const mas2d = [
//     [3, 2, 5],
//     [6, 9, 3],
//     [7, 8, 9],
// ];

// console.log(mas2d[1][1]);

// for (let i = 0; i < 3; i++) {
//     let s = "";
//     for (let y = 0; y < 3; y++) {
//         // butu ivykdyta 9 kartus
//         s += `[${i}, ${y}]`;
//     }
//     console.log(s);
// }
// // [0, 0][0, 1][0, 2]
// // [1, 0][1, 1][1, 2]
// // [2, 0][2, 1][2, 2]

const mas2d = [
    [3, 2, 5],
    [6, 9, 3],
    [7, 8, 9],
];

console.log(mas2d[1][1]);

for (let i = 0; i < 3; i++) {
    let s = "";
    for (let y = 0; y < 3; y++) {
        s += `${mas2d[i][y]} `;
    }
    console.log(s);
}
// 3 2 5
// 6 9 3
// 7 8 9
console.log('-------------------------');
for (let i = 0; i < 3; i++) {
    let s = "";
    for (let y = 0; y < 3; y++) {
        s += `${mas2d[y][i]} `;
    }
    console.log(s);
}
// 3 6 7
// 2 9 8
// 5 3 9

//kai staciakampis: isitraukti
// Kai masyvas yra bet kokio dydžio [n,n]
const n = mas2d.length;
for (let i = 0; i < n; i++) {
    let s = "";
    for (let y = 0; y < n; y++) {
        s += `${mas2d[i][y]} `;
    }
    console.log(s);
}
console.log("---------------");
for (let i = 0; i < n; i++) {
    let s = "";
    for (let y = 0; y < n; y++) {
        s += `${mas2d[y][i]} `;
    }
    console.log(s);
}