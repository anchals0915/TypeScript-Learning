"use strict";
//  TypeScript code demonstrates the concept of inheritance and method overriding.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    set x(v) {
        this._x = v;
    }
    get y() {
        return this._y;
    }
    set y(v) {
        this._y = v;
    }
    getInfo() {
        return `x= ${this._x} , y= ${this._y} `;
    }
}
exports.Shape = Shape;
