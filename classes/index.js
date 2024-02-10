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
// 3 - Fields readonly
class Car {
    constructor(name) {
        this.wheels = 14;
        this.name = name;
    }
}
const bmw = new Car("X1");
console.log(bmw);
console.log(bmw.wheels);
bmw.name = "X3";
// 4 - Heritage and super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
