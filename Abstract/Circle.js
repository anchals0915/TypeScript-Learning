"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
// This part defines another TypeScript class called Circle, which extends the Shape class. 
class Circle extends Shape_1.Shape {
    // It has a constructor that initializes the x, y, and _radius properties. 
    constructor(theX, theY, _radius) {
        // The super(theX, theY) statement calls the constructor of the parent class Shape. 
        super(theX, theY);
        this._radius = _radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    get radius() {
        return this._radius;
    }
    set radius(v) {
        this._radius = v;
    }
    // It also overrides the getInfo() method of the parent class to include information about the radius of the circle.
    getInfo() {
        return super.getInfo() + ` , radius = ${this._radius}`;
    }
}
exports.Circle = Circle;
