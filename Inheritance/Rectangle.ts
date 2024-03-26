import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor(
        theX: number,
        theY: number,
        private _length: number,
        private _breadth: number
    ) {
        super(theX, theY);
    }

    public get length(): number {
        return this._length;
    }

    public set length(v: number) {
        this._length = v;
    }

    public get breadth(): number {
        return this._breadth;
    }

    public set breadth(v: number) {
        this._breadth = v;
    }

    getInfo(): string {
        return (
            super.getInfo() + ` width=${this._breadth}  , length = ${this._length}`
        );
    }
}
