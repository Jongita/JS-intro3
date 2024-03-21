const fs = require("fs");
let str = fs.readFileSync("data.json").toString();

const sandelys = JSON.parse(str);

// console.log(sandelys);

sandelys.forEach((preke) => {
    let sum = 0;
    preke.kiekis_sandelyje.forEach((kiekis) => {
        sum += kiekis;
    })
    console.log(`${preke.pavadinimas}, kaina: ${preke.kaina} Eur, kiekis: ${preke.kiekis_sandelyje[0]}`);
})