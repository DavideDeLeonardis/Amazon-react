import { useState } from "react";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import "./index.css";

function App() {
   const [cartIsShown, setCartIsShown] = useState(false);

   const showCarthandler = () => {
      setCartIsShown(true);
   };

   const hideCartHandler = () => {
      setCartIsShown(false);
   };

   return (
      <CartProvider>
         {cartIsShown && <Cart onClose={hideCartHandler} />}
         <Header onShowCart={showCarthandler} />
         <main>
            <Products />
         </main>
         <Footer />
      </CartProvider>
   );
}

export default App;
