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

// 7 - Getters
class Person {
    name
    surname

    constructor(name: string, surname: string) {
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
    x!: number
    y!: number

    set fillX(x: number){
        if (x ===0) return

        this.x = x;

        console.log("X inserido com sucesso!");
    }
    set fillY(y: number){
        if (y ===0) return

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

console.log(myCoords)
console.log(myCoords.getCoords);

// 9 - Heritage and interface
interface showTitle{
    itemTitle(): string
}

class blogPost implements showTitle {
    title

    constructor(title: string) {
        this.title = title;
    }

    itemTitle(): string {
        return `O título do post é: ${this.title}`;
    }
}

const myPost  = new blogPost("hello world");
console.log(myPost.itemTitle())

class TestingInterface implements showTitle{
    title

    constructor(title: string) {
        this.title = title;
    }

    itemTitle(): string {
        return `O título é: ${this.title}`;
    }
}

const otherPost  = new TestingInterface("println");
console.log(otherPost.itemTitle());

// 10 - Override in methods
class Base {
    someMethod(){
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
    public x = 10
}
class D  extends C{

}

const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);

// protected
class E {
    protected x = 101;
    protected protectedMethod() {
        console.log("This method is protected");
    }
}

class F extends E{
    showX() {
        console.log("x: "+ this.x)
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
    private name = "Private"
    showName() {
        return this.name;
    }

    private privateMethod() {
        console.log("Private Method")
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
    static prop= "Test static";
    static staticMethod() {
        console.log("This is a static method");
    }
}

console.log(StaticMembers.prop);

StaticMembers.staticMethod();

// 13 - Generic class
class Item<T, U> {
    first
    second

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    get showFirst() {
        return `O first é: ${this.first}`
    }
}

const newItem= new Item("caixa", "surpresa");

console.log(newItem)
console.log(newItem.showFirst)
console.log(typeof newItem.showFirst)

const secondItem = new Item(12, true)
console.log(secondItem)
console.log(secondItem.showFirst)
console.log(typeof secondItem.showFirst)

// 14 - Parameters properties
class ParameterProperties {
    constructor(public name: string, private readonly qty: number, private readonly price: number) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

    get showQty() {
        return `Total Qtd: ${this.qty}`;
    }

    get showPrice(){
        return `The price is: ${this.price}`;
    }
}

const newShirt = new ParameterProperties("Shirt", 5 , 19.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);

// 15 - Class expressions
const myClass = class <T> {
    name

    constructor(name: T) {
        this.name = name;
    }
}

const pessoa = new myClass("Jones");
console.log(pessoa);

// 16 - Abstract Class
abstract class AbstractClass {
    abstract showName(): void;
}

class AbstractExample extends AbstractClass {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    showName() {
        console.log("The name is: " + this.name);
    }
}

const newAbstractObject = new AbstractExample("Fabricio");
newAbstractObject.showName();