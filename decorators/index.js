"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("Starting decorator");
    return function (target, propertyKey, descriptor) {
        console.log("Decorator is running");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("Ending method execution");
    }
    greeting() {
        console.log("Hello!");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
// Mutiple decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("Executed the function A");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Executed the function B");
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log("Executed the function C");
    };
}
class MutipleDecorators {
    testing() {
        console.log("Ending execution");
    }
}
__decorate([
    c(),
    a(),
    b()
], MutipleDecorators.prototype, "testing", null);
const mutiple = new MutipleDecorators();
mutiple.testing();
// Class Decorator
function classDecorator(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Creating User!");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const fabricio = new User("Fabricio");
console.log(fabricio);
// Method Decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `The machine name is: ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
// Acessor Decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `The monster name is: ${this.name}`;
    }
    get showAge() {
        return `The monster age is: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const pokemon = new Monster("Charmander", 12);
console.log(pokemon);
