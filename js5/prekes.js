class Preke {
    kaina = 0;
    kainasuPVM = 0;
    pavadinimas = "";
    constructor(kaina, pavadinimas) {
        // pradiniu reiksmiu priskytimas
        this.kaina = kaina;
        // skaiciavimai ir programinis kodas, kuris vykdomas kievieno objketo sukurimo metu
        this.kainasuPVM = this.kaina * 1.21;
        this.pavadinimas = pavadinimas;
    }
}

// Nauju objektu sukurimas
const tv = new Preke(100, "televizorius");
const pc = new Preke(600, "kompiuteris");

tv.kaina = 100;
tv.kainasuPVM = tv.kaina * 1.21;

console.log(tv);
console.log(pc);


