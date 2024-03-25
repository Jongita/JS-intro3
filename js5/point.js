
class Point {
    #x = 0;
    #y = 0;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    set x(x) {
        this.#x = x;
    }

    get x() {
        return this.#x;
    }

    set y(y) {
        this.#y = y;
    }

    get y() {
        return this.#y;
    }

    distanceFromOrigin() {
        return Math.sqrt(this.#x ** 2) + (this.#y ** 2);
    }

    // metodas tasko pastumimui
    translate(dx, dy) {
        this.#x += dx;
        this.#y += dy;
    }
    // metodas tasko isvedimui

    print() {
        return `[${this.x}, ${this.y}]`;
    }

    distance(p) {
        return Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2);
    }
}

const a = new Point(3, 5);
const b = new Point(0, 10);
b.translate(2, 0);
console.log(a.print());
console.log(b.print());
console.log(`Atstumas iki pradzios tasko: ${a.distanceFromOrigin()}`);
console.log(`Atstumas iki pradzios tasko: ${b.distanceFromOrigin()}`);

console.log(`Atstumas nuo tasko a iki b: ${a.distance(b)}`);