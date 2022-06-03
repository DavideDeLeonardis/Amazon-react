import { Fragment } from "react";
import { useState } from "react";

import Products from "./Products/Products";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Cart from "./Cart/Cart";

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
      <Fragment>
         {cartIsShown && <Cart onClose={hideCartHandler} />}
         <Header onShowCart={showCarthandler} />
         <Products />
         <Footer />
      </Fragment>
   );
}

export default App;
