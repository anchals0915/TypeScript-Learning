import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

// Create instances of Shape, Circle, and Rectangle
let myCircle = new Circle(3, 6, 9);
let myRectangle = new Rectangle(2, 4, 6, 8);

// Store instances in an array of Shape objects
let theShapes: Shape[] = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);

console.log("Shapes:");
for (let eachShape of theShapes) {
    console.log(eachShape.getInfo());
    console.log();
}
