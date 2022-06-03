import { Fragment, useState } from "react";

import Header from "./Layout/Header";
import Products from "./Products/Products";
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
         <main>
            <Products />
         </main>
         <Footer />
      </Fragment>
   );
}

export default App;
