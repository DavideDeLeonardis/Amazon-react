import ReactDOM from "react-dom";
import { useState } from "react";

import Intro from "./components/Layout/Intro";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import "./assets/scss/index.scss";

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
         <Main onShowCart={showCarthandler} />
         <Footer />
      </CartProvider>
   );
}

export default App;
