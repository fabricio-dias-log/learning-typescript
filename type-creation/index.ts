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