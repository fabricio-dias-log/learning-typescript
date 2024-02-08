"use strict";
function showProductDetails(product) {
    console.log(`Product name is ${product.name} and it costs ${product.price}`);
    if (product.isAvailable) {
        console.log(`Product is available`);
    }
}
const shirt = {
    name: "T-Shirt",
    price: 149.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Sweater", price: 59.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`The user e-mail is: ${user.email}`);
    if (user.role) {
        console.log(`The user role is: ${user.role}`);
    }
}
const u1 = { email: "test123@test.com", role: "Admin" };
const u2 = { email: "weather@test.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = { brand: "VW", wheels: 4 };
console.log(fusca);
let coords = {
    x: 10
    // 10: 10 -> erro
};
coords.y = 15;
console.log(coords);
const fabricio = {
    name: "Fabricio",
    age: 24
};
const goku = {
    name: "Kakaroto",
    age: 100,
    superpowers: ["Fly", "Kamehameha", "Genki Dama"]
};
console.log(fabricio);
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - ReadOnlyArray
let myArr = ["Maçã", "Banana", "Mamão", "Tomate"];
console.log(myArr);
myArr.forEach((item) => {
    console.log("Fruta: " + item);
});
myArr = myArr.map((item) => {
    return `Fruta: ${item}`;
}); //possible change array value
console.log(myArr);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ["Fabricio", 24];
console.log(anotherUser[0]);
anotherUser[0] = "Lucas";
console.log(anotherUser[0]);
// 9 - Tuplas with readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 3]);
