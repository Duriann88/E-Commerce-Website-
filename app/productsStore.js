// Creating an array will allow easier access to the product and its details that can be used for other pages.
// Array shows: the id, the title, the price and the image.
const productsArray = [
    {
        id: "price_1Oh5HnBq8eoYGYKSKuPtx7zF",
        title: "ASUS Vivobook 16X",
        price: 2018.00,
        image: "/Asus computer.jpg"
        
    },
    {
        id: "price_1Oh5HJBq8eoYGYKStdQ20Xjr",
        title: "IPhone 15",
        price: 1107.00,
        image: "/Iphone.jpg"
    },
    {
        id: "price_1Oh7cgBq8eoYGYKS8BQjr4Qc",
        title: "Evolve Earbuds",
        price: 190.00,
        image: "/Evolve earbud.jpg"
    }
]


function getProductData(id){
    let productData = productsArray.find(product => product.id === id); // Searches for the product id

    if (productData == undefined){ // Checks if the product actually exists.
        console.log("Product data does not exist for ID: " + id)
        return undefined;
    }
    
    return productData; // Returns the data for use in other pages.
}

export { productsArray, getProductData };
