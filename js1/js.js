// let mass = [5, 3, 6];
// mass.push(5);
// mass[6] = 8;
// console.log(mass);


// let i = 1;
// let y = i;
// let mas = [5, 3, 6]
// let c = mas;
// console.log(mas);

// let mas1 = [];
// for (let i = 1; i < 10; i++) {
//     mas1.push(i);
// }

// // praleista 01:09:30
// mas1.forEach()

// function name(x) {
//     console.log(x);
// }

// mas1.forEach((x) => {
//     console.log(x);
// })

// For each - kai su kiekvienu elementu norime atlikti veiksma:

let temperature = [5, 6, 2, 3, 4, 6, 7];

let sum = 0;
let count = 0;
temperature.forEach((x) => {
    sum += x;
    count++;
});
console.log(`Vidurkis: ${sum / count}`);

let men = [[1, 2, 3, 4, 1, 3, 4], [3, 5, 6, 7, 2, 6, 7], [3, 2, 4, 5, 6, 7, 8]];

let suma = 0;
let kiekis = 0;
men.forEach((sav) => {
    let savSuma = 0;
    let savKiekis = 0;
    sav.forEach((diena) => {
        savSuma += diena;
        savKiekis++;
    });
    suma += savSuma;
    kiekis += savKiekis;
    console.log(`Savaites vidurkis: ${savSuma / savKiekis}`);
});

console.log(` ${suma / kiekis}`);
