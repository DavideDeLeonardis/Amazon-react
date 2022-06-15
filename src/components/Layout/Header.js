import { Fragment } from "react";

import Nav from "./HeaderNavbar";
import Input from "../UI/Input";
import Select from "../UI/Select";
import selectValues from "../../assets/config/headerSelectValues";
import DoubleLine from "../UI/DoubleLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import amazon_logo from "../../assets/images/amazon-logo-white.png";

import classes from "../../assets/scss/Header.module.scss";

const Header = (props) => {
   const inputContainer = (
      <div className={classes.input_container}>
         <Select
            className={classes.select}
            defaultValue="All"
            values={selectValues}
         />
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

   const headerTop = (
      <div className={classes.header_top}>
         <div className={classes.container_logo}>
            <img className={classes.logo} src={amazon_logo} alt="Amazon logo" />
         </div>

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
      </div>
   );

   return (
      <header>
         {headerTop}
         <Nav />
      </header>
   );
};

export default Header;
