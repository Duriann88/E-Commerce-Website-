// Jaden - Full Ownership

import {Button, Navbar, Modal} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "@/app/cartContext";
import CartProduct from './cartProduct';

// This function is a cart modal that pops up when a user clicks on it.
export default function CartModal() {

    const cart = useContext(CartContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    // This function is an asynchronous function that redirects the user to the payment checkout gateway provided by Stripe.
    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    // Returns a modal that shows the current products in the cart.
    return(
        <>
            <Navbar expand="sm">
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="dark" onClick={handleShow}>Cart ({productsCount} Items)</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <h2>Your cart:</h2>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={checkout}>
                                Checkout
                            </Button>
                        </>
                    :
                        <h2>Cart is empty.</h2>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

