//----------------------------------------------
//App
// export const appStyle = {
//     backgroundImage: 'url(./img/רקע.jpg)', // הנתיב לתמונה שלך
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     minHeight: '100vh', // כדי למלא את כל גובה הדף
// };
export const navStyle = {
    position: "fixed", // הניווט יישאר קבוע בראש הדף
    top: 0,
    left: 0,
    width: "100%",
    height: "110px", // גובה הניווט
    backgroundColor: "white", // צבע רקע כהה לניווט
    zIndex: 10, // מבטיח שהניווט יהיה מעל התוכן
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: " rgb(222, 115, 16)",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  

    
};
// עיצוב הלוגו ב-heder
export const logoStyle={ 
    width: "90px", height: "90px", marginRight: "10px"
 };

//  צבע הקישורים
 export const colors={
    color:"rgb(222, 115, 16)",
    fontSize: "30px",
    textDecoration: "none" ,
    textShadow: "1px 1px 2px rgba(128, 128, 128, 0.5)"
}


export const linkStyleCart= {
    color: "rgb(222, 115, 16)",
    fontSize: "40px",
    textDecoration: "none",
}
export const linkStyle = {
    color: "rgb(252, 192, 81)",
    textDecoration: "none",
    fontSize: "17px",
    display: "block",
    marginTop: "10px",
    textAlign: "center",
};
// כותרת מוצרים
export const headerStyle = {
    // textAlign: "center",
    fontSize: "50px",
    // margin: "50px 0",
    fontWeight: "bold",
    color: "rgb(222, 115, 16)"
};

export const mainStyle = {
    flex: 1, // המקטע הראשי יתפוס את כל השטח הפנוי
    padding: "0px",
};

export const footerStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgb(222, 115, 16)",
    color: "white",
    textAlign: "center",
    padding: "10px",
};
//---------------------------------------
//לתשלום

export const checkoutContainerStyle = {
    maxWidth: "800px",
  margin: '40px auto',
    padding: "20px",
    backgroundColor: "#f4f4f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
};

export const checkoutTitleStyle = {
    textAlign: "center",
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
};

//---------------------------------------
//עגלה;

// סגנון לקונטיינר של המוצרים
export const productsContainerStyle1 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: "20px",
    // minHeight: "200vh",
    // marginTop: "800px", // גובה ההאדר
};

export const cardImgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    objectFit: "cover",
    marginRight: "10px",
};

export const cartItemStyle = {
    backgroundColor: "#f9f9f9",
    padding: "2px",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "flex-start",
    height: "150px", // עדכון גובה הריבוע
    width: "100%",
};

export const removeButtonStyle = {
    marginLeft: "10px",
    padding: "8px 10px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
};
export const cartSummaryStyle = {
    fontSize: "16px",
    textAlign: "center",
    marginTop: "2px",
    fontWeight: "bold",
    color: "#555",
};

export const cardContainerStyle = {
    
    display: "flex",
    position: "fixed", // מיקום קבוע
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    margin: "3px",
    width: "25px",
    textAlign: "center",
};

export const cardNameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
};


export const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
};

//-----------------------------------------
//מוצרים
export const prodStyle={
    marginTop:"40px",
    flexDirection: "column",
    backgroundColor:"rgb(255, 229, 204)"
}
export const productsContainerStyle = {
    display: "grid",
    // gridTemplateColumns: "repeat(3, 1fr)", // 3 עמודות
    gridTemplateColumns: "repeat(4, minmax(200px, 1fr))", 
    gap: "100px",
    // padding: "20px",
    justifyContent: "center",
    // marginTop: "230px", // הוספת רווח מעל הקונטיינר של המוצרים
    flexDirection: "column",
};
export const productCardStyle = {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

export const productImageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "15px",
};

export const productNameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
};

export const productButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "rgb(255, 199, 146)",
    // color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
};

export const productButtonHoverStyle = {
    backgroundColor: "#45a049",
};


//---------------------------------
//צור קשר

export const contactPageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #FFA726, #FF7043)",
    fontFamily: "'Roboto', sans-serif",
    color: "#fff",
  };
  
  export const formContainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    width: "90%",
    maxWidth: "500px",
    textAlign: "center",
  };
  
  export const formTitleStyle = {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#FF5722",
    textShadow: "2px 2px #FFAB91",
  };
  
  export const formInputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "2px solid #FF7043",
    borderRadius: "8px",
    fontSize: "1rem",
    color: "#333",
    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.2)",
    outline: "none",
  };
  
  export const formTextAreaStyle = {
    ...formInputStyle,
    minHeight: "100px",
    resize: "none",
  };
  
  export const formButtonStyle = {
    backgroundColor: "#FF5722",
    border: "none",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "25px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };
  
  export const formButtonHoverStyle = {
    backgroundColor: "#E64A19",
  };
  

  export const linkHoverStyle = {
    color: "#FFAB91",
  };


//-----------------------------------------------

//אודות

// containerStyle - לעיצוב הקונטיינר
export const containerStyle = {
    color:"rgb(42, 45, 47)",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    display: "flex",
    marginTop: "5px",
    position: "relative", // מאפשר שימוש ב-z-index
    backgroundColor:"rgb(222, 115, 16)",
    backgroundImage: 'url(/img/רקע.jpg)', // נתיב לתמונה שברצונך להשתמש בה
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '10%', // וודא שהתמונה מכסה את כל הדף
        position: 'relative', // מאפשר למקם את התוכן מעל הרקע
        zIndex: 0 // מניח את הרקע מאחורי התוכן
};

// textSectionStyle - לעיצוב החלק של המלל
export const textSectionStyle = {
    flex: 1, // חצי מהדיב
    padding: "8px", // ריווח פנימי
    marginTop: "0px", // ריווח נוסף לטקסט
};

// imageSectionStyle - לעיצוב החלק של התמונה
export const imageSectionStyle = {
    flex: 1, // חצי מהדיב
};

// imgStyle - לעיצוב התמונה
export const imgStyle = {
    width: "100%", // התמונה תתאים לגובה הדיב
    height: "auto", // שומר על פרופורציות התמונה
    marginTop: "110px", // מוסיף ריווח בין התמונה לניווט
    opacity: "50%"
};


//---------------------------------------------
//דף הבית
// עיצוב מיכל הסרטון


// עיצוב הסרטון
// export const videoStyle = {
//     width: "100%",
//     height: "100%", // גובה מלא
//     // objectFit: "cover", // התאמה לגודל המיכל
// };
// export const styleHome={
//     backgroundColor:"rgb(255, 199, 146)"
// };
// עיצוב כרטיסיות
export const cardStyle = {
    width: "200px",
    border: "1px solid #ccc", // מסגרת עדינה
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // צל לכרטיס
    textAlign: "center",
    overflow: "hidden",
    backgroundColor: "#fff", // רקע לבן
    transition: "transform 0.2s, box-shadow 0.2s", // אפקט מעבר
};

// אפקט ריחוף לכרטיסיות
cardStyle[":hover"] = {
    transform: "scale(1.05)", // הגדלה קטנה
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // צל מוגבר
};

// עיצוב תמונות בכרטיסיות
export const cardImageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover", // התאמת התמונה לגודל הכרטיס
};

// עיצוב טקסט בכרטיסיות
export const cardTextStyle = {
    padding: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
};

// export const AppContainer = {
//     // display: "flex",
//     flexDirection: "row",
//     height: "02px",
// };          

// export const videoContainerStyle = {
//     // position: "fixed", // מיקום קבוע
//     // top: 0,
//     // left: 0,
//     width: "100%",
//     height: "100vh", // גובה מלא
//     // overflow: "hidden",
//     // zIndex: -1, // הסרטון מאחורי התוכן
//     padding:"0"
// };
export const categoriesContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // שתי עמודות בגודל שווה
    gap: "30px",
    // margin: "10px",
    marginBottom: "65px",
    marginTop: "40px",
    // position: "sticky", // דבק
    // top: 0, // דבק לחלק העליון של המסך
    // zIndex: 1, // זיהוי גבוה יותר מהסרטון
    backgroundColor: "#fff", // רקע לבן כדי להפריד מהסרטון
};

// מיכל הקטגוריות
export const CategoriesContainer = {
    padding: "30px",
    // position: "relative",
};
//עגלה

export const MyCart={ marginBottom: "100px", fontSize: "50px", marginTop:"320px", color:"rgb(222, 115, 16)" };

// export const items={ margin: "10px 0", fontWeight: "bold" };

// export const styleOptions={ display: "flex", alignItems: "center", marginBottom: "-70px" };

// export const styleSpan={ margin: "0 10px" };

// export const opertorS={ marginRight: "10px" };

 export const toPurchasePage={ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center' };



// // margin: "300px 0"
// // export const toCheckout={  fontWeight: "bold", bottom: "0", width: "100%" }








// export const productsContainerStyle12 = {
//     // display: 'flex',
//     marginTop: "220px",
//     flexDirection: 'row',
//     alignItems: 'center',
//     // padding: '420px',
//     backgroundColor: '#f4f4f4',
//     minHeight: '100vh',
//     // boxSizing: 'border-box'
//   };
  
  
//   export const MyCart2 = {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '30px',
//     textAlign: 'center',
//     color:"rgb(222, 115, 16)"
//   };
  
//   export const cartItemStyle2 = {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '80%',
//     backgroundColor: '#fff',
//     padding: '15px',
//     borderRadius: '8px',
//     marginBottom: '20px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'all 0.3s ease-in-out',
//   };
  
//   export const cardImgStyle2 = {
//     width: '100px',
//     height: '100px',
//     objectFit: 'cover',
//     borderRadius: '8px',
//     marginRight: '20px'
//   };
  
//   export const items2 = {
//     margin: '5px 0',
//     fontSize: '14px',
//     fontWeight: 'normal',
//   };
  
//   export const removeButtonStyle2 = {
//     backgroundColor: 'rgb(222, 115, 16)',
//     color: '#fff',
//     border: 'none',
//     padding: '8px 16px',
//     fontSize: '14px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginRight:"10px"
//     // transition: 'background-color 0.3s',
//   };
  
  export const removeButtonHoverStyle = {
    backgroundColor: '#e60000',
  };
  
//   export const toCheckout = {
//     marginTop: '20px',
//     padding: '12px 20px',
//     backgroundColor: '#008CBA',
//     color: '#fff',
//     textDecoration: 'none',
//     borderRadius: '5px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     display: 'inline-block',
//   };
  
  export const toCheckoutHover = {
    backgroundColor: '#005f73',
  };
  


  export const AppContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100vh', // גובה הדף
    width: '100%',
   
   
};

export const videoContainerStyle = {
    width: '100%', // רוחב מלא
    overflow: 'hidden', // להסתיר תוכן שעובר את הקונטיינר
};

export const videoStyle = {
    width: '100%', // ווידאו יתפוס את כל הרוחב
    height: 'auto', // גובה אוטומטי לשמירה על יחס התמונה
};



  

export const items = {
    fontSize: '16px',
    color: '#333',
    fontWeight: 'bold',
    margin: '5px 0',
  };
  
  export const toCheckout = {
    backgroundColor: 'rgb(244, 171, 69)',  // Corrected typo to 'f оранже' for orange color
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    // marginTop: '10px',
  marginBottom:"0px",
//    position:"fixed",
   border: "none",
//    marginTop: "0px",
  };
  
  export const removeButtonStyle2 = {
    backgroundColor: 'red',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    // marginLeft: '20px',
    marginRight:"10px"
  };
  
  export const items2 = {
    fontSize: '14px',
    color: '#333',
    margin: '5px 0',
  };
  
  export const productsContainerStyle12 = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    margin: '40px 0',
  };
  
  export const cartItemStyle2 = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  };
  
  export const cardImgStyle2 = {
    width: '100px',
    height: '100px',
    marginRight: '15px',
    objectFit: 'cover',
  };
  
  export const MyCart2 = {
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
    margin: '0 0 15px',
  };
  
  export const styleOptions = {
    display: 'flex',
    alignItems: 'center',
  };
  
  export const styleSpan = {
    padding: '5px 10px',
    border: '1px solid #ccc',
    marginRight: '10px',
  };
  
  export const opertorS = {
    backgroundColor: 'rgb(244, 171, 69)', // Corrected typo to 'f оранже' for orange color
    color: 'white',
    padding: '5px 7px',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '5px',
  };