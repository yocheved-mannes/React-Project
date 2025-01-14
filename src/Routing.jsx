// import About from "./components/About";
// import Cart from "./components/Cart";
// import { Checkout } from "./components/Checkout";
// // import Cart from './components/Cart';
// // import Checkout from './components/Checkout';

// import { Routes } from "react-router-dom";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import About from "./components/About";
import DetailsP from "./components/DetailsP";
 import React from 'react';
//  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import AdminEditPage from "./components/AdminEditPage";
import AuthPage from "./components/AuthPage";
import UserMeneger from "./components/UserMeneger";
import Pay from "./components/Pay";



// דף ניבותים בין הדפים באתר
const Routing = ({ cart, setCart, addToCart  }) => {
    return <>
 

<Routes>
<Route path="/Home" element={<Home />} />

<Route path="/about" element={<About />} />
<Route path="/Products" element={<Products addToCart={addToCart} />} />
<Route path="/ProductsDetails/:img/:id/:name/:Details" element={<DetailsP />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/Pay" element={<Pay/>} />
{/* <Route path="/Cart" element={<Cart cart={cart} />} />
<Route path="/Checkout" element={<Checkout cart={cart} />} /> */}
<Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
<Route path="/Checkout" element={<Checkout cart={cart}  setCart={setCart} />} />
<Route path="/AdminEditPage" element={<AdminEditPage />}/>
<Route path="/UserMeneger" element={<UserMeneger/>}/>
<Route path="/AuthPage" element={<AuthPage />}>
<Route path="Login" element={<Login/>} />
<Route path="Register" element={<Register/>} />
</Route>

</Routes>
    </>

    }
    export default Routing ;