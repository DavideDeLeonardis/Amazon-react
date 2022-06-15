import classes from "../../assets/scss/Footer.module.scss";

const Footer = () => {
   return (
      <footer className={classes.footer}>
         <div className={classes.top}>
            <a href="#header">Back to top</a>
         </div>

         <div className={classes.bottom}>
            FOOTER
         </div>
      </footer>
   );
};

export default Footer;
