// import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import ProductItemForm from "./ProductItemForm";
import CartContext from "../../store/cart-context";
import * as starsUI from "../UI/Stars";
import prime_logo from "../../assets/images/prime-logo.png";

import classes from "../../assets/scss/layout/_main.module.scss";

const ProductItem = (props) => {
   const cartCtx = useContext(CartContext);

   const addToCartHandler = (amount) => {
      cartCtx.addItem({
         id: props.id,
         name: props.name,
         amount: amount,
         price: props.price,
      });
   };

   const showCartHandler = () => {
      props.onShowCart();
   };

   const bestSeller = (
      <div className={classes.best_seller_container}>
         <div className={classes.best_seller}>Best Seller</div>
      </div>
   );

   const price = `${props.price.toFixed(2)}€`;

   const priceDiscounted = `${(
      props.price -
      (props.price / 100) * props.discount
   ).toFixed(2)}€`;

   const discount = (
      <Fragment>
         <span className={classes.discount}>-{props.discount}%</span>
         <span className={classes.actual_price}>{priceDiscounted}</span>
      </Fragment>
   );

   const prime = (
      <Fragment>
         <span>with</span>
         <img
            className={classes.prime_logo}
            src={prime_logo}
            alt="Amazon Prime logo"
         />
      </Fragment>
   );

   let stars;
   switch (props.stars) {
      case "five":
         stars = starsUI.fiveStars;
         break;
      case "four":
         stars = starsUI.fourStars;
         break;
      case "three":
         stars = starsUI.threeStars;
         break;
      case "two":
         stars = starsUI.twoStars;
         break;
      case "one":
         stars = starsUI.oneStars;
         break;
      default:
         stars = "No reviews";
         break;
   }

   return (
      // <Link to={`/products/${props.id}`}>VEDI PRODOTTO</Link>
      <li className={classes.product}>
         {props.isBestSeller && bestSeller}

         <div className={classes.product_image}>
            <img src={props.image} alt={props.name} />
         </div>

         <div className={classes.product_content}>
            <span className={classes.name}>{props.name}</span>
            {stars}
            <div className={classes.price_container}>
               {props.discount && discount}
               <span
                  className={
                     props.discount ? classes.price_discounted : classes.price
                  }
               >
                  {price}
               </span>
            </div>
            <div className={classes.shipping}>
               <span>Ships to Italy</span>
               {props.primeAvailable && prime}
            </div>
            {props.stockNumber < 10 && (
               <div className={classes.stock}>
                  Only {props.stockNumber} letf in stock - order soon.
               </div>
            )}
            <ProductItemForm
               onShowCart={showCartHandler}
               onAddToCart={addToCartHandler}
            />
         </div>
      </li>
   );
};

export default ProductItem;
