// 1 - object type for function with interface as parameter
interface Product {
    name: string,
    price: number,
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`Product name is ${product.name} and it costs ${product.price}`)
    if (product.isAvailable){
        console.log(`Product is available`);
    }
}

const shirt: Product = {
    name: "T-Shirt",
    price: 149.99,
    isAvailable: true
}
showProductDetails(shirt);
showProductDetails({name: "Sweater", price: 59.99, isAvailable: false});

// 2 - Optional property in interface
interface User {
    email: string,
    role ?: string
}

function showUserDetails(user: User) {
    console.log(`The user e-mail is: ${user.email}`)
    if (user.role) {
        console.log(`The user role is: ${user.role}`)
    }
}

const u1: User = {email: "test123@test.com", role:"Admin"};
const u2: User = {email: "weather@test.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - Property Readonly
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca: Car = {brand: "VW", wheels: 4}
console.log(fusca)

// 4 - Index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
    // 10: 10 -> erro
}

coords.y = 15


console.log(coords)