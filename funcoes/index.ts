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

preGreeting(greeting, "Fabricio")
preGreeting(greeting, "João")