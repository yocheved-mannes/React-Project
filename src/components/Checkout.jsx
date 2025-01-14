import { useNavigate } from "react-router-dom";
import { cartItemStyle, cartSummaryStyle, checkoutContainerStyle, checkoutTitleStyle } from "../Style";

export function Checkout({ cart, setCart }) {
   const Navigate = useNavigate();

    // חישוב מחיר התשלום הכולל
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const ToPay = () => {
        const userConfirmation = window.confirm("האם אתה בטוח שברצונך לעבור לתשלום?");
        if (userConfirmation) {
            setCart([]); // ריקון העגלה
         Navigate("/Pay"); // ניווט לדף התשלום
        }
    };

    return (
        <div style={checkoutContainerStyle}>
            <h1 style={checkoutTitleStyle}>סיכום רכישה</h1>
            {cart.length === 0 ? (
                <p style={{ textAlign: "center", color: "#999" }}>העגלה ריקה</p>
            ) : (
                <ul style={{ padding: 0, margin: 0 }}>
                    {cart.map((item, index) => (
                        <li key={index} style={cartItemStyle}>
                            <span>{item.name}</span> - <span>{item.ToolType}</span> --- <span>{item.price} ₪</span> --- <span>כמות: {item.quantity}</span> --- <span> מחיר: {item.price * item.quantity} ₪</span>
                        </li>
                    ))}
                </ul>
            )}
            <p style={cartSummaryStyle}>סה"כ: {totalPrice} ₪</p>
            {totalPrice > 0 && (
                <button onClick={ToPay}>לתשלום</button>
            )}
        </div>
    );
}

export default Checkout;

