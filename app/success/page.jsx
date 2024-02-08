import React from 'react';
import { Button } from 'react-bootstrap';

function Success(){
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 align='center' className='g-3'>Sorry to see that you cancelled your Stripe payment.</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button variant='dark'>
                <a href='/products'>Continue Shopping</a>
            </Button>
            </div>
        </>
    )
}

export default Success;
