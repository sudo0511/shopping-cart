import React, { useContext } from "react";
import CartContext from "../context/Cart/CartContext";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems, clearCart, totalPrice, itemsCount, increase, decrease } =
    useContext(CartContext);

  // console.log(cartItems);
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="items-container">
        <h3>Cart Items</h3>
        {cartItems.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          <>
            {cartItems.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <img src={item.image} alt={item.category} />
                  <div>
                    <h5>{item.title}</h5>
                    <p>Price : {item.price}</p>
                  </div>
                  <div className="btn-container">
                    <button onClick={() => increase(item)}>➕</button>
                    <div>
                      <p style={{ marginTop: 10 }}>Qty : {item.quantity}</p>
                    </div>
                    {item.quantity > 1 && (
                      <button onClick={() => decrease(item)}>➖</button>
                    )}
                    {item.quantity === 1 && (
                      <button>
                        <FaTrash />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="details-container">
        <h2>Details</h2>
        <h4>Total Items : {itemsCount}</h4>
        <h4>Total Price : &#x20B9; {totalPrice}</h4>
        <div className="check-btns">
          <button className="checkout">Checkout</button>
          <button className="clear" onClick={clearCart}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
