console.log("Hello World !!!" ) ; 
console.log("Coding Gurus! " + "Time for some fun !!")


// Define Variables 
// Syntax 
// let <variable_name>: <type> = <intital value > ; 

// Eg : 
let found : boolean = true ;
let grade:number = 88.6 ;  // integer or decimals numbers

let firstName : string = "Surbhi" ;  
let lastName : string = "Singh" ; 


console.log(found) ; 
console.log("The grade is " + grade);
console.log("Hi "+ firstName+" "+ lastName);


/**
 * TypeScript : "let" Keyword
 * We are using the new Typescript let keyword for variable declarations
 * 
 * The new Typescript let keyword helps to eliminate issues of var in Javascript 
 */

// Typescipt is Strongly Typed

found = false ; 
grade = 99 ; 
firstName = "Anchal" ; 
lastName = "Kumari" ; 


// Type : any
let myData:any = 50.0
// we can assign differnt values of any type 
myData = false ;
myData = "Eric" ; 
myData = 20 ; 


// Template Strings
console.log("Hi " + firstName + " " + lastName);
console.log(`Hi ${firstName} ${lastName}`);


// Variables


// for loops 
for(let i = 0 ; i<5 ; i++) {
    console.log(i);
}

// for loop - array of numbers 
let reviews: number[] = [5,5,4.5,1,3] ; 
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}


// for loops - compute average 
let total:number = 0 ; 
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total +=reviews[i] ; 
}

let average : number = total/reviews.length ;
console.log("Review average : " + average);


/*
    simple for loop 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


    for each
array.forEach(element => {
    
});

    for in 
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

    For of 
for (const iterator of object) {
    
}
 */



// Arrays 
let sportsOne: string[] = ["Golf" , "Cricket" , "Tennis" , "Swimming"]  ;
for (let tempSport of sportsOne) {
    // Conditional 
    if(tempSport=="Cricket") {
        console.log(tempSport + " << My Favorite") ;
    }
    else {
        console.log(tempSport);
    }
}



// Growable Arrays 
let sportsTwo : string[] = ["Golf" , "Cricket" , "Tennis"] ; 
sportsTwo.push("Baseball") ; 
sportsTwo.push("Football") ; 

for (let tempSport of sportsTwo) {
    console.log(tempSport);
    
}


// Classes 
// Constructor 
// access modifier
    // 1. public 
    // 2. private
    // 3. protected 

// getter and setters methods 

// Parameter Properties 

// class Customer {
//     /*
//     private _firstName : string ; 
//     private _lastName : string  ;
//     constructor(firstName:string , lastName :string) {
//         this._firstName = firstName ;
//         this._lastName = lastName ; 
//     }
//     */
//    constructor(private _firstName:string , private _lastName:string) {

//    }

//     public get firstName() : string {
//         return this._firstName ; 
//     }
    
//     public set firstName(v : string) {
//         this._firstName = v;
//     }

//     public get lastName() : string {
//         return this._lastName ; 
//     }
    
//     public set lastName(v : string) {
//         this._lastName = v;
//     }
// }

// let myCustomer = new Customer("Alan" , "Walker") ; 
// // myCustomer.firstName = "Anchal" ; 
// // myCustomer.lastName = "Singh" ; 

// console.log(myCustomer.firstName) ;
// console.log(myCustomer.lastName);

/**
 * tsc --target ES5 --noEmitOnError .\myhelloworld.ts
 */



// Code Organization 
// For real-time projects , we would like to place code in separate files 

// Type script modules 
// type script supports the concept of modules 
// a module can export classes , functions , variables ,etc 
// another file ccan import classes , functions , variables, etx from a module 



// Example 
