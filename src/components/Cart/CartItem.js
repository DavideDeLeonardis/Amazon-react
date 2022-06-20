import classes from "../../assets/scss/layout/_cart.module.scss";

const CartItem = (props) => {
   const price = `${props.price.toFixed(2)}€`;

   return (
      <li>
         <span className={classes.name}>{props.name}</span>
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
