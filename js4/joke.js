
async function loadJoke() {
    await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    // await resp.json();
    console.log("Pasiuntimas baigtas");
}

console.log("Pirma instrukcija");
loadJoke();
console.log("Programa baigta");

// Pirma instrukcija
// Programa baigta
// Pasiuntimas baigtas (suplanuoja, bet ivykdo paskutini)

// 01:56

