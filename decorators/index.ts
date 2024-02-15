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