import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductCards from './components/ProductCards';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import Cart from './components/Cart';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path='/' element={
          <div> <Hero />
          <Categories/>
          <ProductCards/></div>
         } />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/productdetail' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />


      </Routes>
      
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;
