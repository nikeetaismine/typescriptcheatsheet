//let age: number = 25;
//if (age < 50) 
//    age += 10;
//console.log(age);

//console.log("Hello World! Happy Coding...");
//console.log("i am "+ age +" years old");

//Arrays of any type
let numbers = [1, 2, '3'];
let numbers1 = [];
numbers1[0] = '1';
numbers1[1] = 2;
numbers.forEach(n => n.toString,2)
console.log(numbers)
//Arrays of specific type
let numbers2 : number[] = [];

//TUPLES: fixed length array where each element is of
// a particular type
//Recomended for key , value pairs
let user : [number, string] = [21, "Denise"];
console.log(user); //[ 21, 'Denise' ]
//If you access the first element, you can access a list of
// methods for the number type, and if you access the second
// element, you can access the list of string properties. 
//Since tuples are compiled as Javascript arrays, 
//in index.js you can see a list array methods.
user.push(1);
console.log(user); //[ 21, 'Denise', 1 ]

//Enums: lets say you have three types of sizes
// const small = 1;
// const medium = 2;
// const large = 3;

//You can use enum to group these types of sizes
const enum Size { small = 's', medium = 'm', large = 'l'};
let mySize: Size = Size.medium;
console.log(mySize);

//if you use numbers, the compiler can detect the rest 
//of the sizes
const enum Size { Small = 1, Medium, Large};
let yourSize: Size = Size.Medium;
console.log(yourSize);

//Functions
//Typescript allows you to annotate the return types of 
//functions
//you can monitor your return value types
function calculateTax(income:number, taxYear:number): number
{
    if (taxYear < 2024)
        return income * 0.39;
    return income * 0.49;
}

calculateTax(10_000, 2022);

//You can make one of the function's arguments optional
function calculateTax1(income:number, taxYear?:number): number {
    if ((taxYear || 2022) < 2024)
        return income * 0.39;
    return income * 0.49;
}

calculateTax1(10_000);

//Another way to handle this
function calculateTax2(income:number, taxYear = 2022):number {
    if (taxYear < 2022) 
        return income * 0.39;
    return income * 0.49;
}

calculateTax2(10_000)

//To handle functions like this, in the tsconfig.json, 
//enable the following settings:
//noUnusedLocals : true
//noUnusedParameters : true
//noImplicitReturns : true

//OBJECTS
//To declare an object's shape
let employee1: {
    id: number,
    name: string
} = { id: 1, name: ""}
//You can also make some properties optional
let employee2: {
    id:  number,
    name: string,
    tel?: string
} = { id: 2, name:"" }
//To assign values to an object, do as below. 
//Note that typescript automatically detects the shape
// of the object.
let employee = {
    id : 1,
    name : "Denise"
}
//You can also make some properties read only
let employee3: {
    readonly id: number,
    name: string
} = { id: 1, name: "Mosh"}
//You can also add properties that are
let employee4: {
    id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 4,
    name: "Mosh",
    retire: (date: Date) => {
        console.log(date);
    }
}

//ADVANCED TYPES 

//Type aliases
type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void
}

let employee5: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    }
}

//Unions and Intersections
//with union types, we can give a variable or a 
//function parameter more than one type
function kgToPounds(weight:number | string): number {
    //weight will have methods that are specific to both
    // numbers and strings
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToPounds(10);
kgToPounds('10kg');
//Intersections can be used to combine two types
//into a variable
type Draggable = {
    drag: () => void
}
type Resizeable = {
    resize: () => void 
}
//create a type with both
type UIWidget = Draggable & Resizeable;
//initialize a variable of the type with intersected types
let textbox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//LITERAL Types
//used when we want to limit the values we can assign 
//to a variable (Type narrowing)
//Literal (exact, specific)
let quantity: 50 | 100 = 100;
//We can also use type alias
type Quantity = 50 | 100;
let quantity1: Quantity = 100;

type Metric = 'cm' | 'inch';
let metric: Metric = 'cm';

//Nullable types
function greet(name: string) {
    console.log(name.toUpperCase());
}
//greet(null);
//to be able to pass an argument of type null, go to your 
//configuration file (tsconfig.json) 
//if strict: true then, strictNullChecks: true
//you can set strictNullChecks to false, 
//but it is never recommended
//a good option is to
function greeting(name: string | null | undefined) {
    if (name) 
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greeting(null);
greeting(undefined);

//NULL CHECKS
type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//if (customer !== null && customer !== undefined)
//    console.log(customer.birthday);

//We can instead use the "optional property access operator"
console.log(customer?.birthday);
// we might want to get the year of the birthday
console.log(customer?.birthday.getFullYear());
//If id is 0, then these logs are undefined, both of em
//A much safer way to write these logs would be
console.log(customer?.birthday?.getFullYear());

//"Optional Element access operator" used for checking nulls 
//in arrays
//Instead of writing:
//if (customers !== null && customers !== undefined)
//  customers[0]
//We can use the optional element access operator as:
//customers?.[0]

//"Optional Call Operator" used to null check variables
let log: any = (message: string) => console.log(message)
let log1: any = null;
// If you run the line below our program is going to crash
//log1('a');
//Instead, write
log1?.('a');
//The unknown type
//The never type
