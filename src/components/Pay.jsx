import React from "react";
import {useNavigate } from "react-router-dom";

 function Pay() {
    const Navigate = useNavigate();

    const goToHome = () => {
        Navigate("/Home"); // ניווט לדף הבית
    };
    return <>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>התשלום בוצע בהצלחה!</h1>
            <p>תודה שקניתם אצלנו. פרטי ההזמנה יישלחו למייל שהוזן.</p>
            <p>נשמח לראות אתכם שוב!</p>
        </div>

        <button onClick={() => goToHome()} style={{ margin: "10px" }}>חזרה לדף הבית</button>

    </>
}

export default  Pay;