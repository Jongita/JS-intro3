// Papildomas iššūkis
// Prieš konvertavimą patikrinkite ar teisingai yra nurodytas valiutos pavadinimas
// Pavyzdžiui iškvietus programą taip:
// node currency.js GBG 100
// Programa turėtų išvesti:
// Valiuta GBG neegzistuoja
// Galite Rinktis vieną iš šių valiutų:
// AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, ....
// Valiutų sąrašą galite gauti čia:
// https://api.frankfurter.app/currencies


async function loadCurrency(cur, amount) {
    const dataAll = await fetch("https://api.frankfurter.app/latest");
    const currAll = await dataAll.json();
    const currAllRates = currAll.rates;
    if (!currAllRates[cur]) {
        console.log(`Valiuta ${cur} neegzistuoja. Galite rinktis vieną iš šių valiutų: ${Object.keys(currAllRates)}`);
    } else {
        console.log(`${cur} kursas: ${(currAllRates[cur]).toFixed(1)}`);
        console.log(`${amount} Eur => ${(currAllRates[cur] * amount).toFixed(0)} ${cur}`);
    }
};

loadCurrency(process.argv[2], process.argv[3]);
// loadCurrency('NOK', 150);
