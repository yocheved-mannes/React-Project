import { Link, useNavigate } from "react-router-dom";
import { colors, footerStyle, logoStyle, navStyle } from "../Style";
import { useContext } from "react";
import MyContext from "./context/context";

export const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(MyContext); // שימוש בסטטוס המשתמש

  const navigate = useNavigate();

  const disconnection = () => {
     setCurrentUser(null); // ניתוק המשתמש
    navigate("/AuthPage"); // מעבר לדף האימות
  };

 // אם אין משתמש מחובר, לא מציגים את הניווט
 if (!currentUser) return null;

  return (
    <>
      <div>
        <header>
          <h1>אתר חנות כלי נגינה</h1>

          <nav style={navStyle}>
            <img src="/img/LOGO.png" alt="לוגו" style={logoStyle} />

            <Link to="Home" style={colors}>
              דף הבית
            </Link>
            <Link to="about" style={colors}>
              אודות
            </Link>
            <Link to="Products" style={colors}>
              מוצרים
            </Link>
            <Link to="Contact" style={colors}>
              צור קשר
            </Link>
        
            {currentUser?.role === "Maneger" && 
              <Link to="AdminEditPage" style={colors}>
                ניהול מוצרים
              </Link>
            }
            {currentUser?.role === "Maneger" &&
              <Link to="UserMeneger" style={colors}>
                ניהול משתמשים
              </Link>
           }
               <button onClick={disconnection}>להתנתקות</button>
            <Link to="Cart" style={colors}>
              <img
                src="/img/shopping-cart.png"
                style={{ width: "80px", height: "80px" }}
                alt="עגלת קניות"
              />
            </Link>
          </nav>
        </header>
<div style={footerStyle}>&copy; כל הזכויות שמורות</div>
        {/* <footer style={footerStyle}>&copy; כל הזכויות שמורות</footer> */}
      </div>
    </>
  );
};

export default NavBar;
