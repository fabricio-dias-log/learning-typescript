"use strict";
// 1 - campos de classes
class User {
}
const fabricio = new User();
console.log(fabricio);
fabricio.name = "Fabricio";
console.log(fabricio);
// 2 - Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jonas = new NewUser("Jonas", 15);
console.log(jonas);
