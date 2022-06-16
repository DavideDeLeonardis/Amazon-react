import List from "../UI/List";
import { departments } from "../../assets/config/mainNavbarItems";

import classes from "../../assets/scss/layout/_mainNavbar.module.scss";

const MainNavbar = () => {
   return (
      <nav className={classes.main_nav}>
         <List values={departments} />
      </nav>
   );
};

export default MainNavbar;
