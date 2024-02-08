// Jaden - Full Ownership

import React from 'react';
import { Button } from 'react-bootstrap';
<<<<<<< HEAD
import Footer from '@/components/footer';
=======
import Footer from "@/components/footer";

>>>>>>> 06ed3679961a1576b17a908e6aa45d874826e55d
// This function is the success page if the user decides to go through with the transaction.
// It prints a success message and has a button for the user to click if they choose to continue browsing the products.
function Success(){
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 align='center' className='g-3'>Transaction completed. Thank you for shopping with us!</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button variant='dark'>
                <a href='/products'>Continue Shopping</a>
            </Button>
            </div>
            <Footer />
        </>
    )
}

export default Success;
