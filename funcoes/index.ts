// 1 - void
function withoutReturn(): void {
    console.log("essa função não tem retorno!");
    
}

withoutReturn();

// 2 - callback como argumento
function greeting(name: string): string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string)=>string, userName: string){
    console.log("Preparando a função!");

    const greet = f(userName);

    console.log(greet);
}

preGreeting(greeting, "Fabricio");
preGreeting(greeting, "João");

// 3 - generic function
function firstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(firstElement([1,2,3]))
console.log(firstElement(["Fabricio","José","Clara"]))
console.log(firstElement(["Carlos","José",true]));

function mergeObject<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newPerson = mergeObject({name: "Fabricio"}, {age: 24, job:"Developer"});
console.log(newPerson);

// 4 - constraint
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T;

    if (+a > +b){
        biggest = a;
    } else {
        biggest = b;
    }

    return biggest;
}

console.log(biggestNumber(1 ,2))
console.log(biggestNumber("3" ,"50"))

// 5 - especificar tipo de argumento
function mergeArray<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}

console.log(mergeArray([1,2,3], [4,5]))
console.log(mergeArray<number | string>([1,2,3], ["test",5]))

// 6 - parametros opcionais
function modernGreeting(name: string, greet?: string): string {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }

    return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting("Fabricio"))
console.log(modernGreeting("Fabricio", "Dr."))