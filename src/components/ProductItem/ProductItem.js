// import { Link } from "react-router-dom";
import { useContext } from "react";

import ProductItemForm from "./ProductItemForm";
import CartContext from "../../store/cart-context";

const ProductItem = (props) => {
   const price = `$${props.price.toFixed(2)}`;

   const cartCtx = useContext(CartContext);
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
         <hr />
         <span>{props.brand}</span>
         <br />
         <h3>{props.name}</h3>
         <div>{props.description}</div>
         <img src={props.image} alt={props.name} />
         <div>{price}€</div>
         <ProductItemForm onAddToCart={addToCartHandler} />
         {/* <Link to={`/products/${props.id}`}>VEDI</Link> */}
      </li>
   );
};

export default ProductItem;
