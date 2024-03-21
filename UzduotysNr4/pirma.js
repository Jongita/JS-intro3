// 1. Užduotis
// Faile studentai.json pateikiamas JSON formatu studentų sąrašas(masyvas), jų duomenys ir pažymiai.Nuskaitykite duomenis iš masyvo, suskaičiuokite ir išveskite:
// 1. Studentų kiekį
// 2. Studentų amžiaus vidurkį
// 3. Studentų pažangumo vidurkį(visų pažymių vidurkį)
// 4. Išveskite studentų sąrašą ir kiekvieno studento vidurkį, pvz.:
// Jonas Jonaitis 5.5
// Petras Petraitis 9.3

const fs = require("fs");
let data = fs.readFileSync("studentai.json").toString();

const studentai = JSON.parse(data);
// console.log(studentai);
// masyvas su objektais


let averageAge = 0;
let totalMarks = [];
let marksAvg = 0;
studentai.forEach((studentas) => {
    averageAge += studentas.amzius / studentai.length;
    studentas.pazymiai.forEach((marks) => {
        totalMarks.push(marks);
        marksAvg += marks;
    });

});
console.log(`Studentu kiekis: ${studentai.length}`);
console.log(`Studentų amžiaus vidurkis: ${averageAge}`)
console.log(`Studentų pažangumo vidurkis: ${marksAvg / totalMarks.length}`)

console.log('------------------------');
for (const stud of studentai) {
    let studMarksAvg = 0;
    for (const marks of stud.pazymiai) {
        studMarksAvg += marks;
    }
    console.log(`${stud.vardas} ${stud.pavarde} ${studMarksAvg / stud.pazymiai.length}`);
}
