// Jaden - Full Ownership

import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '@/app/cartContext';
import { useContext } from 'react';

function ProductCard(props){
    const product = props.product; // To access the products 
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id); // To obtain the quantity of the product

    //This is to create a product card for the relevant products in the array.
    return( 
        <Card>
            <Card.Body> 
                <Card.Img src={product.image} style={{ height: '250px', objectFit: 'cover'}} />
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Form as = {Row}>
                            <Form.Label column='true' sm='6'>In Cart: {productQuantity}</Form.Label>
                            <Col sm ='6'>
                                <Button variant='dark' sm='6' onClick={() => cart.addOneToCart(product.id)} className='mx-2'>+</Button>
                                <Button variant='dark' sm='6' onClick={() => cart.removeOneFromCart(product.id)} className='mx-2'>-</Button>
                            </Col>
                        </Form>
                        <Button variant='dark' onClick={()=> cart.deleteFromCart(product.id)} className='my-2'>Remove</Button>
                    </>
                    :
                    <Button variant='dark' onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;
