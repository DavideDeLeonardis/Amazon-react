import { Fragment } from "react";

import Select from "../UI/Select";
import List from "../UI/List";
import {
   listItemsCol1,
   listItemsCol2,
   listItemsCol3,
   listItemsCol4,
} from "../../assets/config/footerListItems";
import languages from "../../assets/config/selectLanguages";
import amazon_logo from "../../assets/images/amazon-logo-white.png";

import classes from "../../assets/scss/Footer.module.scss";

const Footer = () => {
   const lists = (
      <Fragment>
         <div className={classes.col}>
            <List values={listItemsCol1} />
         </div>
         <div className={classes.col}>
            <List values={listItemsCol2} />
         </div>
         <div className={classes.col}>
            <List values={listItemsCol3} />
         </div>
         <div className={classes.col}>
            <List values={listItemsCol4} />
         </div>
      </Fragment>
   );

   const footerBottom = (
      <Fragment>
         <a href="https://amazon.com">
            <img src={amazon_logo} alt="logo amazon" />
         </a>
         <div className={classes.container_el_footer}>
            <div className={classes.footer_b_el}>
               <Select
                  className={classes.select}
                  defaultValue="English"
                  values={languages}
               />
            </div>
            <div className={classes.footer_b_el}>USD - U.S. Dollar</div>
            <div className={classes.footer_b_el}>United States</div>
         </div>
      </Fragment>
   );

   return (
      <footer className={classes.footer}>
         <a href="#header">
            <div className={classes.footer_top}>Back to top</div>
         </a>

         <div className={classes.footer_middle}>{lists}</div>

         <div className={classes.footer_bottom}>{footerBottom}</div>
      </footer>
   );
};

export default Footer;
