// 1 - campos de classes
class User {
    name!: string
    age!: number
}

const fabricio = new User();
console.log(fabricio);

fabricio.name = "Fabricio";
console.log(fabricio);

// 2 - Constructor
class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const jonas = new NewUser("Jonas", 15);
console.log(jonas);

// 3 - Fields readonly
class Car {
    name
    readonly wheels = 14

    constructor(name: string) {
        this.name = name;
    }
}

const bmw: Car = new Car("X1");
console.log(bmw);
console.log(bmw.wheels);

bmw.name = "X3";


