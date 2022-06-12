import CartContext from "./cart-context";

const CartProvider = (props) => {
   const cartContext = {
      items: "test",
      totalAmount: "test",
      addItem: "test",
      removeItem: "test",
      clearCart: "test",
   };

   return (
      <CartContext.Provider value={cartContext}>
         {props.children}
      </CartContext.Provider>
   );
};

export default CartProvider;
