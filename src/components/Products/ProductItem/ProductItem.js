import { useContext } from "react";

import ProductItemForm from "./ProductItemForm";
import CartContext from "../../../store/cart-context";

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

   return (
      <li>
         <div>
            <span>{props.brand}</span>
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <img src={props.image} alt={props.name} />
         </div>
         <div>{price}€</div>
         <div>
            <ProductItemForm onAddToCart={addToCartHandler} />
         </div>
         <hr />
      </li>
   );
};

export default ProductItem;
