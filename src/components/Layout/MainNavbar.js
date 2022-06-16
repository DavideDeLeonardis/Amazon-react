import List from "../UI/List";
import * as bundled from "../../assets/config/mainNavbarItems";

import classes from "../../assets/scss/layout/_mainNavbar.module.scss";

const MainNavbar = () => {
   return (
      <nav className={classes.main_nav}>
         <div className={classes.list}>
            <List values={bundled.departments} />
         </div>
         <div className={classes.list}>
            <List values={bundled.brands} showCheckbox={true} />
         </div>
         <div className={classes.list}>
            <List values={bundled.prices} />
         </div>
         <div className={classes.list}>
            <List values={bundled.sellers} showCheckbox={true} />
         </div>
         <div className={classes.list}>
            <List values={bundled.availability} showCheckbox={true} />
         </div>
      </nav>
   );
};

export default MainNavbar;
