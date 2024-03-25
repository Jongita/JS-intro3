// 1. Sukurkime klasę Trupmena, ją turėtų sudaryti trys atributai: sveikojiDalis, skaitiklis, daliklis


class Trupmena {
    #s = 0;
    #skait = 0;
    #dal = 0;
    constructor(s, skait, dal) {
        this.#s = s;
        this.#skait = skait;
        this.#dal = dal;
    }
    // 2. Sukurkime klasei setter‘ius ir getter‘ius
    set s(s) {
        this.#s = s;
    }
    get s() {
        return this.#s;
    }
    set skait(skait) {
        this.#skait = skait;
    }
    get skait() {
        return this.#skait;
    }
    set dal(dal) {
        this.#dal = dal;
    }
    get dal() {
        return this.#dal;
    }
    // 3. Klasei Trupmena sukurkime metodą toString kuris gražintų trupmeną tokiu formatu: sveikojiDalis skaitiklis / daliklis(pvz.: 1 2 / 5)
    toString() {
        return `${this.#s} ${this.#skait} / ${this.#dal}`;
    }
    // 5. Sukurkime metodą: pridetiInt(sveikasisSkaicius) kuris pridėtų sveikąjį skaičių prie trupmenos, ištestuokime pakoreguotą kodą.

    pridetiInt(sSk) {
        this.s += sSk;
        return `${this.s} ${this.skait} / ${this.dal}`;
    }
    // 6. Sukurkite dar vieną papildomą metodą: prideti(sveikasisSkaicius, skaitiklis, vardiklis).Nepamirškite jog pridedant skaičių reikia subendravardiklinti).
    papildomaTrupmena(s2, skait2, dal2) {
        this.s += s2;
        if (dal2 === this.dal) {
            return `${this.s} ${this.skait + skait2} / ${this.dal}`;
        } else {
            return `${this.s} ${(this.skait * dal2) + (skait2 * this.dal)} / ${this.dal * dal2}`;
        }
    }

    // 7. Sukurkime metodą pridetiTrupmena(x), šis metodas turės prie esamos trupmenos pridėti paduotą trupmeną.Nepamirškite jog taip pat po šio veiksmo reikės suprastinti trupmeną.
    pridetiTrupmena(x) {
        if (x.dal === this.dal) {
            return `${this.s + x.s} ${this.skait + x.skait} / ${this.dal}`;
        } else {
            return `${this.s + x.s} ${(this.skait * x.dal) + (x.skait * this.dal)} / ${this.dal * x.dal}`;
        }
    }
    // 8. Sukurkime metodą toDouble() kuris grąžintų esamą trupmenos reikšmę realiuoju skaičiumi(per kablelį).
    toDouble() {
        return `${this.s + eval(this.skait / this.dal)}`;
    }

}




// 4.Ištestuokime programinį kodą sukurdami objektą, suteikime kintamiesiems reikšmes ir išveskime rezultatą.
const a = new Trupmena(1, 2, 5);
const b = new Trupmena(1, 3, 5);
console.log(a.toString());
console.log(a.pridetiInt(2));
console.log(a.papildomaTrupmena(2, 3, 4));
console.log(a.pridetiTrupmena(b));
console.log(a.toDouble());

