const num1: number = 33
const num2: number = 2;

console.log(typeof num2);

function sumNumbers(parametro1:number, parametro2:number): void {
    alert("O resultado da soma Ã© " + (parametro1 + parametro2))
   
    console.log(parametro1 + parametro2);
}

sumNumbers(num1, num2);