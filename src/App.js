import ReactDOM from "react-dom";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Intro from "./components/Layout/Intro";
import Header from "./components/Layout/Header";
import Nav from "./components/Layout/MainNavbar";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import "./index.scss";

function App() {
   const [cartIsShown, setCartIsShown] = useState(false);

   const showCarthandler = () => {
      setCartIsShown(true);
   };

   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   const cartPortal = ReactDOM.createPortal(
      cartIsShown && <Cart onClose={hideCartHandler} />,
      document.getElementById("overlays")
   );

   return (
      <CartProvider>
         {cartPortal}
         <Header onShowCart={showCarthandler} />
         <Intro />
         <main>
            <Nav />
            <Routes>
               <Route path="/" element={<Navigate replace to="/products" />} />
               <Route path="/products" element={<Products />} />
               <Route path="products/:productId" element={<ProductDetails />} />
            </Routes>
         </main>
         <Footer />
      </CartProvider>
   );
}

export default App;
