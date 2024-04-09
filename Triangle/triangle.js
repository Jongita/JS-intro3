"use strict";
class Triangle {
    constructor(_a, _b, _c) {
        this._a = _a;
        this._b = _b;
        this._c = _c;
    }
    set a(a2) {
        this._a = a2;
    }
    get a() {
        return this._a;
    }
    set b(b2) {
        this._b = b2;
    }
    get b() {
        return this._b;
    }
    set c(c2) {
        this._c = c2;
    }
    get c() {
        return this._c;
    }
    checkTriangle(a, b, c) {
        if (a + b > c || a + c > b || b + c > a) {
            true;
        }
        else {
            false;
        }
    }
    toString() {
        return `A=${this._a} B=${this._b} C=${this._c}`;
    }
}
let t = new Triangle(2, 5, 7);
console.log(t.toString());
// Panaudodami TypeScript sukurkite klasę Triangle kuri būtų skirta darbui su trikampiais. Klasė turi turėti:
// 1. konstruktorių su trimis parametrais, kraštinėmis A, B, C
// 2. set'erius ir get'erius
// 3. privačią funkciją kuri patikrintų ar iš paduotų kraštinių įmanoma sudaryti trikampį (dviejų kraštinių suma didesnė už trečiąją)
// 4. bandant pakeisti kraštinės reikšmę per set'erius turi būti iškviečiamas patikrinimo metodas ir turėtų neleisti pakeisti reikšmių
// 5. Sukurkite metodą toString() kuris gražintų trikampį string formatu (atspausdinimui)
// 5. Sukurkite metodą getPerimeter() kuri suskaičiuotų ir grąžintų trikampio perimetrą
// 6. Sukurkite metodą getArea() kuri suskaičiuotų ir grąžintų trikampio plotą
// 7. Sukurkite metodą largerTriangle(t:Triangle):boolean kuris palygintų du trikampius ir grąžintų true jei kviečiamasis trikampis yra mažesnis arba lygus (plotu) ir true jei paduotas trikampis į funkciją yra didesnis
// 8. Sukurkite masyvą su trimis trikampiais ir parašykite programinį kodą kuris suskaičiuotų visų šių trikampių plotų sumą
// Papildomas iššūkis
// Sukurkite metodą getType() kuris grąžintų kokio tipo yra trikampis: lygiakraštis, lygiašonis, statusis ar įprastinis
