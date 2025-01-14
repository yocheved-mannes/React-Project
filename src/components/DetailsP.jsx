// import { useContext } from "react";
// import { useParams } from "react-router-dom";
// import MyContext from "./context/context";
// import { productImageStyle } from "../Style";

//   function DetailsP() {

//     const products = useContext(MyContext).products;
//     // מקבל קוד שם ופרטים ומציג אותם
//     const {img ,id, name,Details } = useParams();

//     return <div> 
//       <img
//                     src={"/img/" + img}
//                     alt={name}
//                     style={productImageStyle}
//                   />
//       <h1>שם הכלי {name}</h1>
//         <p>קוד הכלי הוא {id}</p> 

// <p>אודות הכלי {Details}</p>
// </div>
// }
// export default DetailsP;


import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MyContext from "./context/context";
import { linkStyle } from "../Style";

function DetailsP() {
  const { products } = useContext(MyContext);
  const { img, id, name, Details } = useParams();

  const detailsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "20px auto",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
  };

  const productImageStyle = {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "10px",
    marginBottom: "20px"
  };

  const productNameStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px"
  };

  const productDetailsStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#555",
    textAlign: "center"
  };

  return (
    <div style={detailsContainerStyle}>
      <img src={"/img/" + img} alt={name} style={productImageStyle} />
      <h1 style={productNameStyle}>שם הכלי: {name}</h1>
      <p style={productDetailsStyle}>קוד הכלי הוא: {id}</p>
      <p style={productDetailsStyle}>אודות הכלי: {Details}</p>
      <Link to="/Products" style={linkStyle}>
    חזרה לדף המוצרים
  </Link>
    </div>

    
  );
}

export default DetailsP;
