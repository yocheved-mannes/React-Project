// import { useContext, useState } from "react";
// import MyContext from "./context/context";
// import {useNavigate } from "react-router-dom";

// export const Register = ({ setIsLoggedIn}) => {
//     const RegisterFunc = useContext(MyContext).Register;
//     const users = useContext(MyContext).users;
//     const navigate = useNavigate();
    
//     // סטייטים לאחסון אימייל, סיסמה ושם משתמש
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [username, setUsername] = useState("");

//     // סטייט להודעות שגיאה
//     const [error, setError] = useState("");

//     // פונקציה לבדוק אם אימייל תקין
//     const isValidEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     // פונקציה לבדוק אם הסיסמה תקינה
//     const isValidPassword = (password) => {
//         const passwordRegex = /^(?=.*[a-zA-Z]).{4,}$/; // לפחות 4 תווים ולפחות אות באנגלית
//         return passwordRegex.test(password);
//     }; 
//     const onRegister = () => {
//         if (!username || !email || !password) {
//             setError("אנא מלא את כל השדות");
//             return;
//         }
    
//         if (!isValidEmail(email)) {
//             setError("אנא הזן כתובת אימייל תקינה");
//             return;
//         }
    
//         if (!isValidPassword(password)) {
//             setError("הסיסמה חייבת להכיל לפחות 4 תווים ולכלול לפחות אות אחת באנגלית");
//             return;
//         }

       
//         const newUser = {
//             username: username,
//             email: email,
//             password: password,
//         };

//         if (users.some((u) => u.email === newUser.email)) {
//             alert("המייל כבר קיים במערכת!");
//             return;
//         }
    
//         RegisterFunc(newUser); // רישום המשתמש
//         setIsLoggedIn(true); // עדכון מצב התחברות
//         navigate("/Home"); // ניתוב לדף הבית
//     };


//     return   <>
//             {/* <h1>הרשמה</h1> */}
//             <div>
//                 {/* הצגת הודעת שגיאה אם יש */}
//                 {error && <p style={{ color: "red" }}>{error}</p>}

//                 <input
//                     type="text"
//                     placeholder="הכנס שם"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />

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

//                 <button onClick={onRegister}>הרשמה</button>
//             </div>
//         </>
    
// };
// export default Register;



import { useContext, useState } from "react";
import MyContext from "./context/context";
import { useNavigate } from "react-router-dom";

export const Register = ({ setIsLoggedIn }) => {
  const RegisterFunc = useContext(MyContext).Register;
  const users = useContext(MyContext).users;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) =>
    /^(?=.*[a-zA-Z]).{4,}$/.test(password);

  const onRegister = () => {
    if (!username || !email || !password) {
      setError("אנא מלא את כל השדות");
      return;
    }

    if (!isValidEmail(email)) {
      setError("אנא הזן כתובת אימייל תקינה");
      return;
    }

    if (!isValidPassword(password)) {
      setError("הסיסמה חייבת להכיל לפחות 4 תווים ולכלול לפחות אות אחת באנגלית");
      return;
    }

    const newUser = {
      username,
      email,
      password,
    };

    if (users.some((u) => u.email === newUser.email)) {
      alert("המייל כבר קיים במערכת!");
      return;
    }

    RegisterFunc(newUser);
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
      {/* <h2 style={{ textAlign: "center", color: "#ff6f00" }}>הרשמה</h2> */}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <input
        type="text"
        placeholder="הכנס שם"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={inputStyle}
        required
      />
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
      <button onClick={onRegister} style={buttonStyle}>
        הרשמה
      </button>
    </div>
  );
};

export default Register;
