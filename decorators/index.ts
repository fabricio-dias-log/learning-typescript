function myDecorator() {
    console.log("Starting decorator");
    
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Decorator is running");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        
    }
}

class MyClass {
    name!: string

    @myDecorator()
    testing() {
        console.log("Ending method execution");
        
    }

    greeting(){
        console.log("Hello!");
        
    }
}

const myObj = new MyClass();

myObj.testing();

// Mutiple decorators
function a() {
    return function(target: any, propertyKey:string, descriptor: PropertyDescriptor) {
        console.log("Executed the function A");
    }
}
function b() {
    return function(target: any, propertyKey:string, descriptor: PropertyDescriptor) {
        console.log("Executed the function B");
    }
}
function c() {
    return function(target: any, propertyKey:string, descriptor: PropertyDescriptor) {
        console.log("Executed the function C");
    }
}

class MutipleDecorators {
    @c()
    @a()
    @b()
    testing(){
        console.log("Ending execution");
    }
}

const mutiple = new MutipleDecorators();

mutiple.testing();

// Class Decorator
function classDecorator(constructor: Function) {
    console.log(constructor);

    if (constructor.name === "User") {
        console.log("Creating User!");
    }
}
@classDecorator
class User {
    name

    constructor(name: string){
        this.name = name;
    }
}

const fabricio = new User("Fabricio");
console.log(fabricio);

// Method Decorator
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}
class Machine {
    name

    constructor (name: string) {
        this.name = name
    }

    @enumerable(true)
    showName() {
        console.log(this);
        
        return `The machine name is: ${this.name}`
    }
}

const trator = new Machine("Trator");
console.log(trator.showName());

// Acessor Decorator
class Monster {
    name?
    age?

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @enumerable(true)
    get showName() {
        return `The monster name is: ${this.name}`
    }

    @enumerable(true)
    get showAge() {
        return `The monster age is: ${this.age}`
    }
}

const pokemon = new Monster("Charmander", 12);
console.log(pokemon);

// Property Decorator
function formatNumber() {
    return function(target: any, propertyKey: string){
        let value: string

        const getter = function() {
            return value;
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0");
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    }
}
class ID{
    @formatNumber()
    id

    constructor (id: string) {
        this.id = id;
    }
}

const newItem = new ID("2");
console.log(newItem);
console.log(newItem.id);

// Real example class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}
@createdDate
class Book {
    id;
    createdAt?: Date;

    constructor (id: number) {
        this.id = id;
    }
}

@createdDate
class Pen {
    id;
    createdAt?: Date;

    constructor (id: number) {
        this.id = id;
    }
}

const newBook = new Book(12);
console.log(newBook);
console.log(newBook.createdAt);

const newPen = new Pen(32); 
console.log(newPen);
console.log(newPen.createdAt);

// Real example method decorator
function checkIfUserPosted() {
    return function (target: any, key: string | Symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);

        descriptor.value = function (...args: any[]) {
            if (args[1] === true) {
                console.log("The user has already posted");
                return null;
                
            } else {
                return childFunction.apply(this, args);
            }
        }
        
    }
}
class Post {
    alreadyPost = false;
    @checkIfUserPosted()
    post(content: string, alreadyPost: boolean) {
        this.alreadyPost = true;
        console.log(`User post: ${content}`);
        
    }
}

const newPost = new Post();
const newSecondPost = new Post();

newPost.post("My first post", newPost.alreadyPost);
newPost.post("My third post", newPost.alreadyPost);
newSecondPost.post("My second post", newSecondPost.alreadyPost);
newSecondPost.post("My third post", newSecondPost.alreadyPost);

// Real example property decorator
function Max(limit: number) {
    return function (target: any, propertyKey: string) {
        let value: string;

        const getter = function() {
            return value;
        }

        const setter = function(newVal: string) {
            if (newVal.length > limit) {
                console.log(`The value must have a maximum of ${limit} characters`);
            } else {
                value = newVal;
            }
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    }
}
class Admin {
    @Max(10)
    userName;

    constructor (userName: string) {
        this.userName = userName;
    }
}

const jose = new Admin("José");
const raimundo = new Admin("Raimundo Silva");

