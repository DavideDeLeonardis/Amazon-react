import not_found from "../../assets/images/not-found.jpeg";

import classes from "../../assets/scss/layout/_cart.module.scss";

const CartItem = (props) => {
   const price = `${props.price.toFixed(2)}€`;

   return (
      <li>
         <span className={classes.name}>{props.name}</span>
         <div className={classes.container_img}>
            <img src={props.image ? props.image : not_found} alt={props.name} />
         </div>
         <span className={classes.price}>{price}</span>
         <span> x {props.amount}</span>
         <div className={classes.buttons_container}>
            <button className={classes.orange_btn} onClick={props.onRemove}>
               −
            </button>
            <button className={classes.orange_btn} onClick={props.onAdd}>
               +
            </button>
         </div>
      </li>
   );
};

export default CartItem;
