import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductCards from "./components/ProductCards";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import CreateProduct from "./components//CreateProduct";
import UpdateProduct from "./components/UpdateProduct";
import Adress from "./components/Adress";
import AdressUpdate from "./components/AdressUpdate";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              <Hero />
              <Categories />
              <Testimonials />
            </div>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/adress" element={<Adress />} />
        <Route path="/adressupdate" element={<AdressUpdate />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
