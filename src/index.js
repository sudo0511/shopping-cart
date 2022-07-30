import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { ProductProvider } from "./context/Product/ProductContext";
import { CartProvider } from "./context/Cart/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
