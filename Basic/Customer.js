"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    /*
    private _firstName : string ;
    private _lastName : string  ;
    constructor(firstName:string , lastName :string) {
        this._firstName = firstName ;
        this._lastName = lastName ;
    }
    */
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(v) {
        this._firstName = v;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(v) {
        this._lastName = v;
    }
}
exports.Customer = Customer;
