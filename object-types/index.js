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
