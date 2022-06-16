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

import classes from "../../assets/scss/layout/_footer.module.scss";

const Footer = () => {
   const footerTop = (
      <a href="#header">
         <div className={classes.footer_top}>Back to top</div>
      </a>
   );

   const footerMiddle = (
      <div className={classes.footer_middle}>
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
      </div>
   );

   const footerBottom = (
      <div className={classes.footer_bottom}>
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
      </div>
   );

   const privacy = (
      <div className={classes.container_privacy}>
         <a href="https://amazon.com">Conditions of Use</a>
         <a href="https://amazon.com">Privacy Notice</a>
         <a href="https://amazon.com">Interest-Based Ads</a>
         <a href="https://amazon.com">
            © 1996-2022, Amazon.com, Inc. or its affiliates
         </a>
      </div>
   );

   return (
      <footer className={classes.footer}>
         {footerTop}
         <div className="bg_dark_blue">
            {footerMiddle}
            {footerBottom}
            {privacy}
         </div>
      </footer>
   );
};

export default Footer;
