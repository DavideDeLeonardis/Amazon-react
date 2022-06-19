import { Fragment } from "react";

import List from "../UI/List";
import * as stars from "../UI/Stars";
import * as items from "../../assets/config/mainNavbarItems";

import classes from "../../assets/scss/layout/_main.module.scss";

const MainNavbar = () => {
   const reviewStars = (
      <Fragment>
         {stars.fourStars}
         {stars.threeStars}
         {stars.twoStars}
         {stars.oneStars}
      </Fragment>
   );

   return (
      <nav className={`${classes.main_nav} d_none_w_xs`}>
         <div className={classes.list}>
            <List
               values={items.climate}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <h4>Departments</h4>
            <List
               values={items.departments}
               containerListClassName={classes.pl}
               ulClassName={classes.pl}
            />
         </div>
         <div className={classes.list}>
            <h4>Avg. Customer Review</h4>
            {reviewStars}
         </div>
         <div className={classes.list}>
            <List
               values={items.brands}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List values={items.prices} />
         </div>
         <div className={classes.list}>
            <List
               values={items.certified}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List
               values={items.ourBrands}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List
               values={items.packaging}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List values={items.upcoming} />
         </div>
         <div className={classes.list}>
            <List
               values={items.certifications}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List
               values={items.globalStore}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List values={items.conditions} />
         </div>
         <div className={classes.list}>
            <List
               values={items.sellers}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
         <div className={classes.list}>
            <List
               values={items.availability}
               showCheckbox={true}
               inputClassName={classes.input}
            />
         </div>
      </nav>
   );
};

export default MainNavbar;
