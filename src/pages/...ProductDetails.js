import { useContext } from "react";
import { useParams } from "react-router-dom";

import ProductItemForm from "../components/ProductItem/ProductItemForm";
import CartContext from "../store/cart-context";

const ProductDetail = (props) => {
   // DATA NOT PASSED CORRRECTLY TO THIS COMPONENT

   const params = useParams();

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
      <section>
         PRODUCT DETAILS
         <h1>{props.name}</h1>
         <p>{params.productId}</p>
         <ProductItemForm onAddToCart={addToCartHandler} />
      </section>
   );
};

export default ProductDetail;
