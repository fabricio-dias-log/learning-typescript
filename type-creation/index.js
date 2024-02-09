"use strict";
// 1 - Generics
function showData(arg) {
    return `Data: ${arg}`;
}
console.log(showData(1));
console.log(showData("test"));
console.log(showData(true));
// 2 - Constraint in generics
function showProductName(obj) {
    return `Product name is: ${obj.name}`;
}
const myObj = { name: "Plate", cor: "Black" };
const otherProduct = { name: "Cigarettes", cor: "white" };
const thirdObj = { price: 39.99, category: "clothes" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "BMW X1", wheels: 15, engine: 2.0, color: "Blue" };
const myPen = { name: "BIC", wheels: false, engine: false, color: "Black" };
console.log(myCar);
console.log(myPen);
