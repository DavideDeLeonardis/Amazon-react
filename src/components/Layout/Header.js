import { Fragment } from "react";

import Input from "../UI/Input";
import Select from "../UI/NavSelect";
import DoubleLine from "../UI/DoubleLine";

import amazon_logo from "../../assets/images/amazon-logo-white.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "../../assets/scss/Header.module.scss";

const Header = (props) => {
   return (
      <Fragment>
         <header className={classes.header}>
            <img className={classes.logo} src={amazon_logo} alt="Amazon logo" />

            <div className={classes.container_with_icon}>
               <FontAwesomeIcon
                  icon="fa-location-dot"
                  className={classes.location_icon}
               />
               <DoubleLine lineOne={"Deliver to Davide"} lineTwo={"Italy"} />
            </div>

            <div className={classes.input_container}>
               <Select classNames={classes.select} />
               <Input
                  classNames={classes.search_input}
                  input={{ id: "search", type: "text", placeholder: "Cerca" }}
               />
               <div className={classes.search_icon_container}>
                  <FontAwesomeIcon
                     className={classes.search_icon}
                     icon="fa-search"
                  />
               </div>
            </div>

            <DoubleLine
               lineOne={"Hello, Sing in"}
               lineTwo={"Account & Lists"}
            />

            <DoubleLine lineOne={"Returns"} lineTwo={"& Orders"} />

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
         </header>
      </Fragment>
   );
};

export default Header;
