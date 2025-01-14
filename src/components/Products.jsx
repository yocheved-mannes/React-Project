
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "./context/context";
import { headerStyle, linkStyleCart, prodStyle, productsContainerStyle } from "../Style";
import ProductCard from "./ProductCard"; // ייבוא התבנית

export function Products({ addToCart }) {
  const { products } = useContext(MyContext);

  return (
    <div style={prodStyle}>
      <h1 style={headerStyle}>מוצרים</h1>
      <div style={productsContainerStyle}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Link to="/Cart" style={linkStyleCart}>
        המשך לעגלה <img src="/img/shopping-cart.png" style={{ width: "50px", height: "50px" }} alt="עגלה" />
      </Link>
    </div>
  );
}

export default Products;
