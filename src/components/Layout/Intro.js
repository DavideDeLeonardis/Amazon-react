import react_logo from "../../assets/images/logo-react.png";

import classes from "../../assets/scss/layout/_intro.module.scss";

const Intro = () => {
   return (
      <section className={classes.section} id="intro">
         <div className={classes.heading}>
            Amazon home page's clone made with{" "}
            <span>
               <img src={react_logo} alt="Logo React" />
               React
            </span>{" "}
            , <span>add to cart</span> the product you choose, insert your data
            and order!
         </div>
         <h4>Available soon: </h4>
         <span>Metamask payment method, products' details, auth and orders history</span>
      </section>
   );
};

export default Intro;
