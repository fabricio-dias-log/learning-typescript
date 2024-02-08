"use strict";
function showProductDetails(product) {
    console.log(`Product name is ${product.name} and it costs ${product.price}`);
    if (product.isAvailable) {
        console.log(`Product is available`);
    }
}
const shirt = {
    name: "T-Shirt",
    price: 149.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Sweater", price: 59.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`The user e-mail is: ${user.email}`);
    if (user.role) {
        console.log(`The user role is: ${user.role}`);
    }
}
const u1 = { email: "test123@test.com", role: "Admin" };
const u2 = { email: "weather@test.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = { brand: "VW", wheels: 4 };
console.log(fusca);
let coords = {
    x: 10
    // 10: 10 -> erro
};
coords.y = 15;
console.log(coords);
