import { Button } from "react-bootstrap";

function Cancel(){
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 align='center' className='g-3'>Successful payment has been made. Thank you!</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button variant='dark'>
                <a href='/products'>Continue Shopping</a>
            </Button>
            </div>
        </>
    )
}

export default Cancel;
