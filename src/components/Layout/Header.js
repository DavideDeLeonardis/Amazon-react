import { Fragment } from "react";

import Input from "../UI/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Header.module.scss";

const Header = (props) => {
   return (
      <Fragment>
         <header className={classes.header}>
            <div className={classes.address_container}>
               <FontAwesomeIcon
                  icon="fa-location-dot"
                  className={classes.location_icon}
               />
               <div className={classes.address}>
                  <span>Invia a Davide</span>
                  <span>Italia</span>
               </div>
            </div>
            <Input input={{ type: "text" }} className={classes.search}/>
            <button onClick={props.onShowCart}>Carrello</button>
         </header>
      </Fragment>
   );
};

export default Header;
