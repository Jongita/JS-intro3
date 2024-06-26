// Papildomas iššūkis
// Garso signalas gali būti koduojamas sveikųjų skaičių seka.Šie skaičiai rodo signalo stiprumą periodiniais laiko intervalais.Signalą iškraipantis triukšmas šiek tiek pakeičia tų skaičių reikšmes.
//     Signalo „išlyginimo“ metu triukšmas pašalinamas tokiu būdu: kiekvienas skaičius keičiamas jo ir dviejų jam gretimų skaičių vidurkiu(vidutinės reikšmės sveikąja dalimi).Pirmas ir paskutinis skaičiai atitinkamai keičiami dviejų pirmųjų arba dviejų paskutinių skaičių vidurkiu.
// Faile yra garso signalo seka, kuri sudaryta iš k nuoskaitų.Pirmojoje failo eilutėje yra pateikiami skaičius k.Toliau surašytos visa seka.Sudarykite programą kuri nufiltruotų šias sekas ir išvestų jas į ekraną.
// Pradiniai duomenys
// 4 7 3 5 8

// Rezultatai
// 5.5 4.6 5 5.3 6.5

const fs = require("fs");
const input = fs.readFileSync("trecia.csv").toString().split(" ").map(Number);

let result = [];
for (i = 0; i < input.length; i++) {
    let firstN = input[i - 1];
    let secondN = input[i];
    let thirdN = input[i + 1];
    if (i === 0) {
        result.push(((secondN + thirdN) / 2).toFixed(1));
    } else if (i === input.length - 1) {
        result.push(((secondN + firstN) / 2).toFixed(1));
    } else {
        result.push(((firstN + secondN + thirdN) / 3).toFixed(1));
    }
}
console.log(result);











