import ReactDOM from 'react-dom';
import { useState } from "react";

import Intro from "./components/Layout/Intro";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import "./index.scss";

function App() {
   const [cartIsShown, setCartIsShown] = useState(false);

   const portalElement = document.getElementById('overlays');

   const showCarthandler = () => {
      setCartIsShown(true);
   };

   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   return (
      <CartProvider>
         {ReactDOM.createPortal(cartIsShown && <Cart onClose={hideCartHandler} />, portalElement)}
         <Header onShowCart={showCarthandler} />
         <main>
            <Intro />
            <Products />
         </main>
         <Footer />
      </CartProvider>
   );
}

export default App;
