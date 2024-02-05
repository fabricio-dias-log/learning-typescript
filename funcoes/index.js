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
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Fabricio"));
console.log(modernGreeting("Fabricio", "Dr."));
// 7 - Parametros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 40));
// 8 - Unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[1]);
    }
    else if (typeof x === "number") {
        console.log("X is a number");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9 - Type Never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Some Error")
// 10 - Rest Operator
function sumAll(...n) {
    return n.reduce((number, sum) => number + sum);
}
console.log(sumAll(1, 2, 3, 4, 5, 3, 2));
console.log(sumAll(2, 333, 987));
