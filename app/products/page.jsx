"use client";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';;
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cancel from './cancel/cancel';
import Store from './pages/Store';
import Success from './Success/page';
import CartProvider from './CartContext';
import CartModal from './components/CartModal';

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar></Navbar>
        <CartModal></CartModal>
        <BrowserRouter>
          <Routes>
            <Route path='/products' element={<Store /> } />
            <Route path='/success' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
