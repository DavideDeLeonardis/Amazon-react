import classes from "./Cart.module.css";

const Cart = (props) => {
   return (
      <div className={classes.cart}>
         <button onClick={props.onClose}>Close Cart</button>
      </div>
   );
};

export default Cart;
