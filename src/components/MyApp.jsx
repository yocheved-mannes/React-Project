import {useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Routing from "../Routing";
import AuthPage from "./AuthPage";

export const MyApp = () => {
    // מצב התחברות
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // עגלה
    const [cartCount, setCartCount] = useState(0);
    const [cart, setCart] = useState([]);

    // פונקציה שמוסיפה כמות למוצר
    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        setCartCount(cartCount + 1);
    };

    return (
        <>
            <div>
                {!isLoggedIn ? (
                    <main>
                        <Routes>
                            <Route
                                path="/"
                                element={<AuthPage setIsLoggedIn={setIsLoggedIn} />}
                            />
                            <Route
                                path="/Login"
                                element={<AuthPage setIsLoggedIn={setIsLoggedIn} />}
                            />
                            <Route
                                path="/Register"
                                element={<AuthPage setIsLoggedIn={setIsLoggedIn} />}
                                
                            />

                           <Route path="*" element={<AuthPage setIsLoggedIn={setIsLoggedIn}  />} />
                        </Routes>
                    </main>
                ) : (
                    <>
                        <NavBar />
                       
                            <Routing cart={cart} setCart={setCart} addToCart={addToCart} />
                        
                    </>
                )}
            </div>
        </>
    );
};

export default MyApp;
