"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
// Create instances of Shape, Circle, and Rectangle
let myCircle = new Circle_1.Circle(3, 6, 9);
let myRectangle = new Rectangle_1.Rectangle(2, 4, 6, 8);
// Store instances in an array of Shape objects
let theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
console.log("Shapes:");
for (let eachShape of theShapes) {
    console.log(eachShape.getInfo());
    console.log();
}
