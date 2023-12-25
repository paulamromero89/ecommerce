import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.nameProduct} />
      <h3>{product.nameProduct}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
};

export default Product;
