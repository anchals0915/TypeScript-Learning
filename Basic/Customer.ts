
export class Customer {
    /*
    private _firstName : string ; 
    private _lastName : string  ;
    constructor(firstName:string , lastName :string) {
        this._firstName = firstName ;
        this._lastName = lastName ; 
    }
    */
   constructor(private _firstName:string , private _lastName:string) {

   }

    public get firstName() : string {
        return this._firstName ; 
    }
    
    public set firstName(v : string) {
        this._firstName = v;
    }

    public get lastName() : string {
        return this._lastName ; 
    }
    
    public set lastName(v : string) {
        this._lastName = v;
    }
}