//1 - numbers
let x: number = 10;

console.log(typeof x);
console.log(x);

let y: number = 8.3432;

console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));

// 2 - string
const firstName: string = "Fabricio";

console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = "Dias"

fullName = firstName + ' ' + lastName;

console.log(fullName);
console.log(typeof fullName);

// 3 - boolean
let a: boolean = false;

console.log(a);
console.log(typeof a);

a = true;

console.log(a);

// 4 - Inference e Annotation
const ann: string = "Teste";

let inf = "Teste";

// ann = 1;
// inf = 1;



