import React, { useContext } from "react";

import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
   const cartCtx = useContext(CartContext);

   const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
   };

   const cartItemAddHandler = (item) => {
      cartCtx.addItem(item);
      console.log(item);
   };

   const cartItems = (
      <ul className={classes["cart-items"]}>
         {cartCtx.items.map((item, index) => (
            <CartItem
               key={index}
               name={item.name}
               amount={item.amount}
               price={item.price}
               onRemove={cartItemRemoveHandler.bind(null, item.id)}
               onAdd={cartItemAddHandler.bind(null, item)}
            />
         ))}
      </ul>
   );

   return (
      <div className={classes.cart}>
         <button onClick={props.onClose}>Close Cart</button>
         {cartItems}
      </div>
   );
};

export default Cart;
