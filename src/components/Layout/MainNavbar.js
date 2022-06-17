import List from "../UI/List";
import * as bundled from "../../assets/config/mainNavbarItems";

import classes from "../../assets/scss/layout/_mainNavbar.module.scss";

const MainNavbar = () => {
   return (
      <nav className={classes.main_nav}>
         <div className={classes.list}>
            <List
               values={bundled.climate}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <h4>Departments</h4>
            <List
               values={bundled.departments}
               containerListClassName={classes.pl}
               ulClassName={classes.pl}
            />
         </div>
         <div className={classes.list}>
            <List
               values={bundled.brands}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List values={bundled.prices} />
         </div>
         <div className={classes.list}>
            <List
               values={bundled.certified}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List
               values={bundled.ourBrands}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List
               values={bundled.packaging}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List values={bundled.upcoming} />
         </div>
         <div className={classes.list}>
            <List
               values={bundled.certifications}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List
               values={bundled.globalStore}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List values={bundled.conditions} />
         </div>
         <div className={classes.list}>
            <List
               values={bundled.sellers}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List
               values={bundled.availability}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
      </nav>
   );
};

export default MainNavbar;
