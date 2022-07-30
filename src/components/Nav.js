import React, { useContext } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartContext from "../context/Cart/CartContext";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    const innerWidth = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", innerWidth);

    return () => {
      window.removeEventListener("resize", innerWidth);
    };
  }, []);
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-logo">
          <Link to="/">Mini Shop</Link>
        </li>
        <li className="navbar-toggle" onClick={() => setToggle(!toggle)}>
          <FaBars />
        </li>
        <li
          className={toggle ? "links active" : "links"}
          onClick={() => setToggle(!toggle)}
        >
          <Link to="/">Store</Link>
        </li>
        <li
          className={toggle ? "links active" : "links"}
          onClick={() => setToggle(!toggle)}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={toggle ? "links active" : "links"}
          onClick={() => setToggle(!toggle)}
        >
          <Link to="/cart">
            {innerWidth <= 500 ? (
              "Cart"
            ) : (
              <>
                <FaShoppingCart />
                {cartItems.length > 0 && (
                  <span className="cart-circle">{cartItems.length}</span>
                )}
              </>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
