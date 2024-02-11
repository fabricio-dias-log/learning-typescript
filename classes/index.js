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
// 5 - Methods
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    gretting() {
        console.log("Hello stranger");
    }
}
const zangado = new Dwarf("Zangado");
console.log(zangado.name);
zangado.gretting();
console.log(zangado);
// 6 - This in class
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 4000);
const scania = new Truck("Scania", 3000);
volvo.showDetails();
scania.showDetails();
// 7 - Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const fabricioDias = new Person("Fabricio", "Dias");
console.log(fabricioDias.name);
console.log(fabricioDias.fullName);
// 8 - Setters
class Coords {
    set fillX(x) {
        if (x === 0)
            return;
        this.x = x;
        console.log("X inserido com sucesso!");
    }
    set fillY(y) {
        if (y === 0)
            return;
        this.y = y;
        console.log("Y inserido com sucesso!");
    }
    get getCoords() {
        return `X: ${this.x}, Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("hello world");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
const otherPost = new TestingInterface("println");
console.log(otherPost.itemTitle());
// 10 - Override in methods
class Base {
    someMethod() {
        console.log("Something");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testing other function");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - Visibility
// public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
// protected
class E {
    constructor() {
        this.x = 101;
    }
    protectedMethod() {
        console.log("This method is protected");
    }
}
class F extends E {
    showX() {
        console.log("x: " + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
//private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Private Method");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
pObj.showPrivateMethod();
// 12 - Static members
class StaticMembers {
    static staticMethod() {
        console.log("This is a static method");
    }
}
StaticMembers.prop = "Test static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 13 - Generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);
const secondItem = new Item(12, true);
console.log(secondItem);
console.log(secondItem.showFirst);
console.log(typeof secondItem.showFirst);
// 14 - Parameters properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Total Qtd: ${this.qty}`;
    }
    get showPrice() {
        return `The price is: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Shirt", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 15 - Class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa);
