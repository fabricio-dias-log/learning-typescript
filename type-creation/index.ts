// 1 - Generics
function showData<T>(arg: T): string {
    return `Data: ${arg}`
}

console.log(showData(1))
console.log(showData("test"))
console.log(showData(true))