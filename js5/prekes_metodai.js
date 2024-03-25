class Preke {
    kaina = 0;
    kainasuPVM = 0;
    pavadinimas = "";
    constructor(kaina, pavadinimas) {

        this.kaina = kaina;
        this.pavadinimas = pavadinimas;
    }

    isvesti() {
        return `Prekes pavadinimas: ${this.pavadinimas}, kaina: ${this.kaina} Eur, kaina su PVM: ${this.kainasuPVM}`;
    }

    get kainasuPVM() {
        return this.kaina * 1.21;
    }

}

const tv = new Preke(100, "televizorius");
const pc = new Preke(600, "kompiuteris");


console.log(tv.isvesti());
tv.kaina = 200;
console.log(tv.isvesti());


console.log(pc.isvesti());

console.log(tv.kainasuPVM);

let kainuSuma = tv.kainasuPVM + pc.kainasuPVM;


