import { Link } from "react-router-dom";


// to delete
import { useContext } from "react";
import ProductItemForm from "./ProductItemForm";
import CartContext from "../../store/cart-context";
// to delete


const ProductItem = (props) => {
   const price = `$${props.price}`;
   // const price = `$${props.price.toFixed(2)}`;

   // to delete
   const cartCtx = useContext(CartContext);
   const addToCartHandler = (amount) => {
      cartCtx.addItem({
         id: props.id,
         name: props.name,
         amount: amount,
         price: props.price,
      });
   };
   // to delete

   return (
      <li>
         <div>
            <span>{props.brand}</span>
            <br></br>
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <img src={props.image} alt={props.name} />
         </div>
         <div>{price}€</div>
         <ProductItemForm onAddToCart={addToCartHandler} />   {/* to delete */} 
         <Link to={`/products/${props.id}`}>VEDI</Link>
         <hr />
      </li>
   );
};

export default ProductItem;
