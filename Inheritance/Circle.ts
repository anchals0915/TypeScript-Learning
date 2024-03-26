import { Shape } from "./Shape";

// This part defines another TypeScript class called Circle, which extends the Shape class.
export class Circle extends Shape {
  // It has a constructor that initializes the x, y, and _radius properties.
  constructor(theX: number, theY: number, private _radius: number) {
    // The super(theX, theY) statement calls the constructor of the parent class Shape.
    super(theX, theY);
  }

  public get radius(): number {
    return this._radius;
  }

  public set radius(v: number) {
    this._radius = v;
  }

  // It also overrides the getInfo() method of the parent class to include information about the radius of the circle.
  getInfo(): string {
    return super.getInfo() + ` , radius = ${this._radius}`;
  }
}
