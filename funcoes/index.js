"use strict";
// 1 - void
function withoutReturn() {
    console.log("essa função não tem retorno!");
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Fabricio");
preGreeting(greeting, "João");
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["Fabricio", "José", "Clara"]));
console.log(firstElement(["Carlos", "José", true]));
function mergeObject(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newPerson = mergeObject({ name: "Fabricio" }, { age: 24, job: "Developer" });
console.log(newPerson);
// 4 - constraint
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(1, 2));
console.log(biggestNumber("3", "50"));
// 5 - especificar tipo de argumento
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3], [4, 5]));
console.log(mergeArray([1, 2, 3], ["test", 5]));
