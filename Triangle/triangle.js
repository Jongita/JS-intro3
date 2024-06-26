"use strict";
class Triangle {
    constructor(_a, _b, _c) {
        this._a = _a;
        this._b = _b;
        this._c = _c;
    }
    set a(a2) {
        if (this.checkTriangle(a2, this._b, this._c) === true) {
            this._a = a2;
        }
        else {
            this._a;
        }
    }
    get a() {
        return this._a;
    }
    set b(b2) {
        if (this.checkTriangle(this._a, b2, this._c) === true) {
            this._b = b2;
        }
        else {
            this._b;
        }
    }
    get b() {
        return this._b;
    }
    set c(c2) {
        if (this.checkTriangle(this._a, this._b, c2) === true) {
            this._c = c2;
        }
        else {
            this._c;
        }
    }
    get c() {
        return this._c;
    }
    checkTriangle(a, b, c) {
        if (a + b > c || a + c > b || b + c > a) {
            return true;
        }
        else {
            return false;
        }
    }
    toString() {
        return `A=${this._a} B=${this._b} C=${this._c}`;
    }
    getPerimeter() {
        return this._a + this._b + this._c;
    }
    getArea() {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this._a) * (s - this._b) * (s - this._c)).toFixed(2);
    }
    largerTriangle(t2) {
        if (this.getArea() <= t2.getArea()) {
            return true;
        }
        else {
            return false;
        }
    }
}
let t = new Triangle(6, 6, 4);
console.log(t.toString());
console.log(t.getPerimeter());
console.log(t.getArea());
let group = [];
group.push(new Triangle(3, 4, 5));
group.push(new Triangle(6, 6, 7));
group.push(new Triangle(8, 8, 8));
console.log(`${t.largerTriangle(group[1])}`);
let totalArea;
totalArea = 0;
group.forEach((t2) => {
    totalArea += t2.getArea();
});
console.log(`Plotu suma: ${totalArea}`);
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
