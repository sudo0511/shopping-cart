import React, { useContext } from "react";
import ProductContext from "../context/Product/ProductContext";
import ProductCard from "./ProductCard";

const Store = () => {
  const { products } = useContext(ProductContext);
  // console.log(products);
  if (products) {
    return (
      <>
        <div className="announcement">
          <h2>Browse the Store!</h2>
          <p>New Arrivals for you! Check out our selection of products.</p>
        </div>
        <div className="store-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  } else {
    return <p>Loading...........</p>;
  }
};

export default Store;
