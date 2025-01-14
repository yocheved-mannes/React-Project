// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { contactPageStyle, formButtonHoverStyle, formButtonStyle, formContainerStyle, formInputStyle, formTextAreaStyle, formTitleStyle, linkStyle } from "../Style";

//  function Contact() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
// //מקבל את האירוע
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("ההודעה שלך נשלחה בהצלחה!");
//     };

//     return (
//         <div style={contactPageStyle}>
//             <div style={formContainerStyle}>
//                 <h1 style={formTitleStyle}>צור קשר</h1>
//                 <form onSubmit={handleSubmit}>
//                     {/* שם */}
//                     <input 
//                         type="text" 
//                         placeholder="שם מלא"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         style={formInputStyle}
//                         required
//                     />
//                     {/* אימייל */}
//                     <input 
//                         type="email" 
//                         placeholder="אימייל"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         style={formInputStyle}
//                         required
//                     />
//                     {/* הודעה */}
//                     <textarea 
//                         placeholder="הודעה"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         style={formTextAreaStyle}
//                         required
//                     />
//                     {/* כפתור שליחה */}
//                     <button 
//                         type="submit" 
//                         style={formButtonStyle}
//                         onMouseEnter={(e) => e.target.style.backgroundColor = formButtonHoverStyle.backgroundColor}
//                         onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
//                     >
//                         שלח
//                     </button>
//                 </form>
//             </div>
//             {/* קישור לעמוד הבית או דף אחר */}
//             <Link to="/" style={linkStyle}>
//                 חזרה לדף הבית
//             </Link>
//         </div>
//     );
// }
// export default Contact;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  contactPageStyle,
  formButtonStyle,
  formContainerStyle,
  formInputStyle,
  formTextAreaStyle,
  formTitleStyle,
  linkStyle,
} from "../Style";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("")
    setEmail("")
    setMessage("")
    alert("ההודעה שלך נשלחה בהצלחה!");
  };

  return (
    <div style={contactPageStyle}>
      <div style={formContainerStyle}>
        <h1 style={formTitleStyle}>צור קשר</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="שם מלא"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={formInputStyle}
            required
          />
          <input
            type="email"
            placeholder="אימייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={formInputStyle}
            required
          />
          <textarea
            placeholder="הודעה"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={formTextAreaStyle}
            required
          />
          <button type="submit" style={formButtonStyle}>
            שלח
          </button>
        </form>
      </div>
      <Link to="/" style={linkStyle}>
        חזרה לדף הבית
      </Link>
    </div>
  );
}

export default Contact;
