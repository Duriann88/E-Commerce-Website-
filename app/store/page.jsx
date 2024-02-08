// Jaden - Full Ownership

import { Row, Col } from 'react-bootstrap';
import { productsArray } from '@/app/productsStore';
import ProductCard from '@/components/ProductCard';

// The function is to show the store page and the product cards that are created.
function Store(){
    return (
        <>
            <h1 align = 'center' className='p-3'>All Products</h1>
            <Row xs={1} md={3} className='g-4'>
                { productsArray.map((product, idx) => (
                    <Col align = 'center' key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;
