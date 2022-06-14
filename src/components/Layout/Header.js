import { Fragment } from "react";

import Input from "../UI/Input";
import Select from "../UI/NavSelect";
import DoubleLine from "../UI/DoubleLine";

import amazon_logo from "../../assets/images/amazon-logo-white.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "../../assets/scss/Header.module.scss";

const Header = (props) => {
   const inputContainer = (
      <div className={classes.input_container}>
         <Select className={classes.select} />
         <Input
            className={classes.search_input}
            input={{ id: "search", type: "text", placeholder: "Cerca" }}
         />
         <div className={classes.search_icon_container}>
            <FontAwesomeIcon className={classes.search_icon} icon="fa-search" />
         </div>
      </div>
   );

   const cart = (
      <button
         className={classes.container_with_icon}
         onClick={props.onShowCart}
      >
         <FontAwesomeIcon
            icon="fa-cart-shopping"
            className={classes.cart_icon}
         />
         <DoubleLine lineOne={<br></br>} lineTwo={"Cart"} />
      </button>
   );

   return (
      <header className={classes.header}>
         <img className={classes.logo} src={amazon_logo} alt="Amazon logo" />

         <div
            className={`${classes.container_with_icon} d_none_w_md d_none_w_s`}
         >
            <FontAwesomeIcon
               icon="fa-location-dot"
               className={classes.location_icon}
            />
            <DoubleLine lineOne={"Deliver to Davide"} lineTwo={"Italy"} />
         </div>

         {inputContainer}

         <DoubleLine
            className="d_none_w_md"
            lineOne={"Hello, Sing in"}
            lineTwo={
               <Fragment>
                  Account & Lists
                  <FontAwesomeIcon
                     className={classes.caret_down_icon}
                     icon="fa-solid fa-caret-down"
                  />
               </Fragment>
            }
         />

         <DoubleLine
            className="d_none_w_md"
            lineOne={"Returns"}
            lineTwo={"& Orders"}
         />

         {cart}
      </header>
   );
};

export default Header;
