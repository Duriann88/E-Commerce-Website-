// Jaden - Full Ownership

import { Button } from "react-bootstrap";

// This function is the cancel page if the user decides to cancel the transaction.
// It prints a cancel message and has a button for the user to click if they choose to continue browsing the products.
function Cancel(){
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 align='center' className='g-3'>Transaction cancelled.</h1> 
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

export default Cancel;
