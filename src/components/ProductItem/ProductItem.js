// import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import ProductItemForm from "./ProductItemForm";
import CartContext from "../../store/cart-context";
import * as starsUI from "../UI/Stars";
import prime_logo from "../../assets/images/prime-logo.png";
import not_found from "../../assets/images/not-found.jpeg";

import classes from "../../assets/scss/layout/_main.module.scss";

const ProductItem = (props) => {
   const cartCtx = useContext(CartContext);

   const addToCartHandler = (amount) => {
      cartCtx.addItem({
         id: props.id,
         name: props.name,
         image: props.image,
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
      case 5:
         stars = starsUI.fiveStars;
         break;
      case 4:
         stars = starsUI.fourStars;
         break;
      case 3:
         stars = starsUI.threeStars;
         break;
      case 2:
         stars = starsUI.twoStars;
         break;
      case 1:
         stars = starsUI.oneStars;
         break;
      default:
         stars = "No reviews yet";
         break;
   }

   return (
      // <Link to={`/products/${props.id}`}>VEDI PRODOTTO</Link>
      <li className={classes.product}>
         {props.isBestSeller && bestSeller}

         <div className={classes.product_image}>
            <img src={props.image ? props.image : not_found} alt={props.name} />
         </div>

         <div className={classes.product_content}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.container_reviews}>
               {stars} <span>{props.reviews}</span>
            </div>
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
