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