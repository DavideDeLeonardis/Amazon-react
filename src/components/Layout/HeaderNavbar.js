import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "../../assets/scss/Header.module.scss";

const HeaderNavbar = () => {
   const listItems = [
      "Today's Deals",
      "Cursomer Service",
      "Registry",
      "Gift Cards",
      "Sell",
   ];

   const navItems = listItems.map((item, index) => (
      <li key={index} className="d_none_w_s">
         {item}
      </li>
   ));

   return (
      <nav>
         <ul>
            <li>
               <FontAwesomeIcon className={classes.bars_icon} icon="fa-bars" />
               <span>All</span>
            </li>
            {navItems}
         </ul>
         <a href="/" className={classes.nav_right}>
            Shop Father's Day Gifts
         </a>
      </nav>
   );
};

export default HeaderNavbar;
