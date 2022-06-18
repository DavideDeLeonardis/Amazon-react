// import { Link } from "react-router-dom";
import { useContext } from "react";

import ProductItemForm from "./ProductItemForm";
import CartContext from "../../store/cart-context";
import prime_logo from "../../assets/images/prime-logo.png";

import classes from "../../assets/scss/layout/_main.module.scss";

const ProductItem = (props) => {
   const cartCtx = useContext(CartContext);

   const price = `$${props.price.toFixed(2)}`;

   const addToCartHandler = (amount) => {
      cartCtx.addItem({
         id: props.id,
         name: props.name,
         amount: amount,
         price: props.price,
      });
   };

   const bestSeller = (
      <div className={classes.best_seller_container}>
         <div className={classes.best_seller}>Best Seller</div>
      </div>
   );

   const primeLogo = (
      <img
         className={classes.prime_logo}
         src={prime_logo}
         alt="Amazon Prime logo"
      />
   );

   return (
      // <Link to={`/products/${props.id}`}>VEDI PRODOTTO</Link>
      <li className={classes.product}>
         {props.isBestSeller && bestSeller}
         <div className={classes.product_image}>
            <img src={props.image} alt={props.name} />
         </div>
         <div className={classes.product_content}>
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <div>{price}€</div>
            {props.primeAvailable && primeLogo}
            <ProductItemForm onAddToCart={addToCartHandler} />
         </div>
      </li>
   );
};

export default ProductItem;
