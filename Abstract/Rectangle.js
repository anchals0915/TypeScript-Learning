"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, _length, _breadth) {
        super(theX, theY);
        this._length = _length;
        this._breadth = _breadth;
    }
    calculateArea() {
        return this._length * this._breadth;
    }
    get length() {
        return this._length;
    }
    set length(v) {
        this._length = v;
    }
    get breadth() {
        return this._breadth;
    }
    set breadth(v) {
        this._breadth = v;
    }
    getInfo() {
        return (super.getInfo() + ` width=${this._breadth}  , length = ${this._length}`);
    }
}
exports.Rectangle = Rectangle;
