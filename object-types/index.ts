// 1 - object type for function with interface as parameter
interface Product {
    name: string,
    price: number,
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`Product name is ${product.name} and it costs ${product.price}`)
    if (product.isAvailable){
        console.log(`Product is available`);
    }
}

const shirt: Product = {
    name: "T-Shirt",
    price: 149.99,
    isAvailable: true
}
showProductDetails(shirt);
showProductDetails({name: "Sweater", price: 59.99, isAvailable: false});

// 2 - Optional property in interface
interface User {
    email: string,
    role ?: string
}

function showUserDetails(user: User) {
    console.log(`The user e-mail is: ${user.email}`)
    if (user.role) {
        console.log(`The user role is: ${user.role}`)
    }
}

const u1: User = {email: "test123@test.com", role:"Admin"};
const u2: User = {email: "weather@test.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - Property Readonly
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca: Car = {brand: "VW", wheels: 4}
console.log(fusca)

// 4 - Index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
    // 10: 10 -> erro
}

coords.y = 15

console.log(coords)

// 5 - Extending types
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const fabricio: Human = {
    name: "Fabricio",
    age: 24
}

const goku: SuperHuman = {
    name: "Kakaroto",
    age: 100,
    superpowers: ["Fly", "Kamehameha", "Genki Dama"]
}

console.log(fabricio);
console.log(goku);
console.log(goku.superpowers[1]);

// 6 - Intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
}

console.log(arnold);
console.log(arnold.caliber);

// 7 - ReadOnlyArray
let myArr: ReadonlyArray<string> = ["Maçã","Banana","Mamão","Tomate"];
console.log(myArr);

myArr.forEach((item)=>{
    console.log("Fruta: " + item)
})

myArr = myArr.map((item)=>{
    return `Fruta: ${item}`
}) //possible change array value

console.log(myArr)

// 8 - Tuplas
type fiveNumbers = [number,number,number,number,number]; // delimited array of numbers

const myNumberArray: fiveNumbers = [1,2,3,4,5];
console.log(myNumberArray);

type nameAndAge = [string,number];
const anotherUser: nameAndAge = ["Fabricio",24];
console.log(anotherUser[0]);

anotherUser[0] = "Lucas";
console.log(anotherUser[0]);

// 9 - Tuplas with readonly
function showNumbers(numbers: readonly [number,number]) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}

showNumbers([1, 3]);