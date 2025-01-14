import { Link } from "react-router-dom";
import { linkStyle, productCardStyle, productImageStyle, productNameStyle, productButtonStyle } from "../Style";

export function ProductCard({ product, addToCart }) {
  return (
    <div style={productCardStyle}>
      <img src={"/img/" + product.img} style={productImageStyle} alt={product.name} />
      <p style={productNameStyle}>{product.name}</p>
      <p>מחיר: {product.price} ₪</p>
      <Link to={`/ProductsDetails/${product.img}/${product.id}/${product.name}/${product.Details}`} style={linkStyle}>
        לפרטים נוספים
      </Link>
      <button
        onClick={() => addToCart(product)}
        style={productButtonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "rgb(222, 115, 16)")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "rgb(255, 199, 146)")}
      >
        הוסף לעגלה
      </button>
    </div>
  );
}

export default ProductCard;
