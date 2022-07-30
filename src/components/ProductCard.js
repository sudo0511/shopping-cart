import React, { useContext } from "react";
import CartContext from "../context/Cart/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems, increase } = useContext(CartContext);
  return (
    <div key={product.id} className="card">
      <img
        className="card-image"
        src={product?.image}
        alt={product?.category}
      />
      <div className="card-content">
        <h5>{product?.title}</h5>
        <p>Price : &#x20B9; {product?.price} </p>
        {cartItems.find((item) => product.id === item.id) ? (
          <button
            style={{ backgroundColor: "lightgreen" }}
            onClick={() => {
              increase(product);
            }}
          >
            Add more
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
