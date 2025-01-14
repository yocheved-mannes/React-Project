import { Link } from "react-router-dom";
import { items, toCheckout, removeButtonStyle2, items2, productsContainerStyle12, cartItemStyle2, cardImgStyle2, MyCart2, styleOptions, styleSpan, opertorS, toPurchasePage } from "../Style";

export function Cart({ cart, setCart, addToCart }) {


//פונקציה להו
    const increaseQuantity = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter((item) => item.quantity > 0);
        setCart(updatedCart);
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    return (
        <div style={productsContainerStyle12}>
            <h1 style={MyCart2}>העגלה שלי</h1>
            {cart.length === 0 ? (
                <p>העגלה ריקה</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} style={cartItemStyle2}>
                            <img src={"/img/" + item.img} alt={item.name} style={cardImgStyle2} />
                            <div>
                                <p style={items}>שם: {item.name}</p>
                                <p style={items}>סוג מוצר: {item.ToolType}</p>
                                <div style={styleOptions}>
                                    <button
                                        onClick={() => decreaseQuantity(item.id)} style={opertorS}
                                    >-</button>
                                    <span style={styleSpan}>{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQuantity(item.id)} style={opertorS}
                                    >+</button>
                                    <button
                                        onClick={() => removeItem(item.id)} style={removeButtonStyle2}
                                    >הסר</button>
                                </div>
                                <p style={items2}>מחיר: {item.price} ₪</p>
                                <p style={items2}>סך הכל: {item.price * item.quantity} ₪</p>
                            </div>

                           
                           
                        </li>
                        
                    ))}
                </ul>
                
            )}
             {cart.length != 0 && 
                          <Link to="/Checkout" style={toCheckout}>
                           מעבר לדף רכישה
                          </Link>
                        }
                                      
        </div>
    );
}
export default Cart;








// import { Link } from "react-router-dom";
// import { cartItemStyle, cardImgStyle, productsContainerStyle1, removeButtonStyle, MyCart, items, toCheckout } from "../Style";

// export function Cart({ cart, setCart }) {

//     const increaseQuantity = (id) => {
//         const updatedCart = cart.map((item) => 
//             item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         setCart(updatedCart);
//     };

//     const decreaseQuantity = (id) => {
//         const updatedCart = cart.map((item) =>
//             item.id === id && item.quantity > 1
//                 ? { ...item, quantity: item.quantity - 1 }
//                 : item
//         ).filter((item) => item.quantity > 0);
//         setCart(updatedCart);
//     };

//     const removeItem = (id) => {
//         const updatedCart = cart.filter((item) => item.id !== id);
//         setCart(updatedCart);
//     };

//     return (

//         <div style={productsContainerStyle1}>
//             <h1 style={MyCart}>העגלה שלי</h1>
//             {cart.length === 0 ? (
//                 <p>העגלה ריקה</p>
//             ) : (
//                 <ul style={{ listStyleType: "none", padding: 0 }}>
//                     {cart.map((item, index) => (
//                         // style={cartItemStyle}
//                         <li key={index} >
//                             <img 
//                                 src={"/img/" + item.img} 
//                                 alt={item.name} 
//                                 style={cardImgStyle} 
//                             />
//                             <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%", padding: "10px" }}>
//                                 <div> {/* הקטנת הרווח בין השמות לכפתורים */}
//                                     <p style={items}>שם: {item.name}</p>
//                                     <p style={items}>סוג מוצר: {item.ToolType}</p>
//                                     <div style={{ display: "flex", alignItems: "center", marginBottom: "-70px" }}> {/* הקטנת הרווח בין הכפתורים למחירים */}
//                                     <button onClick={() => decreaseQuantity(item.id)} style={{ marginRight: "10px" }}>-</button>
//                                     <span style={{ margin: "0 10px" }}>{item.quantity}</span>
//                                     <button onClick={() => increaseQuantity(item.id)} style={{ marginLeft: "10px" }}>+</button>
//                                     <button onClick={() => removeItem(item.id)} style={{ ...removeButtonStyle, marginLeft: "20px" }}>הסר</button>
//                                 </div>
//                                 <p style={items}>מחיר: {item.price} ₪</p>
//                                 <p style={items}>סך הכל: {item.price * item.quantity} ₪</p>
//                                 </div>

//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             {/* style={toCheckout} */}
//             <div style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center' }}>
//                 <Link to="/Checkout">מעבר לדף רכישה</Link>
//             </div>
//         </div>
//     );
// }
// export default Cart;

// import { Link } from "react-router-dom";
// import { cartItemStyle, cardImgStyle, productsContainerStyle1, removeButtonStyle } from "../Style"; // עדכון הקישור

// export function Cart({ cart, setCart }) {
//     const increaseQuantity = (id) => {
//         const updatedCart = cart.map((item) => 
//             item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         setCart(updatedCart);
//     };

//     const decreaseQuantity = (id) => {
//         const updatedCart = cart.map((item) =>
//             item.id === id && item.quantity > 1
//                 ? { ...item, quantity: item.quantity - 1 }
//                 : item
//         ).filter((item) => item.quantity > 0);
//         setCart(updatedCart);
//     };

//     const removeItem = (id) => {
//         const updatedCart = cart.filter((item) => item.id !== id);
//         setCart(updatedCart);
//     };

//     return (
//         <div style={productsContainerStyle1}>
//             <h1 style={{ marginBottom: "20px" }}>העגלה שלי</h1>
//             {cart.length === 0 ? (
//                 <p>העגלה ריקה</p>
//             ) : (
//                 <ul style={{ listStyleType: "none", padding: 0 }}>
//                     {cart.map((item, index) => (
//                         <li key={index} style={cartItemStyle}>
//                             <img 
//                                 src={"/img/" + item.img} 
//                                 alt={item.name} 
//                                 style={cardImgStyle} 
//                             />
//                             <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%", padding: "10px" }}>
//                                 <div style={{ marginBottom: "12px" }}>
//                                     <p style={{ margin: "10px 0", fontWeight: "bold" }}>שם: {item.name}</p>
//                                     <p style={{ margin: "10px 0", fontWeight: "bold" }}>סוג מוצר: {item.ToolType}</p>
//                                 </div>
//                                 <div style={{ display: "flex", alignItems: "center", marginBottom: "-70px" }}>
//                                     <button onClick={() => decreaseQuantity(item.id)} style={{ marginRight: "10px" }}>-</button>
//                                     <span style={{ margin: "0 10px" }}>{item.quantity}</span>
//                                     <button onClick={() => increaseQuantity(item.id)} style={{ marginLeft: "10px" }}>+</button>
//                                     <button onClick={() => removeItem(item.id)} style={{ ...removeButtonStyle, marginLeft: "20px" }}>הסר</button>
//                                 </div>
//                                 <p style={{ margin: "1px 0" }}>מחיר: {item.price} ₪</p>
//                                 <p style={{ margin: "1px 0" }}>סך הכל: {item.price * item.quantity} ₪</p>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             <Link to="/Checkout">מעבר לדף רכישה</Link>
//         </div>
//     );
// }

// export default Cart;



