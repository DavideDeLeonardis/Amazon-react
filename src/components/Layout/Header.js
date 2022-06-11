import { Fragment } from "react";

import classes from "./Header.module.css";

const Header = (props) => {
   return (
      <Fragment>
         <header className={classes.header}>
            <button onClick={props.onShowCart}>Carrello</button>
         </header>
      </Fragment>
   );
};

export default Header;
