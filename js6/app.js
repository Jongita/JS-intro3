const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const x = xInput.valueAsNumber;

    const y = yInput.valueAsNumber;
    if (isNaN(x) || isNaN(y)) {
        rez.innerHTML = `Ivesti skaiciai yra neteisingi`;
    } else {
        const sum = x + y;
        rez.innerHTML = `Skaiciu suma yra lygi: ${sum}`;
    }
}

btn.onclick = skaiciuoti;