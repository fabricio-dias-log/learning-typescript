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

// 4 - Heritage and super
class Machine {
    name
    
    constructor(name: string) {
        this.name = name;
    }
}

const trator: Machine = new Machine("Trator");

class KillerMachine extends Machine{
    guns
    constructor(name: string, guns: number) {
        super(name);
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator);
console.log(destroyer);

// 5 - Methods
class Dwarf {
    name

    constructor(name: string) {
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
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model;
        this.hp = hp;
    }

    showDetails() {
        console.log(`Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck("Volvo", 4000);
const scania = new Truck("Scania", 3000);

volvo.showDetails();
scania.showDetails();