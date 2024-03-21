

// async function loadOrai() {
//     await fetch("https://api.meteo.lt/v1/places/vilnius/forecasts/long-term");
//     // await resp.json();
//     console.log("Pasiuntimas baigtas");
// }

// console.log("Pirma instrukcija");
// loadJoke();
// console.log("Programa baigta");

// Pirma instrukcija
// Programa baigta
// Pasiuntimas baigtas (suplanuoja, bet ivykdo paskutini)

// 01:56

let x = 1;
async function loadMeteo(place) {
    const tmp = await fetch("https://api.meteo.lt/v1/places/" + place + "/forecasts/long-term");
    const meteo = await tmp.json();

    meteo.forecastTimestamps.forEach((oras) => {
        console.log(`${oras.forecastTimeUtc} ${oras.airTemperature} \t ${oras.conditionCode}`);
    });

}

loadMeteo(process.argv[2]);
