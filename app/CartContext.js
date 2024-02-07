import { createContext, useState } from "react"; 
import { productsArray, getProductData } from "./productsStore";

export const CartContext = createContext({  // Creates a new cart context
    items: [],
    getProductQuantity: () => {}, 
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}){
    const [cartProducts, setCardProducts] = useState([]); // cartProducts is the items that are in the cart

    //Helper Functions
    function getProductQuantity(id){ // returns the quantity of each product in the shopping cart
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined){
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id){ // adds one of the product into the shopping cart
        const quantity = getProductQuantity(id);

        if (quantity === 0){
            setCardProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCardProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    }

    function removeOneFromCart(id){ // removes one of the product into the shopping cart
        const quantity = getProductQuantity(id);
        
        if (quantity == 1){
            deleteFromCart(id);
        } else {
            setCardProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity - 1}
                    : product
                )
            )
        }
    }

    function deleteFromCart(id){ //completely removes a product from the shopping cart
        setCardProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            }) 
        )
    }

    function getTotalCost(){ // returns the total amount of all the items in the shopping cart
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity)
        })
        return totalCost;
    }
    

    const contextValue = { // Uses the cartProducts array as the items now
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return(
        <CartContext.Provider value = {contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;