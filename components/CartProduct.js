import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getProductData } from '../productsStore';

export default function CartProduct(props){
    const cart = useContext(CartContext); // To access the cart
    const id = props.id; // To access the id of the product
    const quantity = props.quantity; // To access the quantity of the product
    const productData = getProductData(id); // To acccess the data of the product

    // This is to return the product title, quantity, total
    return(
        <>
            <h3>{productData.title}</h3> 
            <p>Quantity: {quantity}</p>
            <p>${( quantity * productData.price).toFixed(2) }</p>
            <Button variant='dark' size='sm' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}