import { createContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const request = await fetch("https://fakestoreapi.com/products");
    const response = await request.json();
    return response;
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  // console.log(products);
  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
