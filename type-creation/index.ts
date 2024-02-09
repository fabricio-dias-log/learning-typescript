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