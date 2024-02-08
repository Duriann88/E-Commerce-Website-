// Jaden - Full Ownership

"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cancel from '@/app/cancel/page';
import Store from '@/app/store/page';
import Success from '@/app/success/page';
import CartProvider from '@/app/cartContext';
import CartModal from '@/components/cartModal';

//This functions just creates the product page and the routes to direct the user to the different paths based on their actions.
//The elements are just the pages that will be shown when they are directed to the routes.
function App() {
  return (
    <CartProvider>
      <Container>
        <CartModal></CartModal>
        <BrowserRouter>
          <Routes>
            <Route path='/products' element={<Store /> } />
            <Route path='/success' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer />
    </CartProvider>
  );
}

export default App;
