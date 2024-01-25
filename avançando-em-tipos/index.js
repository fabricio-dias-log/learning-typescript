"use strict";
//* 1-array
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers[2]);
let nomes = ["Fabricio", "João"];
//* 2- outra sintaxe
const nums = [100, 200];
nums.push(300);
console.log(nums[0]);
//* 3- any
const arr1 = [1, "teste", true, [], { nome: "Fabricio" }];
console.log(arr1);
arr1.push([1, 2, 3]);
//* 4 - Parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//* 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Fabricio"));
// console.log(greeting(123)); parametro não esperado
//* 6 - função anonima
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary)); função parseFloat espera string como parametro para convertar a Float 
}, 2000);
//* 7 - tipos de objetos
function passCordinates(coord) {
    console.log("X coordinates" + coord.x);
    console.log("Y coordinates" + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCordinates(objCoord);
const pessoaObj = { nome: "Fabricio", surname: "Dias" };
//* 8 - props opcionais (adicionar "?" antes dos : da tipagem)
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(2, 3);
//* 9 - validação de parametro opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Fabricio", "Dias"));
console.log(advancedGreeting("Fabricio"));
//* 10 - Union types
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
// showBalance(true) erro por ser do tipo boolean
const arr2 = [1, "teste", false];
//* 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("20");
showId(123);
function showCoords(obj) {
    console.log(`X:${obj.x} Y:${obj.y} Z:${obj.z}`);
}
const coorObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coorObj);
const somePerson = {
    name: "Fabricio",
    age: 24
};
console.log(somePerson);
// type personType = {
//     age: number
// } utilizando o type não como implementar o objeto, no caso daria erro, diferente da interface
//* 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é ${direction}`);
}
showDirection("left");
// showDirection("top") erro
//* 16 - Non-null Assertion Operator
// typescript não consegue identificar (caracteriza como null) se o elemento do DOM já existe, porém é um elemento que você sabe que virá
// então utiliza-se "!" para dizer ao typescript que em algum momento o elemento aparecerá
const p = document.querySelector("#some-p");
console.log(p.innerHTML);
//* 17 - bigint
let n;
// n = 1; não satifaz a tipagem bigint
n = 1000n;
// para fazer funcionar o bigint é necessário alterar a configurção do target do ES para a versão de 2020 no arquivo tsconfig.json
//"target": "es2020"
console.log(n);
console.log(typeof n);
console.log(n + 100n);
//* 18 - Symbol (cria referencia unica para um valor)
let symbolA = Symbol("a");
let symbolB = Symbol("b");
// para fazer funcionar o Symbol é necessário alterar a configurção do target do ES para a versão de 2020 no arquivo tsconfig.json
//"target": "es2020"
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
