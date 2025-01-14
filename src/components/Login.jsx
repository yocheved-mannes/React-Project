// import { useContext, useState } from "react";
// import MyContext from "./context/context";
// import { useNavigate } from "react-router-dom";

// export const Login = ({ setIsLoggedIn }) => {
//     const loginFunc = useContext(MyContext).Login;
//     const users1 = useContext(MyContext).users;
//     const navigate = useNavigate();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     // const [isAdmin, setIsAdmin] = useState(false);
//     // const [adminPassword, setAdminPassword] = useState("");
//     const [adminMessage] = useState("");
//     const [error, setError] = useState("");

//     const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     const isValidPassword = (password) => password.length >= 4;

//     const onLogin = () => {
//         if (!email || !password) {
//             setError("אנא מלא את כל השדות");
//             return;
//         }
    
//         if (!isValidEmail(email)) {
//             setError("אנא הזן כתובת אימייל תקינה");
//             return;
//         }
    
//         if (!isValidPassword(password)) {
//             setError("הסיסמה חייבת להיות לפחות 4 תווים");
//             return;
//         }
    
//         const user = users1.find((u) => u.email === email);
    
//         if (!user) {
//             setError("אימייל זה אינו רשום במערכת");
//             return;
//         }
    
//         if (user.password !== password) {
//             setError("הסיסמה שגויה");
//             return;
//         }
    
//         setError("");
//         loginFunc(email, password);
//         setIsLoggedIn(true);
//         navigate("/Home");
//     };
    
//     return     <>
           
//             <div>
//                 {error && <p style={{ color: "red" }}>{error}</p>}

//                 <input
//                     type="email"
//                     placeholder="הכנס אימייל"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="הכנס סיסמא"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button onClick={onLogin}>התחברות</button>
//                 {adminMessage && <p style={{ color: "green" }}>{adminMessage}</p>}
//             </div>
//         </>
    
// };

// export default Login;



import { useContext, useState } from "react";
import MyContext from "./context/context";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsLoggedIn }) => {
  const loginFunc = useContext(MyContext).Login;
  const users1 = useContext(MyContext).users;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) => password.length >= 4;

  const onLogin = () => {
    if (!email || !password) {
      setError("אנא מלא את כל השדות");
      return;
    }

    if (!isValidEmail(email)) {
      setError("אנא הזן כתובת אימייל תקינה");
      return;
    }

    if (!isValidPassword(password)) {
      setError("הסיסמה חייבת להיות לפחות 4 תווים");
      return;
    }

    const user = users1.find((u) => u.email === email);

    if (!user) {
      setError("אימייל זה אינו רשום במערכת");
      return;
    }

    if (user.password !== password) {
      setError("הסיסמה שגויה");
      return;
    }

    setError("");
    loginFunc(email, password);
    setIsLoggedIn(true);
    navigate("/Home");
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const buttonStyle = {
    backgroundColor: "#ff6f00",
    border: "none",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%",
  };

  const inputStyle = {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  };

  return (
    <div style={formStyle}>
      {/* <h2 style={{ textAlign: "center", color: "#ff6f00" }}>התחברות</h2> */}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <input
        type="email"
        placeholder="הכנס אימייל"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
        required
      />
      <input
        type="password"
        placeholder="הכנס סיסמא"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
        required
      />
      <button onClick={onLogin} style={buttonStyle}>
        התחברות
      </button>
    </div>
  );
};

export default Login;
