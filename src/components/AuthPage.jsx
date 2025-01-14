// import { useState } from "react";
// import Login from "./Login";
// import Register from "./Register";

// export const AuthPage = ({ setIsLoggedIn }) => {
//     const [isLoginMode, setIsLoginMode] = useState(true); // מצב התחברות או הרשמה

//     // const toggleMode = () => {
//     //     setIsLoginMode(!isLoginMode); // מעבר בין התחברות להרשמה
//     // };

//     const containerStyle = {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f0f8ff",
//         padding: "20px",
//         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//     };

//     const buttonStyle = {
//         margin: "20px 0",
//         padding: "10px 20px",
//         fontSize: "16px",
//         backgroundColor: "#4CAF50",
//         color: "white",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//         transition: "background-color 0.3s",
//     };

//     const activeButtonStyle = {
//         ...buttonStyle,
//         backgroundColor: "#45a049",
//     };

//     const inactiveButtonStyle = {
//         ...buttonStyle,
//         backgroundColor: "#ccc",
//         color: "#666",
//         cursor: "not-allowed",
//     };

//     return (
//         <div style={containerStyle}>
//             <h1>{isLoginMode ? "התחברות" : "הרשמה"}</h1>
//             <div>
//                 <button
//                     style={isLoginMode ? activeButtonStyle : inactiveButtonStyle}
//                     onClick={() => setIsLoginMode(true)}
//                     disabled={isLoginMode}
//                 >
//                     התחברות
//                 </button>
//                 <button
//                     style={!isLoginMode ? activeButtonStyle : inactiveButtonStyle}
//                     onClick={() => setIsLoginMode(false)}
//                     disabled={!isLoginMode}
//                 >
//                     הרשמה
//                 </button>
//             </div>
//             {isLoginMode ? (
//                 <Login setIsLoggedIn={setIsLoggedIn} />
//             ) : (
               
//             <Register setIsLoggedIn={setIsLoggedIn} />
               
//             )}
//         </div>
//     );
// };

// export default AuthPage;



import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export const AuthPage = ({ setIsLoggedIn }) => {
  const [isLoginMode, setIsLoginMode] = useState(true); // מצב התחברות או הרשמה

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#fff3e0", // רקע בגוון כתום בהיר
    padding: "20px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    padding: "20px",
    marginBottom: "20px",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ff6f00",
    marginBottom: "20px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ff6f00",
    color: "#ffffff",
  };

  const inactiveButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ffe0b2",
    color: "#ff6f00",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headerStyle}>
          {isLoginMode ? "התחברות" : "הרשמה"}
        </h1>
        <div style={buttonContainerStyle}>
          <button
            style={isLoginMode ? activeButtonStyle : inactiveButtonStyle}
            onClick={() => setIsLoginMode(true)}
          >
            התחברות
          </button>
          <button
            style={!isLoginMode ? activeButtonStyle : inactiveButtonStyle}
            onClick={() => setIsLoginMode(false)}
          >
            הרשמה
          </button>
        </div>
        {isLoginMode ? (
          <Login setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Register setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
