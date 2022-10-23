function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}
Square.prototype.isSquare = function () {
    if (this.a === this.b && this.b === this.c && this.b === this.d) {
        console.log(true);
    } else {
        console.log(false);
    }
};
const res = new Square(3, 3, 3, 3);
//Test:
res.isSquare(); // Output: true
