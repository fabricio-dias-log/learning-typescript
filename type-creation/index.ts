// 1 - Generics
function showData<T>(arg: T): string {
    return `Data: ${arg}`
}

console.log(showData(1))
console.log(showData("test"))
console.log(showData(true))

// 2 - Constraint in generics
function showProductName<T extends {name: string}>(obj: T) {
    return `Product name is: ${obj.name}`;
}

const myObj = {name: "Plate", cor: "Black"};
const otherProduct = {name: "Cigarettes", cor: "white"};
const thirdObj = {price: 39.99, category: "clothes"};

console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
// console.log(showProductName(thirdObj)); // dont works because there aren't name property

// 3 - Generics with interfaces
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = {name: "BMW X1", wheels: 15, engine: 2.0, color: "Blue"};
const myPen: Pen = {name: "BIC", wheels: false, engine: false, color: "Black"};

console.log(myCar);
console.log(myPen);

// 4 - Type Parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `The key ${obj[key]} there is in object and has ${obj[key]} as value`
}

const server = {
    hd: '2TB',
    ram: '8GB'
}

console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste')) error

// 5 - keyof type operator
type Character = {
    name: string,
    age: number,
    hasDriverLicense: boolean
}

type C = keyof Character;

function showCharName(obj: Character, keyName: C): string{
    return `${obj[keyName]}`;
}

const myChar: Character = {
    name: "Fabricio",
    age: 24,
    hasDriverLicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))

// 6 - Typeof type operator
const userName: string = "Ash";

const username2: typeof userName = "Louis";

type x = typeof userName;

const userName3: x = "Sophia";

// 7 - Indexed Access type
type Truck = {
    km: number,
    kg: number,
    description: string
}

type Km = Truck["km"];

const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'truck for little charges'
}

function showKm(km: Km): void {
    console.log(`The vehicle has km: ${km}`);
}
showKm(newTruck.km);

const newCar = {
    km: 5000,
    kg: 100
}

showKm(newCar.km);